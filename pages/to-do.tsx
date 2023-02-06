import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Todo from "../components/Todo";

export default function ToDos() {
  const [todo, setTodo] = useState(null);
  const [todoItems, setTodoItems] = useState([]);

  const createTodo = () => {
    Keyboard.dismiss();
    setTodoItems([...todoItems, todo]);
    setTodo(null);
  };

  const removeTodo = (index) => {
    let itemsCopy = [...todoItems];
    itemsCopy.splice(index, 1);
    setTodoItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toDoWrapper}>
        <Text style={styles.Title}>Today</Text>
        <View style={styles.items}>
          {todoItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => removeTodo(index)}>
                <Todo text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"test"}
          onChangeText={(input) => setTodo(input)}
          value={todo}
        />
        <TouchableOpacity onPress={() => createTodo()}>
          <View style={styles.addInputWrapper}>
            <Text style={styles.addInput}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  toDoWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {},
  inputWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "80%",
  },
  addInputWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addInput: {},
});
