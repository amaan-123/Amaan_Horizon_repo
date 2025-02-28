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

`git clone <remote-repo-url> <local-directory>`

#### **Explanation of Each Part**

1. **`git clone`** → The command to copy a remote repository to your local machine.  
2. **`<remote-repo-url>`** → The HTTPS URL of the remote Git repository (e.g., `https://github.com/username/fs-students-demo.git`).  
3. **`<local-directory>`** (Optional) → The local path where the cloned repo will be stored (`/d/repos/fs-students-demo`).  

If the `<local-directory>` part is **not specified**, Git will create a folder named **fs-students-demo** in the current directory.  

#### **What Happens After Running This Command?**

✅ A new folder `/d/repos/fs-students-demo` is created.  
✅ The `.git` folder is initialized inside it.  
✅ The **remote repository's history, branches, and files** are downloaded.  
✅ The current branch is **checked out automatically**.

## **Part-3: Working with Branches**

## *Session-3: Branch Rebase*

**`git rebase`** is used to **update your branch with the latest changes from another branch** (usually `main`) **without creating a merge commit**.  

### **How Rebase Works (Step-by-Step Explanation)**  

#### **1️⃣ Switch to Your Feature Branch**

```bash
git checkout feature-branch
```

This ensures you’re working in the correct branch that needs updating.  

#### **2️⃣ Rebase Your Branch onto `main`**

```bash
git rebase main
```

This does **not merge** but instead:

- Pulls in all new commits from `main` **one by one**.  
- Moves your `feature-branch` commits **on top** of the latest `main` commits.  
- Results in a **cleaner commit history** without unnecessary merge commits.  

#### **3️⃣ Fix Any Conflicts (If Needed)**

If conflicts arise:

- Git will pause the rebase process and show the conflicting files.  
- Manually resolve conflicts in those files.  
- Stage the resolved files:

  ```bash
  git add <resolved-file>
  ```

- Continue the rebase:

  ```bash
  git rebase --continue
  ```

- If needed, you can **abort** the rebase:

  ```bash
  git rebase --abort
  ```

  This restores your branch to its pre-rebase state.  

#### **4️⃣ Save, Commit, and Stage Any Changes**

```bash
git commit -am "Resolved conflicts after rebase"
```

(If conflicts were fixed, this ensures they are committed.)  

#### **5️⃣ Push Changes to Remote**

```bash
git push --force
```

⚠️ **Why `--force`?**  
Since rebase **rewrites commit history**, Git sees it as a different commit structure. `--force` ensures your branch is updated correctly.  

### **Key Differences: `git rebase` vs `git merge`**

| Feature           | `git rebase main`  | `git merge main`  |
|------------------|------------------|------------------|
| Commit history   | Linear & clean    | Extra merge commits |
| How changes are applied | Moves branch commits on top of `main` | Combines commits with a merge commit |
| Conflict Handling | Step-by-step per commit | All at once during merge |
| Use case         | Keeping history clean in feature branches | When you want a documented merge |

### **When to Use Rebase?**

✅ When working on a **feature branch** and want the latest changes from `main` **without creating merge commits**.  
✅ When keeping a **cleaner commit history** is a priority.  
❌ **Avoid rebasing shared/public branches** (use `merge` instead).  

## *Session-4: Fetch, Merge, Pull*

### **Understanding `git fetch`, `git merge`, and `git pull`**  

These three commands help you **sync your local repo with the remote repo**, but they work differently. Let’s break them down step by step.  

#### **1️⃣ Fetch: Retrieve Remote Changes Without Applying Them**

```bash
git fetch --all
```

- **What it does:**

  - Downloads new changes from the **remote repository** (e.g., GitHub)  
  - **Does NOT modify your working directory or local branches**  
  - Stores the fetched changes in `origin/main` (or any other branch name)  

- **Example:**  
  After running:

  ```bash
  git fetch --all
  ```

  The latest remote changes are downloaded, but your working directory **remains unchanged**.  

#### **2️⃣ Viewing Differences Between Local & Remote (`git diff`)**

```bash
git diff main origin/main
```

- **Before fetching:** This command shows differences **before** downloading remote changes.

- **After fetching:** Running `git diff main origin/main` again now shows the actual changes fetched from remote.  
- **What it tells you:**  
  - Differences between **your local `main` branch** and the **latest `main` branch on the remote** (`origin/main`).  
  - Helps you **see what has changed remotely before merging or pulling**.  

#### **3️⃣ Merging Remote Changes into Local (`git merge`)**

