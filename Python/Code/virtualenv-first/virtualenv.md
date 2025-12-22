## **Introduction to Python Dependencies**

- **Dependencies** are third-party libraries (like **Flask** or **Requests**) that developers install so they do not have to rewrite existing functionality.
- Because libraries change over time, a project might require a **specific version** of a library to function correctly.
- If you update a library globally, your existing code might break due to changes in how the library works.
- **Virtual environments** solve this by separating the dependencies of one project from another, allowing for different versions of the same library to coexist on one machine.

## **Core Components of Virtual Environments**

- A virtual environment consists of two primary parts: a specific **Python version** and a **folder for third-party libraries**.
- The Python version is established during creation and **cannot be changed** later; to use a different version, you must create a new environment.
- Having isolated library folders allows developers to switch between projects with different requirements simply by switching environments.

## **Python Imports and Search Logic**

- Python uses the **`sys.path`** list to determine where to look for libraries when an `import` statement is executed.
- When importing a module, Python searches the paths in `sys.path` **sequentially**.
- The search starts with the current project folder and then moves through other system paths.
- As soon as Python finds the library in one of these folders, it **stops searching** and imports it.
- If the library is not found in any of the listed folders, Python raises an **`ImportError`**.

## **Creating and Structure of Virtual Environments**

- To create a virtual environment, you must have **Python 3.3 or later** installed.
- Use the following command in your terminal, where `venv_name` is the name of the folder you wish to create:

```bash
python -m venv venv_name
# I did: py -m venv .venv
```

- Common names for these folders include `venv`, `.venv`, or a custom name like `my_env`.
- Inside the created folder, there are several key items:
  - A **Library folder** containing the packages specific to that environment.
  - A **Scripts** (Windows) or **bin** (Mac/Linux) folder.
  - A **copy of the Python binary**, which is the specific executable used by that environment.

## **Activating the Virtual Environment**

- **Activation** is the process of telling your console/terminal to use the virtual environment's Python and library folder instead of the system defaults.
- The console uses a variable called **`PATH`** to find programs; activation modifies this variable to prioritize the virtual environment's folder.

  ```bash
  # Before activation, PATH points to system Python
  echo "$PATH" # Mac/Linux
  echo %PATH% # Windows
  ```

- **Activation Commands:**
  - **Mac/Linux:**

    ```bash
    source venv_name/bin/activate
    ```

  - **Windows:**

    ```bash
    <!-- git bash -->
    source venv_name/Scripts/activate
    <!-- or  -->
    . .venv/Scripts/activate
    ```

    ```cmd
    <!-- Command Prompt -->
    venv_name\Scripts\activate.bat
    ```

- Once activated, the environment name typically appears in **brackets** at the start of your command prompt.
- When you run **`pip install`** while the environment is active, the library is installed only within that specific virtual environment.
- To return to system defaults, you use the **`deactivate`** command, which reverts the console configuration.

## **Dependency Management and Versioning**

- It is standard practice to track project dependencies in a file called **`requirements.txt`**.
- This file allows other developers to install the exact same libraries needed to run the project.
- To install all libraries listed in a requirements file, use:

```bash
pip install -r requirements.txt
```

- **Semantic Versioning** is used to manage library updates, following a **Major.Minor.Patch** format.
- Developers often specify version constraints to ensure compatibility:
  - **Exact version:** `flask == 1.0.0`.
  - **Version range:** `flask >= 1.0.2, < 2.0` (this installs the latest minor/patch versions but prevents a major version jump).
- **Major versions** often contain breaking changes, while **minor and patch versions** typically offer improvements without breaking existing code.

***

**Analogy for Understanding:**
Think of a virtual environment like a **dedicated toolbox** for a specific project. Instead of having one giant, messy shed where every tool you've ever bought is thrown together (the global system), you create a small, organized box that only contains the specific wrenches and screwdrivers needed for one task. This ensures that if you upgrade to a heavy-duty power drill for a new project, it doesn't accidentally damage the delicate work you're doing on an older one.

## Doubts

### Q) virtual environments help in python

My pwd is "/c/Users/User Name/OneDrive - Institute/MOD Documents/SOFTWARES/ALL_Git_Repos/Amaan_Horizon_repo/Python/Code/virtualenv-first". I create a virtual environment using command: `py -m venv .venv`. But, when I try: `source .venv/bin/activate` in git bash from my pwd, it doesn't work. However, when I try: `.venv\Scripts\activate.bat` from my pwd, it works. Correct command for bash?

### A) **Why this happens (root cause)**

On **Windows**, a Python virtual environment is created with **different activation scripts for different shells**.

- `bin/activate` → **Unix-like systems** (Linux, macOS)
- `Scripts/activate.*` → **Windows**

**Git Bash** is a Unix-like shell *running on Windows*, so the paths and script types matter.

---

## Correct command for **Git Bash on Windows**

From your current directory:

```bash
source .venv/Scripts/activate
```

or equivalently:

```bash
. .venv/Scripts/activate
```

### Why your attempts behaved as they did

