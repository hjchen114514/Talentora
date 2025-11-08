"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 items-center justify-between px-6 lg:px-12" style={{ maxWidth: '1600px' }}>
        {/* Logo, Navigation - Left aligned group */}
        <div className="flex items-center gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            {/* Logo placeholder - triangle shape similar to screenshot */}
            <div className="relative h-8 w-8">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                <path
                  d="M20 5 L35 30 L5 30 Z"
                  fill="#6366F1"
                  opacity="0.8"
                />
                <path
                  d="M20 10 L30 28 L10 28 Z"
                  fill="#EC4899"
                  opacity="0.6"
                />
              </svg>
            </div>
            <span className="text-xl font-bold">
              Talent<span className="text-[#EC4899]">ora</span>
            </span>
          </div>

          {/* Navigation - closer to logo */}
          <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            Solutions
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
          <Link
            href="/resources"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            Resources
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
          <Link
            href="/company"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            Company
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </nav>
        </div>

        {/* User Profile - pushed to right */}
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            Matthew Yan
          </span>
        </div>
      </div>
    </header>
  );
}
