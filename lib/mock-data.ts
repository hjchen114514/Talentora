export type InterviewStatus = "upcoming" | "in-progress" | "failed" | "completed";
export type InterviewType = "technical" | "behavioral" | "case" | "consulting" | "product" | "system-design";

export interface Interview {
  id: string;
  companyName: string;
  title: string;
  interviewer: string;
  date: string;
  time: string;
  type: InterviewType;
  status: InterviewStatus;
}

export interface DemoScoutMock {
  id: string;
  type: InterviewType;
  aiName: string;
  aiAvatar: string;
  estimatedTime: string;
  learningPoints: string[];
  funDescription: string;
  color: string;
}

// Real interviews data
export const interviews: Interview[] = [
  {
    id: "1",
    companyName: "Google",
    title: "First Round Interview - Software Engineer",
    interviewer: "Sarah Chen",
    date: "September 17, 2025",
    time: "2:00 PM - 3:30 PM",
    type: "technical",
    status: "failed",
  },
  {
    id: "2",
    companyName: "Microsoft",
    title: "SDE II Technical Screen",
    interviewer: "Michael Johnson",
    date: "September 20, 2025",
    time: "10:00 AM - 11:30 AM",
    type: "technical",
    status: "upcoming",
  },
  {
    id: "3",
    companyName: "Deloitte",
    title: "Strategy Consultant - First Round",
    interviewer: "Jennifer Liu",
    date: "September 22, 2025",
    time: "1:00 PM - 2:30 PM",
    type: "case",
    status: "upcoming",
  },
  {
    id: "4",
    companyName: "Goldman Sachs",
    title: "Investment Banking Analyst Interview",
    interviewer: "David Roberts",
    date: "September 18, 2025",
    time: "3:00 PM - 4:00 PM",
    type: "behavioral",
    status: "in-progress",
  },
  {
    id: "5",
    companyName: "McKinsey & Company",
    title: "Associate Consultant Interview",
    interviewer: "Amanda Park",
    date: "September 25, 2025",
    time: "9:00 AM - 10:30 AM",
    type: "case",
    status: "upcoming",
  },
];

// DemoScout mock interviews
export const demoScoutMocks: DemoScoutMock[] = [
  {
    id: "vincent",
    type: "technical",
    aiName: "Vincent",
    aiAvatar: "V",
    estimatedTime: "30-45 minutes",
    learningPoints: [
      "Master data structures and algorithms",
      "Learn coding best practices and patterns",
      "Understand time and space complexity analysis",
    ],
    funDescription:
      "Vincent brings 10+ years of FAANG experience to help you ace technical rounds!",
    color: "bg-blue-500",
  },
  {
    id: "audi",
    type: "case",
    aiName: "Audi",
    aiAvatar: "A",
    estimatedTime: "45-60 minutes",
    learningPoints: [
      "Navigate business cases like a top consultant",
      "Master framework thinking and market sizing",
      "Develop profitability analysis skills",
    ],
    funDescription:
      "Audi will walk you through real consulting cases with a touch of humor!",
    color: "bg-purple-500",
  },
  {
    id: "ruby",
    type: "behavioral",
    aiName: "Ruby",
    aiAvatar: "R",
    estimatedTime: "20-30 minutes",
    learningPoints: [
      "Tell your story with confidence using STAR method",
      "Navigate conflict resolution scenarios",
      "Showcase leadership examples effectively",
    ],
    funDescription:
      "Ruby helps you craft compelling stories that showcase your best self!",
    color: "bg-pink-500",
  },
  {
    id: "hongjin",
    type: "consulting",
    aiName: "Hongjin",
    aiAvatar: "H",
    estimatedTime: "40-50 minutes",
    learningPoints: [
      "Think like a strategic consultant",
      "Master client communication skills",
      "Apply case frameworks systematically",
    ],
    funDescription:
      "Hongjin combines consulting expertise with practical interview tips!",
    color: "bg-indigo-500",
  },
  {
    id: "jamie",
    type: "system-design",
    aiName: "Jamie",
    aiAvatar: "J",
    estimatedTime: "45-60 minutes",
    learningPoints: [
      "Design scalable distributed systems",
      "Understand architecture patterns and trade-offs",
      "Master system design fundamentals",
    ],
    funDescription:
      "Jamie breaks down complex systems into digestible concepts!",
    color: "bg-green-500",
  },
  {
    id: "sarah",
    type: "product",
    aiName: "Sarah",
    aiAvatar: "S",
    estimatedTime: "30-40 minutes",
    learningPoints: [
      "Ship products users love",
      "Master product strategy and roadmap prioritization",
      "Conduct effective user research",
    ],
    funDescription:
      "Sarah brings startup energy to product interview prep!",
    color: "bg-orange-500",
  },
];

// Helper function to get recommended mock based on interview type
export function getRecommendedMock(interviewType: InterviewType): DemoScoutMock {
  const mockMap: Record<InterviewType, string> = {
    technical: "vincent",
    case: "audi",
    behavioral: "ruby",
    consulting: "hongjin",
    "system-design": "jamie",
    product: "sarah",
  };

  const mockId = mockMap[interviewType] || "vincent";
  return demoScoutMocks.find((mock) => mock.id === mockId) || demoScoutMocks[0];
}

// Helper to format interview type for display
export function formatInterviewType(type: InterviewType): string {
  const typeMap: Record<InterviewType, string> = {
    technical: "Technical",
    behavioral: "Behavioral",
    case: "Case",
    consulting: "Consulting",
    "system-design": "System Design",
    product: "Product",
  };
  return typeMap[type] || type;
}

// Helper to get status color
export function getStatusColor(status: InterviewStatus): string {
  const colorMap: Record<InterviewStatus, string> = {
    upcoming: "success",
    "in-progress": "warning",
    failed: "destructive",
    completed: "secondary",
  };
  return colorMap[status] || "secondary";
}