| Command                         | Result  | Reason                                   |
| ------------------------------- | ------- | ---------------------------------------- |
| `source .venv/bin/activate`     | ❌ Fails | `bin/` does not exist on Windows         |
| `.venv\Scripts\activate.bat`    | ✅ Works | Batch file executed by Windows `cmd.exe` |
| `source .venv/Scripts/activate` | ✅ Works | Bash-compatible activation script        |

---

## What files actually exist in your venv (Windows)

After `py -m venv .venv`, Windows creates:

```text
.venv/
 ├── Scripts/
 │    ├── activate
 │    ├── activate.bat
 │    ├── activate.ps1
 │    └── python.exe
 └── Lib/
```

- **Git Bash → `Scripts/activate`**
- **Command Prompt → `activate.bat`**
- **PowerShell → `activate.ps1`**

---

## Quick mental model (important)

> **Virtual environments are OS-specific, not shell-specific — activation scripts adapt to the shell.**

So:

- Same venv
- Different activation command per shell

---

## Verification (always do this)

After activation:

```bash
which python
```

Expected output (similar):

```text
/c/Users/.../virtualenv-first/.venv/Scripts/python
```

And:

```bash
python --version
```

---

## Summary

✔ Correct command for **Git Bash on Windows**:

```bash
source .venv/Scripts/activate
```

✔ Your environment creation command was **correct**
✔ Your understanding of venv is **on track**

If you want, next we can cover:

- why `py -m venv` is preferred over `virtualenv`
- when to commit or ignore `.venv`
- how this differs on Linux/macOS

### Q) For learning, I ran the command: `pip install requests pandas flask` and now I want to uninstall all from my virtual environment, deactivate my virtual environment, then create a requirements.txt & requirements-dev.txt, then start my virtual environment & install them

Is my thought process above correct for learning? Provide the steps with any correction required.

### A) **Why your approach makes sense (learning logic)**

Yes — your thought process is **correct and good for learning**.

What you are trying to learn implicitly is:

- isolation (venv owns dependencies),
- reproducibility (`requirements*.txt` describe state),
- lifecycle (install → remove → recreate → reinstall).

One **small correction**:
You should **generate `requirements.txt` *before* uninstalling**, otherwise you lose the exact list/version set that was installed.

---

## Correct learning-oriented workflow (step by step)

### 0️⃣ Activate the virtual environment (if not already)

Git Bash (Windows):

```bash
source .venv/Scripts/activate
```

Verify:

```bash
which python
```

---

### 1️⃣ Install packages (what you already did)

```bash
pip install requests pandas flask
```

Learning point:
These packages now exist **only inside `.venv`**, not globally.

---

### 2️⃣ Capture current state → `requirements.txt`

**Do this before uninstalling**

```bash
pip freeze > requirements.txt
```

This records:

- direct dependencies (`requests`, `pandas`, `flask`)
- transitive dependencies (e.g., `urllib3`, `werkzeug`, etc.)
- exact versions → reproducible installs

---

### 3️⃣ (Optional but educational) Inspect the file

```bash
cat requirements.txt
```

Learning point:
You’ll see **more packages than you installed** — dependency trees in action.

---

### 4️⃣ Uninstall everything from the virtual environment

```bash
pip uninstall -r requirements.txt -y
```

Verify environment is clean:

```bash
pip list
```

You should see only:

- `pip`
- `setuptools`

---

### 5️⃣ Deactivate the virtual environment

```bash
deactivate
```

Learning point:
This only detaches the shell — it does **not delete** the venv.

---

## Split into prod vs dev dependencies (important concept)

For now, your packages are **runtime dependencies**, not dev tools.

### 6️⃣ Create dependency files

**requirements.txt**

```txt
requests
pandas
flask
```

**requirements-dev.txt**

```txt
-r requirements.txt
```

Later, you’ll add things like:

```txt
pytest
black
flake8
```

Learning point:

- `requirements.txt` → app runs
- `requirements-dev.txt` → developer productivity

---

### 7️⃣ Re-activate the virtual environment

```bash
source .venv/Scripts/activate
```

---

### 8️⃣ Reinstall dependencies (clean, intentional)

```bash
pip install -r requirements-dev.txt
```

Verify:

```bash
pip list
```

---

## Alternative (even better for learning): recreate venv

For completeness, the **cleanest reset** is:

```bash
deactivate
rm -rf .venv
py -m venv .venv
source .venv/Scripts/activate
pip install -r requirements-dev.txt
```

Learning point:
This simulates a **new machine / CI server**.

---

## Final evaluation of your thought process

| Step                      | Correct? | Adjustment     |
| ------------------------- | -------- | -------------- |
| Install packages          | ✅        | —              |
| Uninstall everything      | ⚠️       | Freeze first   |
| Deactivate venv           | ✅        | —              |
| Create requirements files | ✅        | Split prod/dev |
| Reinstall from files      | ✅        | Use `-r`       |

---

## Key takeaway (conceptual)

> **Virtual environments isolate.
> Requirements files describe.
> Recreating proves correctness.**

If you want, next we can:

- add version pinning rules (`~=`, `==`, `>=`)
- compare `pip freeze` vs curated requirements
- introduce `pip-tools` (`pip-compile`) for best practice
