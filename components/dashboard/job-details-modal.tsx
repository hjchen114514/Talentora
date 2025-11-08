"use client";

import { Interview } from "@/lib/mock-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Briefcase, Calendar, Clock } from "lucide-react";

interface JobDetailsModalProps {
  interview: Interview;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JobDetailsModal({ interview, open, onOpenChange }: JobDetailsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {interview.jobTitle}
          </DialogTitle>
          <p className="text-lg text-gray-600">{interview.companyName}</p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Key Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{interview.location}</span>
            </div>
            {interview.salaryRange && (
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">{interview.salaryRange}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{interview.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-gray-700">{interview.time}</span>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About the Role</h3>
            <p className="text-gray-700 leading-relaxed">{interview.jobDescription}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Responsibilities</h3>
            <ul className="space-y-2">
              {interview.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {interview.requiredSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Interview Details */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Interview Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">{interview.title}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
