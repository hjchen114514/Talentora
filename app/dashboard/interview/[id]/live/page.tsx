"use client";

import { useParams } from "next/navigation";
import { LiveInterview } from "@/components/interview/live-interview";
import { interviews, formatInterviewType } from "@/lib/mock-data";

export default function InterviewLivePage() {
  const params = useParams();
  const interview = interviews.find((i) => i.id === params.id);

  if (!interview) {
    return <div>Interview not found</div>;
  }

  return (
    <LiveInterview
      aiName={interview.interviewer}
      aiAvatar={interview.interviewer.charAt(0)}
      aiColor="bg-blue-600"
      interviewType={formatInterviewType(interview.type)}
    />
  );
}
