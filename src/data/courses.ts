import type { Course } from "../types/course";

export const courses: Course[] = [
  {
    courseId: "CS101",
    courseCode: 101,
    title: "Introduction to Computer Science",
    description:
      "Foundational concepts in computer science, including algorithms, data types, and basic programming principles.",
    credits: 3,
    termNumber: 1,
    delivery: "In-person",
    programsPartOf: ["CS", "SE"],
  },
  {
    courseId: "CS102",
    courseCode: 102,
    title: "Programming Fundamentals",
    description:
      "Introduction to programming using a modern high-level language, focusing on problem-solving and code structure.",
    credits: 4,
    termNumber: 1,
    delivery: "Blended",
    preReq: ["CS101"],
    programsPartOf: ["CS", "SE"],
  },
  {
    courseId: "CS201",
    courseCode: 201,
    title: "Data Structures",
    description:
      "Study of common data structures such as arrays, lists, stacks, queues, trees, and graphs.",
    credits: 4,
    termNumber: 2,
    delivery: "In-person",
    preReq: ["CS102"],
    note: "Includes a weekly lab component",
    programsPartOf: ["CS", "SE"],
  },
  {
    courseId: "CS301",
    courseCode: 301,
    title: "Databases and Information Systems",
    description:
      "Covers relational database design, SQL, normalization, and basic transaction management.",
    credits: 3,
    termNumber: 3,
    delivery: "Online",
    preReq: ["CS201"],
    programsPartOf: ["CS"],
  },
  {
    courseId: "CS401",
    courseCode: 401,
    title: "Software Engineering Capstone",
    description:
      "Team-based project course focused on designing, building, and delivering a complete software system.",
    credits: 5,
    termNumber: 4,
    delivery: "In-person",
    preReq: ["CS301"],
    note: "Requires instructor approval",
    programsPartOf: ["SE"],
  },
];
