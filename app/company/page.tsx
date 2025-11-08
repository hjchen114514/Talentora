import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function CompanyPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Company</h2>
            <p className="text-gray-600">
              This page is coming soon. Learn more about Talentora's mission to
              revolutionize the interview process with AI.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
