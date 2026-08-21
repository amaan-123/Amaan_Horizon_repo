Three hours to take students from various backgrounds from zero to collaborative version control is a full sprint. To make this work, you have to ruthlessly cut out edge cases (`git rebase`, `git cherry-pick`, deep detached head states) and focus entirely on the "happy path" and how to escape the most common traps.

Since you only have one hour a week, momentum is your biggest enemy. They will forget things between sessions. You need to start each class with a rapid-fire recap and end with a clear, tangible result.

Here is a 3-week, 3-hour blueprint designed to build a robust, practical foundation.

---

### **Week 1: The Solo Developer (Setup & The Time Machine)**

**Goal:** Students get everything installed, understand *why* Git exists, and master the local workflow.

* **0:00 - 0:15 | The Setup Sprint & Authentication**
  * Speed-run the installation of Git and VS Code (or their chosen IDE).
  * Have everyone create a GitHub account.
  * **Crucial Step:** Walk them through setting up their `user.name` and `user.email` globally in the terminal. Skip SSH keys for now; use HTTPS and web authentication to save time.
* **0:15 - 0:25 | The Core Concept: Working, Staging, Repo**
  * Bring back the "Messy Folder" analogy (`Final_v2.docx`).
  * Explain the three local states using the photography analogy:
    * *Working Directory:* The real world.
    * *Staging Area (`git add`):* Posing the subjects.
    * *Repository (`git commit`):* Snapping the photo.
* **0:25 - 0:45 | Hands-On: The Local Loop**
  * Have them create a folder, open the terminal, and type `git init`.
  * Create a simple `index.html` or `script.js` file.
  * Run through the loop together: `git status` -> `git add .` -> `git commit -m "initial commit"`.
  * Make a change, and repeat the loop.
  * Introduce `git log` to show them their "time machine" history.
* **0:45 - 1:00 | Connecting to the Cloud**
  * Show them how to create a blank repository on GitHub.
  * Have them copy the commands GitHub provides to link their local repo to the remote (`git remote add origin...`).
  * Execute their first `git push`. Seeing their local code appear on the internet is the perfect high-note to end Week 1.

---

### **Week 2: The Team Player (Branching & Collaboration)**

**Goal:** Students learn how to work safely without breaking the main project, and how to combine their work with others.

* **0:00 - 0:10 | The Rapid Recap & `git pull`**
  * Review `add`, `commit`, and `push`.
  * Have them edit their file directly on the GitHub website, then go back to their terminal and run `git pull` to sync the changes locally.
* **0:10 - 0:25 | Parallel Universes: Branching**

  * Explain *why* we branch: "Never test your experiments in production."
  * Commands: `git branch`, `git checkout -b <branch-name>` (or `git switch -c`).
  * Have them create a new branch, add a new feature (e.g., a new function or HTML section), commit it, and push the *branch* to GitHub.
* **0:25 - 0:45 | The GitHub Flow: Pull Requests**
  * Move the class to the browser.
  * Show them how to open a Pull Request (PR) from their new branch to `main`.
  * Explain the concept of code review. Have them merge their own PR on GitHub.
  * Instruct them to go back to their terminal, switch back to `main`, and `git pull` to complete the cycle.
* **0:45 - 1:00 | The Nightmare: Merge Conflicts**
  * Demystify the merge conflict. Explain that it just means Git doesn't know which version of a line to keep, so it's asking a human for help.
  * Create an intentional conflict on your screen, show the scary `<<<<<<< HEAD` syntax in VS Code, and demonstrate how easily the VS Code UI handles accepting incoming or current changes.

---

### **Week 3: The Crucible (Live Evaluation)**

**Goal:** A practical, chaotic, real-world simulation to test their understanding. No slides, just coding.

