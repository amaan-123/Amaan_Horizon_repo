# Notes

## Asynchronous JavaScript

### Introduction to Asynchronous JavaScript

- This crash course will cover topics related to asynchronous JavaScript.
- Understanding asynchronous concepts is crucial for every JavaScript developer.
- We will cover timeouts and intervals, callbacks, promises, async/await, and the event loop.
- For junior developers, a surface knowledge of these topics might suffice, but senior roles require a deeper understanding.
- We will first understand the "what" and "why" of async JavaScript, then the "how" with exercises, and finally how everything behaves with the event loop.

### The Basics of JavaScript: Synchronous, Blocking, Single-Threaded

- In its most basic form, **JavaScript is a synchronous, blocking, single-threaded language**.
  - **Synchronous:** Code executes top-down, with only one line executing at any given time. If there are two functions, `functionA` and `functionB`, and both are called, JavaScript will always execute `functionA` completely before starting `functionB`.

    ```javascript
    function functionA() {
      console.log('A');
    }

    function functionB() {
      console.log('B');
    }

    functionA();
    functionB(); // Output: A, then B
    ```

  - **Blocking:** Due to its synchronous nature, if a process takes a long time, subsequent processes are blocked until the current one completes. If `functionA` has an intensive task, JavaScript must finish it before moving to `functionB`, even if it takes a significant amount of time. This can cause the browser to appear frozen if a web app executes intensive code without returning control.
  - **Single-Threaded:** A thread is a process that a JavaScript program uses to run a task. JavaScript has only one thread, the **main thread**, for executing code. Unlike languages with multi-threading, JavaScript cannot run multiple tasks in parallel.

### The Problem with Synchronous JavaScript

- This synchronous, blocking model creates a problem when dealing with tasks like retrieving data from a database.
- We need to wait for the data to be fetched before we can run code on it. This waiting period (which could be one second or more) would block all other JavaScript code execution.
- If JavaScript didn't wait, it would proceed with execution before the data was available, leading to errors.
- Therefore, we need a way to have **asynchronous behavior** in JavaScript.

### How Asynchronous Programming is Catered to in JavaScript

- **Just JavaScript alone is not enough for asynchronous programming**.
- We need additional pieces outside of JavaScript, specifically provided by **web browsers** (and Node.js).
- Browsers define functions and APIs that allow us to register functions that should not be executed synchronously.
- Instead, these functions are invoked **asynchronously** when a certain event occurs, such as the passage of time, user interaction (mouse clicks), or the arrival of data over the network.
- This means your code can do several things at the same time without stopping or blocking the main thread.

### Traditional Methods for Asynchronous JavaScript: Timeouts and Intervals

- JavaScript has traditional methods for running code asynchronously: **timeouts and intervals**.
- These allow you to execute code after a set time period has elapsed or at regular intervals.
- The specific functions are `setTimeout` and `setInterval`.

#### `setTimeout`

- The `setTimeout` function executes a particular block of code **once** after a specified time has elapsed.
- **Parameters:**
  - The first parameter is a **function to run** or a reference to a function defined elsewhere.
  - The second parameter is a **number representing the duration in milliseconds** to wait before executing the code.
  - After the second parameter, you can pass in **zero or more values** that represent any parameters you want to pass to the function when it is run.

- **Example:**

    ```javascript
    function greet() {
      console.log('hello');
    }

    setTimeout(greet, 2000); // Logs "hello" after 2 seconds
    ```

- **Passing Parameters:**

    ```javascript
    function greet(name) {
      console.log('hello ' + name);
    }

    setTimeout(greet, 2000, 'vishwas'); // Logs "hello vishwas" after 2 seconds
    ```

- **Clearing a Timeout:**
  - You can cancel a `setTimeout` using the `clearTimeout` method.
  - `clearTimeout` takes the **identifier returned by `setTimeout`** as a parameter.

    ```javascript
    function greet() {
      console.log('hello');
    }

    const timeoutId = setTimeout(greet, 2000);
    clearTimeout(timeoutId); // The greet function will not execute
    ```

  - Clearing timeouts is practical when a component is unmounting to free up resources and prevent code from incorrectly executing on an unmounted component.

#### `setInterval`

