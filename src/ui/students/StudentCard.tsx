import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Student } from "../../types/student";

type Props = {
  student: Student;
};

function FunFact({ text }: { text?: string }) {
  if (!text || !text.trim()) {
    return null;
  }
  return <Text style={styles.funFact}>Fun fact: {text}</Text>;
}

export default function StudentCard({ student }: Props) {
  const { name, year, status, interests, githubUsername, funFact } = student;
  const githubDisplay = githubUsername
    ? `GitHub: ${githubUsername}`
    : "GitHub: N/A";
  const interestsDisplay = interests.slice(0, 4).join(", ");

  const logStudentInfo = () => {
    const statusLower = status.toLowerCase();
    console.log(
      `Student: ${name} | year ${year} | ${statusLower} | github: ${githubDisplay}`,
    );
    console.log(`Interests: ${interestsDisplay}`);
    if (funFact) {
      console.log(`Fun fact: ${funFact}`);
    }
  };

  return (
    <Pressable onPress={logStudentInfo}>
      <View style={styles.card}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.badge}>Year {year}</Text>
        </View>
        <Text style={styles.meta}>{status}</Text>
        <Text style={styles.meta}>{githubDisplay}</Text>
        <Text style={styles.meta}>{interestsDisplay}</Text>
        <FunFact text={funFact} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    gap: 6,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
  },
  badge: {
    fontSize: 12,
    opacity: 0.75,
  },
  meta: {
    fontSize: 12,
    opacity: 0.75,
  },
  funFact: {
    marginTop: 2,
    fontSize: 12,
    opacity: 0.65,
  },
});
