import { redirect } from "next/navigation";
/// home function- go to dashboard holder
export default function Home() {
  redirect("/dashboard");
}
