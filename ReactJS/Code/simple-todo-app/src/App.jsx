import { useState } from "react";
import "./App.css";

function AddTodo({
  title,
  completed,
  onTitleChange,
  onCompletedChange,
  onTodoAddition,
}) {
  return (
    <div id="addTodo">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onTodoAddition();
        }}
      >
        <label htmlFor="title">
          Enter task to do:
          <textarea
            name="title"
            id="title"
            required
            placeholder="Start with Bismillah..."
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
          />
        </label>

        <label htmlFor="completed">
          Leave unchecked if task incomplete:
          <input
            type="checkbox"
            name="completed"
            id="completed"
            // remove `required` for a normal optional checkbox
            checked={completed}
            onChange={(e) => onCompletedChange(e.target.checked)}
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

function DisplayAllTodos({ todos, onDeleteClick }) {
  //prevents the component from crashing if the state is ever set to a non-array again(using push).
  if (!Array.isArray(todos) || todos.length === 0) {
    return <div id="displayAllTodos">No tasks yet!</div>;
  }

  return (
    <div id="displayAllTodos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>
                <button id={todo.id} onClick={() => onDeleteClick(todo)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [todos, setTodos] = useState([]);

  function handleAddition() {
    if (title.trim() === "") {
      alert("Please enter non-empty task item");
      return;
    }
    const todo = {
      // use a safer id (Date.now or uuid) instead of length-based id
      id: Date.now(),
      title: title.trim(),
      completed: completed,
    };

    // correctly append to the array (do NOT use push)
    setTodos((prev) => [...prev, todo]);

    // reset form fields
    setTitle("");
    setCompleted(false);

    console.log("Added:", todo);
  }

  function handleDeletion(todo) {
    if (!window.confirm("Delete this task?")) return;

    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    console.log("Deleted:", todo);
  }

  return (
    <>
      <AddTodo
        title={title}
        completed={completed}
        onTitleChange={setTitle}
        onCompletedChange={setCompleted}
        onTodoAddition={handleAddition}
      />
      <DisplayAllTodos todos={todos} onDeleteClick={handleDeletion} />
    </>
  );
}

export default App;
