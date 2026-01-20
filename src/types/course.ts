import { Delivery } from "./common";

// TODO: Create a type for course ids, which should be strings
type CourseId = string;
// TODO: Create an interface for courses
interface Course {
    id: CourseId;
    code: string;
    title: string;
    description: string;
    
// The interface should include the following properties:
// an id (hint: use the CourseId type created above)
// a code (ex "CPRG 303")
// a title
// a description
// an optional number of credits (if missing, we will assume 3)
numberOfCredits?: number;
// an optional term number
termNumber?: number;
// an optional delivery method (hint: use the Delivery type from common.ts)
deliverymethod?: Delivery;
// an optional array of pre-requisite course ids (hint: use the CourseId type created above)
preRequisites?: CourseId[];
// an optional note
note?: string;

// once all group members have completed their sections, add the following field:

// an optional array of program ids that this course is part of
programids?: string[]

}

export interface Course {}
