# Form Submission & Display Data

## Doubts

1) Are there any restrictions/rules for keeping both .addEventListener('submit', function) and button type in index.html as "submit"?
2) what can .preventdefault() be used with - only parameters of functions?
3) can we assign any HTML element to a variable? for example in this case in display.js:
const displayDiv = document.getElementById('displayData');
4) explain localstorage(what else is there?) as in "localStorage.setItem('formData', JSON.stringify(formData));" and the general syntax here
5) do we only use id.innerHTML (or other options are there?) and do I understand correctly that ${object.property} is the syntax used inside "displayDiv.innerHTML = ``"?
6) If I open the website from the display.html page, previous form submission details appear when opened in browser. Although I feel users might not see this glitch but still how to ensure a fresh form always appears. You mentioned a) "localStorage.removeItem('formData');" and b) "localStorage.clear();" Will this work?
7) Where should I apply the localStorage.clear() code in the context files? Also, what is window & what are it's methods & properties?

### 1. **Restrictions/Rules for Using `.addEventListener('submit', function)` with Button Type as "submit"**

- **No Conflict**: Using both `.addEventListener('submit', function)` and a button with `type="submit"` is valid and commonly used. The `submit` event is triggered when the form is submitted, either by clicking a button with `type="submit"` or pressing Enter in a form field.
- **Key Rule**: If you use `event.preventDefault()` in the event listener, it prevents the default form submission behavior (e.g., reloading the page or navigating to the `action` URL). This is useful when you want to handle the form submission via JavaScript (e.g., saving data to `localStorage` or making an AJAX request).
- **Best Practice**: Ensure that the form has a `submit` event listener at the `<form>` level (not just the button) to handle all submission triggers consistently.

---

### 2. **What Can `.preventDefault()` Be Used With?**

- `.preventDefault()` can be used with any event object (`event`) that has a default browser behavior you want to prevent. Common use cases include:
  - **Form Submission**: Prevent the default form submission (`submit` event).
  - **Anchor Links**: Prevent navigation when clicking a link (`click` event on `<a>` tags).
  - **Keyboard Events**: Prevent default actions like scrolling or typing (`keydown`, `keypress`, `keyup` events).
  - **Mouse Events**: Prevent default actions like dragging or selecting text (`mousedown`, `mouseup`, `dragstart` events).
- **Key Rule**: `.preventDefault()` is called on the `event` object passed to the event listener function. It cannot be used arbitrarily without an event object.

---

### 3. **Can We Assign Any HTML Element to a Variable?**

- Yes, you can assign any HTML element to a variable using DOM methods like:
  - `document.getElementById('id')`
  - `document.querySelector('selector')`
  - `document.querySelectorAll('selector')`
  - `document.getElementsByClassName('className')`
  - `document.getElementsByTagName('tagName')`
- In your case:

  ```javascript
  const displayDiv = document.getElementById('displayData');
  ```

  This assigns the `<div>` element with `id="displayData"` from the DOM to the `displayDiv` variable. You can then manipulate this element (e.g., change its `innerHTML`, styles, etc.).
- **Key Rule**: Ensure the element exists in the DOM before trying to access it. If the element is not found, the variable will be `null`.

---

### 4. **Explanation of `localStorage`**

`localStorage` is a web storage API provided by the browser that allows you to store key-value pairs in a user's browser. The data persists even after the browser is closed and reopened (unlike `sessionStorage`, which only lasts for the session).

#### General Syntax

- **Set an item**: `localStorage.setItem(key, value)`
  - Example:

    ```javascript
    localStorage.setItem('formData', JSON.stringify(formData));
    ```

    - `key`: A string representing the name of the data.
    - `value`: The data to store (must be a string; objects/arrays need to be stringified using `JSON.stringify()`).

- **Get an item**: `localStorage.getItem(key)`
  - Example:

    ```javascript
    const data = JSON.parse(localStorage.getItem('formData'));
    ```

  - Retrieves the value associated with the `key`. If the value was stringified, you need to parse it back into its original form using `JSON.parse()`.

