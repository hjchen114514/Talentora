import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export default function SolutionsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Solutions</h2>
            <p className="text-gray-600">
              This page is coming soon. Explore our suite of AI-powered interview
              solutions for businesses and candidates.
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
