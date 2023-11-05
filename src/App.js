
import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css'; 

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo List</h5>
            <form onSubmit={submitHandler}>
              <input
                style={{ width: '80%', padding: '5px' }} // Add inline styles here
                type="text"
                font-size={30}
                name="task"
                value={task}
                placeholder='ENTER YOUR TASKS HERE'
                onChange={changeHandler}
              />
              <button type="submit" class="add" style={{ marginLeft: '10px', padding: '5px' }}>
                Add
              </button>
            </form>
            <TodoList todolist={todos}  deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
