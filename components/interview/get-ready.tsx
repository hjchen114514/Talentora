"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Mic, Volume2, CheckCircle2, XCircle } from "lucide-react";

interface GetReadyProps {
  title: string;
  subtitle: string;
  onStart: () => void;
}

export function GetReady({ title, subtitle, onStart }: GetReadyProps) {
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#F8F7FC] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Camera Preview */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Camera Preview</h3>
              <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                {cameraEnabled ? (
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">
                      Camera preview placeholder
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <XCircle className="h-12 w-12 text-red-500 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Camera disabled</p>
                  </div>
                )}
              </div>
              <Button
                variant={cameraEnabled ? "destructive" : "default"}
                onClick={() => setCameraEnabled(!cameraEnabled)}
                className="w-full"
              >
                <Camera className="h-4 w-4 mr-2" />
                {cameraEnabled ? "Turn Off Camera" : "Turn On Camera"}
              </Button>
            </CardContent>
          </Card>

          {/* System Check */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">System Check</h3>

              <div className="space-y-4">
                {/* Microphone */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mic className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-sm">Microphone</p>
                      <p className="text-xs text-gray-500">
                        {micEnabled ? "Working" : "Disabled"}
                      </p>
                    </div>
                  </div>
                  {micEnabled ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>

                {/* Camera */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Camera className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-sm">Camera</p>
                      <p className="text-xs text-gray-500">
                        {cameraEnabled ? "Working" : "Disabled"}
                      </p>
                    </div>
                  </div>
                  {cameraEnabled ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>

                {/* Connection */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Volume2 className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-sm">Connection</p>
                      <p className="text-xs text-gray-500">Strong</p>
                    </div>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>

                {/* Mic Toggle */}
                <Button
                  variant={micEnabled ? "destructive" : "default"}
                  onClick={() => setMicEnabled(!micEnabled)}
                  className="w-full"
                >
                  <Mic className="h-4 w-4 mr-2" />
                  {micEnabled ? "Mute Microphone" : "Unmute Microphone"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-3">Before You Start</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366F1]" />
                <span>Make sure you're in a quiet environment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366F1]" />
                <span>Check your camera and microphone are working properly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366F1]" />
                <span>Have a stable internet connection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366F1]" />
                <span>Prepare any materials you might need</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Start Button */}
        <div className="mt-8 text-center">
          <Button size="lg" onClick={onStart} className="px-12">
            Start Interview
          </Button>
        </div>
      </div>
    </div>
  );
}
