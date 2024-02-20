import React, { useState } from 'react';
import './App.css';
function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput('');
  }
  const handleDelete=(index)=>{
    const updatedTodo=[...todo];
    updatedTodo.splice(index,1);
    setTodo(updatedTodo);
  }
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  
  return (
    <>
    <h1>TO DO LIST</h1>
      <form>
        <p>Enter your Activity</p>
        <input className="input" type='text' value={input} onChange={handleChange}></input>
        <button className='btn' onClick={handleClick}>Add</button>
      </form>
      <ul>
        {todo.map((todoItem, index) => (
          <li className="" key={index}>{todoItem}
          <button className='deleteBtn' onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
