import React, { useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import "./App.css";

const App = () => {
  // const message = "Hello";
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'program',
      completed: true,
    },
    {
      id: '2',
      title: 'test',
      completed: false,
    },
  ])

  return (
    <div>
      <div className="container">
        <Tasks tasks={tasks}/>
      </div>
    </div>
    )
}

export default App;
