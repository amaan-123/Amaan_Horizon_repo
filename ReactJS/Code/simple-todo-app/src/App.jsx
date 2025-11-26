import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const todo = document.getElementById("todoEntry");
    todos.push(todo);
    setTodos(todos);
  }
  return (
    <>
      <form action="">
        <label htmlFor="todoEntry"></label>
        <textarea name="todoEntry" id="todoEntry" pl />
        <button onClick={addTodo}>Add</button>
      </form>
      <div id="todosDisplay">
        <h2>TODO List</h2>
        <ul>
          {todos.map((todo) => {
            <li key={todo}>
              <p>{todo}</p>
            </li>;
            <button>Delete</button>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
