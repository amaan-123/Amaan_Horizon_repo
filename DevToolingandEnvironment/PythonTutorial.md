# Getting Started with Python in VS Code

This tutorial guides you through setting up Visual Studio Code (VS Code) for Python development, covering environment setup, code execution, debugging, and package management.

## Prerequisites

- **Python 3**: Ensure Python 3 is installed on your system.
- **Visual Studio Code**: Install the latest version of VS Code.
- **Python Extension for VS Code**: Install the Python extension from the VS Code Marketplace.

## Install a Python Interpreter

Depending on your operating system, install Python as follows:

- **Windows**: Download from [python.org](https://www.python.org/downloads/).
- **macOS**: Use Homebrew:

    ```sh
    brew install python3
    ```

- **Linux**: Use the package manager:

    ```sh
    sudo apt-get install python3
    ```

## Start VS Code in a Workspace Folder

1. **Create and Open a Folder**:
    - Open a terminal and execute:

        ```sh
        mkdir hello
        cd hello
        code .
        ```

    - Alternatively, use VS Code's menu: `File` > `Open Folder`.

## Create a Virtual Environment

1. **Open Command Palette**:
    - Press `Ctrl+Shift+P` (`Cmd+Shift+P` on macOS).
2. **Create Environment**:
    - Type `Python: Create Environment` and select it.
    - Choose `Venv` as the environment type.
    - Select the desired Python interpreter.
3. **Activate the Environment**:
    - VS Code will automatically activate the environment.
    - Ensure the environment is selected by checking the interpreter in the status bar.

## Create a Python Source Code File

1. **Create New File**:
    - In the Explorer pane, click `New File` and name it `hello.py`.
2. **Add Code**:
    - Enter the following:

        ```python
        msg = "Roll a dice!"
        print(msg)
        ```

3. **Save the File**:
    - Press `Ctrl+S` (`Cmd+S` on macOS).

## Run Python Code

1. **Run the Script**:
    - Click the `Run Python File` button in the top-right corner.
    - Alternatively, right-click in the editor and select `Run Python File in Terminal`.
2. **Run Selections**:
    - Highlight code lines, then press `Shift+Enter` or right-click and choose `Run Selection/Line in Python Terminal`.
3. **Start REPL**:
    - Open Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
    - Type `Python: Start REPL` and press Enter.

## Configure and Run the Debugger

1. **Set a Breakpoint**:
    - Click in the gutter next to the line number where you want to pause execution.
2. **Start Debugging**:
    - Press `F5` to start debugging.
    - If prompted, select `Python File` as the debug configuration.
3. **Control Execution**:
    - Use the debug toolbar to continue (`F5`), step over (`F10`), step into (`F11`), or step out (`Shift+F11`).
4. **Inspect Variables**:
    - Hover over variables to see their current values.
    - Use the `Debug Console` to evaluate expressions.

## Install and Use Packages

1. **Open Terminal**:
    - Open Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
    - Type `Terminal: Create New Terminal` and press Enter.
2. **Install Packages**:
    - For example, to install `numpy`:

        ```sh
        # macOS/Linux
        python3 -m pip install numpy

        # Windows
        py -m pip install numpy
        ```

3. **Use the Package**:
    - In `hello.py`, add:

        ```python
        import numpy as np
        print(np.random.randint(1, 7))
        ```

    - Save and run the script to see the output.

## Next Steps

- **Explore Web Frameworks**:
  - Learn about [Django](https://code.visualstudio.com/docs/python/tutorial-django), [Flask](https://code.visualstudio.com/docs/python/tutorial-flask), or [FastAPI](https://code.visualstudio.com/docs/python/tutorial-fastapi) in VS Code.
- **Enhance Your Python Development**:
  - Utilize features like linting, testing, and Jupyter notebooks within VS Code.

For more detailed information, refer to the [official tutorial](https://code.visualstudio.com/docs/python/python-tutorial)
