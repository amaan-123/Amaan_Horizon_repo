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
