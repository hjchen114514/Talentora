"use client";

import { useState, useEffect, useRef } from "react";
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
  companyName: string;
  jobTitle: string;
  interviewType: string;
}

export function LiveInterview({
  companyName,
  jobTitle,
  interviewType,
}: LiveInterviewProps) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    // Request camera and microphone permissions
    const requestPermissions = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing media devices:", error);
      }
    };

    requestPermissions();

    // Cleanup function
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const toggleCamera = () => {
    if (streamRef.current) {
      const videoTrack = streamRef.current.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !cameraEnabled;
        setCameraEnabled(!cameraEnabled);
      }
    }
  };

  const toggleMic = () => {
    if (streamRef.current) {
      const audioTrack = streamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !micEnabled;
        setMicEnabled(!micEnabled);
      }
    }
  };

  const handleEndCall = () => {
    if (confirm("Are you sure you want to end the interview?")) {
      // Stop all tracks before navigation
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      router.push("/dashboard");
    }
  };

  return (
    <div className="h-screen bg-[#F8F7FC] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-gray-900 font-semibold">{companyName} - {jobTitle}</h2>
            <p className="text-gray-600 text-sm capitalize">{interviewType}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-500 text-sm font-medium">Recording</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden p-6 gap-6">
        {/* Left Side - Transcript */}
        <div className="flex-1 flex flex-col">
          {/* Transcript/Script Area */}
          <Card className="flex-1 bg-white overflow-hidden">
            <div className="p-6 h-full overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview Transcript</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 flex-shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-purple-600 text-sm font-medium mb-1">
                      AI Interviewer
                    </p>
                    <p className="text-gray-700 text-sm">
                      Hello! Welcome to your interview for {jobTitle} at {companyName}. I'll be conducting this {interviewType} interview with you today. Let's get started. Can you tell me a bit about yourself and why you're interested in this role?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                    You
                  </div>
                  <div className="flex-1">
                    <p className="text-blue-600 text-sm font-medium mb-1">You</p>
                    <p className="text-gray-500 text-sm italic">
                      [Your response will appear here when you speak...]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Side - User Camera (Square) */}
        <div className="w-96">
          <Card className="bg-white overflow-hidden">
            <div className="aspect-square w-full flex items-center justify-center bg-gray-100 overflow-hidden">
              {cameraEnabled ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <CameraOff className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Camera Off</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Control Belt */}
      <div className="bg-white border-t px-6 py-4">
        <div className="flex items-center justify-center gap-4">
          {/* Microphone Toggle */}
          <Button
            variant={micEnabled ? "default" : "destructive"}
            size="lg"
            onClick={toggleMic}
            className="rounded-full h-14 w-14 p-0 bg-purple-600 hover:bg-purple-700"
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
            onClick={toggleCamera}
            className="rounded-full h-14 w-14 p-0 bg-purple-600 hover:bg-purple-700"
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
