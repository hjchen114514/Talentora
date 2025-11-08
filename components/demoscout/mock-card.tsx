"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DemoScoutMock, formatInterviewType } from "@/lib/mock-data";
import { Clock, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

interface MockCardProps {
  mock: DemoScoutMock;
}

export function MockCard({ mock }: MockCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleStartMock = () => {
    router.push(`/dashboard/demoscout/${mock.id}/ready`);
  };

  return (
    <>
      <Card
        className="hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <CardContent className="pt-6">
          {/* Avatar and Name */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative h-14 w-14 flex-shrink-0">
              <Image
                src={mock.imagePath}
                alt={`${mock.aiName} avatar`}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                {mock.aiName}
              </h3>
              <Badge variant="outline" className="mt-1 capitalize">
                {formatInterviewType(mock.type)}
              </Badge>
            </div>
          </div>

          {/* Estimated Time */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Clock className="h-4 w-4" />
            <span>{mock.estimatedTime}</span>
          </div>

          {/* Brief Preview */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {mock.funDescription}
          </p>
        </CardContent>
      </Card>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src={mock.imagePath}
                  alt={`${mock.aiName} avatar`}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <DialogTitle className="text-xl">
                  {mock.aiName} - DemoScout
                </DialogTitle>
                <DialogDescription className="capitalize">
                  {formatInterviewType(mock.type)} Interview Practice
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Estimated Time */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>Estimated Time: {mock.estimatedTime}</span>
            </div>

            {/* Learning Points */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">
                What you'll learn:
              </p>
              <ul className="space-y-2">
                {mock.learningPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366F1]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fun Description */}
            <div className="rounded-md bg-purple-50 p-4">
              <div className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-purple-900">{mock.funDescription}</p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Maybe Later
            </Button>
            <Button onClick={handleStartMock}>Start Mock Interview</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
