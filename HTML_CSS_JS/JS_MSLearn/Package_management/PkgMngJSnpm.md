# **Package Management in JavaScript (Using npm)**

## **1. Initializing a JavaScript Project with npm**

To use packages in a JavaScript application, we first need to create a `package.json` file. This can be done using the npm CLI command:

```sh
npm init -y
```

This generates a `package.json` file, which manages dependencies and scripts for the project.

## **2. Installing a Development Dependency (Prettier)**

To install Prettier as a development dependency:

```sh
npm install --save-dev prettier
```

- The `--save-dev` flag ensures that `prettier` is added to `devDependencies` in `package.json`.
- A `node_modules/` folder is created, where all installed dependencies are stored.

## **3. Configuring a Script to Use Prettier**

Modify `package.json` to rename the default "test" script:

```json
"scripts": {
  "format": "prettier --write *.js"
}
```

Now, to format JavaScript files, run:

```sh
npm run format
```

This executes Prettier and applies formatting changes.

## **4. Installing and Using Express**

To use the `express` package in `index.js`, install it first:

```sh
npm install express
```

- This adds `express` under `dependencies` in `package.json`.
- Express helps create web servers and APIs.

**Running the Express Server:**

```sh
node index.js
```

This starts a simple web server listening on port 3000 and responding with "Hello World!".

When you run:

```bash
node index.js
```

…and see:

```bash
Example app listening at http://localhost:3000
```

your Node.js app (likely using Express) has **started a web server** and is now **actively listening** for requests. It doesn't stop automatically — it keeps running so it can respond to browser/API requests.

---

### ✅ How to Exit/Stop It

In the **terminal**, press:

```bash
Ctrl + C
```

> This **keyboard shortcut** sends an interrupt signal (`SIGINT`) to Node.js, telling it to shut down the process gracefully.

---

## **5. Creating a Start Script for Convenience**

Modify `package.json` under `"scripts"`:

```json
"scripts": {
  "start": "node index.js",
  "format": "prettier --write *.js"
}
```

Now, instead of running `node index.js`, use:

```sh
npm start
```

(Note: `"start"` is a special script name, so `npm run start` is not needed.)

## **6. Using npm Scripts in VS Code**

- In the **primary sidebar** of VS Code, find the **NPM SCRIPTS** section.
- You can execute scripts from here just like in the terminal.

## **7. Installing dotenv for Environment Variables**

To install `dotenv`:

```sh
npm install dotenv
```

- This package allows configuration management, including sensitive values.
- For example, instead of hardcoding:

  ```js
  const port = 3000;
  ```

  Use an environment variable:

  ```js
  const port = process.env.PORT;
  ```

- To set its value, use `dotenv`.

## **8. Setting Up dotenv**

1. At the beginning of `index.js`, add:

   ```js
   require("dotenv").config();
   ```

2. Create a `.env` file and add:

   ```ini
   PORT=5000
   ```

3. Now, when the application runs, `dotenv` reads `.env` and maps values to environment variables.
4. Restart the server, and it now listens on port 5000.

## **9. Ignoring Sensitive Files in Git**

Since `.env` contains sensitive information, it should not be committed to a Git repository. Update `.gitignore` to exclude:

```bash
.env
node_modules/
```

---

These steps cover the entire package management workflow: setting up a project, managing dependencies, running scripts, and handling configurations securely. 🚀
