import React, { useState } from 'react';
//import './components/Task/TaskCard.css';  

const TaskCard = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, { text: taskInput, completed: false }]);
            setTaskInput('');
        }
    };

    const toggleCompletion = (index) => {
        const newTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    return (
        <div className="container">
            <h1 className="title">Task <span className="Task-text"> Manager</span></h1>
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Add a new task"
                className="input"
            />
            <button onClick={addTask} className="button-add">Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={`list-item ${task.completed ? 'completed' : ''}`}>
                        {task.text}
                        <button onClick={() => toggleCompletion(index)} className="button-complete">
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskCard;