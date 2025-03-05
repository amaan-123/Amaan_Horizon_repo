# Ignore folders/files from git tracking using using .gitignore

To instruct Git to ignore a specific folder and all its contents, you can utilize a `.gitignore` file. Here's how to achieve this:

1. **Create or Open the `.gitignore` File:**
   - If a `.gitignore` file doesn't already exist in your repository's root directory, create one:

     ```bash
     touch .gitignore
     ```

   - If it exists, open it using your preferred text editor.

2. **Add the Folder to Be Ignored:**
   - To ignore a folder named `example_folder` and all its contents, add the following line to the `.gitignore` file:

     ```bash
     example_folder/
     ```

     The trailing slash ensures that Git recognizes it as a directory.

3. **Save and Close the `.gitignore` File:**

## Important Considerations

- **Ignoring Tracked Files:** The `.gitignore` file only affects untracked files. If `example_folder` or its contents have already been committed to the repository, Git will continue to track them despite the `.gitignore` entry. To stop tracking these files, you need to remove them from the repository while preserving them locally:

  ```bash
  git rm -r --cached example_folder/
  ```

  Then, commit the changes:

  ```bash
  git commit -m "Stop tracking example_folder"
  ```

- **Nested `.gitignore` Files:** You can place `.gitignore` files in specific subdirectories to apply rules only within those directories. The patterns in these `.gitignore` files are relative to their location.

- **Global Ignore Rules:** For patterns that should apply to all repositories on your system (e.g., OS-specific files like `.DS_Store`), you can set up a global `.gitignore` file:

  ```bash
  git config --global core.excludesFile ~/.gitignore_global
  ```

  Then, add your global ignore patterns to the `~/.gitignore_global` file.

## Example: Ignoring a Folder Except for a Specific Subfolder

If you want to ignore all contents of a folder except for a particular subfolder, you can use the following approach in your `.gitignore` file:

```bash
# Ignore all files in 'main' folder
main/*

# Except for 'subfolder2'
!main/subfolder2/

# Ensure all contents within 'subfolder2' are included
!main/subfolder2/**
```

This setup tells Git to ignore everything in the `main` directory except for `subfolder2` and its contents.
