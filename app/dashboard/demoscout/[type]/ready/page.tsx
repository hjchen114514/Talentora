"use client";

import { useRouter, useParams } from "next/navigation";
import { GetReady } from "@/components/interview/get-ready";
import { demoScoutMocks } from "@/lib/mock-data";

export default function DemoScoutReadyPage() {
  const router = useRouter();
  const params = useParams();
  const mock = demoScoutMocks.find((m) => m.id === params.type);

  if (!mock) {
    return <div>Mock interview not found</div>;
  }

  const handleStart = () => {
    router.push(`/dashboard/demoscout/${params.type}/live`);
  };

  return (
    <GetReady
      title={`DemoScout: ${mock.aiName}`}
      subtitle={`Practice session for ${mock.type.replace("-", " ")} interviews`}
      onStart={handleStart}
    />
  );
}