```bash
git merge origin/main
```

- **What it does:**

  - Takes the changes fetched from `origin/main` and **merges** them into your local `main` branch.  
  - If there are **no conflicts**, Git applies the changes automatically.  
  - If there are **conflicts**, Git will ask you to resolve them manually.  

- **Key Note:**  
  - **Fetching (`git fetch`) only downloads changes.**  
  - **Merging (`git merge`) applies those fetched changes.**  

#### **4️⃣ Pulling = Fetch + Merge (`git pull`)**

```bash
git pull
```

- **What it does:**

  - **Fetches** changes from the remote repo **AND merges them automatically** into your local branch.  
  - Equivalent to running:

    ```bash
    git fetch --all
    git merge origin/main
    ```

- **When to Use It:**  
  - When you want to **update your local branch with the latest remote changes in one step**.  

#### **🔹 Summary Table: `git fetch` vs `git merge` vs `git pull`**  

| Command            | What It Does                        | Changes Local Files? |
|--------------------|-----------------------------------|----------------------|
| `git fetch`       | Downloads new commits from remote | ❌ No                |
| `git diff`        | Shows differences between branches | ❌ No                |
| `git merge`       | Merges fetched changes into local | ✅ Yes               |
| `git pull`        | Fetch + Merge in one step         | ✅ Yes               |

#### **💡 When Should You Use Which?**

✅ Use **`git fetch`** when you **only want to see remote changes without modifying your local files**.  
✅ Use **`git diff`** to **compare remote and local versions** before merging.  
✅ Use **`git merge`** when you're **ready to integrate fetched changes** into your local branch.  
✅ Use **`git pull`** when you want to **fetch and merge in one step**.

---

### **`git merge`**

When you run `git merge` in your local repo, Git attempts to merge changes from another branch (or the fetched remote updates). Here’s what could happen and what you should do next:  

#### **1️⃣ If No Conflicts Occur (Fast-Forward or Auto-Merge)**

- Git will **automatically merge the changes**.  
- You’ll see an output like:

  ```bash
  Updating abc123..def456
  Fast-forward
  file.txt | 2 +-
  1 file changed, 1 insertion(+), 1 deletion(-)
  ```

- ✅ **You’re done!** Run:

  ```bash
  git status
  ```

  to confirm everything is up to date.

#### **2️⃣ If Merge Conflicts Occur**

You will see a message like:

```bash
CONFLICT (content): Merge conflict in file.txt
Automatic merge failed; fix conflicts and then commit the result.
```

**Steps to resolve the conflict:**

##### **🔹 Step 1: Open the conflicted file**

- Open the file that Git reports as having a conflict.
- You’ll see conflict markers like this:

  ```bash
  <<<<<<< HEAD
  This is my version of the file.
  =======
  This is the incoming change from the other branch.
  >>>>>>> origin/main
  ```

- The section between `<<<<<<< HEAD` and `=======` is your local change.  
- The section between `=======` and `>>>>>>> origin/main` is the remote change.  

##### **🔹 Step 2: Choose and edit the final version**

- **Keep only the correct version** and remove the conflict markers.  

##### **🔹 Step 3: Mark the file as resolved**

```bash
git add file.txt
```

##### **🔹 Step 4: Complete the merge**

```bash
git commit -m "Resolved merge conflict in file.txt"
```

#### **3️⃣ If You Want to Cancel the Merge**

If you realize the merge was a mistake, you can **abort it** before finalizing:

```bash
git merge --abort
```

This will **reset your branch to its original state** before you ran `git merge`.  

#### **Final Step: Push Merged Changes**

Once the merge is successful and committed, **push the changes** to the remote repo:

```bash
git push
```

## **Understanding and Executing the Pull Request (PR) Process**

A **Pull Request (PR)** is used when you want to **merge changes from your branch into another branch (usually `main`) on the remote repository**. You push your changes and then request a review before merging.

### **1️⃣ Push Your Local Changes to the Remote Branch**

Before creating a PR, you need to **push your branch** (e.g., `feature-branch`) to GitHub.

#### **🔹 Step 1: Check Your Branch**

Make sure you're on the correct branch (not `main`):

```bash
git branch
```

If you're not on your feature branch, switch to it:

```bash
git checkout feature-branch
```

#### **🔹 Step 2: Push Your Branch to Remote**

```bash
git push --set-upstream origin feature-branch
```

If you have already set upstream, just use:

```bash
git push
```

### **2️⃣ Create a Pull Request (PR)**

