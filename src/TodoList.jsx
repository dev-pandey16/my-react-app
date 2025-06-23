import React, { useState } from 'react';
import './App.css';
function TodoList() {
const todoListStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px'
    }
  const [tasks, setTasks] = useState([{
      id: 1,
      text: "gym",
      completed: false
  },
  {
      id: 2,
      text: "study",
    completed: false
}]);
const[text , setText] = useState("");
function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));

}
function addTask() {
    if (text.trim() === "") return;
    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };
    setTasks([...tasks, newTask]);
    setText("");
}
function toggleTask(id) {
    setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    ));

}
    return (
        <div style={todoListStyle}>
        <h1>Todo List</h1>
        <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Add a new task" 
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
            {tasks.map(task => (
            <li key={task.id}>
                <span 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => toggleTask(task.id)}
                >
                {task.text}
                </span>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default TodoList;