- The `setInterval` function allows you to **repeatedly run the same code** over and over again at regular intervals.
- **Signature:** The signature is the same as `setTimeout`.
  - First parameter: the code to execute (function or reference).
  - Second parameter: the duration in milliseconds between executions.
  - Subsequent parameters: arguments to pass to the function.

- **Example:**

    ```javascript
    function greet() {
      console.log('hello');
    }

    setInterval(greet, 2000); // Logs "hello" every 2 seconds
    ```

- **Clearing an Interval:**
  - Intervals keep running forever, so you should clear them when appropriate using the `clearInterval` function.
  - Capture the return value from `setInterval` and pass it as an argument to `clearInterval`.

    ```javascript
    function greet() {
      console.log('hello');
    }

    const intervalId = setInterval(greet, 2000);
    // ... some condition to stop the interval ...
    clearInterval(intervalId);
    ```

### Key Points to Highlight About Timers and Intervals

- **Timers and intervals are not part of JavaScript itself.** They are implemented by the browser (and Node.js).
- `setTimeout` and `setInterval` are the JavaScript names given to this browser functionality.
- The **duration parameter** specified is the **minimum delay**, not a guaranteed delay.
  - For example, a `setTimeout` with 2000ms will execute the function at least after 2 seconds, but it could take longer if the call stack is busy.
  - Even a `setTimeout` with 0 milliseconds doesn't mean immediate execution. The function will run only when the call stack is free, after the minimum delay of 0ms. This will be explained further with the event loop.

- **Recursive `setTimeout` vs. `setInterval`:**
  - It's possible to achieve the same effect as `setInterval` with a recursive `setTimeout`.

    ```javascript
    // Using setInterval
    setInterval(function run() {
      console.log('hello');
    }, 100);

    // Using recursive setTimeout
    function run() {
      console.log('hello');
      setTimeout(run, 100);
    }
    run();
    ```

  - **Differences:**
    - **Guaranteed Delay:** Recursive `setTimeout` guarantees the specified delay between the *end* of one execution and the *start* of the next, regardless of how long the code takes to run. `setInterval`'s interval includes the execution time of the code. If the code takes longer than the interval, subsequent executions might overlap or not have the intended delay.
    - **Flexibility:** Recursive `setTimeout` allows for calculating a different delay before each iteration, offering more flexibility than the fixed interval of `setInterval`.
  - If your code within the interval can take longer to run than the interval itself, **recursive `setTimeout` is generally better** to maintain consistent time intervals.

## Callback Functions

- **Definition**: A callback function is a function that is **passed as an argument to another function**.
- The function that accepts another function as an argument or returns a function is called a **higher-order function**.

### Why Use Callback Functions?

- Callbacks allow for **delayed execution** of a function until a particular time or event has occurred, which is crucial for asynchronous operations.
- Callbacks can be categorized into two types:
  - **Synchronous Callbacks**: A callback that is **executed immediately**.
    - Example:

        ```javascript
        function greet(name) {
          console.log('Hello ' + name);
        }

        function greetVishwas(callback) {
          const name = 'Vishwas';
          callback(name);
        }

        greetVishwas(greet); // Output: Hello Vishwas
        ```

    - In this example, `greet` is a synchronous callback function passed to `greetVishwas`, and it is executed immediately within `greetVishwas`.
    - Other practical examples include callback functions used with array methods like `sort`, `map`, or `filter`.
  - **Asynchronous Callbacks**: A callback that is often used to **continue or resume code execution after an asynchronous operation has completed**.
    - Used to delay the execution of a function until a particular time or event occurs.
    - Examples:
      - **`setTimeout`**:

        ```javascript
        function greetDelayed() {
          console.log('Hello after 2 seconds');
        }
        setTimeout(greetDelayed, 2000); // greetDelayed is an async callback
        console.log('This will be logged first');
        ```

      - Here, `greetDelayed` is the callback function, and it is executed asynchronously after a 2-second delay. `setTimeout` acts as the higher-order function.
      - **Event Handlers**:

          ```javascript
          const button = document.getElementById('myButton');
          button.addEventListener('click', function() {
            console.log('Button clicked!'); // This is an async callback
          });
          ```

      - The anonymous function passed to `addEventListener` is a callback that is executed asynchronously when the button is clicked.
      - **Data Fetching (Example with jQuery)**:

          ```javascript
          // (Conceptual example - jQuery not in sources but mentioned)
          $.get('url/to/data', function(data) {
            console.log('Data loaded:', data); // This is an async callback
          });
          ```

      - The function that handles the loaded data is a callback executed asynchronously after the data has been fetched.

