//Joshua working on this may 25th
// TODO: Create a type for student ids, which should be strings
type studentId = string;

// TODO: Create a type for student statuses, which can either be "Full-time", or "Part-time"
type studentStatus = "Full-time" | "Part-Time";
type random = string | boolean | number | "thingamajig";

// TODO: Create an interface for students
// The interface should include the following properties:
// an id (hint: use the StudentId type created above)
// a name
// a year
// a status (hint: use the StudentStatus type created above)
// an array of interests
// an optional github username
// an optional fun fact

let interests: string[] = ["none", "rocks", "pens", "pencils", "coffee"];
interface students {
  id: studentId;
  name: string;
  year: number;
  status: studentStatus;
  interests: string[];
  gitUsername?: string;
  funfact?: string;
  programId?: string[];
  courseId?: string[];
}

// once all group members have completed their sections, add the following fields:
// an optional program id
// an optional array of current course ids

export interface Student {}
