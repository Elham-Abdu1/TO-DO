import React from 'react';
import TaskCard from './components/TaskCard.jsx';
import img from './assets/img.jpg';

const App = () => {
  const tasks = [
    {
      title: 'Go to At-Taqwa mesjid ',
      dueDate: '2025-08-10',
      imgSrc: img
    },
    {
      title: 'Submit React Project',
      dueDate: '2025-08-12',
      imgSrc: img
    },
    {
      title: 'Complete React Assignment',
      dueDate: '2025-08-14',
      imgSrc: img
    },
    {
      title: 'Make physical exercise',
      dueDate: '2025-08-14',
      imgSrc: img
    }
  ];

   return (
    <div className="App">
       <h1 style={{ textAlign: 'center', color: '#b98a0cff' }}>My Tasks</h1>
      <div className="task-container">
        {tasks.map((task, index) => (
          <TaskCard 
            key={index} 
            title={task.title} 
            dueDate={task.dueDate} 
            imgSrc={task.imgSrc} 
          />
        ))}
      </div>
    </div>
  );
};
export default App;
