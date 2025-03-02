import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Portal, Snackbar, Text, TextInput } from "react-native-paper";

const AddNewTodo = ({
  onAddTodo,
}: {
  todo?: string;
  onAddTodo: (todo: string) => void;
}) => {
  const [todo, setTodo] = useState<string | undefined>();
  const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false);

  const handleChange = (todoString: string) => {
    setTodo(todoString);
  };

  return (
    <View style={styles.addTodo}>
      <TextInput label="Enter todo" value={todo} onChangeText={handleChange} />
      <Button
        icon="plus"
        mode="contained"
        onPress={() => {
          if (todo) {
            onAddTodo(todo);
            setTodo("");
          } else {
            setIsSnackbarVisible(true);
          }
        }}
      >
        Add Todo
      </Button>
      <Portal>
        <Snackbar
          visible={isSnackbarVisible}
          onDismiss={() => {
            setIsSnackbarVisible(false);
          }}
          action={{ label: "Close" }}
          duration={3000}
        >
          Nothing to add. Please enter some text for your todo.
        </Snackbar>
      </Portal>
    </View>
  );
};

export default AddNewTodo;

const styles = StyleSheet.create({
  addTodo: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    height: "auto",
  },
});
