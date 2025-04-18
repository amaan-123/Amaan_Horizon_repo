# Directory Structure and Code Overview

This directory contains files related to a project demonstrating **DOM manipulation** and **event handling** in JavaScript. Below is an overview of the key files:

1. **`index.html`**:  
   - The main HTML file that sets up the structure of the webpage.
   - Contains a `div` with three child elements (`box-1`, `box-2`, and `box-3`) styled as boxes.
   - The `<form action="#">` tag  with an input field (`id="nameInput"`) for user interaction defines a form element in HTML.

      - **`action="#"`**: The `#` in the `action` attribute means that the form will not send data to a server or external URL. Instead, it will reload the current page and scroll to the top (or to an element with an `id` matching the fragment identifier, if specified).

        In this case, the form is being used for client-side purposes, such as capturing user input and handling it with JavaScript, rather than submitting data to a server.

   - Links to style.css for styling and script.js for JavaScript functionality.

2. **`style.css`**:  
   - Provides styling for the container, boxes, and form.
   - Uses Flexbox for layout and alignment.
   - Adds a light blue background to the form and centers the boxes.

3. **`script.js`**:  
   - Contains JavaScript code to demonstrate various **event listeners** for DOM elements.
   - Key event listeners include:
     - **Click Events**:
       - Multiple `click` event listeners are attached to `box-1`. Each listener logs different messages or event details to the console.
     - **Mouse Events**:
       - A `mousemove` event listener on `box-2` logs the mouse's `X` and `Y` coordinates as it moves over the box.
     - **Keyboard Events**:
       - The input field (`nameInput`) has `keypress`, `keydown`, and `keyup` event listeners to log key interactions.
     - **Focus Events**:
       - A `focus` event listener on the input field logs when the field gains focus.
