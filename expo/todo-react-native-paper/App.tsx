import { useState } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import "react-native-get-random-values"; // https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import { v4 as uuid } from "uuid";
import AddNewTodo from "./components/AddNewTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Todos } from "./types";

export default function App() {
  const [todoList, setTodoList] = useState<Todos>([]);

  const handleAddTodo = (todo: string) => {
    setTodoList((todos) => [...todos, { id: uuid(), todo }]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodoList((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <AddNewTodo onAddTodo={handleAddTodo} />
        <TodoList todos={todoList} onDelete={handleDeleteTodo} />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
