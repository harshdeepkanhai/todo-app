import Container from "@mui/material/Container";


import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {

  //Rendering
  return (
    <Container maxWidth="xs">
      <AddTodo />
      <TodoList />
    </Container>
  );
}

export default App;