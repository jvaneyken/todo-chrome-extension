import { Typography } from "@mui/material";

import AppHeader from "./components/AppHeader.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {
  return (
    <>
      <Typography variant="h2">Hello World</Typography>
      <AppHeader />
      <TodoList />
    </>
  );
}

export default App;
