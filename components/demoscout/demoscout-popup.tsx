"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { DemoScoutMock } from "@/lib/mock-data";
import { Clock, Sparkles } from "lucide-react";

interface DemoScoutPopupProps {
  mock: DemoScoutMock;
  children: React.ReactNode;
}

export function DemoScoutPopup({ mock, children }: DemoScoutPopupProps) {
  const router = useRouter();

  const handleStart = () => {
    router.push(`/dashboard/demoscout/${mock.id}/ready`);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image
                src={mock.imagePath}
                alt={`${mock.aiName} avatar`}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base">
                {mock.aiName} - DemoScout
              </h3>
              <p className="text-sm text-gray-600 capitalize">
                {mock.type.replace("-", " ")} Interview
              </p>
            </div>
          </div>

          {/* Estimated Time */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>{mock.estimatedTime}</span>
          </div>

          {/* Learning Points */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">
              What you'll learn:
            </p>
            <ul className="space-y-1.5">
              {mock.learningPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366F1]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fun Description */}
          <div className="rounded-md bg-purple-50 p-3">
            <div className="flex items-start gap-2">
              <Sparkles className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-purple-900">{mock.funDescription}</p>
            </div>
          </div>

          {/* Action Button */}
          <Button onClick={handleStart} className="w-full">
            Yes, Let's Start!
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
