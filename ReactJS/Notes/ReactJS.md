# the OG Resource: react.dev

<https://react.dev/learn>

**Hands-on battle: <https://www.w3schools.com/react/react_hooks.asp>**

# Every React Concept Explained in 12 Minutes

<https://www.youtube.com/watch?v=wIyHSOugGGw>

## React Fundamentals and Core Concepts

### Components and JSX

- **Components** are the building blocks of every React application.
- They allow developers to create all visible parts of applications, such as buttons, inputs, or entire pages.
- Components are reusable, similar to Legos.
- Every React component is a JavaScript function that returns markup.
- Since React is a JavaScript library, components return **JSX**, which is JavaScript in disguise, rather than HTML markup.
- JSX is optional, but it is universally used because the alternative way to build interfaces involves the `createElement` function, which becomes annoying to write quickly.

## JSX Rules and Dynamics

- Attributes in JSX must be written in the **camel case** style because JSX is JavaScript.
- Example: HTML attributes like `class` become `className`.
- React enables the use of **Dynamic JavaScript values** in JSX, unlike static HTML.
- Data can be displayed in JSX using curly braces `{}`.
- Curly braces accept values like strings and numbers directly.
- Curly braces can be used to make attributes dynamic.
- React elements can be styled using a JavaScript object placed within curly braces.

## Component Structure

- JavaScript functions can only return one thing, which means a React component can only return one parent element.
- Returning multiple elements without a single wrapper causes an error.
- This issue can be fixed by wrapping components in a `div`.
- If you do not want to add another element to the page, you can use an empty component called a **React Fragment**.

### Props, Composition, and Keys

- **Props** (properties) are used to pass data into another component.
- To create a prop, define a name on the receiving component and set it equal to some value.
- Props refer to properties on an object, which is what is received in the parameters of each component.
- Props can be taken from the object like a normal JavaScript property.
- They should be thought of as custom attributes that can be added to any component.
- Anything can be passed as a prop, including other components.

## The Children Prop and Composition

- Components passed in between the opening and closing tags of a component are called **children**.
- The children components can be accessed on the **`children` prop** of the parent component.
- The `children` prop is useful for **composition**, which is the optimal way to organize React components.
- It is especially useful for creating layout components when the children should share the same common layout.

## The Key Prop

- The **key prop** is a built-in React prop.
- It is used so React can tell one component apart from another.
- The key prop is usually needed when creating a list using the `map` function.
- A key must be a unique string or number.
- React will issue a warning in the console when a key needs to be added.
- If a unique value is unavailable for each item, the current index from the `map` function can be used.

### Rendering and the Virtual DOM

- **Rendering** is the process where React takes the code and displays something in the browser.
- Understanding rendering is important because improper code can cause an infinite re-render, which crashes the app.
- React determines how and when to render the application using the **Virtual DOM (VDOM)**.
- **DOM** stands for Document Object Model.
- The DOM is what every browser uses to model all the HTML elements on a web page, structured like a tree.

## The Complete Rendering Process

1. The state of the React app changes.
2. React updates the Virtual DOM, which is quicker to update than the Real DOM.
3. React uses a process called **diffing** to compare the updated Virtual DOM to a previous version to see what has changed.
4. React uses a process called **reconciliation** to update the Real DOM with the changes that were found.

### Event Handling and State Management

- **Event Handling** involves taking user events (like clicks, key presses, and mouse movements) and doing something with them.
- React has built-in events such as `onClick`, `onChange`, and `onSubmit`, which are frequently used.
- To alert users when a button is clicked, the `onClick` prop is added to the button and connected to a function that shows the alert.

```javascript
// Example of event handling setup
<button onClick={showAlertFunction}>Click Me</button>
```

## State

- **State** is used to manage data in React applications.
- State is like a snapshot of the app at any given time.
- Standard JavaScript variables cannot be used to manage state because they do not cause the application to re-render.
- Special functions, such as **`useState`** and **`useReducer`**, must be used instead.
- The `useState` hook takes an argument that serves as the starting value of the state variable.
- `useState` returns an array containing the state variable and a function used to update that state.

```javascript
// Example of useState
const [likes, setClicks] = useState(initialLikes);
```

## Controlled Components

- **Controlled components** use state values to achieve more predictable behavior.
- In a controlled component, the value typed into an input is put into state and controlled by a state variable.
- The pattern works as follows: The user types -> The update function (`setValue`) puts the input into State -> The state value is updated -> The input uses that updated State as its value.
- This is a useful pattern because changing the component's behavior only requires changing the state that controls it.

### React Hooks

