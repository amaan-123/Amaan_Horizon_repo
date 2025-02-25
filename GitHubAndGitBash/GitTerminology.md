# Git Terminology

To understand Git, you have to understand the terminology. Here's a short list of terms that Git users frequently use. Don't be concerned about the details for now; all these terms will become familiar as you work your way through the exercises in this module.

## Working Tree

- The set of nested directories and files that contain the project that's being worked on.

## Repository (Repo)

- The directory, located at the top level of a working tree, where Git keeps all the history and metadata for a project.
- Repositories are almost always referred to as repos.
- A bare repository is one that isn't part of a working tree; it's used for sharing or backup.
- A bare repo is usually a directory with a name that ends in .git—for example, project.git.

## Hash

- A number produced by a hash function that represents the contents of a file or another object as a fixed number of digits.
- Git uses hashes that are 160 bits long.
- One advantage to using hashes is that Git can tell whether a file has changed by hashing its contents and comparing the result to the previous hash.
- If the file time-and-date stamp is changed, but the file hash isn’t changed, Git knows the file contents aren’t changed.

## Object

- A Git repo contains four types of objects, each uniquely identified by an SHA-1 hash.
  - A **blob** object contains an ordinary file.
  - A **tree** object represents a directory; it contains names, hashes, and permissions.
  - A **commit** object represents a specific version of the working tree.
  - A **tag** is a name attached to a commit.

## Commit

- When used as a verb, commit means to make a commit object.
- This action takes its name from commits to a database.
- It means you are committing the changes you have made so that others can eventually see them, too.

## Branch

- A branch is a named series of linked commits.
- The most recent commit on a branch is called the head.
- The default branch, which is created when you initialize a repository, is called main, often named master in Git.
- The head of the current branch is named **HEAD**.
- Branches are an incredibly useful feature of Git because they allow developers to work independently (or together) in branches and later merge their changes into the default branch.

## Remote

- A remote is a named reference to another Git repository.
- When you create a repo, Git creates a remote named **origin** that is the default remote for push and pull operations.

## Commands, Subcommands, and Options

- Git operations are performed by using commands like `git push` and `git pull`.
  - `git` is the command, and `push` or `pull` is the subcommand.
  - The subcommand specifies the operation you want Git to perform.
- Commands frequently are accompanied by options, which use hyphens (-) or double hyphens (--).
  - For example, `git reset --hard`.

These terms and others, like push and pull, will make more sense shortly. But you have to start somewhere, and you might find it helpful to come back and review this glossary of terms after you finish the module.
