"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { InterviewCard } from "@/components/dashboard/interview-card";
import { interviews } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, History, Clock } from "lucide-react";

export default function DashboardPage() {
  const [showHistory, setShowHistory] = useState(false);

  // Filter and sort interviews
  const upcomingInterviews = interviews
    .filter((i) => i.status === "upcoming" || i.status === "in-progress")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastInterviews = interviews
    .filter((i) => i.status === "failed" || i.status === "completed" || i.status === "pass")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const displayedInterviews = showHistory ? pastInterviews : upcomingInterviews;

  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Applicant Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome, Matthew Yan</p>
      </div>

      {/* DemoScout CTA */}
      <div className="mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-100">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Try DemoScout - Your AI Interview Coach!
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Practice with AI-powered mock interviews tailored to your needs. Master
              technical, behavioral, case, and more interview types with personalized
              feedback from our expert AI coaches!
            </p>
            <Link href="/dashboard/demoscout">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Explore DemoScout
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Interviews Section with History Toggle */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {showHistory ? "Past Interviews" : "Upcoming Interviews"}
          </h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowHistory(!showHistory)}
            className="flex items-center gap-2"
          >
            {showHistory ? (
              <>
                <Clock className="h-4 w-4" />
                <span>Show Upcoming</span>
              </>
            ) : (
              <>
                <History className="h-4 w-4" />
                <span>View History</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Interviews Grid */}
      {displayedInterviews.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedInterviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-gray-100 p-4 mb-4">
            {showHistory ? (
              <History className="h-8 w-8 text-gray-400" />
            ) : (
              <Clock className="h-8 w-8 text-gray-400" />
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            No {showHistory ? "past" : "upcoming"} interviews
          </h3>
          <p className="text-sm text-gray-600">
            {showHistory
              ? "Your completed and failed interviews will appear here"
              : "Schedule your next interview to get started"}
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}
