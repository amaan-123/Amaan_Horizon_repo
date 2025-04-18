# HTML Notes

## Form Attributes

- `method` and `action` are **form-level attributes** (used inside the `<form>` tag).
- `name`, `placeholder`, `required`, and `type` are **input-level attributes** (used in elements like `<input>`, `<textarea>`, etc.).

---

### 🔹 1. `method` (Form Attribute) — [**MOST IMPORTANT**]

#### ➤ What it does1

It defines **how the form data is sent** to the server when submitted.

#### ➤ Common values

- `"GET"` – appends the form data to the URL (as query parameters)
- `"POST"` – sends the data in the HTTP body (more secure and flexible)

#### ➤ When to use what

| Method | Description | Use Case |
|--------|-------------|----------|
| `GET` | Data visible in URL, limited size | Search forms, filters |
| `POST` | Data sent in request body, hidden from URL, allows file uploads | Login, signup, contact forms, anything sensitive |

#### ➤ Example1

```html
<form method="POST">
  <input type="text" name="username">
</form>
```

---

### 🔹 2. `action` (Form Attribute)

#### ➤ What it does2

It defines **where** (which URL or server route) the form data is sent when submitted.

- If omitted, the form submits to the **current page**.
- Can be a relative URL (`/submit-form`) or full URL (`https://example.com/submit`).

#### ➤ Example2

```html
<form method="POST" action="/submit-form">
  <input type="text" name="email">
</form>
```

This means when the user clicks submit, the browser sends form data using POST to `/submit-form`.

---

### 🔹 3. `type` (Input Attribute)

#### ➤ What it does3

Defines the kind of input the user can enter. Some popular types:

- `text` – plain input
- `email` – validates email format
- `password` – hides input
- `submit` – creates a submit button
- `checkbox`, `radio`, `file`, `date`, `number` – special input types

#### ➤ Example3

```html
<input type="email" name="userEmail">
```

---

### 🔹 4. `name` (Input Attribute)

#### ➤ What it does4

- This is the **key name** used to identify the value when the form is submitted.
- Without `name`, the input is **not sent** to the server.

#### ➤ Example4

```html
<input type="text" name="username">
```

If the user enters `John`, the form sends: `username=John`

---

### 🔹 5. `placeholder` (Input Attribute)

#### ➤ What it does5

Shows a **hint or greyed-out text** inside the input box to guide the user.

- Doesn’t submit any data
- Disappears once the user starts typing

#### ➤ Example5

```html
<input type="text" placeholder="Enter your name">
```

---

### 🔹 6. `required` (Input Attribute)

#### ➤ What it does6

- Makes the input **mandatory**
- Browser prevents form submission if this field is empty

#### ➤ Example6

```html
<input type="email" required>
```

---

### 🔄 Quick Summary Table

| Attribute | Applies To | Role |
|-----------|------------|------|
| `method` | `<form>` | How to send data (`GET` or `POST`) |
| `action` | `<form>` | Where to send data (URL or route) |
| `name` | `<input>`, etc. | Key used to identify form data |
| `type` | `<input>` | Type of input (text, email, etc.) |
| `placeholder` | `<input>`, `<textarea>` | Helper text inside field |
| `required` | `<input>`, etc. | Makes input mandatory |

---
