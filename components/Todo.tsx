import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Todo(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemsLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text>{props.text}</Text>
        <View style={styles.circle}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  itemsLeft: {},
  square: {
    width: 24,
    height: 24,
    backgroundColor: "orange",
  },
  itemText: {
    maxWidth: '80%'
  },
  circle: {
    width: 12,
    height: 12
  },
});