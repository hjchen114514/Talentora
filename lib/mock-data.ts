export type InterviewStatus = "upcoming" | "in-progress" | "failed" | "pass" | "completed";
export type InterviewType = "technical" | "behavioral" | "case" | "consulting" | "product" | "investment";

export interface Interview {
  id: string;
  companyName: string;
  title: string;
  jobTitle: string;
  date: string;
  time: string;
  type: InterviewType;
  status: InterviewStatus;
  location: "Remote" | "On-site" | "Hybrid";
  salaryRange?: string;
  requiredSkills: string[];
  responsibilities: string[];
  jobDescription: string;
}

export interface DemoScoutMock {
  id: string;
  type: InterviewType;
  aiName: string;
  aiAvatar: string;
  imagePath: string;
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
    jobTitle: "Software Engineer II",
    date: "September 17, 2025",
    time: "2:00 PM - 3:30 PM",
    type: "technical",
    status: "failed",
    location: "Remote",
    salaryRange: "$150k - $200k",
    requiredSkills: ["JavaScript", "React", "Node.js", "System Design", "Algorithms"],
    responsibilities: [
      "Design and implement scalable web applications",
      "Collaborate with cross-functional teams",
      "Mentor junior engineers and conduct code reviews",
      "Contribute to technical architecture decisions"
    ],
    jobDescription: "Join Google's world-class engineering team to build products that impact billions of users. We're looking for a Software Engineer II to work on cutting-edge web technologies, solve complex technical challenges, and help shape the future of the internet."
  },
  {
    id: "2",
    companyName: "Microsoft",
    title: "SDE II Technical Screen",
    jobTitle: "Software Development Engineer II",
    date: "September 20, 2025",
    time: "10:00 AM - 11:30 AM",
    type: "technical",
    status: "upcoming",
    location: "Hybrid",
    salaryRange: "$140k - $190k",
    requiredSkills: ["C#", ".NET", "Azure", "Microservices", "SQL"],
    responsibilities: [
      "Develop cloud-native applications on Azure platform",
      "Design and implement RESTful APIs",
      "Optimize application performance and scalability",
      "Participate in agile development processes"
    ],
    jobDescription: "Microsoft is seeking a talented Software Development Engineer II to join our Azure team. You'll work on mission-critical cloud services that power businesses worldwide, collaborating with some of the brightest minds in technology."
  },
  {
    id: "3",
    companyName: "Deloitte",
    title: "Strategy Consultant - First Round",
    jobTitle: "Strategy Consultant",
    date: "September 22, 2025",
    time: "1:00 PM - 2:30 PM",
    type: "case",
    status: "upcoming",
    location: "Hybrid",
    salaryRange: "$90k - $120k",
    requiredSkills: ["Business Strategy", "Financial Analysis", "Market Research", "Presentation Skills"],
    responsibilities: [
      "Conduct market research and competitive analysis",
      "Develop strategic recommendations for clients",
      "Present findings to C-level executives",
      "Lead workstreams on client engagements"
    ],
    jobDescription: "Deloitte's Strategy practice is looking for sharp, analytical minds to solve complex business problems for Fortune 500 clients. You'll gain exposure to diverse industries while developing your consulting toolkit."
  },
  {
    id: "4",
    companyName: "Goldman Sachs",
    title: "Investment Banking Analyst Interview",
    jobTitle: "Investment Banking Analyst",
    date: "September 18, 2025",
    time: "3:00 PM - 4:00 PM",
    type: "behavioral",
    status: "in-progress",
    location: "On-site",
    salaryRange: "$100k - $150k + bonus",
    requiredSkills: ["Financial Modeling", "Valuation", "Excel", "PowerPoint", "Deal Execution"],
    responsibilities: [
      "Build financial models and perform company valuations",
      "Prepare pitch books and client presentations",
      "Conduct industry and company research",
      "Support deal execution across M&A transactions"
    ],
    jobDescription: "Goldman Sachs Investment Banking division is seeking high-performing analysts to join our team. You'll work on high-profile M&A deals, gain unparalleled financial training, and accelerate your career in finance."
  },
  {
    id: "5",
    companyName: "McKinsey & Company",
    title: "Associate Consultant Interview",
    jobTitle: "Business Analyst",
    date: "September 25, 2025",
    time: "9:00 AM - 10:30 AM",
    type: "case",
    status: "upcoming",
    location: "Hybrid",
    salaryRange: "$95k - $110k",
    requiredSkills: ["Problem Solving", "Data Analysis", "Client Management", "Strategic Thinking"],
    responsibilities: [
      "Analyze complex business problems for global clients",
      "Develop data-driven recommendations",
      "Collaborate with client teams and stakeholders",
      "Create impactful presentations and reports"
    ],
    jobDescription: "McKinsey & Company seeks exceptional Business Analysts to join our global consulting team. You'll tackle the world's toughest business challenges alongside the best and brightest, making a real impact on leading organizations."
  },
  {
    id: "6",
    companyName: "Amazon",
    title: "SDE II - AWS Services",
    jobTitle: "Software Development Engineer II",
    date: "August 28, 2025",
    time: "2:00 PM - 3:30 PM",
    type: "technical",
    status: "pass",
    location: "Remote",
    salaryRange: "$155k - $210k",
    requiredSkills: ["Java", "Python", "AWS", "Distributed Systems", "APIs"],
    responsibilities: [
      "Build and scale AWS cloud services",
      "Design robust distributed systems",
      "Optimize for performance and reliability",
      "Contribute to service architecture"
    ],
    jobDescription: "Amazon Web Services is looking for talented engineers to build the next generation of cloud services. Join a team that's revolutionizing how businesses operate in the cloud."
  },
  {
    id: "7",
    companyName: "Meta",
    title: "Product Designer - Instagram",
    jobTitle: "Product Designer",
    date: "September 5, 2025",
    time: "11:00 AM - 12:30 PM",
    type: "product",
    status: "pass",
    location: "Hybrid",
    salaryRange: "$130k - $180k",
    requiredSkills: ["UI/UX Design", "Figma", "User Research", "Prototyping", "Product Thinking"],
    responsibilities: [
      "Design user-centric product experiences",
      "Collaborate with product managers and engineers",
      "Conduct user research and testing",
      "Create high-fidelity prototypes and specifications"
    ],
    jobDescription: "Instagram is seeking a Product Designer to shape experiences for over 2 billion users. You'll work on features that connect people worldwide and push the boundaries of creative expression."
  },
  {
    id: "8",
    companyName: "Apple",
    title: "Senior Software Engineer - iOS",
    jobTitle: "Senior Software Engineer",
    date: "August 15, 2025",
    time: "10:00 AM - 11:30 AM",
    type: "technical",
    status: "failed",
    location: "On-site",
    salaryRange: "$180k - $250k",
    requiredSkills: ["Swift", "Objective-C", "iOS SDK", "Performance Optimization", "Architecture"],
    responsibilities: [
      "Develop core iOS features and frameworks",
      "Optimize app performance and user experience",
      "Work closely with designers and product teams",
      "Mentor junior engineers"
    ],
    jobDescription: "Apple is looking for exceptional iOS engineers to build the future of mobile experiences. You'll work on products used by millions daily, with a focus on innovation and excellence."
  },
];

