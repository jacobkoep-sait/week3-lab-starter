import { School } from "./common";

// TODO: Create a type for staff ids, which should be strings
type ResourceId = string;
// TODO: Create a type for staff roles, which can be "Instructor", "Program Chair", "Coordinator", or "Advisor"
type StaffRole = "Instructor" | "Program Chair" | "Coordinator" | "Advisor";
// TODO: Create an interface for staff members
// The interface should include the following properties:
// an id (hint: use the StaffId type created above)
// a name
// a role (hint: use the StaffRole type created above)
// a school (hint: use the School type from common.ts)
// an optional office location
// an optional email address
// an optional start year
// an array of specialties
// an optional fun fact

// once all group members have completed their sections, add the following field:
// an optional array of course ids that this staff member teaches

export interface Staff {
    id: ResourceId;
    name: String;
    role: StaffRole;
    school: School;
    officeLocation?: String;
    emailAddress?: String;
    startYear?: String;
    specialities: String[];
    funFact?: String;
}
