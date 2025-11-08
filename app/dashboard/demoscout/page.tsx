import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { MockCard } from "@/components/demoscout/mock-card";
import { demoScoutMocks } from "@/lib/mock-data";
import { Sparkles, Target, Zap, Trophy } from "lucide-react";

export default function DemoScoutPage() {
  return (
    <DashboardLayout>
      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Sparkles className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">DemoScout</h1>
            <p className="text-lg text-gray-600 mt-1">
              Your AI-Powered Interview Practice Partner
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-100">
          <p className="text-gray-700 mb-4">
            Master your interview skills with personalized AI coaches! DemoScout offers
            realistic practice sessions across multiple interview types, helping you
            build confidence and ace your next interview.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-gray-900">
                  Targeted Practice
                </h4>
                <p className="text-xs text-gray-600">
                  Focus on specific interview types
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-gray-900">
                  Real-time Feedback
                </h4>
                <p className="text-xs text-gray-600">
                  Get instant AI-powered insights
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trophy className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-gray-900">
                  Build Confidence
                </h4>
                <p className="text-xs text-gray-600">
                  Practice until you're interview-ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mock Interviews Grid */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Choose Your Practice Session
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Select an AI coach and start practicing
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {demoScoutMocks.map((mock) => (
          <MockCard key={mock.id} mock={mock} />
        ))}
      </div>
    </DashboardLayout>
  );
}