- **React Hooks** are functions that allow you to hook into features, such as state, within function components.
- There are five main types of hooks:
  - **State Hooks:** Help manage state within components (e.g., `useState`, `useReducer`).
  - **Context Hooks:** Allow use of data passed through React Context (e.g., `useContext`).
  - **Ref Hooks:** Allow referencing things like HTML elements (e.g., `useRef`).
  - **Effect Hooks:** Allow connecting with external systems like browser APIs (e.g., `useEffect`).
  - **Performance Hooks:** Improve performance by preventing unnecessary work (e.g., `useMemo`, `useCallback`).
- The three hooks most commonly used in components are `useState`, `useEffect`, and `useRef`.

### Purity and External Interaction

## Purity and Strict Mode

- **Purity** describes how React components should work, following the rule that the same input must always return the same output, similar to mathematical formulas.
- To keep a React component pure, they should only return their JSX and must not change any objects or variables that existed before rendering.
- Changing an external variable during render makes a component impure and can lead to incorrect output when the component is used multiple times.
- **Strict Mode** is a special component that informs developers about mistakes during development.
- It is commonly wrapped around the main app component.

## Effects (Side Effects)

- **Effects** are code that reach outside the React application.
- They are necessary if the app needs to communicate with external systems, such as a browser API or a server.
- Effects can often be executed within event handlers (e.g., making an HTTP request when a form is submitted or a button is clicked).
- If an effect cannot run within an event handler, it can be run using the **`useEffect` hook**.
- A common pattern is using `useEffect` to fetch data when components first load.

## Refs

- **Refs** are used when you need to step outside React and work directly with the DOM.
- A ref can be created using the **`useRef` hook**.
- Access to a DOM element is gained by using the `ref` prop on any React element.
- Using refs is often easier for tasks like focusing an input than attempting to handle them the "React way".

### Data Flow Utilities

## Context

- **Context** is a powerful mechanism for passing prop data through an application's components.
- It solves the issue of passing the same props through many deeply nested components that do not actually need the data.
- Context allows developers to jump through the component tree and use data at any level.
- Steps to use context:
  - 1. Create context in a parent component.
  - 2. Wrap the parent component in a special component called a **context provider**.
  - 3. Put the data you want to pass down onto the provider.
  - 4. Access that data in any child component using the **`useContext` hook**.

## Portals

- **Portals** are similar to context but are used for components; they allow moving React components into any selected HTML element.
- Portals are useful when components cannot be displayed properly due to their parent component's styles.
- Common uses include displaying modals, drop-down menus, and tool tips.
- A portal is created using the `createPortal` function, passing the component to it and choosing the HTML element where it should appear.

```javascript
// Example of createPortal usage
createPortal(component, htmlElementTarget)
```

### Specialized Components

## Suspense

- **Suspense** is a special component that helps manage the loading of a component or its data.
- It improves user experience when components take time to fetch data by showing a fallback component, such as a loading spinner, until the data is available.
- Suspense is also useful for **lazily loading** components, which ensures a component is loaded only when required.

## Error Boundaries

- **Error Boundaries** are components that allow you to catch errors that happen during rendering that would otherwise totally break your app.
- Since React apps are all JavaScript, errors during rendering can crash the application.
- Error boundaries prevent crashing by catching the error and displaying a fallback component that provides a more helpful message to the user.

***

React's core functionality, spanning from component composition to VDOM management, is designed to turn the often messy task of building dynamic user interfaces into a predictable process, much like an assembly line where every step, from fetching data (the raw material) to displaying the final UI (the finished product), is carefully managed by specialized tools like Hooks, Context, and the Virtual DOM.

# Evaluation learning topics

## Differences Between Functional Components and Class Components

<https://www.geeksforgeeks.org/blogs/differences-between-functional-components-and-class-components/>

## Overview of React Hooks

![alt text](<Screenshot (378).png>)

- The building of a React application often involves using React hooks.
- Learning hooks is simplified by recognizing a convenient pattern for how they fit together.
- There is a complete map of React hooks showing all **eight major categories**.
- The categories include:
  - State Management hooks, used to work with React State.
  - Effect hooks, used to perform side effects.
  - Ref hooks, used to reference JavaScript values or DOM elements.
  - Performance hooks, used to improve app performance with memoization.
  - Context hooks, used to read from React Context.
  - Transition hooks, used to employ transitions for better user experiences.
  - Some Random Hooks.
  - Some powerful new hooks introduced in React 19.

## State Management Hooks

- These hooks help developers manage state within components.

### `useState`

![alt text](<Screenshot (379).png>)

- `useState` is likely the **bread and butter** of any React developer and will be used **a lot** unless a framework is utilized.
- A primary reason for React's existence is to help manage State and render components when State changes.
- It is the most versatile hook covered and is best for client components that need their own simple, specific State.
![alt text](<Screenshot (380).png>)
- **Usage:**
  - You can give it an initial value, which can virtually be any JavaScript value.
  - It returns an array, which is destructured into two separate variables.
  - The first variable is the state variable.
  - The second variable is a function used to update the state variable.
  ![alt text](<Screenshot (381).png>)
