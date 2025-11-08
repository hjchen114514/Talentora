/// Next.js main layout file
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talentora",
  description: "Leverage AI in traditional interviews to test applicant abilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {/// return to children, the pages?
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
