# Q) So, I tried on my own. Here's my code

```javascript
import { useState } from "react";
import "./App.css";

function AddTodo({ onTitleChange, onCompletedChange, onTodoAddition }) {
  return (
    <div id="addTodo">
      <form>
        <label htmlFor="title">
          Enter task to do:
          <textarea
            name="title"
            id="title"
            required
            placeholder="Start with Bismillah..."
            onChange={(e) => onTitleChange(e.target.value)}
          />
        </label>
        <label htmlFor="completed">
          Leave unchecked if task incomplete:
          <input
            type="checkbox"
            name="completed"
            id="completed"
            required
            onChange={(e) => onCompletedChange(e.target.checked)}
          />
        </label>
        <button onClick={onTodoAddition}>Add</button>
      </form>
    </div>
  );
}
function DisplayAllTodos({ todos }) {
  if (todos.length === 0) {
    return <div id="displayAllTodos">"No tasks yet!;</div>;
  } else {
    return (
      <div id="displayAllTodos">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
function App() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [todos, setTodos] = useState([]);
  function handleAddition() {
    const todo = {
      id: todos.length + 1,
      title: title,
      completed: completed,
    };
    console.log(todo);
    setTodos(todos.push(todo));
  }
  return (
    <>
      <AddTodo
        onTitleChange={setTitle}
        onCompletedChange={setCompleted}
        onTodoAddition={handleAddition}
      />
      <DisplayAllTodos todos={todos} />
    </>
  );
}

export default App;
```

On clicking Add button, console in browser displays the todo object correctly, but here is the entire copied console result:

```
App.jsx:71 {id: 1, title: 'merah', completed: true}completed: trueid: 1title: "merah"[[Prototype]]: Object
App.jsx:48 Uncaught TypeError: todos.map is not a function
    at DisplayAllTodos (App.jsx:48:20)
    
installHook.js:1 An error occurred in the <DisplayAllTodos> component.

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.

overrideMethod @ installHook.js:1
defaultOnUncaughtError @ react-dom_client.js?v=2e81074d:6964

(anonymous) @ main.jsx:8
?taskEntry=:1 Form submission canceled because the form is not connected
```

However, the issue is that the page becomes blank and doesn't show my table.

# A) Problem summary (root causes)

* `setTodos(todos.push(todo))` — `Array.prototype.push` returns the new length (a number). You set state to a number, so `todos.map` fails (`map is not a function`).
* The `<form>` is submitting by default (button without `type="button"`), causing a form submit / navigation behavior.
* `required` on the checkbox forces it to be checked for submit (probably not intended).
* Minor: textarea and checkbox are uncontrolled (no `value` / `checked`) so resetting state is harder; the "No tasks yet!" string has a stray quote in your JSX.

Minimal fixed version (single-file App.jsx)

```jsx
import { useState } from "react";
import "./App.css";

function AddTodo({ title, completed, onTitleChange, onCompletedChange, onTodoAddition }) {
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

function DisplayAllTodos({ todos }) {
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
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
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

  return (
    <>
      <AddTodo
        title={title}
        completed={completed}
        onTitleChange={setTitle}
        onCompletedChange={setCompleted}
        onTodoAddition={handleAddition}
      />
      <DisplayAllTodos todos={todos} />
    </>
  );
}

export default App;
```

Notes & best practices

* Always use `setTodos(prev => [...prev, newItem])` or `setTodos([...todos, newItem])`. Never assign `push` result.
* Prefer `onSubmit` on the form and `button type="submit"` with `e.preventDefault()` to handle submission consistently.
* Keep form controls controlled (`value` / `checked`) so UI reflects state and you can reset easily.
* Use a more robust id (e.g., `Date.now()` or `crypto.randomUUID()` / `uuid` lib) instead of `todos.length + 1` to avoid collisions.
* Remove `required` from the checkbox unless you truly need it to be checked before submit.
* Add simple validation (trim title, non-empty).

# Q) I intended to add a delete button that would remove it's associated todo object from the array and re-render DisplayAllTodos. However, there are too many uncaught errors. Here's what I changed specifically(in various parts of my code)

```javascript
  function handleDeletion(todo) {
    //TODO: use window.confirm() to delete based on confirmation
    const taskDeletionIndex = todos.indexOf((item) => item.id === todo.id);
    const partOne = todos.slice(0, taskDeletionIndex);
    const partTwo = todos.slice(taskDeletionIndex + 1);
    setTodos([...partOne, ...partTwo]);

//
  <DisplayAllTodos todos={todos} onDeleteClick={handleDeletion} />
//
{todos.map((todo) => (
            <div>
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <button id={todo.id} onClick={onDeleteClick(todo)}>
                    Delete
                  </button>
                </td>
              </tr>
            </div>
          ))}
```

Attaching my entire App.jsx for context.

# A) Problems and fixes (concise)

1. `todos.indexOf((item) => item.id === todo.id)` — `indexOf` expects a value, not a predicate. Use `findIndex` or `filter`.
2. `onClick={onDeleteClick(todo)}` — this *calls* the handler immediately. Use a function: `onClick={() => onDeleteClick(todo)}`.
3. You wrapped `<tr>` in a `<div>` inside `<tbody>`. Invalid HTML for tables; remove the `<div>` wrapper.
4. `key` should be on the `<tr>`, not on a surrounding element.
5. Simpler, safer deletion: use `setTodos(prev => prev.filter(t => t.id !== id))`.
6. Optional: ask for user confirmation with `window.confirm()` before removing.

Minimal corrected code snippets

Replace `handleDeletion` in App:

```js
// safer, simpler deletion by id
function handleDeletion(todoId) {
  if (!window.confirm("Delete this task?")) return;
  setTodos((prev) => prev.filter((t) => t.id !== todoId));
}
```

Correct `DisplayAllTodos` (table + button handler):

```jsx
function DisplayAllTodos({ todos, onDeleteClick }) {
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
                <button type="button" onClick={() => onDeleteClick(todo.id)}>
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
```

And update the prop you pass from `App`:

```jsx
<DisplayAllTodos todos={todos} onDeleteClick={handleDeletion} />
```

(With `handleDeletion` expecting an `id` as shown.)

Why this works

* `findIndex` vs `indexOf`: `indexOf` compares values; `findIndex` accepts a predicate. Using `filter` avoids index calculations entirely.
* `onClick={() => ...}` defers the call until click.
* Correct table structure prevents browser HTML parsing issues and layout breakage.
* Using `setTodos(prev => prev.filter(...))` uses functional state update (safer when state updates are queued).
