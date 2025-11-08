import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talentora - AI-Powered Interview Platform",
  description: "Leverage AI in traditional interviews to test applicant abilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
