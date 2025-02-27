# **Companion for *03_GitHub and Git Bash/Resources/02_Working-with-Git-Bash.md***

## Some of the commmands that needed more explanation/familiarity before usage will be explained here

## **Part-1: Basics of working with Git Bash**

## *Session-1: Basics using Local Repo*

### Add / Remove a Local Repo

- **`git init`**  
  - When you run git init, it initializes a new Git repository in the specified directory.
  - If the directory does not already exist, `git init` will create it along with the `.git` folder inside it.

- **`rm -rf .git`**  
  This command removes the `.git` folder, effectively deleting all Git history and untracking the project.  
  - `rm` = Remove  
  - `-r` = Recursive (deletes directories and their contents)  
  - `-f` = Force (deletes without asking for confirmation)  
  - This action **cannot be undone**, so use it carefully!  

### Unstage files

- **`git reset readme2.txt`**  
  - This removes `readme2.txt` from the staging area but **keeps the file** in the working directory.  
  - The file is no longer tracked for the next commit.

### Show & Delete untracked files

- **`git clean -n`**  
  - Shows a **preview** of untracked files that will be deleted if `git clean -f` is run.  
  - Safe to use before actually deleting anything.

- **`git clean -f`**  
  - Permanently deletes **untracked files** from the working directory.  
  - Be careful—this **cannot be undone!**  

### Untrack file

- **`git rm --cached readme.txt`**  
  - **`--cached`** → Tells Git to **only untrack the file**, without   deleting it from the working directory.  

#### What if `--cached` wasn't used?

- Running `git rm readme.txt` **without** `--cached` would remove the file from both Git tracking **and** the working directory (i.e., it gets deleted).  

#### Differences Between the Commands  

1. **`git rm --cached <filename>`**  
   - Untracks the file but keeps it in the working directory.  
   - The file is no longer staged or tracked by Git but remains physically present.  

2. **`git reset <filename>`**  
   - Removes the file from the **staging area** (unstages it) but **keeps it tracked** in Git.  
   - It only undoes `git add`, meaning the file will still be tracked in future commits.  

3. **`rm -rf .git`**  
   - Completely deletes the `.git` folder, **removing the entire Git repository** from the project.  
   - This is irreversible and wipes out all version history.  

#### Ordering from Weakest to Strongest Action  

1. **`git reset <filename>`** → Just unstages changes but keeps the file tracked.  
2. **`git rm --cached <filename>`** → Untracks the file but keeps it in the working directory.  
3. **`git rm <filename>`** → Untracks the file **and deletes it** from the working directory.  
4. **`rm -rf .git`** → Completely removes the entire Git repository, losing all history.  

### Undo a commited change

- ``git revert <commit-id>``
  - **undoes** a previous commit by creating a **new** commit that negates the changes from the specified commit.  
  - It **does not** delete history but instead **preserves** it by documenting the reversal.  

#### What You Need to Know Before Using It

1. **Commit ID**  
   - You need the **commit hash** (from `git log`) to specify which commit to revert.  
   - Example: `6ada72d452a89d9b9c3aec9641db55e645bcb96c`.  

2. **Impact on History**  
   - Unlike `git reset`, `git revert` **does not rewrite history**.  
   - It's safe to use even in shared repositories.  

3. **Merge Commits**  
   - If reverting a merge commit, additional steps are needed (`git revert -m 1 <commit-id>`).  

#### What to Expect When Executing

- **Interactive Editor Opens**  
  - Git will open a text editor (like Vim) asking you to edit the commit message for the revert.  
  - You can modify it or leave it as is.  

- **New Commit is Created**  
  - A new commit appears in the log, showing that the previous commit was reverted.  

- **Changes Applied to Files**  
  - The changes from the reverted commit will be undone in the working directory.

## **Part-2: Understanding Git Concepts with Local Repos**

## *Session-1: Create NEW local repo and clone*

### View the `config` file content using `vi ./git/config`

You're in the **Vim** (Vi) editor now. Here’s how to proceed:  

#### **Basic Vim Navigation**

- **Scroll through the file** using the **arrow keys** (↑ ↓).  
- **Search** for text by pressing `/` and typing the keyword, then hit **Enter**.  

#### **How to Exit Vim**

1. **Quit without changes** → Press `ESC`, then type `:q` and hit **Enter**.  
2. **Quit and save changes** → Press `ESC`, then type `:wq` or `ZZ` and hit **Enter**.  
3. **Force quit without saving** → Press `ESC`, then type `:q!` and hit **Enter**.  

If you're stuck, just hit `ESC` multiple times and try again.

### **`git checkout -b localbranch`**  

- **With `-b`** (`git checkout -b localbranch`)  
  - Creates a new branch named `localbranch` and switches to it.  
  - This is useful when you need to create a new branch and start working on it immediately.  

- **Without `-b`** (`git checkout localbranch`)  
  - Simply switches to an **existing** branch called `localbranch`.  
  - If the branch doesn't exist, this will result in an error.  

### **Difference Between `git checkout -b` and `git switch`**  