// DemoScout mock interviews
export const demoScoutMocks: DemoScoutMock[] = [
  {
    id: "vincent",
    type: "technical",
    aiName: "Vincent",
    aiAvatar: "V",
    imagePath: "/bots/vincent.png",
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
    imagePath: "/bots/audi.png",
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
    imagePath: "/bots/ruby.png",
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
    imagePath: "/bots/hongjin.png",
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
    id: "michael",
    type: "investment",
    aiName: "JP Michael",
    aiAvatar: "J",
    imagePath: "/bots/michael.png",
    estimatedTime: "45-60 minutes",
    learningPoints: [
      "Design scalable distributed systems",
      "Understand architecture patterns and trade-offs",
      "Master system design fundamentals",
    ],
    funDescription:
      "Michael will teach you how to become JP Michael",
    color: "bg-green-500",
  },
  {
    id: "matt",
    type: "product",
    aiName: "Senpai He Ma Xiu",
    aiAvatar: "S",
    imagePath: "/bots/matt.png",
    estimatedTime: "30-40 minutes",
    learningPoints: [
      "Ship products users love",
      "Master product strategy and roadmap prioritization",
      "Conduct effective user research",
    ],
    funDescription:
      "Senpai brings startup energy to product interview prep!",
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
    "investment": "michael",
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
    "investment": "Investment",
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
    pass: "success",
    completed: "secondary",
  };
  return colorMap[status] || "secondary";
}