- **Use Cases:**
  - Capturing user input in form fields, such as inputs, text areas, and selects.
  - Showing or hiding components like modals, tool tips, or dropdowns, especially when using a Boolean State value.
  - Conditionally applying classes and styles using a Boolean State variable.
  - Working with number values, such as in a shopping cart or counter.
  ![alt text](<Screenshot (382).png>)
  ![alt text](<Screenshot (384).png>)
  ![alt text](<Screenshot (385).png>)

### `useReducer`

![alt text](<Screenshot (386).png>)
![alt text](<Screenshot (387).png>)

- `useReducer` is another state hook that is useful for performing **more complex State Management** than `useState`.
- It is not needed very often, but it is worth adding if you have a lot of related State.
- It uses a reducer function to update state, which can radically simplify your code because all the State updates can be done in a single function.
- **Usage:**
  - Accepts both a reducer function and a starting State value.
  - Returns an array that includes the state variable and a new function called `dispatch`.
  - When `dispatch` is called, it runs the reducer function and sends data called an action.
  - The action data allows for conditionally setting State based off of which action came in.
- **Use Cases:**
  - Simplifying components with multiple related State values, like multiple inputs within a form.
  - Components where the state depends on other values (e.g., in game-based examples).
  - A good choice for apps with lots of user interactions.
  ![alt text](<Screenshot (388).png>)
  ![alt text](<Screenshot (389).png>)

### `useSyncExternalStore`

- This is one of the hooks that you are likely **not going to use at all**.
- It is primarily used to add **non-React State Stores** into React components.
- You will generally not need this hook unless you want to make your own State Management library from scratch.

## Effect Hooks

- Effect hooks allow developers to perform side effects.
- A side effect is a way to reach outside React and **synchronize with an external system**.

### `useEffect`

![alt text](<Screenshot (390).png>)
![alt text](<Screenshot (391).png>)
![alt text](<Screenshot (392).png>)
![alt text](<Screenshot (393).png>)
![alt text](<Screenshot (394).png>)
![alt text](<Screenshot (395).png>)

- A basic example of performing a side effect is setting the title using the document API.
- **Usage:**
  - You must first give `useEffect` a function to run.
  - By default, it runs **after each render**.
  - To change this behavior, you can give it a **dependencies array**.
  - The effect function will run when any value in the dependencies array changes.
  - If state is updated (e.g., when a button is clicked), it causes the effect function to run and update the title.
- **Recommendations for Use:**
  - `useEffect` **shouldn't really be used** for event-based side effects (which run when an event takes place, like a button click). Instead, perform event-based side effects directly in an event handler for simpler code.
  - `useEffect` **shouldn't really be used** for render-based side effects, such as fetching data when a component mounts and putting it in state. Instead, use a more sophisticated tool like React Query or data fetching patterns that come with frameworks like Next.js.
- **When to Use:**
  - You will not need to use it often, but mainly when you need to **sync your React code with a browser API** (e.g., synchronizing React state with the browser media API using a ref to either play or pause it).

### `useLayoutEffect`

![alt text](<Screenshot (396).png>)
![alt text](<Screenshot (397).png>)

- This is a **more specialized version** of `useEffect`.
- While `useEffect` runs after React paints the UI, `useLayoutEffect` runs **just before React paints the UI**.
- `useLayoutEffect` is primarily for **synchronous operations** that you want to do right before displaying the UI content, such as setting State, while `useEffect` is asynchronous.
- This hook will be used even **less often** than `useEffect`.
- **Use Cases:**
  - Getting some initial state from a browser API, such as measuring the height of a tool tip with `getBoundingClientRect` and then setting it in state before the browser repaints and it is visible to the user.

### `useInsertionEffect`

![alt text](<Screenshot (398).png>)

- This is an even more niche effect hook.
- It is made **exclusively for CSS-in-JS library makers** (e.g., styled-components or emotion).
- This hook runs before both `useEffect` and `useLayoutEffect`.
- It runs to ensure any CSS styles are inserted if other effect hooks need to read from the layout.

## Ref Hooks

- Refs are a way to **step outside of React**.

### `useRef`

![alt text](<Screenshot (399).png>)
![alt text](<Screenshot (400).png>)
![alt text](<Screenshot (401).png>)

- `useRef` is similar to `useState` because it lets you remember data, but it does so **without triggering a render**.
- **Usage:**
  - It can be given any data value.
  - It returns only one value, which is whatever you passed it.
  - To access the underlying value, use the **`.current` property**.
