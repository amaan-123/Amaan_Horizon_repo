### 1. What is ReactJS

React is a popular JavaScript library developed by Facebook for building fast and interactive user interfaces (UIs), especially for single-page applications (SPAs). It allows developers to build complex UIs using small, reusable pieces called **components**. React has become one of the most widely used technologies for front-end web development.

---

### 2. Difference between Library and Framework

<img src="media/library-vs-framework.jpg" alt="Library vs. Framework" width="700" />

| Aspect            | Library                                              | Framework                                                     |
| ----------------- | ---------------------------------------------------- | ------------------------------------------------------------- |
| Control Flow      | You call library functions when you want.            | The framework calls your code as needed.                      |
|                   | *You’re in control.*                                 | *Flow controlled by framework.*                               |
| Structure & Rules | No strict rules; flexible file structure.            | Enforces a certain structure and conventions.                 |
| Scope of Use      | Provides specific functionalities (e.g., DOM, HTTP). | Complete solution (routing, state management, testing, etc.). |

---

### 3. Why React? (Key Reasons)

* **Component-Based Architecture**
  Break your UI into small, reusable, and manageable parts. Improves code organization and maintainability.

* **Fast Performance with Virtual DOM**
  React updates only changed parts of the DOM, not the whole page, boosting speed and performance.

* **JSX – Write HTML in JavaScript**
  Makes code more readable and intuitive by combining markup and logic in one place.

* **Supports Mobile App Development (React Native)**
  Leverage the same React concepts to build native mobile apps.

---

### 4. Virtual DOM

<img src="media/vdom.png" alt="Virtual DOM" width="700" />

The **Virtual DOM (V-DOM)** is a lightweight copy of the real DOM that React uses to improve performance.

**How It Works:**

1. When state or data changes, React creates a new Virtual DOM tree.
2. It compares (diffs) this tree with the previous Virtual DOM.
3. Identifies the minimal set of changes.
4. Updates only those parts of the real DOM.

**Why Use Virtual DOM?**

* Minimizes direct manipulation of the real DOM, which is slow to update.

---

### 5. React Building Blocks: Components, Props, State & Events

#### Components

* Independent, reusable pieces of UI.
* Encapsulate their own logic and appearance.

#### Props

* Short for **properties**; function arguments for components.
* Pass data from parent → child.
* Make components dynamic and reusable.

```jsx
import React from 'react';

const State = () => {
  return (
    <>
      <style>
        {`
          .visiting-card {
            width: 300px;
            padding: 20px;
            border: 2px solid #333;
            border-radius: 10px;
            background-color: #fdfdfd;
            font-family: 'Segoe UI', sans-serif;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 20px auto;
            text-align: center;
          }

          .visiting-card .name {
            margin: 0;
            font-size: 24px;
            color: #2c3e50;
          }

          .visiting-card .title {
            margin: 5px 0 15px;
            font-size: 16px;
            color: #555;
          }

          .visiting-card .contact p {
            margin: 5px 0;
            font-size: 14px;
            color: #444;
          }
        `}
      </style>
      <div className="visiting-card">
        <h2 className="name">Jane Doe</h2>
        <p className="title">Frontend Developer</p>
        <div className="contact">
          <p>Email: jane.doe@example.com</p>
          <p>Phone: +1 234 567 8901</p>
        </div>
      </div>
    </>
  );
};

export default State;
```

#### State

* Built-in object to store data that changes over time within a component.
* Triggers automatic re-render on updates.

#### Events

* Actions in the browser (e.g., clicks, typing, form submit).
* In React, handlers use camelCase and receive functions:

  ```jsx
  // HTML: <button onclick="doSomething()">Click</button>
  // React: <button onClick={doSomething}>Click</button>
  ```

---

### 6. What is JSX?

JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code inside JavaScript.

```jsx
const element = <h1>Hello, JSX!</h1>;
```

**Why use JSX?**

* Cleaner and more readable code.
* Combines markup and logic in one place.

React components must return only one root element.
If you try to return multiple JSX elements side-by-side without wrapping them, React will throw an error.

---

### 7. Setting Up a New React Project

**Prerequisites:**

* Node.js installed (`node --version`)
* Code editor (e.g., VS Code)

**Steps:**

```bash
npx create-react-app my-app
cd my-app
npm start
```

---

### 8. React Hooks

<img src="media/hooks.jpg" alt="React Hooks" width="700" />

**Common Hooks:**

* `useState()` – add state:

  ```jsx
  const [count, setCount] = useState(0);
  ```

