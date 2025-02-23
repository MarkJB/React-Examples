import { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuid } from "uuid";
import { type ToDo } from "./types";
import { data } from "./data";

// Break out the Table Row ToDo as a component
const ToDo = ({
  data,
  onDelete,
}: {
  data: ToDo;
  onDelete: (id: string) => void;
}) => {
  const theme = useTheme();
  return (
    <TableRow key={data.id}>
      <TableCell sx={{ color: theme.palette.text.primary }}>
        {data.todo}
      </TableCell>
      <TableCell>
        <Button onClick={() => onDelete(data.id)}>
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

// Break out the "Add ToDo" as a component
const AddTodo = ({
  todo,
  updateToDo,
}: {
  todo: string;
  updateToDo: (value: string) => void;
}) => {
  return (
    <Box
      component={Paper}
      display={"flex"}
      padding={2}
      gap={2}
      alignItems={"center"}
    >
      <TextField
        label="Add new todo"
        value={todo}
        onChange={(event) => updateToDo(event.target.value)}
      />
      <Button type="submit">
        <AddIcon />
      </Button>
    </Box>
  );
};

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(data);

  const handleAdd = () => {
    // If we have a new todo, add it to the todos state and clear the field
    // (if this was using a backend we could call the API to add it)
    if (newTodo) {
      setTodos((prevState) => {
        return [...prevState, { id: uuid(), todo: newTodo }];
      });
      setNewTodo("");
    }
  };

  const handleDelete = (id: string) => {
    // Delete a todo by filtering it out of the list of todos (by id)
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Typography>VITE Typescript TODO (Using MUI)</Typography>
      <Typography variant="caption">
        Split Todo & Add Todo into components
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead></TableHead>
          <TableBody>
            {todos.map((item) => (
              <ToDo data={item} onDelete={handleDelete} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAdd();
        }}
      >
        <AddTodo todo={newTodo} updateToDo={setNewTodo} />
      </form>
    </>
  );
}

export default App;
