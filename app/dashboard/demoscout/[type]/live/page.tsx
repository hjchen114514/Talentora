"use client";

import { useParams } from "next/navigation";
import { LiveInterview } from "@/components/interview/live-interview";
import { demoScoutMocks, formatInterviewType } from "@/lib/mock-data";

export default function DemoScoutLivePage() {
  const params = useParams();
  const mock = demoScoutMocks.find((m) => m.id === params.type);

  if (!mock) {
    return <div>Mock interview not found</div>;
  }

  return (
    <LiveInterview
      companyName="DemoScout"
      jobTitle={`${mock.aiName} - Mock Interview`}
      interviewType={formatInterviewType(mock.type)}
      returnPath="/dashboard/demoscout"
    />
  );
}
