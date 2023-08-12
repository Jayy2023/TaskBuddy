import React from 'react'

export default function TodoList({todos}) {
  return (
    <ul className="list">
    {todos.length === 0 && "Awaiting Task... 👋🏾 "}
    {todos.map(todo => {
       return <li key={todo.id}>
       <label htmlFor="">
         <input type="checkbox" checked={todo.completed} 
         onChange={e => toggleTodo(todo.id, e.target.checked)} />
         {todo.title}
       </label>
       {/* <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>DELETE</button> */}
     </li>
    })}
  </ul>
  )
}
