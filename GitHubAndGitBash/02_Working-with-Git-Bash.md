# **Working With Git Bash**

## **Part-1: Basics of working with Git Bash**

## Session-1: Basics using Local Repo

- Open Git Bash app
- Current working directory `pwd`
- Changed directory e.g., `cd /d/repos`
- Clear the screen `clear`
- Git configuration `git config --list`
  
### Add / Remove a Local Repo

- Create empty git repo `git init /d/repos/fs-students-demo`
- Go to newly created repo `cd fs-students-demo`
- Once you are in a git directory, you can set profile properties
  - Set Git username `git config user.name reachnasir`
  - Set Git email `git config user.email reachnasir@live.com`
- Check what got created `ls -a`
- Remove a repo `rm -rf .git`
- Add a repo `git init`
  
### Add File to a repo

- Add some file into the git repo directory e.g. readme.txt file
- Check repo status `git status`
- Stage all or specific files `git add .` or `git add readme.txt`
- Commit the staged changes `git commit -m "My first commit`
- Check repo status `git status`

## Session-2: Manage Changes

- Open VS Code and Open Folder /d/repos/fs-students-demo
- Check change log `git log`
  Note: This is a local repo, there is no remote repo
- View the contents of `config` file, `COMMIT_EDITMSG` file in .git folder
  
### Track a File for Changes

- Open the repo folder in explorer
- Add a file to the folder directly e.g. readme2.txt
- Check repo status `git status` (notice status **U** in VS Code)
- Track file for changes `git add readme2.txt` (Notice status **A** in VS Code)

### Un-Track and delete a File

- To remove file from tracking `git reset readme2.txt`
- To remove a file:
  - Show: `git clean -n`
  - Remove: `git clean -f`

### Undo Staged Changes

- Make some change to a file e.g. readme.txt
- Save the file and check status `git status`
- Stage a change `git add Readme.txt`
- Check the status `git status`
- Unstage a change `git rm --cached readme.txt`
- Check satus `git status`

### Undo a commited change

- Make a change and commit the change
- Check logs `git log`
- Revert desired change with commit `git revert <commit-id>`
  e.g., `git revert 6ada72d452a89d9b9c3aec9641db55e645bcb96c`
- Remove the local repo `rm -rf .git
- Remove repo folder `rm -rf fs-students-demo`

### Delete a commited file

- Add a file to the repo folder e.g. tempfile.txt
- Stage newly added file `git add tempfile.txt`
- Commit the staged changes `git commit -m "Added temporary file`
- Check repo status `git status`
- Delete the committed file `rm -rf tempfile.txt`
- Stage the change `git add tempfile.txt`
- Commit the change 'git commit -m "deleted a tempfile.txt"`
- View log `git log`

## **Part-2: Understanding Git Concepts with Local Repos**

## Session-1: Create NEW local repo and clone

- Create a new local repo `git init /d/repos/fs-local-repo`
- Add a sample file readme.txt, and then **save** and **commit** it.
- Clone a local repo `git clone /d/repos/fs-local-repo /d/repos/fs-local-repo-clone`
- Go to newly cloned repo `cd ../fs-local-repo-clone`
- Pull latest from remote repo using: `git pull`
- View the `config` file content using `vi .git/config`
  Note: Notice `remote` and `branch` section of the configuration
- Come back to Git Bash from vi editor: `Press ESC` --> Shift + : --> q Enter
- Create a new local branch in the cloned repo: `git checkout -b localbranch`
- Change a sample file readme.txt, and then **save** and **commit** it.
- Check how many branches are present
  - **Locally**: `git branch`
  - **Remotely**: `git branch -r`
  - **Local and Remote**: `git branch -a`
      Note: remote branches are prefilex with `remotes/origin`
- Every local branch needs to have its upstream branch: `git push --set-upstream origin localbranch`
- View again all the branches now `git branch -a`
- View all branches and notice their latest commit ids: `git branch -av`
  - *Note: main branch in local and remote are not yet having latest change*
- Switch to remote repo `cd ../fs-local-repo`
- While in remote repo, view all the branches present there `git branch -av`
- While in main branch, merge the pushed branch (localbranch) to the main: `git merge localbranch`
- View all remote branches and their latest commits, note that both localbranch and main branch in the remote repo are at same commit level `git branch -av`
- Switch to cloned repo `cd ../fs-local-repo-clone`
- View all branches and their latest commit ids: `git branch -av`
  - *Note: branches are not at latest commits*
