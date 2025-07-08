import {React, useState} from 'react';
import { RiCloseLine } from "react-icons/ri";
import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false
    };

    setTasks(prev => [...prev, newTask]);

    setInput("");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  };

  return (
    <div className='to-do-app'>

      <h1>To-Do List</h1>

      <p>
        Organize your day with this simple and efficient to-do list. 
        Add, manage, and complete your tasks to stay focused, productive, and stress-free.
      </p>

      <div className="add-task">

        <input 
        type="text" 
        placeholder='Name of the task...'
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />

        <button
        onClick={handleAdd}
        >Add</button>

      </div>

        <ul>
          {
            tasks.map(task => (
              <li
              key={task.id}
              className= {`task-item ${task.completed ? 'completed' : ""}` }
              >
                <input type="checkbox"
                checked= {task.completed}
                onChange={() => toggleTask(task.id)}
                className='task-checkbox' />

                <span>{task.text}</span>

                <button
                onClick={() => removeTask(task.id)}
                className='remove-btn'><RiCloseLine /></button>
              </li>
            ))
          }
        </ul>

    </div>
  )
}

export default App
