"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DemoScoutPopup } from "@/components/demoscout/demoscout-popup";
import { Interview, formatInterviewType, getRecommendedMock, getStatusColor } from "@/lib/mock-data";
import { Calendar, Clock, User, Info } from "lucide-react";

interface InterviewCardProps {
  interview: Interview;
}

export function InterviewCard({ interview }: InterviewCardProps) {
  const router = useRouter();
  const recommendedMock = getRecommendedMock(interview.type);
  const statusVariant = getStatusColor(interview.status);

  const handleStartInterview = () => {
    router.push(`/dashboard/interview/${interview.id}/ready`);
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {interview.title}
          </h3>

          {/* Company and Interviewer */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-700">
              {interview.companyName} • {interview.interviewer}
            </p>

            {/* Date and Time */}
            <p className="text-sm text-gray-500">
              {interview.date} • {interview.time}
            </p>
          </div>
        </div>

        {/* Posted Date - smaller */}
        <div className="flex items-center gap-1.5 mb-4 text-xs text-gray-500">
          <Calendar className="h-3.5 w-3.5" />
          <span>Posted: {interview.date.split(",")[0]}</span>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="capitalize">
            {formatInterviewType(interview.type)}
          </Badge>
          <Badge variant={statusVariant as any} className="capitalize">
            {interview.status.replace("-", " ")}
          </Badge>
        </div>

        {/* Info message about DemoScout */}
        <div className="bg-purple-50 border border-purple-100 rounded-md p-3 mb-4">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-purple-900">
              Prepare for this interview with our AI-powered DemoScout!
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 pt-0">
        {/* Start Interview Button */}
        <Button onClick={handleStartInterview} className="w-full">
          Start Interview
        </Button>

        {/* DemoScout Button with Popup */}
        <DemoScoutPopup mock={recommendedMock}>
          <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50">
            Get ready with DemoScout!
          </Button>
        </DemoScoutPopup>
      </CardFooter>
    </Card>
  );
}
