import React from 'react';

export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)} // Toggle without providing new checked value
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className='btn btn-danger'>
        DELETE
      </button>
    </li>
  );
}
