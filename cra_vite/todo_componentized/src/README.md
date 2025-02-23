# Basic TODO app using vite to set it up

This expands on the initial example by splitting things up. The app is broken down into components, the data and types are moved into their own files. This all helps to clean up the code.

There is additional work to improve the look and feel a little.

Further improvements would be to move the components into a components folder but that is beyond the scope of this demo as there are various ways of acheiving that (Atomic design, Feature-based, Component-based)

## Note

App uses state as a simple demo. State could be persisted if we had a backend.

We'd probably want to use something like Axios, SWR, RTK Query or similar.

e.g.

```useEffect(() => {
  // Fetch initial todos from the backend
  fetch("/api/todos")
    .then((response) => response.json())
    .then((data) => setTodos(data));
},
```

and

```fetch("/api/todos", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ todo: newTodo }),
})
  .then((response) => response.json())
  .then((newTodo) => setTodos((prevState) => [...prevState, newTodo]));
```
