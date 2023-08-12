import React, { useState, useEffect } from 'react';
import './style.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('Items');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: uuidv4(), title, completed: false },
    ]);
  }

  function toggleTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }; // Toggle completed state
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>Task List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
