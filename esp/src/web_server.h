#pragma once
#include <ESPAsyncWebServer.h>

#include <memory>

#include "channel.h"
#include "globals.h"
#include "handle_request.h"
#include "message_queue.h"

MessageQueue messageQueue;
AsyncWebServer webServer(80);
AsyncWebSocket wsEndpoint("/ws");
bool webServerActive = false;

void beginWebServer(Channel &chan)
{
  if (webServerActive)
    return;
  webServer.begin();
  sendData(chan, "begin", "ok");
  webServerActive = true;
}

void onWSEventData(AwsFrameInfo *info, AsyncWebSocketClient *client, uint8_t *data, size_t len)
{
  if (info->opcode == WS_TEXT)
  {
    String str((char *)data, len);
    auto chan = std::make_shared<WSChannel>(client);
    messageQueue.add(chan, str);
  }
}

void onWSEvent(AsyncWebSocket *server, AsyncWebSocketClient *client, AwsEventType type, void *arg,
               uint8_t *data, size_t len)
{
  if (type == WS_EVT_CONNECT)
  {
    WSChannel chan(client);
    sendData(chan, "socketReady", "ok");
  }
  else if (type == WS_EVT_DATA)
    onWSEventData((AwsFrameInfo *)arg, client, data, len);
}

void webServerSetup()
{
  webServer.on("/", HTTP_GET,
               [](AsyncWebServerRequest *request)
               { request->send(200, "text/plain", "hello world"); });
  wsEndpoint.onEvent(onWSEvent);
  webServer.addHandler(&wsEndpoint);
}
