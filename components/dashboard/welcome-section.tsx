import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function WelcomeSection() {
  return (
    <Card className="mb-8 bg-white">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Welcome to Talentora!
        </h2>
        <p className="text-sm text-gray-600">
          Thanks for choosing out Talentora! You currently have{" "}
          <span className="font-semibold">1 applications</span>. To prepare,
          train your interview skills by practicing with our{" "}
          <Link
            href="/dashboard/demoscout"
            className="text-[#6366F1] font-semibold hover:underline"
          >
            demo scout
          </Link>
          !<br />
          Click here to learn more about our platform.
        </p>
      </CardContent>
    </Card>
  );
}