### The Problem with Callbacks: Callback Hell

- When multiple asynchronous operations depend on each other, leading to nested callbacks, the code can become **difficult to read and maintain**. This is known as **callback hell**.
- Example of nested callbacks:

```javascript
asyncOperation1(function(result1) {
  asyncOperation2(result1, function(result2) {
    asyncOperation3(result2, function(result3) {
      // ... and so on
      console.log('Final result:', result3);
    });
  });
});
```

- The deep nesting makes the code less intuitive and harder to follow.

### Solution to Callback Hell: Promises

- **Promises**, introduced in ES6, provide an alternative and recommended approach to handle asynchronous code, making it more readable and manageable compared to nested callbacks.
- Promise chaining helps to avoid the deep nesting of callback hell.

## Promises in JavaScript

### Introduction to Promises

- In about eighty percent of the interviews, questions about promises are asked, especially for senior developer positions.
- A thorough understanding of promises is crucial.
- Promises can be understood through a simple analogy.

### Promise Analogy

- Scenario: You and your roommate want to have dinner at home. You'll make soup, and your roommate will get tacos from a food truck.
- You ask your roommate to text you when they reach the food truck so you can start setting the table, and also if they can't get tacos so you can make pasta instead.
- Your roommate promises to text.
- Analogy to JavaScript and Promises:
  - Your friend is like a **promise** in JavaScript.
  - Your friend going to the food truck and you preparing soup simultaneously is like an **asynchronous operation** in JavaScript (fetching tacos).
  - The status of the tacos is initially **pending** until you receive a message.
  - When your friend texts "can get tacos", your desire is **fulfilled**, and you set up the table (success callback).
  - When your friend texts "cannot get tacos", your desire is **rejected**, and you cook pasta (failure callback).

### MDN Definition of a Promise

- A promise is a **proxy for a value not necessarily known when the promise is created**.
- It allows you to **associate handlers with an asynchronous action's eventual success value or failure reason**.
- Breakdown of the definition:
  - **Proxy for a value:** Your friend promises to inform you about the tacos (the promise value).
  - **Not necessarily known when created:** You don't know if they can get tacos or not when the promise is made.
  - **Associate handlers:** You decide what to do (set table or cook pasta) based on whether the promise is fulfilled or rejected.

### Technical Definition of a Promise

- A promise is simply an **object in JavaScript**.
- A promise is always in one of three states:
  - **Pending:** Initial state, neither fulfilled nor rejected.
  - **Fulfilled:** The operation completed successfully.
  - **Rejected:** The operation failed.

### Why Use Promises?

- Promises help us **deal with asynchronous code in a far simpler way compared to callbacks**.
- Promises help avoid **callback hell**, making the code more readable and maintainable.

### How to Work with Promises

- Six key points about a promise:
  - Your friend (promise).
  - Can get tacos / cannot get tacos (promised value).
  - Fulfilling the promise.
  - Rejecting the promise.
  - Success callback (set up the table).
  - Failure callback (cook pasta).
- Three things to understand in code:
  - How to **create a promise**.
  - How to **fulfill or reject the promise**.
  - How to **execute callback functions** based on the promise state.

#### Creating a Promise

- An instance of a promise is created using the `new` keyword with the `Promise` constructor function.

```javascript
const promise = new Promise(() => {});
```

#### Fulfilling or Rejecting a Promise

- The `Promise` constructor function accepts one function as its argument (an arrow function in the example).
- This function receives two arguments: **`resolve`** and **`reject`**, which are both functions.
- Calling `resolve()` changes the promise status from pending to fulfilled.
- Calling `reject()` changes the promise status to rejected.
- `resolve` and `reject` are typically called after an asynchronous operation.
- Example using `setTimeout`:

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const foodTruckFound = true; // Example condition
    if (foodTruckFound) {
      resolve(); // Promise fulfilled after 5 seconds
    } else {
      reject(); // Promise rejected after 5 seconds
    }
  }, 5000);
});
```

#### Executing Callback Functions

- The promise object provides access to two methods: **`then()`** and **`catch()`**.
- **`then()`** accepts the **on fulfillment** callback function, which is executed automatically when the promise is fulfilled (when `resolve()` is called).
- **`catch()`** accepts the **on rejection** callback function, which is executed automatically when the promise is rejected (when `reject()` is called).
- Example:

```javascript
function onFulfillment() {
  console.log('Set up the table to eat tacos');
}