* `useEffect()` – side effects (e.g., data fetch, subscriptions):

  ```jsx
  useEffect(() => {
    console.log("Component mounted or updated");
  }, []);
  ```

* `useRef()` – persistent values or DOM refs without re-rendering:

  ```jsx
  const inputRef = useRef(null);
  ```

## 🌟 useState Hook

**What is useState?**

`useState` is a Hook in React that helps us to **store and change data** inside a component.

---

### 📥 How to Use useState?

👉 First, **import** it like this:

```js
import { useState } from "react";
```

---

### ⚙️ How useState Works?

We use `useState()` inside our function component to **create a piece of state**.

It gives us **two things**:

1. **Current value** (like `count`)
2. **Function to update it** (like `setCount`)

---

### 🧪 Example

```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);  // 0 means the initial value
}
```

* `count` → this stores the current value
* `setCount` → we use this to change the value of `count`

---

## 🔄 React Component Lifecycle

In React, every component goes through **three main stages** — just like a human life:

<img src="media/ReactCompLC.jpg" alt="Library vs. Framework" width="700" />

### 1. **Mounting** 🍼

The component is **created and added** to the screen (DOM) for the first time.

> Think of it like **birth**.

### 2. **Updating** 🔄

The component **changes** (re-renders) — like when state or props change.

> This is like **growing up or changing clothes**.

### 3. **Unmounting** ❌

The component is **removed** from the screen.

> Like **retiring or disappearing**.

---

## ⚙️ useEffect Hook

The `useEffect` Hook is used to **run some code** during the component’s **lifecycle**.

```js
import { useEffect } from "react";
```

---

### 🧠 Syntax

```js
useEffect(() => {
  // Code runs here
}, [dependencies]);
```

---

### ✅ 3 Ways useEffect Works

#### 1. **Run once (Mounting)** 🍼

```js
useEffect(() => {
  console.log("Component mounted");
}, []);
```

* Empty `[]` means run **only one time** when the component is added.

---

#### 2. **Run on update** 🔄

```js
useEffect(() => {
  console.log("State or prop changed");
}, [count]);
```

* Runs every time `count` changes.

---

#### 3. **Cleanup (Unmounting)** ❌

```js
useEffect(() => {
  // setup
  return () => {
    console.log("Component removed");
  };
}, []);
```

* `return` inside `useEffect` is used for **cleanup**.
* It runs when the component is **removed**.

---

### 🧪 Real Example

```js
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div>
      <p>Timer: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

---

## 📌 useRef Hook

`useRef` is a Hook in React that is mainly used to **update or access the DOM directly** — like changing the color, focus, size, etc., of an element.

```js
import { useRef } from "react";
```

---

### ✅ Example

```jsx
import { useRef } from "react";

