# Learning Fetch API

> Source: <https://www.youtube.com/watch?v=Oive66jrwBs>

## Overview

This text is from a video introducing the **Fetch API**, a modern approach for making asynchronous HTTP requests in JavaScript, contrasting it with the older **AJAX and XHR** methods. The video's creator emphasizes the importance of understanding both older and newer standards. The tutorial demonstrates how to use Fetch to retrieve data from a **local text file, a local JSON file, and an external API (JSONPlaceholder)**, covering both GET and POST requests. The explanation includes practical coding examples, showing how to implement event listeners, handle promises with `.then()` and `.catch()`, and incorporate **ES6 features like arrow functions and template literals** for cleaner code. Finally, the video briefly shows how to style the application with **Bootstrap** to enhance its visual appearance.

## Mind-Map image of project (right-click image > open image > zoom!)

![alt text](Fetch_API_mindmap.png)

## Learn here - Fetch API Introduction

This project explores the Fetch API, a modern standard for making asynchronous HTTP requests in the browser. It provides a cleaner and more powerful alternative to the older `XMLHttpRequest` (XHR) object used with AJAX.

### Why Learn Fetch API?

While `XMLHttpRequest` and AJAX are still widely used and important to understand (especially for compatibility and working with existing codebases), Fetch API offers a simpler and more modern approach. Learning newer standards like Fetch is recommended after grasping the older concepts.

This project covers:

- Fetching data from a text file asynchronously.
- Fetching data from a local JSON file.
- Fetching data from an external API using a GET request.
- Making a POST request to an external API.
- Using modern JavaScript (ES6) features like arrow functions and template strings.

### Setup

**Tools Used:**

- **Visual Studio Code (VS Code):** The editor used in the video.
- **Live Server:** A VS Code extension that provides a local development server with live reloading. Other options like Atom Live Server, XAMPP, or `npm install -g live-server` can also be used.

**Project Structure:**
Create a folder (e.g., `fetch-sandbox`) and inside it:

- `index.html`: The main HTML file.
- `sample.txt`: A simple text file for the first fetch example.
- `users.json`: A local JSON file for the second fetch example.

**Initial `index.html` Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch API Sandbox</title>
</head>
<body>
    <h1>Fetch API Sandbox</h1>

    <!-- Buttons and Form will go here -->

    <div id="output"></div>

    <script src="main.js"></script>
</body>
</html>
```

*(Note: The video uses an inline script tag for simplicity in the initial setup, but a separate `main.js` file is recommended for larger projects. The code below will assume an inline script tag within `index.html` as shown in the video.)*

An empty `div` with the ID `output` is created to display fetched data in the browser.

### Fetching a Text File

This section demonstrates fetching content from a local text file (`sample.txt`).

**`sample.txt` Content:**

```text
I am a sample text file
```

**Adding a Button and Event Listener:**
A button with the ID `get-text` is added to `index.html`. An event listener is attached to this button to trigger the `getText` function on click.

```html
<button id="get-text">Get Text</button>
```

```html
<script>
    document.getElementById('get-text').addEventListener('click', getText);

    function getText() {
        // Fetch logic will go here
        console.log(123); // Initial test
    }