- `git switch -c localbranch` is the equivalent of `git checkout -b localbranch`.  
- `git checkout` is **older** and can also be used for checking out files or commits.  
- `git switch` is a **newer** and **more user-friendly** command dedicated only to switching branches.  

### **`git push --set-upstream origin localbranch`**  

- Pushes `localbranch` to the remote repository (`origin`).  
- The `--set-upstream` flag links `localbranch` to the remote branch, so future `git push` and `git pull` commands will automatically use `origin localbranch` without needing to specify it every time.  

### **`git branch -a` vs. `git branch -av`**

- `git branch -a` → Lists all local and remote branches.  
- `git branch -av` → Also shows the **latest commit ID** for each branch.  

**Why does it matter?**

- Before merging, checking `git branch -av` ensures you know which branch has the most recent changes.  
- After merging, it confirms that your branches are now at the same commit level.

### **`git merge localbranch` in the remote repo (`fs-local-repo`)**

- You merged `localbranch` into `main`, but since the remote repo (`fs-local-repo`) was **never cloned from another repo**, it **acts as a standalone repo** (not like `origin` in a GitHub-hosted project).  
- This means `git merge` directly affects `fs-local-repo/main` without any need for a `git push`.  
- If this were GitHub/GitLab, you'd normally **merge via a pull request** before pushing back to `origin/main`.  

### **Why Didn’t `fs-local-repo-clone` Have the Latest Commits Initially?**

- The cloned repo (`fs-local-repo-clone`) had an **outdated version** of the remote repo (`fs-local-repo`).  
- This is why `git branch -av` in `fs-local-repo-clone` showed **older commit IDs** before running `git pull`.  
- Running `git pull` synced `fs-local-repo-clone` with `fs-local-repo`.

### **Subtlety in `git pull` Behavior**

- `git pull` is actually a **shortcut** for `git fetch` + `git merge`.  
- If changes **conflicted**, Git would have required a **manual merge**.  
- If you only wanted to see updates without merging, `git fetch` would have been better.  

#### **Final Check**

- After `git pull`, when you ran `git branch -av` again, you should have seen `localbranch` and `main` **at the same commit level** in both `fs-local-repo` and `fs-local-repo-clone`.  

### **Which Removal Command is Inclusive of the Other?**

Executing **`rm -rf fs-local-repo` and `rm -rf fs-local-repo-clone`** will also **remove the `.git` folders** inside them.  

### **Why?**

- `rm -rf fs-local-repo` **deletes the entire repo folder**, including all files and subdirectories (including `.git`).  
- `rm -rf fs-local-repo/.git` **only removes the Git tracking**, leaving the rest of the repo intact.  

## *Session-2: Linking local Git repo to NEW Remote Git repo*

We'll focus here on explaining two Git commands:

### **1. `git remote add origin <URL>`**

Links your local repository to the remote GitHub repository.

```sh
git remote add origin https://github.com/username/fs-students-demo.git
```

**Explanation:**

- This command adds a new remote repository and names it **`origin`**.
- The URL **`https://github.com/username/fs-students-demo.git`** is the location of the remote repository on GitHub.
- This allows you to push your local commits to GitHub and pull updates from it.

**Use case:**

- You run this command when you have an existing local Git repository and want to link it to a remote GitHub repository.

### **2. `git push --set-upstream origin main -f`**

Pushes your changes to the `main` branch, setting it as the default upstream, and forces the push.

```sh
git push --set-upstream origin main -f
```

**Explanation:**

- `git push` → Pushes local changes to the remote repository.
- `--set-upstream origin main` → Sets the remote `origin` and branch `main` as the default upstream branch, meaning future `git push` or `git pull` commands will automatically use `origin main`.
- `-f` (force push) → **Forces the push**, overwriting the remote branch if there are conflicts.

**Use case:**

- The first time you push to a remote repository and want to track the branch.
- If you've rewritten commit history (e.g., rebased commits) and need to **force push** to overwrite the existing remote branch.

**⚠️ Warning About `-f` (Force Push)**

- Force pushing (`-f`) **overwrites history on the remote**, which can **erase others' work** if collaborating.
- If you need to force push safely, use **`git push --force-with-lease`**, which only overwrites if no one else has pushed changes.

## *Session-3: Cloning Remote Repo*

### **Syntax Breakdown of `git clone` Command**  

```bash
git clone <remote-repo-url> <local-directory>
```

### **Explanation of Each Part**

1. **`git clone`** → The command to copy a remote repository to your local machine.  
2. **`<remote-repo-url>`** → The HTTPS URL of the remote Git repository (e.g., `https://github.com/username/fs-students-demo.git`).  
3. **`<local-directory>`** (Optional) → The local path where the cloned repo will be stored (`/d/repos/fs-students-demo`).  

If the `<local-directory>` part is **not specified**, Git will create a folder named **fs-students-demo** in the current directory.  

---

### **What Happens After Running This Command?**

✅ A new folder `/d/repos/fs-students-demo` is created.  
✅ The `.git` folder is initialized inside it.  
✅ The **remote repository's history, branches, and files** are downloaded.  
✅ The current branch is **checked out automatically**.
