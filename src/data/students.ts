import type { Student } from "../types/student";

export const students: Student[] = [ 
  {
    StudentId: "STU-001",
    name: "Ava Thompson",
    year: new Date(2024, 0, 1),
    status: "Full-time",
    github: "ava-dev",
    funfact: "Has backpacked across three continents.",
    interests: ["Web Development", "UI/UX", "Photography"],
  },
  {
    StudentId: "STU-002",
    name: "Leo Martinez",
    year: new Date(2023, 0, 1),
    status: "Part-time",
    interests: ["Data Science", "Machine Learning"],
    funfact: "Builds custom mechanical keyboards.",
  },
  {
    StudentId: "STU-003",
    name: "Sophie Chen",
    year: new Date(2025, 0, 1),
    status: "Full-time",
    github: "sophiecodes",
    interests: ["Mobile Apps", "Accessibility"],
  },
  {
    StudentId: "STU-004",
    name: "Noah Patel",
    year: new Date(2024, 0, 1),
    status: "Part-time",
    interests: ["Cloud Computing", "DevOps"],
    funfact: "Competes in drone racing on weekends.",
  },
  {
    StudentId: "STU-005",
    name: "Maya Singh",
    year: new Date(2022, 0, 1),
    status: "Full-time",
    github: "mayasingh",
    interests: ["Cybersecurity", "Networking"],
    funfact: "Speaks three languages.",
  },
];

