import { Pressable, View, StyleSheet } from "react-native";
import { List, Tooltip } from "react-native-paper";
import { Todo as ToDo } from "../types";

const Todo = ({
  todo,
  onDelete,
}: {
  todo: ToDo;
  onDelete: (id: string) => void;
}) => {
  return (
    <View style={styles.todoItem}>
      <View style={styles.toDo}>
        <Tooltip title={todo.todo}>
          <List.Item key={todo.id} title={todo.todo} />
        </Tooltip>
      </View>
      <View style={styles.todoDelete}>
        <Pressable
          onPress={() => {
            onDelete(todo.id);
          }}
        >
          <List.Icon icon={"delete"} />
        </Pressable>
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    margin: 5,
  },
  toDo: {
    flex: 7,
  },
  todoDelete: {
    flex: 1,
    justifyContent: "center",
  },
});