- Pull latest changes from remote repo `git pull`
- View all branches and their latest commit ids: `git branch -av`
- Remove the repos:
  - `rm -rf /d/repos/fs-local-repo/.git`
  - `rm -rf /d/repos/fs-local-repo-clone/.git`
- Remove the repo folders:
  - `rm -rf fs-local-repo`
  - `rm -rf fs-local-repo-clone`

## Session-2: Linking local Git repo to NEW Remote Git repo

- Add a local repo named **fs-students-demo** `git init /d/repos/fs-students-demo`
- Add a sample file like readme.txt, save and commit it to the local repo.
- View the local repo configration file `vi .git/config`
- Add a remote repo **fs-students-demo** without any configuration or changes (No readme, No License)
- Link local repo to the newly created remote repo:
  - Copy your remote repo https URL e.g. <https://github.com/HorizonDreamVision/fs-students-demo.git>
  - While in your local repo run `git remote add origin https://github.com/HorizonDreamVision/fs-students-demo.git`
- View the local repo configration file `vi .git/config`
  Note: Observe the section in the config file got added that shows remote repo was linked to the local repo
- Push the local branch to remote first time using `git push --set-upstream origin main -f`
- Verify remote git repo: `git remote --verbose`
- View all branch and their commits `git branch -av`
  
## Session-3: Cloning Remote Repo

- Get the HTTPS URL of the remote branch e.g. <https://github.com/HorizonDreamVision/fs-students-demo.git> /d/repos/fs-students-demo
- Run `git clone https://github.com/HorizonDreamVision/fs-students-demo.git /d/repos/fs-students-demo`

## **Part-3: Working with Branches**

**Process:** Create Branch --> Make Changes --> Save Changes --> Stage Changes --> Commit Changes --> Push Changes --> Merge Changes

## Session-1: List Existing Branches, Create a Branch, Push a Branch, Remove a Branch

- List branches in a repo
  - all local branches: `git branch`
  - all remote branches: `git branch -r`
  - all local and remote branches: `git branch -a`
  - all branches with details: `git branch -av`
- Checkout existing branch e.g. main `git checkout main`
- **Create Branch**
  - Create a new branch `git branch nasir-0423`
  - Create and checkout a branch `git checkout -b nasir-04232024`
  - View all the branches `git branch -a`
- **Push Branch**
  - First Time `git push --set-upstream origin nasir-04232024`
    - *Note: Once remote branch exsit, only `git push`*
  - View config file `vi .git/config` *(Notice the configuration information)*
  - View COMMIT_EDITMSG file `vi .git/COMMIT_EDITMSG`
- **Remove Branch**
  - Remove a local Branch `git branch -d nasir-0423`
    Note: You cannot delete the branch that is currently checked out
  - Remove a remote branch `git push <remote-name> --delete <branch-name>` e.g. `git push origin --delete nasir-04232024`

## Session-2: Create a Branch from a specific commit

- Checkout main branch `git checkout main`
- View the commit log `git log`
- To create branch from a specific commit id you want
  - `git branch <new-branch-name> <commit-id>` e.g. `git branch nasir-specific-commit cbc274e04084868edefb5d966a6e0a221a6a25cf`
  - checkout newly created branch `git checkout nasir-specific-commit`

## Session-3: Branch Rebase

- Your branch may be behind main branch, Rebase will get changes from main into your branch
- To Rebase:
  - Got to your branch e.g. `git checkout nasir-0325`
  - Rebase by executing `git rebase main`
  - Save, Commit, Stage any of your chnages
  - Push changes to get your branch to latest

## Session-4: Fetch, Merge, Pull

- Fetch gets changes from the remote repo to the local repo without make modifications in the local repo
- Add a File in the remote repo and then go to local repo and run `git diff <source-branch> origin/<target-branch>` e.g. `git diff main origin/main`
- In the local repo run `git fetch all`
- In the local repo run again `git diff main origin/main`- and observe the output
- While in local repo merge remote fetched changes into the local repo by running `git merge`
- `git pull` = `git fetch` + `git merge`

## Session-5: Pull Request (PR) Process

- Push your changes to upstream (remote) branch
- Using the GitHub UI, create a PR request or using GitHub CLI (e.g. `gh pr create`)

## **Part-4: Handling Merge Conflicts**

## Resources
