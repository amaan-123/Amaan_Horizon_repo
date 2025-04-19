# Order of async await code execution

>Filename : async_await_simple.js

## Question

Explain the order of the console messages displayed by this code. My doubt is why do the statements:

```js
console.log("doing dishes");
console.log("cleaning the table");
console.log("taking others order");
```

execute before

```js
console.log("d");
console.log("e");
```

?

## Answer

The order of the console messages is determined by the asynchronous nature of JavaScript and how `async/await` works. Here's the breakdown

### Code Execution Flow

1. **Synchronous Code in `kitchen()`**:
   - The `kitchen()` function is called.
   - Inside `kitchen()`, the synchronous `console.log` statements execute first:

     ```javascript
     console.log("a");
     console.log("b");
     console.log("c");
     ```

     These messages are logged immediately: `a`, `b`, `c`.

2. **Asynchronous `await toppings_choice()`**:
   - The `await toppings_choice()` line pauses the execution of the `kitchen()` function until the `toppings_choice` promise resolves.
   - The `toppings_choice` function starts a `setTimeout` with a delay of 3 seconds. This schedules the message `"which topping would you love?"` to be logged after 3 seconds.

3. **Code After `kitchen()`**:
   - While the `kitchen()` function is paused at the `await` line, the JavaScript engine continues executing the rest of the code outside `kitchen()`.
   - The following synchronous `console.log` statements execute immediately:

     ```javascript
     console.log("doing dishes");
     console.log("cleaning the table");
     console.log("taking others order");
     ```

     These messages are logged in order: `doing dishes`, `cleaning the table`, `taking others order`.

4. **Resuming `kitchen()`**:
   - After 3 seconds, the `toppings_choice` promise resolves, and the `kitchen()` function resumes execution.
   - The remaining `console.log` statements in `kitchen()` are executed:

     ```javascript
     console.log("d");
     console.log("e");
     ```

     These messages are logged in order: `d`, `e`.

### Final Order of Console Messages

1. `a`
2. `b`
3. `c`
4. `doing dishes`
5. `cleaning the table`
6. `taking others order`
7. `which topping would you love?` (after 3 seconds)
8. `d`
9. `e`

### Why Do `doing dishes`, `cleaning the table`, and `taking others order` Execute Before `d` and `e`?

This happens because `await` pauses the execution of the `kitchen()` function at the `await toppings_choice()` line. While `kitchen()` is paused, the JavaScript engine continues executing the rest of the code outside `kitchen()`. This is the nature of asynchronous programming in JavaScript: it allows other code to run while waiting for a promise to resolve.
