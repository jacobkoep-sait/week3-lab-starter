import type { Program } from "../types/program";

export const programs: Program[] = [
  {
    ProgramID: "PROG-SD-01",
    name: "Software Development",
    credential: "Diploma",
    School: "School for Advanced Digital Technology",
    years: new Date(2024, 0, 1),
    Credits: new Int16Array([60]),
    delivery_method: "In-person",
    career_path: ["Software Developer", "Web Developer", "Mobile Application Developer"],
    Note: "Hands-on program focused on full-stack development and industry projects.",
  },
  {
    ProgramID: "PROG-BA-01",
    name: "Business Administration",
    credential: "Degree",
    School: "School of Business",
    years: new Date(2025, 0, 1),
    Credits: new Int16Array([120]),
    delivery_method: "Blended",
    career_path: ["Business Analyst", "Operations Manager"],
  },
  {
    ProgramID: "PROG-HM-01",
    name: "Hospitality Management",
    credential: "Diploma",
    School: "School of Hospitality and Tourism",
    years: new Date(2024, 0, 1),
    Credits: new Int16Array([60]),
    delivery_method: "Blended",
    career_path: ["Hotel Manager", "Event Coordinator"],
    Note: "Includes industry practicum and internship placements.",
  },
  {
    ProgramID: "PROG-AST-01",
    name: "Automotive Service Technician",
    credential: "Certificate",
    School: "School of Transportation",
    years: new Date(2023, 0, 1),
    Credits: new Int16Array([30]),
    delivery_method: "In-person",
    career_path: ["Automotive Technician"],
  },
];