function onRejection() {
  console.log('Start cooking the pasta');
}

promise.then(onFulfillment);
promise.catch(onRejection);
```

#### Passing Data with Resolve and Reject

- You can pass arguments to `resolve()` or `reject()`.
- The argument passed to `resolve()` is automatically injected as the argument to the **on fulfillment** callback in `then()`.
- The argument passed to `reject()` is automatically injected as the argument to the **on rejection** callback in `catch()`.
- Example:

```javascript
const promiseWithData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const foodTruckFound = true;
    if (foodTruckFound) {
      resolve('bringing tacos');
    } else {
      reject('not bringing tacos, food truck not there');
    }
  }, 5000);
});

function onFulfillmentWithData(message) {
  console.log(message);
  console.log('Set up the table to eat tacos');
}

function onRejectionWithData(errorMessage) {
  console.log(errorMessage);
  console.log('Start cooking pasta');
}

promiseWithData.then(onFulfillmentWithData).catch(onRejectionWithData);
```

### Interview Tips on Promises

- Begin by explaining **what a promise is in your own words**, focusing on its use for async operations.
- Use a **real-world analogy** to illustrate the concept.
- Talk about the **three states of a promise**: pending, fulfilled, and rejected.
- Explain the function passed to the promise constructor and the roles of **`resolve` and `reject`**.
- Describe the **on fulfillment and on rejection callback functions** and how they are used with `then()` and `catch()`.

### Further Details About Promises

#### The `then()` Function

- The `then()` function can accept two arguments: the on fulfillment callback (first argument) and the on rejection callback (second argument).

```javascript
promise.then(onFulfillment, onRejection);
```

- However, using **`catch()` is encouraged** over passing the rejection callback as the second argument to `then()`.
- Reason: `catch()` can handle errors not only from the promise itself but also any errors that might be thrown within the on fulfillment callback function.

#### Chaining Promises

- Both `then()` and `catch()` methods **return promises**.
- This allows for **chaining of `then()` and `catch()` methods**.

```javascript
promise
  .then(result => {
    // Do something with the result and return a new promise
    return fetch('/api/followers');
  })
  .then(followers => {
    // Process followers
    console.log('Followers:', followers);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
```

- Promise chaining helps solve the problem of **callback hell**, making asynchronous code look more readable and maintainable, almost like synchronous code.

#### Static Methods of Promises

##### `Promise.all()`

- Takes an **iterable of promises (e.g., an array)** as input.
- Returns a **single promise** that resolves to an **array of the results** of all the input promises.
- The returned promise will resolve **when all of the input promises have resolved** or if the input iterable is empty.
- It **rejects immediately if any of the input promises reject**, with the rejection message or error of the first rejected promise.

```javascript
const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 100));
const notAPromise = 'Not a promise';

Promise.all([promise1, promise2, notAPromise])
  .then(results => console.log('All resolved:', results))
  .catch(error => console.error('One or more rejected:', error));
```

##### `Promise.allSettled()`

- Waits for **all input promises to complete**, regardless of whether they fulfill or reject.
- Returns a promise that resolves to an **array of objects**, where each object describes the outcome of each input promise (either `status: "fulfilled"` with a `value`, or `status: "rejected"` with a `reason`).

```javascript
const promiseSuccess = Promise.resolve('Success');
const promiseFailure = Promise.reject('Failure');

Promise.allSettled([promiseSuccess, promiseFailure])
  .then(results => console.log('All settled:', results));
```

##### `Promise.race()`

- Returns a promise that **fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects**, with the value or reason from that promise.

```javascript
const promiseFast = new Promise(resolve => setTimeout(() => resolve('Fast promise'), 100));
const promiseSlow = new Promise(resolve => setTimeout(() => resolve('Slow promise'), 500));

Promise.race([promiseFast, promiseSlow])
  .then(result => console.log('First to resolve:', result));
```
