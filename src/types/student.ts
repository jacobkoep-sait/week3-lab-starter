type StudentId = string;

type StudentStatus = "Full-time" | "Part-time";

export interface Student {
  id: StudentId;
  name: string;
  year: number;
  status: StudentStatus;
  interests: string[];
  githubUsername?: string;
  funFact?: string;
}