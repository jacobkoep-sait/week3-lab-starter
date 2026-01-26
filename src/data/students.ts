import type { Student } from "../types/student";
import type {Program} from "../types/program";

export const students: Student[] = [
  // add students here
  {
    id: "001",
    name: "Ayo Doe",
    year: 2,
    status: "Full-time",
    interest: ["Web Development", "UI/UX", "Databases"],
    githubUsername: "AyoDoe",
    funFact: "Enjoys building frontend apps"
  },

  {
    id: "002",
    name: "Funmi Dew",
    year: 2,
    status: "Part-time",
    interest: ["Web Development", "UI/UX", "Databases"],
    githubUsername: "FunmiDew",
    funFact: "Enjoys sleeping"
  },
{
  id: "003",
    name: "John Doe",
    year: 1,
    status: "Full-time",
    interest: ["Web Development", "UI/UX", "Databases"],
    githubUsername: "JohnDoe",
    funFact: "Built a weather app in one weekend"
},
{
  id: "004",
    name: "Alex Brown",
    year: 3,
    status: "Part-time",
    interest: ["Mobile Development", "Cloud Computing"],
    funFact: "i love aliens"
},
{
  id: "S005",
    name: "Jane Taylor",
    year: 3,
    status: "Full-time",
    interest: ["Backend Development", "APIS"],
    funFact: "I played Hockery for Canada's Hockey team"
}

];