function ColorChangeExample() {
  const textRef = useRef(null); // Create a ref

  function changeColor() {
    textRef.current.style.color = "green"; // Change text color directly
  }

  return (
    <div>
      <h2 ref={textRef}>This text will change color</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ColorChangeExample;

```

### 📌 What are we doing with `useRef`?

In this example:

```jsx
const textRef = useRef(null);
```

➡️ We are **creating a reference** (like a pointer) that can connect to a real HTML element.

---

### 🔗 Connecting the ref to an element

```jsx
<h2 ref={textRef}>This text will change color</h2>
```

➡️ We are telling React:

> "Hey, `textRef` should point to this `<h2>` element."

Now, `textRef.current` means the actual `<h2>` tag.

---

### 🟢 Changing the element directly

```js
textRef.current.style.color = "green";
```

➡️ This line goes to the actual HTML element and changes its **style** directly — just like plain JavaScript.

---

## 🌐 Fetching Data from an API in React

We can use the **Fetch API** in React to get data from a server and display it in our component.

## 🧪 Full Code (with line-by-line explanation below)

```jsx
import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
```

---

## 🔍 Line-by-Line Explanation

---

```js
import { useState, useEffect } from "react";
```

👉 We are importing:

* `React` to build the component
* `useState` to store the data
* `useEffect` to run code when the component loads

---

```js
function PostList() {
```

👉 This is a **React function component** called `PostList`.

---

```js
  const [posts, setPosts] = useState([]);
```

👉 Here we are:

* Creating a **state variable** called `posts`
* `setPosts` is the function to update it
* We start with an **empty array** (`[]`) because we don’t have data yet

---

```js
  useEffect(() => {
```

👉 `useEffect` runs some code **after** the component has loaded (mounted).

---

```js
    fetch("https://jsonplaceholder.typicode.com/posts")
```

👉 This line is making a **GET request** to a free API that gives us dummy posts (fake blog data).

---

```js
      .then((res) => res.json())
```

👉 We take the **response** and convert it into **JSON format** (which is easy to work with in JavaScript).

---

```js
      .then((data) => setPosts(data));
```

👉 Once we get the data, we **store it in our state** using `setPosts`.

---

```js
  }, []);
```

👉 The **empty array `[]`** means:
✔️ "Run this effect **only once**, when the component is first loaded."

---

```js
  return (
    <div>
```

👉 This is the part where we **show things on the screen** (JSX).

---

```js
      <h2>Post List</h2>
```

👉 A heading to show above the list.

---

```js
      <ul>
        {posts.map((post) => (
```

👉 We use `.map()` to **loop through the posts** and show each one.

* `posts` is an array, and `map()` helps us run the same code for every item inside it.
* `post` is each single item (like one blog post).

---

```js
          <li key={post.id}>
```

👉 Each post is shown inside an `<li>` (list item).
💡 `key={post.id}` is **important in React**:

* React uses `key` to **track each item** in the list
* Helps React update or remove items efficiently
  ✅ Always use a **unique value** (like `id`) for `key`.

---

```js
            <strong>{post.title}</strong>
            <p>{post.body}</p>
```

👉 We show:

* The post’s **title** inside `<strong>` (bold text)
* The post’s **body** inside a `<p>` (paragraph)

---

```js
          </li>
        ))}
      </ul>
    </div>
  );
}
```

👉 Closing tags for the loop and JSX structure.

---

```js
export default PostList;
```

👉 This allows us to **use this component** in other parts of our app.

---

## ✅ Mini Quiz

### **Q1. What is JSX in React?**

a) A database
b) A special syntax to write HTML inside JavaScript
c) A CSS extension
d) A React data fetching tool

---

### **Q2. Which Hook is used to store and update values in a component?**

a) useEffect
b) useState
c) useRef
d) useMemo

---

### **Q3. What is the correct way to set the state in React using `useState`?**

```jsx
const [count, setCount] = useState(0);
```

What does `setCount(5)` do?
a) It creates a new state
b) It updates `count` to 5
c) It removes the state
d) It updates the DOM manually

---

### **Q4. Which dependency array makes `useEffect` run only once?**

a) `[]`
b) `[true]`
c) `[count]`
d) `null`

---

### **Q5. You want to fetch API data when a component mounts. Where should you write the logic?**

a) Inside `useState`
b) Inside return block
c) Inside `useEffect`
d) Inside props

---

### **Q6. What will the following code print when button is clicked?**

```jsx
const [text, setText] = useState("Hi");

return <button onClick={() => setText("Bye")}>{text}</button>;
```

a) Hi
b) Bye
c) Hi → then Bye after click
d) Nothing

---

### **Q7. What is true about `useRef`?**

a) It causes the component to re-render
b) It is only used for timers
c) It is used to access DOM elements without re-rendering
d) It replaces `useState`

---

## ✅ Assignment 1: **Simple Todo App**

### 📝 Goal

Create a basic Todo App where users can:

* ✅ Add new todos
* ✅ Delete existing todos

### 🛠 Requirements

* Use `useState` to store the list of todos.
* Input field to type a task.
* “Add” button to add the todo to the list.
* Display all todos using `.map()`.
* Add a “Delete” button next to each todo to remove it.

### 💡 Bonus

* Prevent adding empty todos
* Show message: "No tasks yet!" if the list is empty

---

## ✅ Assignment 2: **Toggle Button to Fetch and Hide API Data**

### 📝 Goal

Build a component with a **Toggle Button** that:

* ✅ Fetches and shows posts from an API when clicked.
* ✅ Hides the posts when clicked again.

### 🛠 Requirements

* Use `useState` for:

  * Toggling (`showPosts`)
  * Storing API data (`posts`)
* Use `useEffect` to fetch data **only when toggle becomes true**.
* Use conditional rendering to:

  * Show a loading message while fetching
  * Show data only when `showPosts` is true

### 🔗 API to use

`https://jsonplaceholder.typicode.com/posts`

### 💡 Bonus

* Disable the button while data is being fetched
* Change button label: “Show Posts” ↔ “Hide Posts”

---

## ✅ Assignment 3: **Color Changer App 🎨**

### 📝 Goal

Create a component where users can click buttons to change the background color of a box.

### 🛠 Requirements

* Use `useState` to store the current color (e.g., `"red"`, `"blue"`, `"green"`)
* Create 3 buttons: Red, Green, Blue
* When a button is clicked, change the background color of the box

### 💡 Bonus

* Add a “Reset” button to return to the default color

---
