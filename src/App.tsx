import "./App.css";
import { useState } from "react";
import Column from "./Column";

function App() {
  const { tasks, setTasks } = useState([
    {
      id: 1,
      title: "title 1",
    },
    {
      id: 2,
      title: "title 2",
    },
    {
      id: 2,
      title: "title 2",
    },
  ]);
  return <main>tasky</main>;
}

export default App;