- **Remove an item**: `localStorage.removeItem(key)`
  - Example:

    ```javascript
    localStorage.removeItem('formData');
    ```

- **Clear all items**: `localStorage.clear()`
  - Example:

    ```javascript
    localStorage.clear();
    ```

- **Check the number of stored items**: `localStorage.length`
  - Example:

    ```javascript
    console.log(localStorage.length);
    ```

#### Use Case in Your Example

```javascript
localStorage.setItem('formData', JSON.stringify(formData));
```

- `formData` is likely an object containing form inputs.
- `JSON.stringify(formData)` converts the object into a string so it can be stored in `localStorage`.

---

### 5. **Using `innerHTML` and Template Literals**

#### a) **Do we only use `id.innerHTML`?**

No, there are other ways to manipulate the DOM besides `innerHTML`. Some alternatives include:

- **`textContent`**: Sets or gets the text content of an element (ignores HTML tags).

  ```javascript
  element.textContent = "Hello, World!";
  ```

- **`innerText`**: Similar to `textContent`, but it respects CSS styles (e.g., `display: none`).

  ```javascript
  element.innerText = "Hello, World!";
  ```

- **`appendChild`**: Adds a new child node to an element.

  ```javascript
  const newElement = document.createElement('p');
  newElement.textContent = "Hello, World!";
  element.appendChild(newElement);
  ```

- **`insertAdjacentHTML`**: Inserts HTML at a specific position relative to the element.

  ```javascript
  element.insertAdjacentHTML('beforeend', '<p>Hello, World!</p>');
  ```

#### b) **Understanding `${object.property}` in Template Literals**

The syntax `${object.property}` is used inside template literals (backticks `` ` ` ``) to embed JavaScript expressions.

Example:

```javascript
const user = { name: "Amaan", age: 25 };
displayDiv.innerHTML = `<p>Name: ${user.name}</p><p>Age: ${user.age}</p>`;
```

- `${user.name}` dynamically inserts the value of the `name` property.
- `${user.age}` dynamically inserts the value of the `age` property.

This is a cleaner and more readable way to construct HTML strings compared to concatenation.

---

### 6. Clearing Form Data

Yes, using `localStorage.removeItem('formData');` or `localStorage.clear();` will work to ensure that the form data is cleared and a fresh form appears. However, the choice between the two depends on your specific requirements:

#### 6.1 **`localStorage.removeItem('formData');`**

- This will only remove the specific key (`formData`) from `localStorage`.
- Use this if you only want to clear the data related to the form while keeping other stored data intact.

Example:

```javascript
window.onload = function () {
    localStorage.removeItem('formData'); // Clear only the form data
};
```

---

#### 6.2 **`localStorage.clear();`**

- This will remove **all keys and values** stored in `localStorage`.
- Use this if you want to completely reset `localStorage` for the website.

Example:

```javascript
window.onload = function () {
    localStorage.clear(); // Clear all localStorage data
};
```

---

#### **Best Practice for a Fresh Form**

To ensure a fresh form always appears when the page is loaded, you can clear the relevant `localStorage` data in the `window.onload` event. Here's an example:

```html
<script>
    window.onload = function () {
        localStorage.removeItem('formData'); // Clear only the form data
    };
</script>
```

This ensures that the `formData` is cleared every time the page is loaded, and users will always see a fresh form.

---

#### **Alternative Approach**

If you want to keep the `formData` in `localStorage` for other purposes but still show a fresh form, you can reset the form fields programmatically without clearing `localStorage`:

```javascript
window.onload = function () {
    const form = document.getElementById('myForm'); // Replace with your form's ID
    if (form) {
        form.reset(); // Resets all form fields to their default values
    }
};
```

This approach ensures the form is fresh without affecting the stored data in `localStorage`.

---

### 7.1 **Where to Apply `localStorage.clear()`**

To ensure a fresh form always appears when the user opens the display.html page, you can apply `localStorage.clear()` or `localStorage.removeItem('formData')` in the display.js file. Specifically, you should add it **after displaying the data** so that the data is cleared only after it has been shown to the user.

