### Add user and mail to git config
```bash
$ git config --global user.name "Crashher"
$ git config --global user.mail bogdanchubuk@gmail.com
$ git config -l # check list
```

### Add remote repo(GitHub for example)
```bash 
$ cd .../test\_folder
$ git init                          # create .git DB
$ git add .                         # add this folder
$ git commit -m "first commit"      # message(or commit_name) and commit
$ git branch -M main                # rename "master" branch to "main"
$ git remote add origin https://github.com/CodeCrashher/git_test.git    # var origin = https://github.com/CodeCrashher/git_test.git
$ git push -u origin main           # push with upstream(storing path)
```


### Push exciting repo FROM GitHub
```bash 
$ git remote add origin https://github.com/CodeCrashher/git_test.git
$ git branch -M main
$ git push -u origin main
```
### Cloning repo from GitHub
```bash
$ git clone https://github.com/jquery/jquery.git   # if you are in team - can modify repo 
```

### Pull
```bash
$ git pull  # download all changes from remote repo
```

    
### Revert changes
```bash
$ git reset                     # cancel added changes
$ git checkout -- .             # delete changes
$ git reset --hard HEAD^1       # cancel one commit back(delete all changes)
$ git reset --soft HEAD^1       # cancel one commit back(not delete all changes but delete commit)
$ git checkout 54905b8          # go to 54905b8 commit
```

### Branch
```bash
$ git branch develop
$ git checkout develop          # switch to "develop" branch
```
##### OR simply:

```bash
$ git checkout -b test_br       # create "test_br" brach and go in
```

```bash
$ git checkout -m my_fix        # change name of brach
$ git branch -d new_branch      # delete branch
$ git push --set-upstream origin new_branch     # push the branch to remote repo
```

### SSH access
```bash
$ ssh-keygen -t rsa -b 4096 -C "xchubuk@mendelu.cz"
$ cat ~/.ssh/id_rsa.pub
[add key to GitHub/BitBucket/GitLab]
$ git clone git@bitbucket.org:mendelu/vwa_zs2024-2025_xchubuk.git
```

### Merging
```bash
$ git merge main 
```

### Aliases
```bash
~/.gitconfig
[alias]
    l = log --oneline -all      # [graph] also 
```

### Anoter info

```bash
$ git status    # check the status git of files(green means ready to commit)
$ git status --short
```

```bash
https://gist.github.com         # github gists(notes)
```

```bash
cat .gitignore
/something_dir
/something_file.json
```