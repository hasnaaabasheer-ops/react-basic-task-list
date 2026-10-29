
import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === '') {
      return;
    }

    const newTask = {
      text: task.trim(),
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask('');
  }

    function deleteTask(indexToDelete) {
      setTasks(
        tasks.filter((item, index) => index !== indexToDelete)
    );
  }

  return (
    <div className="container">
      <h1>My Task Manager</h1>

      <form
        className="input-section"
        onSubmit={(event) => {
          event.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          placeholder="What do you need to do?"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button className="add-button" type="submit">
          Add Task
        </button>
      </form>
        
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              {item.text}
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
