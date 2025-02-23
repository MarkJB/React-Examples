import { useState } from "react";
import "./App.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuid } from "uuid";

// Basic TODO app using vite to set it up
// App uses state as a simple demo
// State could be persisted if we had a backend
// e.g.
//
// useEffect(() => {
//   // Fetch initial todos from the backend
//   fetch("/api/todos")
//     .then((response) => response.json())
//     .then((data) => setTodos(data));
// },
//
// and
//
// fetch("/api/todos", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ todo: newTodo }),
// })
//   .then((response) => response.json())
//   .then((newTodo) => setTodos((prevState) => [...prevState, newTodo]));

interface ToDo {
  id: string;
  todo: string;
}

type ToDos = ToDo[];

const data = [
  { id: uuid(), todo: "Make a list" },
  { id: uuid(), todo: "Check it twice" },
] satisfies ToDos;

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(data);

  const handleAdd = () => {
    // If we have a new todo
    if (newTodo) {
      // Add the new todo to the todos state
      // (if this was using a backend we could call the API to add it)
      setTodos((prevState) => {
        return [...prevState, { id: uuid(), todo: newTodo }];
      });
      // Clear the new todo
      setNewTodo("");
    }
  };

  const handleDelete = (id: string) => {
    // Delete a todo by filtering it out of the list of todos (by id)
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <>
      VITE Typescript TODO (Using MUI)
      <Table>
        <TableHead></TableHead>
        <TableBody>
          {todos.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.todo}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(item.id)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Add new todo:</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAdd();
        }}
      >
        <TextField
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
    </>
  );
}

export default App;
