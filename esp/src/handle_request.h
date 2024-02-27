#pragma once
#include <Arduino.h>
#include <ArduinoJson.h>

#include "channel.h"
#include "globals.h"
#include "data_utils.h"
#include "wifi_connection.h"
#include "begin_webserver.h"
#include "avr_serial.h"

void getDistances(Channel &chan) {
    JsonDocument response;
    response["type"] = "sonar";
    JsonArray data = response["data"].to<JsonArray>();
    data.add(avrSonar(MODE_SONAR0));
    data.add(avrSonar(MODE_SONAR1));
    data.add(avrSonar(MODE_SONAR2));
    chan.send(response);
}

void setMotor(Channel &chan, JsonDocument &request) {
  avrSend(MODE_MOTOR0, request["m0"].as<uint8_t>());
  avrSend(MODE_MOTOR1, request["m1"].as<uint8_t>());
}

void handleRequest(Channel &chan, JsonDocument &request)
{
  String type = request["type"];
  if (type == "scan")
  {
    scanRequested = true;
    WiFi.scanNetworks(true);
  }
  else if (type == "connect")
    connect(chan, request);
  else if (type == "disconnect")
    disconnect(chan);
  else if (type == "ip")
    sendData(chan, "ip", WiFi.localIP().toString());
  else if (type == "rssi")
    sendData(chan, "rssi", String(WiFi.RSSI()));
  else if (type == "status")
    sendData(chan, "status", String(WiFi.status()));
  else if (type == "ssid")
    sendData(chan, "ssid", WiFi.SSID());
  else if (type == "begin")
    beginWebServer(chan);
  else if (type == "beginCamera")
    cameraSocketId = chan.socketId();
  else if (type == "stopCamera")
    cameraSocketId = NO_SOCKET_ID;
  else if (type == "setCameraFPS")
    cameraFps = request["fps"];
  else if (type == "sonar")
    getDistances(chan);
  else if (type == "motor")
    setMotor(chan, request);
}

