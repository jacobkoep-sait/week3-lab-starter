import { DeliveryMethod } from "../types/common";
import type { Course, CourseId } from "../types/course";

export const courses: Course[] = [
  {
    id: "CPRG-101",
    code: "CPRG-101",
    title: "Introduction to Programming",
    description: "Covers fundamental programming concepts using Python",
    credits: 3,
    termNumber: 1,
    deliveryMethod: "Online",
    programIds: ["P-COMP"]
  }


];
