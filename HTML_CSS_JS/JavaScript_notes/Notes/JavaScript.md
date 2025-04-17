# General Notes on Javascript

**JavaScript (or ECMAScript)** is a programming language that helps you add interactivity to your web pages.

Using JavaScript, you can **add or remove content from a web page without reloading** it.

## Link to JavaScript

The `script` tag with `defer` is placed in the `head` section. The `defer` attribute ensures the script is executed after the HTML is fully parsed.

```html
...
<script src="app.js" defer></script>
</head>
```

### Add fault tolerance

The `noscript` tag remains in the `body` section, as it provides a fallback message for users without JavaScript. Only one `noscript` tag is needed.

>If you are not using the `defer` attribute, the `script` tag should be placed just before the closing `body` tag.

```html
...
<noscript>
You need to enable JavaScript to view the full site.
</noscript>
<script src="app.js"></script>
</body>
</html>
```

## Set strict mode

JavaScript was designed to be easy to learn and allows the developer to make certain mistakes. For example, JavaScript **doesn't throw an error** when you use a **misspelled variable**, and instead **creates a new global one**. When you start learning JavaScript, having fewer **errors** is convenient. However, it can lead to writing code that is harder for browsers to **optimize** and harder for you to **debug**.

Switch to `strict` mode to get more useful errors when you make mistakes.

```js
'use strict';
```

## DOM Traversal

The YouTube video "Learn JavaScript DOM Traversal In 15 Minutes" by Web Dev Simplified explains **nine techniques for selecting and traversing elements within the Document Object Model (DOM) using JavaScript**. The video uses a simple HTML structure with a grandparent (red square), two parents (green rectangles), and children (blue rectangles) to illustrate these techniques. The video also links a blank `script.js` file to demonstrate the JavaScript code.

Here is a detailed description of the video with the corresponding code:

**1. Selecting Elements by ID using `document.getElementById()`**

- The video starts by emphasizing the importance of selecting elements in the DOM.
- To demonstrate selecting by ID, an ID of `grandparent-id` is added to the grandparent element in the HTML.
- The following JavaScript code is then used in `script.js` to select the grandparent element by its ID and change its background color:

     ```javascript
     const grandparent = document.getElementById('grandparent-id');
     grandparent.style.backgroundColor = 'lightgray';
     ```

- A helper function `changeColor` is introduced to simplify changing the background color of elements:

     ```javascript
     function changeColor(element) {
       element.style.backgroundColor = 'lightgray';
     }
     ```

- The code is then updated to use this function:

     ```javascript
     changeColor(grandparent);
     ```

**2. Selecting Elements by Class Name using `document.getElementsByClassName()`**

- The video explains how to select multiple elements that share a common class name. The parent elements in the HTML have the class `parent`.
- The following code attempts to select all parent elements and change their color:

     ```javascript
     const parents = document.getElementsByClassName('parent');
     // parents.forEach(changeColor); // This would result in an error
     ```

- The video points out that `getElementsByClassName()` returns an **HTMLCollection**, which does not have a `forEach` method directly.
- The HTMLCollection needs to be converted to an array to use `forEach`:

     ```javascript
     const parents = Array.from(document.getElementsByClassName('parent'));
     parents.forEach(changeColor);
     ```

- It's highlighted that only one element can have a specific ID, while multiple elements can share the same class name.

**3. Selecting Elements using `document.querySelector()`**

- The video introduces `document.querySelector()`, which allows selecting the **first element** that matches a specified CSS selector.
- It demonstrates replacing `getElementById()` with `querySelector()` to select the grandparent by its ID using the CSS selector `#grandparent-id`:

     ```javascript
     const grandparent = document.querySelector('#grandparent-id');
     changeColor(grandparent);
     ```

- It also shows how to select the grandparent using its class name with the CSS selector `.grandparent`, noting that even if multiple elements had this class, only the first one would be selected:

     ```javascript
     const grandparent = document.querySelector('.grandparent');
     changeColor(grandparent);
     ```

- An example of selecting the first parent element using its class is provided:

     ```javascript
     const parent = document.querySelector('.parent');
     changeColor(parent);
     ```

**4. Selecting Elements using `document.querySelectorAll()`**

- To select **all elements** that match a CSS selector, the video introduces `document.querySelectorAll()`.
- It demonstrates selecting all parent elements and changing their color:

     ```javascript
     const parents = document.querySelectorAll('.parent');
     parents.forEach(changeColor);
     ```

- The video states that `querySelector` and `querySelectorAll` are the preferred methods for selecting elements due to their consistency and the use of familiar CSS selectors. The speaker mentions using them almost exclusively.

**5. Traversing Down the DOM: Getting Children using the `children` property**

- The video explains how to access the direct children of an element using the `children` property, which returns an **HTMLCollection**.
- The following code shows how to get all the children of the grandparent (which are the parent elements) and change their color:

     ```javascript
     const parents = Array.from(grandparent.children);
     parents.forEach(changeColor);
     ```

- It also demonstrates how to access a specific child by index and then get its children:

     ```javascript
     const parentOne = parents;
     const children = Array.from(parentOne.children);
     changeColor(children); // Changes the color of the first child of the first parent
     ```

**6. Traversing Down the DOM: Using `querySelector()` and `querySelectorAll()` on any element**

