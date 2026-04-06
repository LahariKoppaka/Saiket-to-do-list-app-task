import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Add a new task
  const addTodo = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    const newTodo = { id: Date.now(), text: task, completed: false };
    setTodos([...todos, newTodo]);
    setTask('');
  };

  // Delete a task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit a task text
  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>My Tasks</h1>
      </div>

      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="card">
        <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      </div>
    </div>
  );
}

export default App;