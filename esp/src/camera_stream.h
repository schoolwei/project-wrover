#pragma once
#include <Arduino.h>
#include <esp_camera.h>
#include "globals.h"
#include "channel.h"

void cameraCapture()
{

    if (camSocketId == NO_SOCKET_ID)
        return;

    static unsigned long lastTime = 0;

    unsigned long interval = 1000 / cameraFps;
    unsigned long now = millis();
    if (now - lastTime < interval)
        return;
    
    lastTime = now;

    camera_fb_t *fb = esp_camera_fb_get();
    if (!fb)
        return;

    wsEndpoint.binary(camSocketId, fb->buf, fb->len);
    camSocketId = NO_SOCKET_ID;

    esp_camera_fb_return(fb);
}
