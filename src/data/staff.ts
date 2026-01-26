import type { Staff } from "../types/staff";

export const staff: Staff[] = [
  // add staff members here
  {
    id: "001",
    role: "Instructor",
    officeLocation: 204,
    emailAddress: "jane.doe@college.edu",
    startYear: 2019,
    specialities: ["Web Development", "Databases"],
    funFact: "Loves teaching frontend frameworks",
  },
  {
    id: "002",
    role: "Coordinator",
    specialities: ["Program Planning", "Student Support"],
    emailAddress: "mark.smith@college.edu",
  },
  {
    id: "003",
    role: "Program Chair",
    officeLocation: 208,
    emailAddress: "juliet.straw@college.edu",
    startYear: 2018,
    specialities: ["Web Development", "Databases"],
    funFact: "Enjoys building side projects in React",
  },
  {
    id: "004",
    role: "Program Chair",
    officeLocation: 310,
    startYear: 2015,
    specialities: ["Curriculum Design", "Academic Leadership"],
    funFact: "Has taught in three different countries",
  },
  {
    id: "ST005",
    role: "Advisor",
    emailAddress: "linda.green@college.edu",
    startYear: 2019,
    specialities: ["Career Guidance", "Student Success"],
    funFact: "I love sleeping",
  },
];
