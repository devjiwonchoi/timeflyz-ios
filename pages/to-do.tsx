import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ToDos() {
  return (
    <View style={styles.container}>
      <View style={styles.toDoWrapper}>
        <Text style={styles.Title}>Today</Text>
        <View style={styles.items}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  toDoWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {},
});