</script>
```

**Implementing the `getText` Function:**
The `fetch` function is called with the file name (`sample.txt`). **Fetch returns a Promise**. Promises are placeholders for asynchronous responses and are handled using `.then()`.

The first `.then()` receives the response object. We can console log this to see details like the status code (200 means OK).

```javascript
function getText() {
    fetch('sample.txt')
    .then(function(res) {
        console.log(res); // Logs the response object
    });
}
```

To get the *actual text data* from the response, we use the `.text()` method on the response object. This method also returns a promise, so we chain another `.then()`.

```javascript
function getText() {
    fetch('sample.txt')
    .then(function(res) {
        return res.text(); // Returns a promise with the text
    })
    .then(function(data) {
        console.log(data); // Logs the actual text data
    });
}
```

**Using Arrow Functions (ES6):**
Arrow functions can make the code cleaner.

```javascript
function getText() {
    fetch('sample.txt')
    .then(res => res.text()) // Arrow function shorthand
    .then(data => console.log(data)); // Arrow function shorthand
}
```

**Displaying Data in the DOM:**
To insert the fetched text into the `output` div, select the element by its ID and set its `innerHTML`.

```javascript
function getText() {
    fetch('sample.txt')
    .then(res => res.text())
    .then(data => {
        document.getElementById('output').innerHTML = data; // Insert data into div
    });
}
```

**Error Handling:**
Use `.catch()` at the end of the promise chain to catch any errors during the fetch or processing.

```javascript
function getText() {
    fetch('sample.txt')
    .then(res => res.text())
    .then(data => {
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err)); // Catch and log errors
}
```

### Fetching a JSON File

This section demonstrates fetching data from a local JSON file (`users.json`) and displaying it.

**`users.json` Content:**

```json
[
    {
        "id": 1,
        "name": "Rick Grimes",
        "email": "rick@grimes.com"
    },
    {
        "id": 2,
        "name": "Daryl Dixon",
        "email": "daryl@dixon.com"
    },
    {
        "id": 3,
        "name": "Michonne",
        "email": "michonne@michonne.com"
    }
]
```

**Adding Button and Event Listener:**
Add a button with ID `get-users` and an event listener calling `getUsers`.

```html
<button id="get-users">Get JSON</button>
```

```html
<script>
    document.getElementById('get-text').addEventListener('click', getText);
    document.getElementById('get-users').addEventListener('click', getUsers); // New event listener

    function getText() {
        // ... (previous getText function)
    }

    function getUsers() {
        // Fetch JSON logic will go here
        console.log('get users'); // Initial test
    }
</script>
```

**Implementing the `getUsers` Function:**
Fetch the `users.json` file. Since the response is JSON, use `res.json()` instead of `res.text()`.

```javascript
function getUsers() {
    fetch('users.json')
    .then(res => res.json()) // Use .json() for JSON response
    .then(data => {
        console.log(data); // Logs the parsed JSON array
    })
    .catch(err => console.log(err));
}
```

**Displaying JSON Data:**
Loop through the array of user objects and build HTML content to display. The video uses `.forEach()` and template strings (backticks `` ` ``). Template strings allow for multi-line strings and embedding variables using `${variable}`.

```javascript
function getUsers() {
    fetch('users.json')
    .then(res => res.json())
    .then(data => {
        let output = '<h2>Users</h2>'; // Start building output HTML
        data.forEach(function(user) { // Loop through the users array
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `; // Use template strings to build list items
        });
        document.getElementById('output').innerHTML = output; // Insert built HTML into div
    })
    .catch(err => console.log(err));
}
```

### Fetching from an External API (GET Request)

This section uses the JSONPlaceholder API to fetch a list of posts.

**Adding Button and Event Listener:**
Add a button with ID `get-posts` and an event listener calling `getPosts`.

```html
<button id="get-posts">Get API Data</button>
```

```html
<script>
    document.getElementById('get-text').addEventListener('click', getText);
    document.getElementById('get-users').addEventListener('click', getUsers);
    document.getElementById('get-posts').addEventListener('click', getPosts); // New event listener

    function getText() {
        // ...
    }

    function getUsers() {
        // ...
    }

    function getPosts() {
        // Fetch API data logic will go here
        console.log('get posts'); // Initial test
    }
</script>
```

**Implementing the `getPosts` Function:**
Fetch the API endpoint (`https://jsonplaceholder.typicode.com/posts`). The response is also JSON, so `res.json()` is used again. Loop through the array of posts and display the title and body.

```javascript
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts') // Fetch from external URL
    .then(res => res.json())
    .then(data => {
        let output = '<h2>Posts</h2>'; // Start building output HTML
        data.forEach(function(post) { // Loop through the posts array
            output += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `; // Use template strings for post structure
        });
        document.getElementById('output').innerHTML = output; // Insert built HTML
    })
    .catch(err => console.log(err));
}
```

### Making a POST Request

This section demonstrates sending data to the API using a POST request to create a new post.

**Adding a Form:**
Add a form with the ID `add-post`. Include input fields for title and body, and a submit button.

```html
<hr> <!-- Separator -->
<form id="add-post">
    <div>
        <input type="text" id="title" placeholder="Title">
    </div>
    <div>
        <textarea id="body" placeholder="Body"></textarea>
    </div>
    <input type="submit" value="Submit">
