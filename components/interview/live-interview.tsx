"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Camera,
  CameraOff,
  Mic,
  MicOff,
  MessageSquare,
  Settings,
  PhoneOff,
  Bot,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface LiveInterviewProps {
  aiName: string;
  aiAvatar: string;
  aiColor?: string;
  interviewType: string;
}

export function LiveInterview({
  aiName,
  aiAvatar,
  aiColor = "bg-purple-500",
  interviewType,
}: LiveInterviewProps) {
  const router = useRouter();
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  const handleEndCall = () => {
    if (confirm("Are you sure you want to end the interview?")) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${aiColor} text-white font-bold`}
          >
            {aiAvatar}
          </div>
          <div>
            <h2 className="text-white font-semibold">{aiName}</h2>
            <p className="text-gray-400 text-sm capitalize">{interviewType}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-500 text-sm font-medium">Recording</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side - AI and Transcript */}
        <div className="flex-1 flex flex-col bg-gray-800 p-6">
          {/* AI Avatar Section */}
          <Card className="mb-4 bg-gray-700 border-gray-600">
            <div className="p-6 flex items-center justify-center">
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-full ${aiColor} text-white text-4xl font-bold`}
              >
                {aiAvatar}
              </div>
            </div>
          </Card>

          {/* Transcript/Script Area */}
          <Card className="flex-1 bg-gray-700 border-gray-600 overflow-hidden">
            <div className="p-6 h-full overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Bot className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-purple-400 text-sm font-medium mb-1">
                      {aiName}
                    </p>
                    <p className="text-gray-300 text-sm">
                      Hello! Welcome to your interview. I'm {aiName}, and I'll be
                      conducting this {interviewType} interview with you today. Let's
                      get started. Can you tell me a bit about yourself?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 bg-blue-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center text-white text-xs font-bold">
                    You
                  </div>
                  <div>
                    <p className="text-blue-400 text-sm font-medium mb-1">You</p>
                    <p className="text-gray-300 text-sm italic">
                      [Your response will appear here...]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side - User Camera */}
        <div className="w-1/3 bg-gray-900 p-6">
          <Card className="h-full bg-gray-700 border-gray-600 flex items-center justify-center">
            {cameraEnabled ? (
              <div className="text-center">
                <Camera className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Your Camera</p>
                <p className="text-gray-500 text-sm mt-2">Camera placeholder</p>
              </div>
            ) : (
              <div className="text-center">
                <CameraOff className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Camera Off</p>
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Control Belt */}
      <div className="bg-gray-800 px-6 py-4">
        <div className="flex items-center justify-center gap-4">
          {/* Microphone Toggle */}
          <Button
            variant={micEnabled ? "default" : "destructive"}
            size="lg"
            onClick={() => setMicEnabled(!micEnabled)}
            className="rounded-full h-14 w-14 p-0"
          >
            {micEnabled ? (
              <Mic className="h-6 w-6" />
            ) : (
              <MicOff className="h-6 w-6" />
            )}
          </Button>

          {/* Camera Toggle */}
          <Button
            variant={cameraEnabled ? "default" : "destructive"}
            size="lg"
            onClick={() => setCameraEnabled(!cameraEnabled)}
            className="rounded-full h-14 w-14 p-0"
          >
            {cameraEnabled ? (
              <Camera className="h-6 w-6" />
            ) : (
              <CameraOff className="h-6 w-6" />
            )}
          </Button>

          {/* Chat Toggle */}
          <Button
            variant={chatOpen ? "secondary" : "outline"}
            size="lg"
            onClick={() => setChatOpen(!chatOpen)}
            className="rounded-full h-14 w-14 p-0"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>

          {/* Settings */}
          <Button
            variant="outline"
            size="lg"
            className="rounded-full h-14 w-14 p-0"
          >
            <Settings className="h-6 w-6" />
          </Button>

          {/* End Call */}
          <Button
            variant="destructive"
            size="lg"
            onClick={handleEndCall}
            className="rounded-full h-14 w-14 p-0 bg-red-600 hover:bg-red-700"
          >
            <PhoneOff className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
