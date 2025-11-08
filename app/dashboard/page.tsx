import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { WelcomeSection } from "@/components/dashboard/welcome-section";
import { InterviewCard } from "@/components/dashboard/interview-card";
import { interviews } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Applicant Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome, Matthew Yan</p>
      </div>

      {/* Welcome Card */}
      <WelcomeSection />

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

      {/* Interviews Grid */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Your Interviews</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interviews.map((interview) => (
          <InterviewCard key={interview.id} interview={interview} />
        ))}
      </div>
    </DashboardLayout>
  );
}
