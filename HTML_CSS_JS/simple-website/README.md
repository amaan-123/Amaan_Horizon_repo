# Simple Website Project

This project demonstrates the creation of a basic web page with HTML, the application of styles using CSS, the creation of themes, and the addition of support for switching between themes using JavaScript. The project follows the tutorial exercise from [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/get-started-with-web-development/).

## Objectives

- Create a basic web page using HTML.
- Apply styles to page elements using CSS.
- Create themes using CSS.
- Add support for switching between themes using JavaScript.
- Inspect the website using browser developer tools.

## Project Structure

```bash
simple-website/
├── app.js
├── index.html
└── main.css
```

### index.html

This file contains the HTML structure of the web page. It includes a task list and a button to switch themes.

### main.css

This file contains the CSS styles for the web page. It defines three themes (`light-theme`, `dark-theme`, and `medium-theme`) and styles for various elements.

### app.js

This file contains the JavaScript code to switch between the themes when the button is clicked. It toggles the themes in the following order: light, dark and medium.

## How to Run

1. Open index.html in a web browser.
2. Click the button to switch between themes.
3. Use browser developer tools to inspect and debug the website.

## Doubt: What are classList & className as seen in "document.body.class----?

In the app.js code, `classList` and `className` are properties of the `document.body` object, which represents the `<body>` element of the HTML document. Here's what they do:

### 1. **`classList`**

- `classList` is a **DOMTokenList** object that provides methods to manipulate the classes of an element.
- It allows you to add, remove, toggle, or check for the presence of specific classes without affecting other classes on the element.

   **Key Methods of `classList`:**
- `add(className)`: Adds a class.
- `remove(className)`: Removes a class.
- `toggle(className)`: Toggles a class (adds if absent, removes if present).

>- `toggle()` adds the class if it doesn't exist or removes it if it does.
The issue when using the `toggle` method is that it doesn't ensure **mutual exclusivity** between the themes (`light-theme`, `dark-theme`, and `medium-theme`). The `toggle` method simply adds a class if it doesn't exist or removes it if it does, without considering the state of other classes. This can lead to multiple theme classes being applied simultaneously, like `<body class="light-theme">` becomes `<body class="dark-theme medium-theme">`.

- `contains(className)`: Checks if a class exists.

---

### 2. **`className`**

- `className` is a **string** that represents the complete list of classes applied to an element, separated by spaces.
- It can be used to get or set the entire class attribute of an element.
- In the code:

     ```javascript
     const className = document.body.className;
     if (className == "light-theme") {
         this.textContent = "Dark";
     } else {
         this.textContent = "Light";
     }
     ```

- `className` retrieves the current class(es) of the `<body>` element as a string.
- The `if` statement checks if the class is `"light-theme"` and updates the button text accordingly.

**Key Differences from `classList`:**

- `className` is a string, so modifying it replaces all existing classes.
- `classList` is more flexible and safer for adding/removing individual classes without affecting others.

---

### Summary

- Use `classList` for **manipulating individual classes** (e.g., adding, removing, toggling).
- Use `className` for **retrieving or setting the entire class list** as a string.

## Learn More

For more details on the concepts used in this project, refer to the [Microsoft Learn tutorial](https://learn.microsoft.com/en-us/training/modules/get-started-with-web-development/).