Now that your branch is on GitHub, you can create a PR.

#### **🔹 Option 1: Using GitHub UI (Website)**

1. Go to your repository on GitHub.
2. You’ll see a message like **"Your recently pushed branches"** with a button to "Compare & pull request."
3. Click **"Compare & pull request."**
4. Select the target branch (**e.g., `main`**) where you want to merge your changes.
5. Add a **title and description** explaining what your changes do.
6. Click **"Create pull request."**

#### **🔹 Option 2: Using GitHub CLI (`gh pr create`)**

If you have [GitHub CLI](https://cli.github.com/) installed, you can create a PR from the terminal.

1. **Make sure you're on your feature branch:**

   ```bash
   git checkout feature-branch
   ```

2. **Run the PR creation command:**

   ```bash
   gh pr create --base main --head feature-branch --title "My PR Title" --body "Description of changes"
   ```

   - `--base main` → The branch you are merging **into** (target branch).
   - `--head feature-branch` → The branch **you want to merge** (your changes).
   - `--title "My PR Title"` → A short title for your PR.
   - `--body "Description of changes"` → A detailed explanation of what you changed.

### **3️⃣ What Happens Next?**

- Your PR is now open for review.
- Reviewers can **comment**, **request changes**, or **approve**.
- Once approved, you (or a repo maintainer) can **merge the PR**.

### **4️⃣ Merging the PR**

Once your PR is approved:

- In the GitHub UI, click **"Merge pull request."**
- Confirm by clicking **"Confirm merge."**
- Delete the feature branch (optional).
- Optionally, you can do the same via the command line, see [Understanding Manual PR Merging via Command Line](#understanding-manual-pr-merging-via-command-line)

## **Understanding Manual PR Merging via Command Line**

Merging a Pull Request (PR) manually means **bringing changes from the feature branch (head branch) into the main branch (base branch) using Git commands**. Below is a breakdown of each step, including **which branch you should be in and why**.  

### **🛠 Step-by-Step Execution**

#### **🔹 Step 1: Ensure Your Local Repository is Up to Date**

```bash
git pull origin main
```

✅ **Which branch should you be in?**

- **Any branch is fine** because `git pull origin main` **only updates your local copy of `main` with the latest remote changes.**  

✅ **Why is this needed?**

- If someone else has merged other PRs into `main`, you want your local `main` to be fully updated **before merging the PR manually.**  
- This prevents merge conflicts later.

#### **🔹 Step 2: Switch to the Base Branch (main)**

```bash
git checkout main
```

✅ **Which branch should you be in?**

- You **must be in `main`** before merging, because merging always happens **into** the currently checked-out branch.

✅ **Why is this needed?**

- `git merge freebie` will bring `freebie` (your PR branch) **into the branch you’re currently on**, so you need to be in `main` to merge changes into it.

#### **🔹 Step 3: Merge the PR Branch (Head Branch) into main**

```bash
git merge freebie
```

✅ **Which branch should you be in?**

- You **must be in `main`**, because this command brings the `freebie` branch changes into the current branch.

✅ **Why is this needed?**

- This takes all the changes from `freebie` (the PR branch) and integrates them into `main`.

#### **🔹 Step 4: Push the Updated main Branch to Remote**

```bash
git push -u origin main
```

✅ **Which branch should you be in?**

- **You must still be in `main`**, since you are pushing the merged changes to the remote `main`.

✅ **Why is this needed?**

- The merge only happened locally. **This command updates GitHub with your merged `main` branch.**
- Once pushed, the PR will automatically be marked as **merged** on GitHub.

#### **🔥 Final Summary**

| **Step** | **Command** | **Which Branch Should You Be In?** | **Why?** |
|----------|------------|-----------------------------------|----------|
| **Step 1** | `git pull origin main` | Any branch | Updates your local main branch to the latest version. |
| **Step 2** | `git checkout main` | **Switch to main** | You must be in `main` before merging. |
| **Step 3** | `git merge freebie` | **Stay in main** | Brings `freebie` changes into `main`. |
| **Step 4** | `git push -u origin main` | **Stay in main** | Pushes the merged `main` to GitHub. |

### **🎯 Next Steps**

After successfully merging and pushing:

1. **Delete the feature branch locally** (optional):

   ```bash
   git branch -d freebie
   ```

2. **Delete the feature branch remotely** (optional):

   ```bash
   git push origin --delete freebie
   ```
  
3. **Verify the PR is closed on GitHub.** ✅  
