// // 


// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   // ✅ Task 2: Load tasks from localStorage on app load
//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks"));
//     if (savedTasks) {
//       setTasks(savedTasks);
//     }
//   }, []);

//   // ✅ Task 1: Store tasks in localStorage whenever tasks change
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = () => {
//     if (newTask.trim() === "") return;
//     const updatedTasks = [...tasks, { id: Date.now(), text: newTask }];
//     setTasks(updatedTasks);
//     setNewTask("");
//   };

//   const deleteTask = (id) => {
//     const updatedTasks = tasks.filter((task) => task.id !== id);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="container">
//       <h1 className="title">📌 My Tasks</h1>

//       <div className="task-input">
//         <input
//           type="text"
//           placeholder="Enter a new task..."
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <button onClick={addTask}>Add</button>
//       </div>

//       <ul className="task-list">
//         {tasks.length === 0 ? (
//           <p className="empty">✨ No tasks yet. Add one above!</p>
//         ) : (
//           tasks.map((task) => (
//             <li key={task.id}>
//               {task.text}
//               <button className="delete" onClick={() => deleteTask(task.id)}>
//                 ❌
//               </button>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const addTask = () => {
    // ✅ Task 2: Validation
    if (title.trim() === "" || date.trim() === "") {
      setError("⚠️ Please fill in both title and date.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      date,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDate("");
    setError("");
  };

  return (
    <div className="container">
      <h1 className="title">📌 Task Manager</h1>

      {/* ✅ Task 1: Form */}
      <div className="task-form">
        <input
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Show validation error */}
      {error && <p className="error">{error}</p>}

      {/* Task list */}
      <ul className="task-list">
        {tasks.length === 0 ? (
          <p className="empty">✨ No tasks yet. Add one above!</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              <span>{task.title}</span>
              <small>{task.date}</small>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
