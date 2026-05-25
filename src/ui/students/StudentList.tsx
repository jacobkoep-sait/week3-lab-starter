import { Student } from "@/src/types/student";
import React from "react";
import { StyleSheet, View } from "react-native";
import StudentCard from "./StudentCard";

type Props = {
  students: Student[];
};

export default function StudentList({ students }: Props) {
  return (
    <View style={styles.list}>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
});