</form>
```

**Adding Event Listener for Form Submission:**
Add an event listener to the form for the `submit` event. Call the `addPost` function. **Use `e.preventDefault()`** inside the function to stop the browser's default form submission behavior (which would cause a page reload).

```html
<script>
    // ... previous event listeners

    document.getElementById('add-post').addEventListener('submit', addPost); // New event listener for form submit

    function getText() {
        // ...
    }

    function getUsers() {
        // ...
    }

    function getPosts() {
        // ...
    }

    function addPost(e) {
        e.preventDefault(); // Prevent default form submission
        console.log(123); // Initial test
    }
</script>
```

**Implementing the `addPost` Function:**
Get the values from the input fields. Call `fetch` with the API URL, but this time pass a second argument: an object containing configuration for the request.

**POST Request Configuration:**

- `method`: Set to `'POST'`.
- `headers`: An object specifying request headers. Essential headers for sending JSON include `Accept: 'application/json'` and `Content-Type: 'application/json'`.
- `body`: The data to send. For JSON, this must be a string. Use `JSON.stringify()` to convert a JavaScript object into a JSON string.

```javascript
function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value; // Get title value
    let body = document.getElementById('body').value; // Get body value

    fetch('https://jsonplaceholder.typicode.com/posts', { // Fetch URL
        method: 'POST', // Specify POST method
        headers: {
            'Accept': 'application/json, text/plain, */*', // Accept header
            'Content-Type': 'application/json' // Content-Type header
        },
        body: JSON.stringify({ title: title, body: body }) // Convert JS object to JSON string for the body
    })
    .then(res => res.json()) // Parse the response as JSON
    .then(data => console.log(data)) // Log the response data (the newly "created" post)
    .catch(err => console.log(err));
}
```

The API will respond with the data it received, including a new ID (e.g., 101), even though it doesn't actually save the post to its database in this case.

### Styling with Bootstrap

The video optionally adds Bootstrap for basic styling to make the sandbox look better.

**Adding Bootstrap CDN:**
Include the Bootstrap CSS link in the `<head>` section of `index.html`.

```html
<head>
    <!-- ... other head tags -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <title>Fetch API Sandbox</title>
</head>
```

**Adding Bootstrap Classes:**
Wrap the main content in a `div` with class `container`. Add various Bootstrap classes to elements for styling:

- `h1`: `display-4`, `mb-4` (margin-bottom)
- Buttons container: `d-flex` (flexbox)
- Buttons: `btn`, `btn-primary`, `btn-secondary`, `btn-success`, `btn-warning`, `mr-4` (margin-right)
- Form divs: `form-group`
- Form inputs/textarea: `form-control`
- Submit button: `btn`, `btn-secondary`
- Output for users (UL): `list-group`, `mb-3`
- Output for users (LI): `list-group-item`
- Output for posts (DIV): `card`, `card-body`, `mb-3`
- Output headings (h2/h3): `mb-4` (if desired)

The final HTML structure with classes applied would look something like this (excluding the content inside the form, etc.):

```html
<body>
    <div class="container"> <!-- Bootstrap container -->
        <h1 class="display-4 mb-4">Fetch API Sandbox</h1> <!-- Styled heading -->

        <div class="d-flex"> <!-- Flexbox container for buttons -->
            <button id="get-text" class="btn btn-primary mr-4">Get Text</button> <!-- Styled button -->
            <button id="get-users" class="btn btn-success mr-4">Get JSON</button> <!-- Styled button -->
            <button id="get-posts" class="btn btn-warning mr-4">Get API Data</button> <!-- Styled button -->
        </div>

        <hr>

        <div id="output">
            <!-- Fetched data will be inserted here -->
        </div>

        <hr>

        <form id="add-post">
            <div class="form-group"> <!-- Form group for input -->
                <input type="text" id="title" placeholder="Title" class="form-control"> <!-- Styled input -->
            </div>
            <div class="form-group"> <!-- Form group for textarea -->
                <textarea id="body" placeholder="Body" class="form-control"></textarea> <!-- Styled textarea -->
            </div>
            <input type="submit" value="Submit" class="btn btn-secondary"> <!-- Styled submit button -->
        </form>
    </div>

    <script>
        // ... JavaScript code
    </script>
</body>
```

### Conclusion

This project provides a basic introduction to the Fetch API covering GET and POST requests. The Fetch API is powerful and can handle other request types like PUT and DELETE. Exploring public APIs or creating your own API can provide further practice.
