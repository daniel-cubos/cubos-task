import { useState } from "react";
import Logo from "../../assets/logo.png";
import Task from "../../components/Task";
import "./styles.css";

function Main({ allTasks, setAllTasks }) {
  const [newTaskInput, setNewTaskInput] = useState("");

  async function handleAddNewTask() {
    if (!newTaskInput) {
      return;
    }

    const localTasks = [...allTasks];

    let description = "";

    for (let i = 0; i < 50; i++) {
      description += ` ${newTaskInput}`;
    }

    const newTask = {
      name: newTaskInput,
      description: description,
      owner: "Daniel Lopes",
    };

    const response = await fetch("http://localhost:3334/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status > 204) return;

    const data = await response.json();

    localTasks.push({ ...newTask, ...data });

    setAllTasks(localTasks);
    setNewTaskInput("");
  }

  return (
    <main>
      <header>
        <img src={Logo} alt="logo" />
      </header>

      <div className="container-new-task">
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={newTaskInput}
          onChange={(event) => setNewTaskInput(event.target.value)}
        />
        <button onClick={handleAddNewTask}>Adicionar</button>
      </div>

      <hr />

      <div className="container">
        {allTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </main>
  );
}

export default Main;
