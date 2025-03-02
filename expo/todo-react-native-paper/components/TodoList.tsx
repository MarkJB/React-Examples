import { ScrollView, StyleSheet } from "react-native";
import { List, Portal, Snackbar } from "react-native-paper";
import Todo from "./Todo";
import { Todos } from "../types";
import { useState } from "react";

const TodoList = ({
  todos,
  onDelete,
}: {
  todos: Todos;
  onDelete: (id: string) => void;
}) => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false);

  return (
    <>
      <ScrollView style={styles.listTodos}>
        <List.Section>
          <List.Subheader>ToDos</List.Subheader>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={() => {
                setIsSnackbarVisible(true);
                onDelete(todo.id);
              }}
            />
          ))}
        </List.Section>
      </ScrollView>
      <Portal>
        <Snackbar
          visible={isSnackbarVisible}
          onDismiss={() => {
            setIsSnackbarVisible(false);
          }}
          action={{ label: "Close" }}
          duration={3000}
        >
          Todo deleted
        </Snackbar>
      </Portal>
    </>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listTodos: {
    flex: 1,
    flexGrow: 5, // ScrollView doesn't behave exactly like view so needed to add this
    height: "auto",
  },
});
