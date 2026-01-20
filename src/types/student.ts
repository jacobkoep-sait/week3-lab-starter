import { Program } from "./program";
import { Course } from "./course";
// TODO: Create a type for student ids, which should be strings
type StudentId = String;

// TODO: Create a type for student statuses, which can either be "Full-time", or "Part-time"
type StudentStatus = "Full-time" | "Part-time";
// TODO: Create an interface for students

// The interface should include the following properties:
// an id (hint: use the StudentId type created above)
// a name
// a year
// a status (hint: use the StudentStatus type created above)
// an array of interests
// an optional github username
// an optional fun fact

// once all group members have completed their sections, add the following fields:
// an optional program id
// an optional array of current course ids

export interface Student {
  id: StudentId;
  name: string;
  year: number;
  status: StudentStatus;
  interest: String[];
  githubUsername?: String;
  funFact?: String;
  ProgramId?: Program;

}
