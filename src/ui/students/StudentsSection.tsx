import { students } from "@/src/data/student";
import React from "react";
import Section from "../components/Section";
import StudentList from "./StudentList";

export default function StudentsSection() {
  return (
    <Section title="Students" subtitle={`${students.length} students`}>
      <StudentList students={students} />
    </Section>
  );
}
