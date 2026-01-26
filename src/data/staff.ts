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
    funFact: "Loves teaching frontend frameworks"
  },
  {
    id: "002",
    role: "Coordinator",
    specialities: ["Program Planning", "Student Support"],
    emailAddress: "mark.smith@college.edu"
  }
];