* **0:00 - 0:10 | The Briefing**
  * Share a link to a public GitHub repository you created beforehand.
  * **The Setup:** Make it a simple React application written in vanilla JavaScript (avoid TypeScript so it's universally approachable). The app should just render a grid of "Student ID Cards."
  * The rules: They cannot push directly to `main`.
* **0:10 - 0:50 | The Simulation (Evaluation Phase)**
  * **Task 1:** Every student must `git clone` the repository to their machine.
  * **Task 2:** They must create a branch named `feature/student-firstname`.
  * **Task 3:** They must create a new JS file exporting a simple React component containing their name and a fun fact, and import it into the main `App.js`.
  * **Task 4:** They must stage, commit, and push their branch.
  * **Task 5:** They must open a PR to your repository.
  * *The Catch:* Because everyone is editing the import list in `App.js`, there **will** be merge conflicts as PRs get approved. You act as the Senior Developer, merging PRs and forcing students to update their branches and resolve conflicts before you accept their work.
* **0:50 - 1:00 | De-brief and Celebration**
  * Show the live, updated React application with everyone's ID cards rendered on the screen.
  * Review common mistakes observed during the hour.

### **1-Hour Class Plan: The Collaborative Developer**

**0:00 - 0:10 | Setting the Stage: Cloning vs. Linking**
* **Concept:** Getting the team's code onto your local machine.
* **Action:** Teach `git clone <url>`.
* **Working Directory Condition:** * *For Cloning:* You must be in the parent directory where you want the new project folder to live. The working directory should **not** already be an initialized Git repo.
  * *For Linking (`git remote add origin`):* You must already be inside a local directory initialized with `git init`.

**0:10 - 0:25 | Parallel Universes: Branching**
* **Concept:** Isolating your work so you don't break the main project.
* **Action:** Teach checking out existing branches (`git checkout main`) and creating new ones (`git checkout -b <new-branch>`). Show how to push a new branch for the first time (`git push --set-upstream origin <branch>`).
* **Working Directory Condition:** The working directory should ideally be **clean** (all changes committed or stashed) before switching branches, otherwise uncommitted changes will "bleed over" into the new branch.

**0:25 - 0:40 | Syncing the Team: Fetch, Merge, and Pull**
* **Concept:** Safely downloading your teammates' updates.
* **Action:** Explain that `git pull` is actually two commands in a trenchcoat: `git fetch` (downloading the data) + `git merge` (combining it into your files).
* **Working Directory Condition:** The working directory **must be clean** (no uncommitted tracked files) before running `git pull`. If you have uncommitted changes that overlap with incoming updates, Git will block the pull to protect your work.

**0:40 - 0:50 | The Gateway: Pull Requests (PRs)**
* **Concept:** Submitting your isolated branch for team review.
* **Action:** Walk through pushing changes upstream and creating a PR using the GitHub UI or GitHub CLI (`gh pr create`).
* **Working Directory Condition:** The local branch must be fully committed and successfully pushed to the remote server before a PR can be opened.

**0:50 - 1:00 | Resolving Chaos: Rebase & Merge Conflicts**
* **Concept:** What happens when timelines collide.
* **Action:** Introduce `git rebase main` to update a feature branch with `main`'s latest changes.
* **Working Directory Condition:** You **must** commit or stash all local changes before starting a rebase.

---

### **Table 1: The "Oops" Diagnostic Matrix (Undo Commands)**

This table merges the visual matrix with specific working directory conditions to help students escape common traps safely.

| Command | Use When (The Mistake) | Working Directory Condition | Do's | Don'ts |
| :--- | :--- | :--- | :--- | :--- |
| `git restore .` | "I made a mess, but haven't committed yet." | **Messy (Uncommitted changes present).** | Do use this to discard bad code and revert files back to the last commit. | Don't use this if you have uncommitted work you *want* to keep; it deletes it permanently. |
| `git restore --staged <file>` | "I staged a file by accident." | **File is in Staging Area.** | Do use this to kick the file back to the Working Directory without deleting your edits. | Don't confuse this with deleting the file. The code remains intact locally. |
| `git rm --cached <file>` | "I want to un-track a file I just staged." | **File is staged.** | Do use this to undo staged changes for a specific file. | Don't use standard `git rm` unless you also want to delete the file from your hard drive. |
| `git revert <commit-id>` | "I committed a bug and need to undo it safely." | **Clean (Ideally).** | Do use this for public/shared branches. It creates a brand *new* opposite commit, leaving history intact. | Don't use `reset` on shared branches when `revert` is the safe, non-destructive option. |
| `git reset --hard` | "I want to nuke everything and rewind time." | **Messy or Clean.** | Do use this when you want to absolutely obliterate all uncommitted changes and un-track files. | **Danger:** Don't use this with extreme caution. It destroys work permanently. |

---

### **Table 2: The Remote Collaboration Workflow**

This table outlines the strict order of operations for working with a team, emphasizing when to execute commands to avoid synchronization nightmares.

| Order | Action / Command | Do's | Pitfalls / Don'ts |
| :--- | :--- | :--- | :--- |
| **1. Sync** | `git pull` (or `fetch` + `merge`) | **Do** run this on your `main` branch frequently to get your team's latest updates. **Do** ensure your working directory is clean before pulling. | **Don't** pull into a messy working directory. **Don't** blindly accept merge conflicts; read the `<<<<<<< HEAD` markers carefully before saving. |
| **2. Work** | `git checkout -b <branch>` | **Do** isolate your work in a specific, descriptively named branch. | **Don't** commit experimental features directly to the `main` branch. |
| **3. Upload** | `git push` | **Do** push your branch to the remote repository (`--set-upstream` for the first time). | **Don't** force push (`--force`) to a shared branch unless you are intentionally trying to overwrite someone else's work (and have their permission). |
| **4. Review** | **Pull Request (PR)** | **Do** use the GitHub UI or CLI to open a PR. **Do** write a clear description of what your code changes. | **Don't** merge your own PR without a team member reviewing the code first. |
