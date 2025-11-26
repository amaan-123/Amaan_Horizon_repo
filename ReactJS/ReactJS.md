# the OG Resource: react.dev

<https://react.dev/learn>

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
