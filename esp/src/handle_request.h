/**
 * @author Wei
 * Request handler for Channel commands
 */

#pragma once
#include <Arduino.h>
#include <ArduinoJson.h>

#include "avr_serial.h"
#include "begin_webserver.h"
#include "camera_setup.h"
#include "channel.h"
#include "data_utils.h"
#include "globals.h"
#include "locomotion.h"
#include "wifi_connection.h"

/**
 * Handle request function
 * @param chan Channel to send the repsonse
 * @param request JSON request data
*/
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
  else if (type == "setCameraFPS")
    cameraFps = constrain(request["fps"].as<int>(), 1, 24);
  else if (type == "setCameraFrameSize")
    cameraSetFrameSize((framesize_t)request["size"].as<int>());
  else if (type == "motor")
    setMotor(chan, request);
  else if (type == "capture")
    camSocketId = chan.socketId();
  else if (type == "locomotion")
    locomotionReply(chan);
  else if (type == "cameraOk")
    sendData(chan, "cameraOk", cameraOk);
}
