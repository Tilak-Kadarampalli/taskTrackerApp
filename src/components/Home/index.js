import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './index.css'

const Home = () => {
 
  const [tasks, setTasks] = useState([]);

  const [taskInput, setTaskInput] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (taskInput.trim() === "") return; 

    // Create a new task
    const newTask = {
      id: uuidv4(), 
      text: taskInput,
      completed: false,
    };

    
    setTasks([...tasks, newTask]);
    setTaskInput("");

  };


  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Remove a task 
  const handleRemoveTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Completed task
  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="main-bg">
      <h1>Task Tracker</h1>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a new task"
          className="input-form"
        />
        <button
          type="submit"
          className="add-btn"
        >
          Add Task
        </button>
      </form>

      <ul style={{ listStyleType: "none", padding: "0" }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-item"
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#6c757d" : "#000",
              }}
            >
              {task.text}
            </span>
            <div>
              <button
                onClick={() => handleToggleComplete(task.id)}
                className="complete-btn"
                
              >
                {task.completed ? "↩️" : "✅"}
              </button>
              <button
              className="complete-btn"
                onClick={() => handleRemoveTask(task.id)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;