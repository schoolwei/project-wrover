/**
 * @author Wei
 * WiFi connection functions
 */

#pragma once
#include <Arduino.h>
#include <ArduinoJson.h>
#include <StreamUtils.h>

#include "channel.h"
#include "data_utils.h"

/**
 * Connect to a WiFi network
 * @param chan the channel to send the response
 * @param request the JSON request
 */
void connect(Channel &chan, JsonDocument &request)
{
  String ssid = request["ssid"];
  String auth = request["auth"];

  EepromStream eepromStream(0, STORAGE_SIZE);
  serializeJson(request, eepromStream);
  eepromStream.flush();

  if (auth == "open")
  {
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid);
    sendData(chan, "connect", "ok");
  }
  else if (auth == "wpa2")
  {
    String password = request["password"];
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, password);
    sendData(chan, "connect", "ok");
  }
  else if (auth == "wpa2_enterprise")
  {
    String method = request["method"];
    String identity = request["identity"];
    String username = request["username"];
    String password = request["password"];

    wpa2_auth_method_t kind = WPA2_AUTH_PEAP;
    if (method == "peap")
      kind = WPA2_AUTH_PEAP;
    else if (method == "tls")
      kind = WPA2_AUTH_TLS;
    else if (method == "ttls")
      kind = WPA2_AUTH_TTLS;
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, kind, identity, username, password);
    sendData(chan, "connect", "ok");
  }
  else
  {
    sendData(chan, "connect", "error");
  }
}

/**
 * Disconnect from the current WiFi network
 * @param chan the channel to send the response
 */
void disconnect(Channel &chan)
{
  WiFi.disconnect();
  WiFi.mode(WIFI_OFF);
  WiFi.mode(WIFI_STA);
  JsonDocument empty;
  EepromStream eepromStream(0, STORAGE_SIZE);
  serializeJson(empty, eepromStream);
  eepromStream.flush();
  sendData(chan, "disconnect", "ok");
}

/**
 * Auto connect to a WiFi network stored in EEPROM
 */
void autoConnect()
{
  avrClear();
  JsonDocument connectJson;
  EepromStream eepromStream(0, STORAGE_SIZE);
  DeserializationError error = deserializeJson(connectJson, eepromStream);
  if (!error && connectJson["type"] == "connect")
  {
    NullChannel chan;
    avrPrint("WRover ESP\nConnecting...");
    connect(chan, connectJson);
  }
  else
  {
    avrPrint("WRover ESP\nWaiting Setup...");
  }
}