Here’s how you can modify the display.js file:

```javascript
// At the start of the script
console.log('display.js loaded successfully');

// Retrieve data from localStorage
const formData = JSON.parse(localStorage.getItem('formData'));
console.log('Retrieved form data from localStorage:', formData);

// Display the data
const displayDiv = document.getElementById('displayData');
if (formData) {
    console.log('Form data exists, displaying it on the page');
    displayDiv.innerHTML = `
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Date of Birth:</strong> ${formData.dob}</p>
        <p><strong>Course:</strong> ${formData.course}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
    `;

    // Clear the form data from localStorage after displaying it
    localStorage.removeItem('formData'); // Use this to clear only the form data
    console.log('Form data cleared from localStorage');
} else {
    console.log('No form data found in localStorage');
    displayDiv.innerHTML = '<p>No data found. Please submit the form first.</p>';
}
```

#### **Why Place It Here?**

- The data is displayed to the user first.
- After displaying, the data is cleared so that when the user revisits the display.html page, it will not show old data.

---

### 7.2 **What is `window`?**

The `window` object is the global object in the browser environment. It represents the browser window or tab that contains a web page. All global JavaScript variables, functions, and objects are properties of the `window` object.

#### **Common Methods of `window`**

1. **`alert()`**: Displays an alert dialog box.

   ```javascript
   window.alert('Hello, World!');
   ```

2. **`confirm()`**: Displays a confirmation dialog box.

   ```javascript
   const result = window.confirm('Are you sure?');
   console.log(result); // true if OK, false if Cancel
   ```

3. **`prompt()`**: Displays a prompt dialog box to get user input.

   ```javascript
   const name = window.prompt('What is your name?');
   console.log(name);
   ```

4. **`setTimeout()`**: Executes a function after a specified delay.

   ```javascript
   window.setTimeout(() => {
       console.log('This runs after 2 seconds');
   }, 2000);
   ```

5. **`setInterval()`**: Executes a function repeatedly at specified intervals.

   ```javascript
   const intervalId = window.setInterval(() => {
       console.log('This runs every 1 second');
   }, 1000);
   ```

6. **`clearTimeout()` / `clearInterval()`**: Stops a timeout or interval.

   ```javascript
   const timeoutId = setTimeout(() => console.log('Timeout'), 5000);
   window.clearTimeout(timeoutId); // Cancels the timeout
   ```

7. **`open()`**: Opens a new browser window or tab.

   ```javascript
   window.open('https://example.com', '_blank');
   ```

8. **`close()`**: Closes the current browser window (only works if the window was opened via `window.open()`).

   ```javascript
   window.close();
   ```

9. **`location.reload()`**: Reloads the current page.

   ```javascript
   window.location.reload();
   ```

---

#### **Common Properties of `window`**

1. **`window.document`**: Represents the DOM (Document Object Model) of the current page.

   ```javascript
   console.log(window.document.title); // Logs the page title
   ```

2. **`window.location`**: Provides information about the current URL and allows navigation.

   ```javascript
   console.log(window.location.href); // Logs the current URL
   window.location.href = 'https://example.com'; // Redirects to another page
   ```

3. **`window.navigator`**: Provides information about the browser.

   ```javascript
   console.log(window.navigator.userAgent); // Logs the browser's user agent string
   ```

4. **`window.history`**: Provides access to the browser's session history.

   ```javascript
   window.history.back(); // Goes back to the previous page
   window.history.forward(); // Goes forward to the next page
   ```

5. **`window.innerWidth` / `window.innerHeight`**: Gets the width and height of the browser's viewport.

   ```javascript
   console.log(window.innerWidth, window.innerHeight);
   ```

6. **`window.localStorage` / `window.sessionStorage`**: Provides access to web storage APIs.

   ```javascript
   window.localStorage.setItem('key', 'value');
   console.log(window.localStorage.getItem('key'));
   ```

---

### **Summary**

- Add `localStorage.clear()` or `localStorage.removeItem('formData')` in display.js after displaying the data.
- The `window` object is the global object in the browser, providing methods and properties to interact with the browser environment.