- The video emphasizes that `querySelector`, `querySelectorAll`, `getElementById`, and `getElementsByClassName` can be used on **any element** in the DOM, not just the `document`.
- This allows for more targeted selection within specific parts of the DOM tree.
- An example shows how to directly select the first child of the grandparent using `querySelector()`:

     ```javascript
     const childOne = grandparent.querySelector('.child');
     changeColor(childOne);
     ```

- Another example demonstrates selecting all children of the grandparent using `querySelectorAll()`:

     ```javascript
     const children = grandparent.querySelectorAll('.child');
     children.forEach(changeColor);
     ```

**7. Traversing Up the DOM: Getting the Parent using the `parentElement` property**

- The video explains how to move up the DOM tree from a child element to its parent using the `parentElement` property.
- An ID of `child-1` is added to one of the child elements in the HTML.
- The following code selects this child and then navigates up to its parent and grandparent, changing their colors:

     ```javascript
     const childOne = document.querySelector('#child-1');
     changeColor(childOne); // Changes color of the child

     const parent = childOne.parentElement;
     changeColor(parent); // Changes color of the parent

     const grandparent = parent.parentElement;
     changeColor(grandparent); // Changes color of the grandparent
     ```

- The video briefly mentions `parentNode` but recommends using `parentElement` to ensure that an element is always selected.

**8. Traversing Up the DOM: Using the `closest()` method**

- The `closest()` method is introduced as a way to traverse upwards to the **nearest ancestor** (parent, grandparent, etc.) that matches a specified CSS selector.
- It starts from the element on which it's called and moves up the tree.
- The following code demonstrates how to go from `childOne` directly to the grandparent by using `closest()` with the `.grandparent` selector:

     ```javascript
     const grandparent = childOne.closest('.grandparent');
     changeColor(grandparent);
     ```

- The video highlights that `closest()` stops at the first matching ancestor it finds.

**9. Traversing Sideways in the DOM: Getting Siblings using `nextElementSibling` and `previousElementSibling`**

- The final part of the video covers how to navigate between sibling elements (elements at the same level in the DOM tree).
- The `nextElementSibling` property returns the next sibling element in the DOM.
- The `previousElementSibling` property returns the previous sibling element.
- The following code shows how to select `childOne` and then get its next sibling (`childTwo`) and change its color:

     ```javascript
     const childOne = document.querySelector('#child-1');
     const childTwo = childOne.nextElementSibling;
     changeColor(childTwo);
     ```

- It also demonstrates how to go back to the previous sibling using `previousElementSibling`:

     ```javascript
     const childOneAgain = childTwo.previousElementSibling;
     changeColor(childOneAgain);
     ```

- The speaker mentions that these sibling selectors are used less frequently compared to the other methods discussed.

The video concludes by reiterating the importance of these DOM traversal skills in JavaScript development and promotes the creator's full JavaScript course.

## JavaScript Can Change HTML Content

### Add interactivity - example: `button` for theme switch

- An example could be to create a `button` in the `HTML` file to switch between light and dark themes. Then, you attach the `button` to JavaScript code that performs the actual theme switching.

In your HTML file, add a `button` element. Put the `button` inside of a `div` element.

```html
...
<ul>
  <li class="list">Add visual styles</li>
  <li class="list">Add light and dark themes</li>
  <li>Enable switching the theme</li>
</ul>
<div>
  <button class="btn">Dark</button>
</div>
...
```

## Event Listeners and Handlers in Javascript

Here are detailed notes with accompanying code examples based on the YouTube video transcript "Event Handling in Javascript | Event Listeners and Handlers in Javascript | Web Development #47" by Coding Shuttle by Anuj Bhaiya:

### **Introduction to DOM Events**

- An **event** allows you to write JavaScript code that reacts to certain situations.
- Events enable dynamic behavior on websites, such as responding to user interactions (clicks, keyboard input) or browser actions (page loading).
- Examples of events include:
  - User clicking on a mouse button.
  - A web page loading.
  - A form element's value being changed.
  - Mouse hovering over an element.
  - Keyboard input.

### **Two Ways to Capture Events**

The video discusses two primary ways to handle events in JavaScript:

1. **By using Event Handlers (Inline HTML Attributes)**
2. **By using Event Listeners (`addEventListener` method)**

#### **1. Event Handlers (Inline HTML Attributes)**