- **Mutability:**
  - Refs are **mutable** (the `.current` property can be modified directly using the equals operator), whereas state is immutable.
- **Use Cases:**
  - Storing the interval ID in a ref to clear the interval later using a stop function (e.g., in a timer example).
  - Storing DOM elements: You can connect a created ref to the `ref` prop of an element, and then use the `.current` property to access the underlying DOM element.
![alt text](<Screenshot (402).png>)
![alt text](<Screenshot (403).png>)

### `useImperativeHandle`

![alt text](<Screenshot (404).png>)
![alt text](<Screenshot (405).png>)
![alt text](<Screenshot (406).png>)

- This type of ref hook is **rarely used**.
- It is only necessary when you need to **forward a ref**.
- It must be paired with the `forwardRef` function.
- It is used only if you also need to **expose a method** to the parent component that passed the ref.
- **Use Case:**
  - If a parent component wants to focus an input within a child component, you first need to forward the ref to the child using the `forwardRef` function (though this won't be required in React 19), and then use `useImperativeHandle` to put the focus method on the parent ref.

## Performance Hooks

- These two hooks are made to improve your app's performance by using **memoization** to cache previous results.

### `useMemo`

![alt text](<Screenshot (407).png>)
![alt text](<Screenshot (408).png>)

- It improves performance by caching previous results.
- `useMemo` will recompute the cached value **only when one of its dependencies has changed**.
- It is good for performing **expensive computations**.
- It looks similar to `useEffect`, but it is not for side effects and **must return a value**.
- **Use Case:**
  - Calculating the sum of numbers in an array; the function only reruns when the numbers array changes, and the computed result is put in a variable.

### `useCallback`

![alt text](<Screenshot (409).png>)
![alt text](<Screenshot (410).png>)

- Like `useMemo`, `useCallback` memorizes what is passed to it, but it is specifically for **callback functions** that are passed down to child components.
- It improves performance by preventing callback functions from being **recreated on each render**.
- **Use Case:**
  - If a function updates State, causing a rerender, wrapping that function in `useCallback` prevents it from being recreated every time the component re-renders when passed as a prop to a child component.

## Context Hooks

### `useContext`

![alt text](<Screenshot (411).png>)
![alt text](<Screenshot (413).png>)

- This hook is used to read context values.
- If a component is wrapped in a context provider, you can use `useContext` to read the value passed down on context.
- It works in any component that is nested inside a provider, regardless of how deep it is.
- To read the context value, you only need to pass the created context to `useContext`.

## Transition Hooks

- In React, all State updates are considered to be urgent.
- Transition hooks allow developers to specify that certain State updates are **not urgent**.

### `useTransition`

![alt text](<Screenshot (414).png>)

- Allows you to specify that State updates are **not urgent**.
- This is helpful for State updates that involve heavy computations, which can lead to a bad user experience if executed immediately.
- Wrapping these State updates in a transition can make your app more responsive.
- **Features:**
  - Provides the `startTransition` function to mark the filter State update as non-urgent.
  - Provides an `isPending` Boolean value to indicate when the transition is pending, allowing you to show a loading state until the state update finishes.
- **Use Case:**
![alt text](<Screenshot (416).png>)
  - Filtering a list based on user input, where typing might otherwise cause the UI to freeze or be sluggish.

### `useDeferredValue`

![alt text](<Screenshot (417).png>)

- This hook lets you **defer or pause an update** to keep your app responsive.
- It is very similar to `useTransition`.
- It tells React to schedule an update at an **optimal time** for you, instead of manually starting the transition.
- **Usage:**
  - Pass the value you want to defer to `useDeferredValue`.
- **Use Case:**
![alt text](<Screenshot (418).png>)
  - Best for things like filtering lists, as it provides the same improved user experience as `useTransition` without needing to manually manage the transition or pending state.

## Random Hooks

### `useDebugValue`

![alt text](<Screenshot (419).png>)

- This hook is only necessary if you regularly use **React Dev Tools**.
- If you use custom hooks, `useDebugValue` lets you label your custom hooks with a string value.
- This makes finding your custom hooks easier in the React Dev Tools extension.

### `useId`

![alt text](<Screenshot (420).png>)

- This hook creates a **unique ID** when it is called and does not require any arguments.
- **Important Note:** You cannot use it to create keys for list items.
- It is made for creating **Dynamic IDs** to be shared between form inputs and their labels.
- **Use Case:**
![alt text](<Screenshot (421).png>)
  - Useful when form inputs can be reused multiple times on a single page, ensuring they each have unique IDs that do not conflict with each other.

## New Hooks (React 19)

- There are powerful new hooks that were introduced in React 19.
- A complete video covers all these hooks in depth, explaining what they do and how to start using them.
