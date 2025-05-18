# Git Branches life workflow

<!-- TODO: Complement using chat history for specific context of usage and examples. -->

For the context of this document, we will be using the following branch names:

- `main` - the main branch of the repository
- `practice` or `feature/my-brach` - branched from main, used for development

---

## ✅ **1. Creating a New Branch from `main`**

- Create and switch to a new branch:

  ```bash
  git checkout -b feature/my-branch
  ```

---

## ✅ **2. Pushing New Branch to GitHub**

- Push your branch for the first time:

  ```bash
  git push -u origin feature/my-branch
  ```

---

## ✅ **3. Making and Committing Changes**

- Stage and commit:

  ```bash
  git add .
  git commit -m "Your meaningful commit message"
  ```

---

## ✅ **4. Creating Pull Requests (PRs) on GitHub**

- Go to GitHub repo → Click **"Compare & pull request"** → Submit.

---

## ✅ **5. Merging PRs (with or without creating a new commit)**

- Options:

  - **Merge Commit** (default): Combines all commits and creates a new merge commit.
  - **Squash and Merge**: Combines all commits into one.
  - **Rebase and Merge**: Applies commits on top of `main` with new SHAs.

---

## ✅ **6. Avoiding Extra Commits with Fast-Forward**

- If `main` has no new commits, you can use:

  ```bash
  git checkout main
  git merge feature/my-branch  # Fast-forward merge, no new commit
  ```

---

## ✅ **7. Deleting Merged Branches**

- Locally:

  ```bash
  git branch -d feature/my-branch
  ```

- Remotely:

  ```bash
  git push origin --delete feature/my-branch
  ```

---

## ✅ **8. Undoing Last Commit Locally (Unpushed)**

- Keep changes in working directory:

  ```bash
  git reset --soft HEAD~1
  ```

---

## ✅ **9. Moving Uncommitted Work to Another Branch**

- Option 1 (safe & clean):

  ```bash
  git stash
  git checkout practice
  git stash pop
  git add .
  git commit -m "Moved work to practice"
  ```

- Option 2 (direct switch):

  ```bash
  git checkout practice  # if no conflicts
  ```

---

## ✅ **10. Rebasing Feature Branch with Main**

- Rebase local feature branch:

  ```bash
  git checkout feature/my-branch
  git fetch origin
  git rebase origin/main
  ```

---

## ✅ **11. Fixing Commit History (Rewriting)**

- Interactive rebase to drop/fix/reword commits:

  ```bash
  git rebase -i origin/main
  ```

---

## ✅ **12. Force Push After Rebase**

- Use with caution:

  ```bash
  git push --force-with-lease origin feature/my-branch
  ```

---

## ✅ **13. Fixing Rebase PR Mistakes (SHA Mismatches)**

- To go back to linear history:

  - Reset `main` to original point (if possible):

    ```bash
    git checkout main
    git reset --hard origin/main  # If needed, after backup
    ```

  - Merge with fast-forward:

    ```bash
    git merge --ff-only feature/my-branch
    ```

---

### ✅ **14. Resolving "Ahead/Behind" Mismatches**

- If one branch is ahead/behind and you want to match:

  ```bash
  git checkout feature
  git rebase main  # or merge main if rebase not desired
  ```

---