- JavaScript provides various kinds of **event handlers** that get triggered based on specific actions on HTML elements.
- These are typically defined as **attributes directly within the HTML elements**.
- Common event handler attributes include:
  - `onclick`: Triggered when an element is clicked.
  - `onload`: Triggered when an element (often `<body>`) has finished loading.
  - `onmouseover`: Triggered when the mouse pointer moves over an element.
  - `onmouseout`: Triggered when the mouse pointer moves out of an element.
  - `onmousemove`: Triggered when the mouse pointer is moving while it is over an element.
  - `onkeydown`: Triggered when a key is pressed down.
  - `onkeypress`: Triggered when a key is pressed and released (repeatedly if held down for most keys, but doesn't include all keys like Shift, Alt, Ctrl, or arrow keys).
  - `onkeyup`: Triggered when a key is released.
  - `onfocus`: Triggered when an element gains focus (e.g., when an input field is clicked into).
  - `onblur`: Triggered when an element loses focus.
  - `onchange`: Triggered when the value of an input element changes.
  - And many more.

- **Example: `onclick` event handler**

    ```html
    <div id="box1">Box 1</div>
    <script>
      function myfunction() {
        console.log("I was clicked");
      }
    </script>
    ```

    ```html
    <div id="box1" onclick="myfunction()">Box 1</div>
    ```

    When "Box 1" is clicked, the `myfunction()` in the JavaScript will be executed, and "I was clicked" will be logged to the console.

- **Example: `onmouseover` event handler**

    ```html
    <div id="box2">Box 2</div>
    <script>
      function mouseOverHandler() {
        console.log("Mouse over");
      }
    </script>
    ```

    ```html
    <div id="box2" onmouseover="mouseOverHandler()">Box 2</div>
    ```

    When the mouse cursor moves over "Box 2", "Mouse over" will be logged to the console.

- **Example: `onmousemove` event handler**

    ```html
    <div id="box2">Box 2</div>
    <script>
      function mouseMoveHandler() {
        console.log("Mouse move");
      }
    </script>
    ```

    ```html
    <div id="box2" onmousemove="mouseMoveHandler()">Box 2</div>
    ```

    While the mouse cursor is moving within "Box 2", "Mouse move" will be logged repeatedly to the console.

- **Example: Keyboard event handlers (`onkeydown`, `onkeypress`, `onkeyup`)**

    ```html
    <form>
      <input type="text" id="nameInput">
    </form>
    <script>
      function keyDownHandler() {
        console.log("Key Down");
      }
      function keyPressHandler() {
        console.log("Key Pressed");
      }
      function keyUpHandler() {
        console.log("Key Up");
      }
      const nameInput = document.getElementById('nameInput');
      nameInput.onkeydown = keyDownHandler;
      nameInput.onkeypress = keyPressHandler;
      nameInput.onkeyup = keyUpHandler;
    </script>
    ```

  - `onkeydown` is triggered when a key is initially pressed down.
  - `onkeypress` is triggered while the key is pressed (between `keydown` and `keyup`).
  - `onkeyup` is triggered when the key is released.

**2. Event Listeners (`addEventListener` method)**

- Event listeners provide a more flexible and recommended way to handle events.
- With event listeners, you define the event handling logic entirely within your JavaScript code, keeping it separate from the HTML structure.
- To use an event listener, you first need to **select the HTML element** you want to attach the event to.
- Then, you use the `addEventListener()` method on that element.
- The `addEventListener()` method takes **two mandatory arguments** and an optional third argument:
    1. The **type of event** to listen for (a string, e.g., `'click'`, `'mouseover'`, `'keydown'`). **Note that you do not use the `on` prefix here**.
    2. The **callback function** to be executed when the event occurs. This can be a named function or an anonymous arrow function.
    3. An **optional boolean value** indicating whether to use capturing or bubbling for event propagation (default is `false` for bubbling).

- **Example: `click` event listener**

    ```html
    <div id="box1">Box 1</div>
    <script>
      const box1 = document.getElementById('box1');
      box1.addEventListener('click', () => {
        console.log("Click by Event Listener");
      });
    </script>
    ```

    When "Box 1" is clicked, the arrow function will be executed, and "Click by Event Listener" will be logged to the console.

- **Benefits of using Event Listeners:**
  - **Separation of Concerns:** JavaScript logic is kept separate from HTML structure.
  - **Multiple Event Listeners:** You can attach multiple event listeners for the same event type to the same element. If you try to define multiple `onclick` attributes in HTML, the last one will override the previous ones.

    ```javascript
    const box1 = document.getElementById('box1');
    box1.addEventListener('click', () => {
      console.log("Click by Event Listener 1");
    });
    box1.addEventListener('click', () => {
      console.log("Click by Event Listener 2");
    });
    ```

    In this case, both "Click by Event Listener 1" and "Click by Event Listener 2" will be logged to the console when "Box 1" is clicked.

- **The Event Object:**
  - The callback function in an event listener can receive an **event object** as an argument. This object contains information about the event that occurred.
  - You can name this parameter as you like (e.g., `event`, `e`).
  - The event object provides various properties and methods related to the event, such as:
    - `target`: The element that triggered the event.
    - `clientX`, `clientY`: The horizontal and vertical coordinates of the mouse pointer at the time of the event.
    - `key`: The value of the key pressed during a keyboard event.
    - And much more.

  - **Example: Accessing the event object for a `click` event**

      ```javascript
      const box1 = document.getElementById('box1');
      box1.addEventListener('click', (event) => {
        console.log("Event Object:", event);
        console.log("Click X:", event.clientX);
        console.log("Click Y:", event.clientY);
      });
      ```

  - **Example: Accessing mouse coordinates on `mousemove`**

      ```javascript
      const box1 = document.getElementById('box1');
      box1.addEventListener('mousemove', (event) => {
        console.log("Mouse X:", event.clientX, "Mouse Y:", event.clientY);
      });
      ```

  - **Example: Accessing the pressed key on `keypress`**

      ```html
      <form>
        <input type="text" id="nameInput">
      </form>
      <script>
        const nameInput = document.getElementById('nameInput');
        nameInput.addEventListener('keypress', (event) => {
          console.log("Key Pressed:", event.key);
        });
      </script>
      ```

  - **Difference between `keypress` and `keydown` for special keys:**
    - `keypress` is mainly for character keys (letters, numbers, symbols). It might not fire for special keys like Backspace or arrow keys.
    - `keydown` tracks the physical keys pressed, so it will fire for all keys, including Backspace, arrow keys, Shift, Alt, Ctrl, etc.

  - **Example: Using `keydown` to capture all key presses**

    ```javascript
    const nameInput = document.getElementById('nameInput');
    nameInput.addEventListener('keydown', (event) => {
      console.log("Key Down:", event.key);
    });
    ```

  - **Example: `focus` event listener**

      ```html
      <form>
        <input type="text" id="nameInput">
      </form>
      <script>
        const nameInput = document.getElementById('nameInput');
        nameInput.addEventListener('focus', (event) => {
          console.log("Input focused:", event);
        });
      </script>
      ```

      The `focus` event is triggered when the input field gains focus. The `key` property might not be directly relevant for the `focus` event itself.

### **Event Propagation: Bubbling and Capturing**

- When an event occurs on an HTML element, it goes through a process called **event propagation**, which determines the order in which event listeners are triggered.
- There are two phases of event propagation:
    1. **Bubbling (Default Behavior)**: The event first triggers the handler on the **innermost** element that generated the event, and then "bubbles up" to the handlers on its parent elements in the DOM tree, all the way up to the `document`.
    2. **Capturing**: The event first triggers the handlers on the **outermost** ancestor elements (starting from the `document`) and then propagates down to the target element.

- **Example of Event Bubbling:**

    ```html
    <div id="container">
      <div id="box1">Box 1</div>
    </div>
    <script>
      const container = document.getElementById('container');
      const box1 = document.getElementById('box1');

      box1.addEventListener('click', () => {
        console.log("Click on Box");
      });

      container.addEventListener('click', () => {
        console.log("Click on Container");
      });
    </script>
    ```

    When you click on "Box 1", you will first see "Click on Box" logged, and then "Click on Container". This is because the click event on `box1` bubbles up to its parent, `container`.

- **Enabling Event Capturing:**
  - You can enable the capturing phase by passing `true` as the **third optional argument** to the `addEventListener()` method.
  - The default value of this argument is `false`, which means bubbling is used.

- **Example of Event Capturing:**

    ```html
    <div id="container">
      <div id="box1">Box 1</div>
    </div>
    <script>
      const container = document.getElementById('container');
      const box1 = document.getElementById('box1');

      box1.addEventListener('click', () => {
        console.log("Click on Box");
      });

      container.addEventListener('click', () => {
        console.log("Click on Container (Capturing)");
      }, true); // 'true' enables capturing for the container's listener
    </script>
    ```

    Now, when you click on "Box 1", you will first see "Click on Container (Capturing)" logged, and then "Click on Box". This is because the click event is first captured by the container's listener before reaching the target element (`box1`).

This detailed explanation and the accompanying code examples cover the key concepts of event handling in JavaScript as presented in the provided YouTube video transcript.

## Add an event handler

To make the `button` do something when you select it, you need an **event handler** in your JavaScript file. An **event handler** is a way to run a JavaScript `function` when an event happens on the page. For the `button`, let's add an event handler for the `click` event; the event handler function runs when the click event occurs.

1. Before you can add the event handler, you need a reference to the `button` element. In your JavaScript file, use `document.querySelector` to get the `button` reference.

    ```js
        const switcher = document.querySelector('.btn');
    ```

    `switcher` is now a reference to the button in the page.

2. Next, add the event handler for the `click` event. In the following code, you add a listener for the `click` event and define an event handler function that the browser executes when the `click` event occurs.

    ```js
    switcher.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
    });
    ```

    In the preceding code, you used the `toggle` method to modify the `<body>` element's `class` attribute. This method automatically adds or removes the `light-theme` and `dark-theme` classes.

3. However, the label for the `button` also needs to be updated to show the correct theme, so you need to add an `if statement` to determine the current theme, and update the `button` label.

Here's what your JavaScript code should look like with the **event handler** added:

```js
'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});
```

## JavaScript Output

### JavaScript Display Possibilities

JavaScript can "display" data in different ways:

- Writing into an HTML element, using `innerHTML` or `innerText`.
- Writing into the HTML output using `document.write()`.
- Writing into an alert box, using `window.alert()`.
- Writing into the browser console, using `console.log()`.

- - -

### Using innerHTML

To access an HTML element, you can use the `document.getElementById(id)` method.

Use the `id` attribute to identify the HTML element.

Then use the `innerHTML` property to change the HTML content of the HTML element:

#### Example 1

```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h1>My First Web Page</h1>  
<p>My First Paragraph</p>  
  
<p id\="demo"></p>  
  
<script>  
document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";  
</script>  
  
</body>  
</html>
```

> Note: Changing the innerHTML property of an HTML element is the most common way to display data in HTML.

- - -

### Using innerText

To access an HTML element, use the `document.getElementById(id)` method.

Then use the `innerText` property to change the inner text of the HTML element:

#### Example 2

```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h1>My First Web Page</h1>  
<p>My First Paragraph</p>  
  
<p id\="demo"></p>  
  
<script>  
document.getElementById("demo").innerText = "Hello World";  
</script>  
  
</body>  
</html>
```

>Note: Use innerHTML when you want to change an HTML element.
>Use innerText when you only want to change the plain text.

- - -

### Using document.write()

For testing purposes, it is convenient to use `document.write()`:

#### Example 3

```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h1>My First Web Page</h1>  
<p>My first paragraph.</p>  
  
<script>  
document.write(5 + 6);  
</script>  
  
</body>  
</html>
```

Using document.write() after an HTML document is loaded, will **delete all existing HTML**:

#### Example 4

```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h1>My First Web Page</h1>  
<p>My first paragraph.</p>  
  
<button type\="button" onclick\="document.write(5 + 6)">Try it</button>  
  
</body>  
</html>
```

The document.write() method should only be used for testing.

- - -

### Using window.alert()

You can use an alert box to display data:

#### Example 5

```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h1>My First Web Page</h1>  
<p>My first paragraph.</p>  
  
<script>  
window.alert(5 + 6);  
</script>  
  
</body>  
</html>
```

You can skip the `window` keyword.

In JavaScript, the `window` object is the global scope object. This means that variables, properties, and methods by default belong to the `window` object. This also means that specifying the `window` keyword is optional:

#### Example 6

```html
<!DOCTYPE html>  
<html>  
<body>  
  
<h1>My First Web Page</h1>  
<p>My first paragraph.</p>  
  
<script>  
alert(5 + 6);  
</script>  
  
</body>  
</html>
```

- - -

### JavaScript Print

JavaScript does not have any print object or print methods.

You cannot access output devices from JavaScript.

The only exception is that you can call the `window.print()` method in the browser to print the content of the current window.

#### Example 7

```html
<!DOCTYPE html>  
<html>  
<body>  
  
<button onclick\="window.print()">Print this page</button>  
  
</body>  
</html>
```

## DOM Manipulation

- The setup involves a blank HTML file linked to a JavaScript file.
- The JavaScript code will run and its effects will be visible on the blank page in the browser.

### Adding Elements to the Page

- **Selecting the element to append to**:
  - Example: `const body = document.body;` (selects the `body` element)

- **`append()` method**:
  - Used to add elements to a parent.
  - **Can append strings directly**:

      ```javascript
      body.append("hello world");
      ```

      Output: "hello world" will appear in the body.
  - **Can append multiple items at once** (strings and/or elements):

      ```javascript
      body.append("hello world", "to buy");
      ```

      Output: "hello worldto buy" will appear in the body.

- **`appendChild()` method**:
  - Similar to `append()` but with key differences.
  - **Cannot append strings directly**:

      ```javascript
      // This will cause an error:
      // body.appendChild("hello world");
      ```

      Error message: "appendChild requires a node and not a string".
  - **Can only append elements (nodes)**.
  - **Can only append one element at a time**.

      ```javascript
      // This is valid for appending an element:
      // const div = document.createElement('div');
      // body.appendChild(div);
      ```

- **Creating new elements**:
  - Use `document.createElement()` method, passing the tag name as a string.

      ```javascript
      const div = document.createElement('div');
      ```

      This creates a `div` element in memory but does not yet add it to the DOM.

- **Adding the created element to the page**:
  - Use `append()` or `appendChild()` on the parent element.

      ```javascript
      body.append(div); // Using append
      // body.appendChild(div); // Using appendChild
      ```

      This adds the `div` element as the last child of the `body`. Initially, it will be empty and not visible unless content is added.

### Modifying Text Content

- **`innerText` property**:
  - Used to set or get the textual content of an element.
  - Setting text:

      ```javascript
      div.innerText = "hello world";
      ```

      This sets the text inside the `div` to "hello world".
  - When getting text, it **only returns the text that is visible** on the page, taking CSS visibility into account.

- **`textContent` property**:
  - Used to set or get the textual content of an element.
  - Setting text:

      ```javascript
      div.textContent = "hello world 2";
      ```

      This sets the text inside the `div` to "hello world 2".
  - When getting text, it **returns the entire text content of the element**, including text from elements that are hidden with CSS (e.g., `display: none`), as well as all the spacing and indentation from the HTML.

- **Difference between `innerText` and `textContent`**:
  - Example HTML structure:

      ```html
      <div>
        <span>hello</span>
        <span style="display: none;">buy</span>
      </div>
      ```

  - Selecting the `div`:

      ```javascript
      const divElement = document.querySelector('div');
      ```

  - `console.log(divElement.textContent);` will output:

      ```bash
        hello
        buy
      ```

      (including spacing and the text from the hidden span).
  - `console.log(divElement.innerText);` will output:

      ```bash
      hello
      ```

      (only the visible text).

### Modifying HTML Content

- **`innerHTML` property**:
  - Used to set or get the HTML content of an element as a string.
  - Setting HTML:

      ```javascript
      div.innerHTML = "<strong>hello world 2</strong>";
      ```

      This will render "hello world 2" in bold inside the `div`. The HTML tags are interpreted and rendered.
  - **Security concern**: Using `innerHTML` with user-generated content can lead to security vulnerabilities (e.g., cross-site scripting - XSS) because malicious scripts can be injected.

- **Safer alternative to `innerHTML` for dynamic content**:
  - Create elements using `document.createElement()` and set their `innerText` before appending.

      ```javascript
      const strong = document.createElement('strong');
      strong.innerText = "hello world 2";
      div.append(strong);
      ```

      This achieves the same visual result (bold text) without the security risks of directly injecting HTML strings.

- `append()` can be used on any element to add children to it.

### Removing Elements from the DOM

- **`remove()` method**:
  - Called on the element itself to remove it from the DOM entirely.

      ```javascript
      const spanBye = document.querySelector('#bye');
      spanBye.remove();
      ```

      This will remove the element with the ID "bye" from the page. The element is deleted from the HTML structure. The element can still be referenced in JavaScript and potentially added back later.

- **`removeChild()` method**:
  - Called on the parent element, and you need to pass the child element you want to remove as an argument.

      ```javascript
      const divElement = document.querySelector('div');
      const spanHi = document.querySelector('#hi');
      divElement.removeChild(spanHi);
      ```

      This will remove the `spanHi` element (which is a child of `divElement`) from the DOM.

- The video author generally prefers using `remove()` as it is considered simpler when you have direct access to the element you want to remove.

### Modifying Element Attributes

- **`getAttribute()` method**:
  - Used to get the value of an attribute of an element, passing the attribute name as a string.

      ```javascript
      const spanHi = document.querySelector('#hi');
      console.log(spanHi.getAttribute('id')); // Output: "hi"
      console.log(spanHi.getAttribute('title')); // Output: "hello" (if the title attribute exists)
      ```

- **Accessing attributes directly as properties**:
  - Many standard HTML attributes are also available as properties directly on the DOM element object.

      ```javascript
      console.log(spanHi.id); // Output: "hi"
      console.log(spanHi.title); // Output: "hello" (if the title attribute exists)
      ```
  
  - Generally, if an attribute can be accessed with `getAttribute()`, it's also available as a direct property. `getAttribute()` can be useful for attributes that don't have a direct property.

- **`setAttribute()` method**:
  - Used to set or change the value of an attribute on an element, taking the attribute name and the new value as arguments.

      ```javascript
      spanHi.setAttribute('id', 'new-id');
      spanHi.setAttribute('title', 'new title');
      ```

- **Setting attributes directly as properties**:
  - Attributes can also be set directly as properties on the DOM element object.

      ```javascript
      spanHi.id = 'another-new-id';
      spanHi.title = 'another new title';
      ```

- **`removeAttribute()` method**:
  - Used to remove an attribute from an element, passing the attribute name as a string.

      ```javascript
      spanHi.removeAttribute('title');
      spanHi.removeAttribute('id');
      ```

### Working with Data Attributes

- Data attributes are custom attributes that start with `data-` followed by the attribute name (e.g., `data-test`, `data-longer-name`).

- **Accessing data attributes using the `dataset` property**:
  - The `dataset` property of a DOM element provides access to all its data attributes as properties of an object.
  - Data attribute names are converted to camelCase when accessed via `dataset`.

      ```html
      <span id="hi" data-test="this is a test" data-longer-name="random text">Hello</span>
      ```

      ```javascript
      const spanHi = document.querySelector('#hi');
      console.log(spanHi.dataset); // Output: DOMStringMap { test: "this is a test", longerName: "random text" }
      console.log(spanHi.dataset.test); // Output: "this is a test"
      console.log(spanHi.dataset.longerName); // Output: "random text"
      ```

- **Setting data attributes using the `dataset` property**:
  - Properties can be added or modified on the `dataset` object, and they will be reflected as `data-` attributes in the HTML (with camelCase names converted to hyphenated).

      ```javascript
      spanHi.dataset.newName = 'hi';
      // The HTML will now have: <span id="hi" data-test="this is a test" data-longer-name="random text" data-new-name="hi">Hello</span>
      ```

### Manipulating Classes

- **`classList` property**:
  - Provides a read-only DOMTokenList representing the class attribute of an element.
  - Offers methods to add, remove, toggle, and check for classes.

      ```html
      <span id="hi" class="hi1 hi2">Hello</span>
      ```

      ```javascript
      const spanHi = document.querySelector('#hi');
      console.log(spanHi.classList);
      // Output: DOMTokenList ["hi1", "hi2"]
      ```

- **`classList.add()`**:
  - Adds one or more class names to the element's class list.

      ```javascript
      spanHi.classList.add('new-class');
      // Class attribute becomes: "hi1 hi2 new-class"
      ```

- **`classList.remove()`**:
  - Removes one or more class names from the element's class list.

      ```javascript
      spanHi.classList.remove('hi1');
      // Class attribute becomes: "hi2 new-class"
      ```

- **`classList.toggle()`**:
  - Toggles a class name; if the class exists, it's removed, and if it doesn't, it's added.

      ```javascript
      spanHi.classList.toggle('hi2'); // Removes 'hi2' if it exists, adds it if it doesn't
      spanHi.classList.toggle('hi3'); // Adds 'hi3' if it doesn't exist
      ```
  
  - Can also take a boolean argument to force the class to be added (if `true`) or removed (if `false`).

      ```javascript
      spanHi.classList.toggle('another-class', true); // Ensures 'another-class' is added
      spanHi.classList.toggle('yet-another', false); // Ensures 'yet-another' is removed
      ```

### Modifying Inline Styles

- The `style` property of a DOM element is an object representing the element's inline styles.
- CSS properties can be accessed and set as properties of this `style` object.
- **CSS property names are converted to camelCase** in JavaScript (e.g., `background-color` becomes `backgroundColor`).
  
  ```javascript
  const spanHi = document.querySelector('#hi');
  spanHi.style.color = 'red'; // Sets the text color to red
  spanHi.style.backgroundColor = 'red'; // Sets the background color to red
  ```

## String & Array Methods

Here are **some of the most commonly chained methods**, grouped by **data type**:

### 🔤 **String methods**

| Method | Description |
|--------|-------------|
| `.toLowerCase()` | Converts to lowercase |
| `.toUpperCase()` | Converts to uppercase |
| `.trim()` | Removes whitespace from both ends |
| `.replace()` | Replaces part of the string |
| `.split()` | Splits string into array |
| `.slice()` | Extracts part of a string |

**Example:**

```javascript
"  Hello World  ".trim().toUpperCase().split(" ");
// → ["HELLO", "WORLD"]
```

### 🧮 **Array methods**

These are often chained for transformations.

| Method | Description |
|--------|-------------|
| `.map()` | Transforms each element |
| `.filter()` | Filters elements by condition |
| `.reduce()` | Reduces array to a single value |
| `.sort()` | Sorts elements |
| `.reverse()` | Reverses the array |
| `.forEach()` | Executes a function for each element |
| `.join()` | Joins elements into a string |
| `.slice()` | Extracts a portion of the array |

**Example:**

```javascript
[1, 2, 3, 4, 5]
  .filter(n => n % 2 === 0)     // [2, 4]
  .map(n => n * 10)             // [20, 40]
  .join(", ");                  // "20, 40"
```

### 🧵 **Useful combos**

#### String to array and back

```javascript
"one-two-three".split("-").map(w => w.toUpperCase()).join(" ");
// "ONE TWO THREE"
```

#### Array clean-up

```javascript
["  hello", "world ", " js  "]
  .map(s => s.trim().toUpperCase());
// ["HELLO", "WORLD", "JS"]
```

### 🔄 Pro tip: Chain safely

If you're unsure if a value exists, use **optional chaining**:

```javascript
user?.name?.toUpperCase()
```

## Javascript Loops

In JavaScript, `for...in` and `for...of` are both used to iterate over things, but they serve different purposes and should be used in different contexts. Here's a breakdown:

### 🔁 `for...in` loop

- **What it does**: Iterates over the **enumerable properties (keys)** of an object.
- **Use it for**: Objects (when you need the keys).
- **Returns**: Property names (strings).

#### Example for...in

```javascript
const user = { name: "Alice", age: 30 };

for (let key in user) {
  console.log(key);        // name, age
  console.log(user[key]);  // Alice, 30
}
```

#### ⚠️ Caution

- Avoid using `for...in` on arrays unless you specifically want keys/indexes as strings.
- It also loops through **inherited properties**, which might not always be desirable.

### 🔁 `for...of` loop

- **What it does**: Iterates over the **values** of an iterable object (like arrays, strings, Maps, Sets).
- **Use it for**: Arrays, strings, Sets, Maps, NodeLists, etc.
- **Returns**: The values themselves.

#### Example for..of

```javascript
const numbers = [10, 20, 30];

for (let num of numbers) {
  console.log(num); // 10, 20, 30
}
```

#### Another example with string

```javascript
const word = "hello";

for (let char of word) {
  console.log(char); // h, e, l, l, o
}
```

### ✅ Summary: Which to use when?

| Use Case                          | Use `for...in`        | Use `for...of`       |
|----------------------------------|------------------------|-----------------------|
| Looping over object properties   | ✅ Yes                 | 🚫 No                |
| Looping over array values        | 🚫 Not recommended     | ✅ Yes               |
| Looping over string characters   | 🚫 No                  | ✅ Yes               |
| Working with Maps, Sets, etc.    | 🚫 No                  | ✅ Yes               |
| Need key/index (e.g., for objects)| ✅ Yes                 | 🚫 No                |

If you're working on arrays or anything iterable: **use `for...of`**.

If you're working on plain objects and need keys: **use `for...in`**.

## Callback Functions

Based on the source, **callback functions are functions that are passed as arguments to other functions**. They are not different from regular functions in terms of syntax; you can use regular function syntax, anonymous functions, or arrow functions. The key difference lies in how they are used. Instead of being called directly in the main part of your code, a callback function is expected to be executed at a later point by the function it was passed into.

Here are some examples of callback functions from the source:

- **Example 1 (Longer Form):**

    ```javascript
    function mainFunction(randomNumber, shouldCall, callback) {
      let result = randomNumber;
      if (shouldCall) {
        result = callback(randomNumber); // Executing the callback function
      }
      return result;
    }

    function myCallback(num) {
      return num * 2;
    }

    let output = mainFunction(20, true, myCallback); // Passing 'myCallback' as an argument
    ```

    In this example, `myCallback` is the callback function passed to `mainFunction`. `mainFunction` then executes `myCallback` if `shouldCall` is true.

- **Example 2 (Simplified Anonymous Function):**

    ```javascript
    function mainFunction(randomNumber, shouldCall, callback) {
      let result = randomNumber;
      if (shouldCall) {
        result = callback(randomNumber);
      }
      return result;
    }

    let output = mainFunction(20, true, function(num) { return num * 2; }); // Passing an anonymous function
    ```

    Here, an anonymous function is directly passed as the callback.

- **Example 3 (Arrow Function):**

    ```javascript
    function mainFunction(randomNumber, shouldCall, callback) {
      let result = randomNumber;
      if (shouldCall) {
        result = callback(randomNumber);
      }
      return result;
    }

    let output = mainFunction(20, true, (num) => { return num * 2; }); // Passing an arrow function
    ```

    This demonstrates passing an arrow function as a callback.

- **Example 4 (Simplified Arrow Function):**

    ```javascript
    function mainFunction(randomNumber, shouldCall, callback) {
      let result = randomNumber;
      if (shouldCall) {
        result = callback(randomNumber);
      }
      return result;
    }

    let output = mainFunction(20, true, num => num * 2); // Even simpler arrow function
    ```

    This is a more concise way of writing the arrow function callback when it has a single parameter and a single return statement.

**Why are callback functions used?**

According to the source, callback functions enable two main things:

- **Reusability:** Callback functions allow you to reuse the same function for a variety of use cases by passing in different callback functions that define specific logic or transformations. The `map` array method is a prime example of this. The `map` method iterates over an array, and you provide a callback function that specifies how each element in the array should be transformed. This allows the `map` method to be used for doubling numbers, extracting the first letter of strings, or any other transformation you can define in the callback.

    For instance, using the `map` method with different callbacks:

    ![alt text](image.png)

    As seen with the `map` function, the built-in functions in JavaScript often use callbacks heavily, allowing for flexible and reusable code. Other array methods like `filter`, `findIndex`, and `forEach` also utilize callback functions to achieve different functionalities based on the provided logic.

- **Asynchronous Programming:** Callbacks are also used to handle code that does not run immediately, which is known as asynchronous programming. In situations where an operation might take some time (e.g., fetching data from a server or a database), you can provide a callback function that will be executed once the asynchronous operation is complete. This prevents the program from freezing or waiting idly for the operation to finish and allows other code to run in the meantime. The source mentions that asynchronous callbacks, promises, and async/await are different ways to handle asynchronous JavaScript code, and these will be discussed later in the series.

## Some Array Methods

`forEach`, `map`, `filter`, `reduce`, and `findIndex` are **array methods** in JavaScript. They are used to **iterate**, **transform**, or **analyze** arrays.

### 1️⃣ `forEach()`

**Purpose:** Executes a function once per array element (used for side effects, not for returning values).

```js
array.forEach((element, index, array) => {
  // code
});
```

- `element` ✅ – Current item (required)
- `index` ❌ – Index of item (optional)
- `array` ❌ – The full array (optional)

**Returns:** `undefined` (doesn’t return a new array)

**Example:**

```js
[1, 2, 3].forEach((num, idx) => console.log(idx, num));
```

### 2️⃣ `map()`

**Purpose:** Transforms each element and returns a **new array**.

```js
const newArray = array.map((element, index, array) => {
  return newValue;
});
```

- Same params as `forEach`
- **Must return a value** from the function

**Example:**

```js
const doubled = [1, 2, 3].map(n => n * 2); // [2, 4, 6]
```

### 3️⃣ `filter()`

**Purpose:** Returns a new array with elements that **pass the test (return true)**.

```js
const filtered = array.filter((element, index, array) => {
  return condition;
});
```

**Example:**

```js
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
```

### 4️⃣ `reduce()`

**Purpose:** Reduces array to a single value (e.g. sum, product, object, etc.).

```js
const result = array.reduce((accumulator, currentValue, index, array) => {
  return updatedAccumulator;
}, initialValue);
```

- `accumulator` ✅ – Value carried across iterations
- `currentValue` ✅ – Current element
- `initialValue` ✅ – Starting value for the accumulator

**Example:**

```js
const sum = [1, 2, 3, 4].reduce((acc, val) => acc + val, 0); // 10
```

### 5️⃣ `findIndex()`

**Purpose:** Returns the **index** of the **first** element that satisfies the condition. Returns `-1` if none found.

```js
const index = array.findIndex((element, index, array) => {
  return condition;
});
```

**Example:**

```js
const idx = [5, 12, 8, 130].findIndex(num => num > 10); // 1 (index of 12)
```

### 📌 Summary Table

| Method      | Returns       | Use case                   |
|-------------|---------------|----------------------------|
| `forEach`   | `undefined`   | Side effects, logging      |
| `map`       | `new array`   | Transform values           |
| `filter`    | `new array`   | Keep some elements         |
| `reduce`    | Any value     | Accumulate into 1 value    |
| `findIndex` | Number        | Find index of first match  |

## JavaScript Destructuring

JavaScript destructuring allows you to unpack values from arrays or properties from objects into distinct variables. This feature simplifies the process of extracting data from complex structures.

### Object Destructuring

You can extract properties from an object and assign them to variables with matching names:

```javascript
const person = { firstName: "John", lastName: "Doe", age: 50 };
let { firstName, lastName } = person;
```

The order of properties doesn't matter, but the variable names must match the property names.

### Array Destructuring

Arrays can be destructured by position:

```javascript
const numbers = [10, 20, 30, 40, 50];
const [a, b, ...rest] = numbers;
```

Here, `a` is `10`, `b` is `20`, and `rest` is `[30, 40, 50]`.

### Object Property Alias

Example

```javascript
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName : name} = person;
```

### String Destructuring

One use for destructuring is unpacking string characters.

Example

```js
// Create a String
let name = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = name;
```

### Array Position Values

We can pick up values from specific index locations of an array:

Example

```js
// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// Destructuring
let {[0]:fruit1 ,[1]:fruit2} = fruits;
```

### Swapping Variables

Destructuring provides a concise way to swap variable values:

```javascript
let x = 1, y = 2;
[x, y] = [y, x];
```

After execution, `x` is `2` and `y` is `1`.

### Destructuring in Loops (Maps)

You can destructure key-value pairs directly in loops:

```javascript
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const [key, value] of fruits) {
  console.log(`${key} is ${value}`);
}
```

This will output:

```js
apples is 500
bananas is 300
oranges is 200
```

### Notes

- Destructuring is non-destructive; it doesn't alter the original object or array.
- When destructuring objects, variable names must match the property names.
- The rest operator (`...`) can be used to collect remaining elements in array destructuring.

For more details and interactive examples, visit the [W3Schools JavaScript Destructuring page](https://www.w3schools.com/JS/js_destructuring.asp).
