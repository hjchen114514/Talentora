"use client";

import { useRouter, useParams } from "next/navigation";
import { GetReady } from "@/components/interview/get-ready";
import { interviews } from "@/lib/mock-data";

export default function InterviewReadyPage() {
  const router = useRouter();
  const params = useParams();
  const interview = interviews.find((i) => i.id === params.id);

  if (!interview) {
    return <div>Interview not found</div>;
  }

  const handleStart = () => {
    router.push(`/dashboard/interview/${params.id}/live`);
  };

  return (
    <GetReady
      title={interview.title}
      subtitle={`Get ready for your interview with ${interview.companyName}`}
      onStart={handleStart}
    />
  );
}
