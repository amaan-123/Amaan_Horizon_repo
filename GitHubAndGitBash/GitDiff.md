# Use cases of 'git diff' command

Incorporating `git diff` into your workflow is essential for reviewing changes at various stages. Here's how you can effectively use `git diff` during different steps:

## 1. Before Staging Changes

To review modifications in your working directory that haven't been staged yet:

```bash
git diff
```

This command displays differences between your working directory and the staging area, helping you verify unintended changes before staging.

## 2. After Staging Changes (Before Committing)

To inspect changes that have been staged for the next commit:

```bash
git diff --staged
```

This shows differences between the staging area and the last commit, ensuring that only intended changes are staged.

## 3. Before Merging Branches

To examine differences between your current branch and another branch before merging:

```bash
git diff main feature-branch
```

Replace `main` and `feature-branch` with the branch names you're comparing. This helps in understanding potential conflicts or changes that will be introduced.

You can also compare differences between two branches (say current branch is already "main" & other branch is "feature1"):

```bash
git diff feature1
```

## 4. Before Pulling Remote Changes

To view changes on the remote repository before integrating them:

```bash
git fetch
git diff HEAD origin/main
```

This sequence fetches remote updates and then shows differences between your current commit (`HEAD`) and the remote's `main` branch.

## 5. After Pulling or Merging

To see what changes were introduced by the last pull or merge:

```bash
git diff ORIG_HEAD..
```

`ORIG_HEAD` refers to the previous state before the last merge operation, allowing you to review recent changes.

## 6. Comparing Specific Commits

To compare changes between two specific commits:

```bash
git diff commit1 commit2
```

Replace `commit1` and `commit2` with the commit hashes or references. This is useful for reviewing changes over a series of commits.

## 7. Viewing Changes in a Specific File

To see changes in a particular file before committing:

```bash
git diff filename
```

Replace `filename` with the path to your file. This focuses the diff output on a single file.

## 8. After Committing (Before Pushing)

To review all changes in the last commit before pushing:

```bash
git show
```

This displays the changes introduced by the most recent commit, allowing you to verify before pushing to a remote repository.

Regularly using `git diff` at these stages enhances code quality and reduces the likelihood of introducing unintended changes.
