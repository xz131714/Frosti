---
title: "Git使用教程"
description: "git是一个分布式版本控制系统，广泛用于软件开发和其他版本控制任务。本文将介绍git的基本使用方法，包括安装、配置、常用命令等。"
pubDate: "Jun 17 2025"
image: https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506162203050.jpg
categories:
  - Documentation
tags:
  - Git
  - GitHub
badge: Pin
---

# Git使用教程

## 部分命令

### 一、新建代码库

```bash
# 在当前目录新建一个Git代码库
$ git init
# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]
# 下载一个项目和它的整个代码历史
$ git clone [url]
```

### 二、配置

```bash
# 显示当前的Git配置
$ git config --list
# 编辑Git配置文件
$ git config -e [--global]
# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

### 三、增加/删除文件

```bash
# 添加指定文件到暂存区
$ git add [file1] [file2] ...
# 添加指定目录到暂存区，包括子目录
$ git add [dir]
# 添加当前目录的所有文件到暂存区
$ git add .
# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p
# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...
# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]
# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

### 四、代码提交

```bash
# 提交暂存区到仓库区
$ git commit -m [message]
# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]
# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a
# 提交时显示所有diff信息
$ git commit -v
# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]
五、分支
# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

### 五、分支

```bash
# 列出所有本地分支
$ git branch
# 列出所有远程分支
$ git branch -r
# 列出所有本地分支和远程分支
$ git branch -a
# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]
# 新建一个分支，并切换到该分支
$ git checkout -b [branch]
# 新建一个分支，指向指定commit
$ git branch [branch] [commit]
# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]
# 切换到指定分支，并更新工作区
$ git checkout [branch-name]
# 切换到上一个分支
$ git checkout -
# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]
# 合并指定分支到当前分支
$ git merge [branch]
# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]
# 删除分支
$ git branch -d [branch-name]
# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

### 六、标签

```bash
# 列出所有tag
$ git tag
# 新建一个tag在当前commit
$ git tag [tag]
# 新建一个tag在指定commit
$ git tag [tag] [commit]
# 删除本地tag
$ git tag -d [tag]
# 删除远程tag
$ git push origin :refs/tags/[tagName]
# 查看tag信息
$ git show [tag]
# 提交指定tag
$ git push [remote] [tag]
# 提交所有tag
$ git push [remote] --tags
# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```

### 七、查看信息

```bash
# 显示有变更的文件
$ git status
# 显示当前分支的版本历史
$ git log
# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat
# 搜索提交历史，根据关键词
$ git log -S [keyword]
# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s
# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature
# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]
# 显示指定文件相关的每一次diff
八、远程同步
$ git log -p [file]
# 显示过去5次提交
$ git log -5 --pretty --oneline
# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn
# 显示指定文件是什么人在什么时间修改过
$ git blame [file]
# 显示暂存区和工作区的差异
$ git diff
# 显示暂存区和上一个commit的差异
$ git diff --cached [file]
# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD
# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]
# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"
# 显示某次提交的元数据和内容变化
$ git show [commit]
# 显示某次提交发生变化的文件
$ git show --name-only [commit]
# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]
# 显示当前分支的最近几次提交
$ git reflog
```

### 八、远程同步

```bash
# 下载远程仓库的所有变动
$ git fetch [remote]
# 显示所有远程仓库
$ git remote -v
# 显示某个远程仓库的信息
$ git remote show [remote]
# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]
# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]
九、撤销
# 上传本地指定分支到远程仓库
$ git push [remote] [branch]
# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force
# 推送所有分支到远程仓库
$ git push [remote] --all
```

### 九、撤销

```bash
# 恢复暂存区的指定文件到工作区
$ git checkout [file]
# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]
# 恢复暂存区的所有文件到工作区
$ git checkout .
# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]
# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard
# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]
# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]
# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]
# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]
# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```



## 一：Git是什么？

Git是目前世界上最先进的分布式版本控制系统。
工作原理 / 流程：
![image-20250617161620237](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171616277.png)
Workspace：工作区    
Index / Stage：暂存区    
Repository：仓库区（或本地仓库）    
Remote：远程仓库    

## 二：在windows上如何安装Git？

msysgit是 windows版的Git,如下：

![image-20250617153207411](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171532432.png)

需要从网上下载一个，然后进行默认安装即可。安装完成后，在开始菜单里面找到 "Git --> Git Bash",如
下：

![image-20250617153249332](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171532354.png)

会弹出一个类似的命令窗口的东西，就说明Git安装成功。如下：

![image-20250617153309764](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171533801.png)

安装完成后，还需要最后一步设置，在命令行输入如下：

![image-20250617153326771](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171533807.png)

因为Git是分布式版本控制系统，所以需要填写用户名和邮箱作为一个标识。
注意：git config --global 参数，有了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当
然你也可以对某个仓库指定的不同的用户名和邮箱。

## 三：如何操作？

### 一、创建版本库。

什么是版本库？版本库又名仓库，英文名repository,你可以简单的理解一个目录，这个目录里面的所有
文件都可以被Git管理起来，每个文件的修改，删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者
在将来某个时刻还可以将文件”还原”。
所以创建一个版本库也非常简单，如下我是D盘 –> www下 目录下新建一个testgit版本库。

![image-20250617153407477](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171534501.png)

pwd 命令是用于显示当前的目录。

1. 通过命令 git init 把这个目录变成git可以管理的仓库，如下：

   ![image-20250617153428083](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171534107.png)

   这时候你当前testgit目录下会多了一个.git的目录，这个目录是Git来跟踪管理版本的，没事千万不
   要手动乱改这个目录里面的文件，否则，会把git仓库给破坏了。
   如下：

   ![image-20250617153458890](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171534916.png)

   把文件添加到版本库中。
   首先要明确下，所有的版本控制系统，只能跟踪文本文件的改动，比如txt文件，网页，所有程序的
   代码等，Git也不列外，版本控制系统可以告诉你每次的改动，但是图片，视频这些二进制文件，虽
   能也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是
   知道图片从1kb变成2kb，但是到底改了啥，版本控制也不知道。

   #### 下面先看演示

   我在版本库testgit目录下新建一个记事本文件 readme.txt 内容如下：

   ```tex
   1111111
   ```

   #### 第一步：git add

   使用命令 git add readme.txt添加到暂存区里面去。如下：

   ![](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171537853.png)

   如果和上面一样，没有任何提示，说明已经添加成功了。

   #### 第二步：git commit

   用命令 git commit告诉Git，把文件提交到仓库。

   ![image-20250617153729677](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171537699.png)

   

现在我们已经提交了一个readme.txt文件了，我们下面可以通过命令git status来查看是否还有文件未提交，如下：

![](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171538538.png)

说明没有任何文件未提交，但是我现在继续来改下readme.txt内容，比如我在下面添加一行2222222222
内容，继续使用git status 来查看下结果，如下：
![image-20250617162158565](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171621614.png)

上面的命令告诉我们 readme.txt文件已被修改，但是未被提交的修改。
接下来我想看下readme.txt文件到底改了什么内容，如何查看呢？可以使用如下命令：

```bash 
git diff readme.txt
```

如下：
![image-20250617153935736](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171539762.png)

如上可以看到，readme.txt文件内容从一行11111111改成 二行 添加了一行22222222内容。
知道了对readme.txt文件做了什么修改后，我们可以放心的提交到仓库了。
提交修改和提交文件是一样的2步： 

1. **git add** 

2. **git commit**       

   如下：
   ![image-20250617154101763](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171541794.png)

### 二、版本回退

如上，我们已经学会了修改文件，现在我继续对readme.txt文件进行修改，再增加一行内容为
33333333333333.继续执行命令如下：

![image-20250617154128180](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171541205.png)

#### 1、git log

现在我已经对readme.txt文件做了三次修改了，那么我现在想查看下历史记录，如何查呢？我们现在可
以使用命令 git log 演示如下所示：

![image-20250617154159370](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171541401.png)

git log命令显示从最近到最远的显示日志，我们可以看到最近三次提交，最近的一次是,增加内容为
333333.上一次是添加内容222222，第一次默认是 111111.如果嫌上面显示的信息太多的话，我们可以
使用命令 git log --pretty=oneline 演示如下：

![image-20250617154224322](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171542347.png)

#### 2、版本回退

现在我想使用版本回退操作，我想把当前的版本回退到上一个版本，要使用什么命令呢？
可以使用如下2种命令：
##### git reset --hard HEAD^
第一种是：git reset --hard HEAD^ 那么如果要回退到上上个版本只需把HEAD^ 改成 HEAD^^ 以此
类推。那如果要回退到前100个版本的话，使用上面的方法肯定不方便，我们可以使用下面的简便命令操
作：git reset --hard HEAD~100 即可。未回退之前的readme.txt内容如下：

![image-20250617154248184](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171542212.png)

如果想回退到上一个版本的命令如下操作：

![image-20250617154301565](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171543589.png)

再来查看下 readme.txt内容如下：通过命令cat readme.txt查看

![image-20250617154316303](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171543326.png)

可以看到，内容已经回退到上一个版本了。我们可以继续使用git log 来查看下历史记录信息，如下：

![image-20250617154332771](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171543797.png)

#####　git reset --hard 版本号

我们看到 增加333333 内容我们没有看到了，但是现在我想回退到最新的版本，如：有333333的内容要
如何恢复呢？我们可以通过版本号回退，使用命令方法如下：

```bash
git reset --hard 版本号 
```

但是现在的问题假如我已经关掉过一次命令行或者333内容的版本号我并不知
道呢？要如何知道增加3333内容的版本号呢？可以通过如下命令即可获取到版本号：

```bash
git reflog 
```

演示如下：

![image-20250617154528828](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171545856.png)

通过上面的显示我们可以知道，增加内容3333的版本号是 6fcfc89.我们现在可以命令git reset --hard
6fcfc89来恢复了。演示如下：

![image-20250617154707767](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171547793.png)

可以看到 目前已经是最新的版本了。

## 三、理解工作区与暂存区的区别？

工作区：就是你在电脑上看到的目录，比如目录下testgit里的文件(.git隐藏目录版本库除外)。或者以后
需要再新建的目录文件等等都属于工作区范畴。
版本库(Repository)：工作区有一个隐藏目录.git,这个不属于工作区，这是版本库。其中版本库里面存了
很多东西，其中最重要的就是stage(暂存区)，还有Git为我们自动创建了第一个分支master,以及指向
master的一个指针HEAD。
我们前面说过使用Git提交文件到版本库有两步：
第一步：是使用 git add 把文件添加进去，实际上就是把文件添加到暂存区。
第二步：使用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支上。
我们继续使用demo来演示下：
我们在readme.txt再添加一行内容为4444444，接着在目录下新建一个文件为test.txt 内容为test，我们先用命令 **git status**来查看下状态，如下：

![image-20250617154836149](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171548177.png)

现在我们先使用git add 命令把2个文件都添加到暂存区中，再使用git status来查看下状态，如下：

![image-20250617154851985](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171548013.png)

接着我们可以使用git commit一次性提交到分支上，如下：

![image-20250617154905744](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171549770.png)

四：Git撤销修改和删除文件操作。
一：撤销修改：
比如我现在在readme.txt文件里面增加一行 内容为555555555555，我们先通过命令查看如下：

![image-20250617154925756](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171549780.png)

在我未提交之前，我发现添加5555555555555内容有误，所以我得马上恢复以前的版本，现在我可以有
如下几种方法可以做修改：
第一：如果我知道要删掉那些内容的话，直接手动更改去掉那些需要的文件，然后add添加到暂存区，最
后commit掉。
第二：我可以按以前的方法直接恢复到上一个版本。使用 git reset --hard HEAD^
但是现在我不想使用上面的2种方法，我想直接想使用撤销命令该如何操作呢？首先在做撤销之前，我们
可以先用 git status 查看下当前的状态。如下所示：

![image-20250617154945989](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171549014.png)

可以发现，Git会告诉你，git checkout -- file 可以丢弃工作区的修改，如下命令：
git checkout -- readme.txt,如下所示：

![image-20250617155006119](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171550147.png)

命令 git checkout --readme.txt 意思就是，把readme.txt文件在工作区做的修改全部撤销，这里有2种
情况，如下：
1.readme.txt自动修改后，还没有放到暂存区，使用 撤销修改就回到和版本库一模一样的状态。
2.另外一种是readme.txt已经放入暂存区了，接着又作了修改，撤销修改就回到添加暂存区后的状态。
对于第二种情况，假如现在我对readme.txt添加一行 内容为6666666666666，我git add 增加到暂存区
后，接着添加内容7777777，我想通过撤销命令让其回到暂存区后的状态。如下所示：

![image-20250617155022269](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171550300.png)

注意：命令git checkout -- readme.txt 中的 -- 很重要，如果没有 -- 的话，那么命令变成创建分支了。
二：删除文件。
假如我现在版本库testgit目录添加一个文件b.txt,然后提交。如下：

![image-20250617155037221](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171550264.png)

如上：一般情况下，可以直接在文件目录中把文件删了，或者使用如上rm命令：rm b.txt ，如果我想彻
底从版本库中删掉了此文件的话，可以再执行commit命令 提交掉，现在目录是这样的，

![image-20250617155053112](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171550139.png)

只要没有commit之前，如果我想在版本库中恢复此文件如何操作呢？
可以使用如下命令 git checkout -- b.txt，如下所示：

![image-20250617155105262](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171551287.png)

再来看看我们testgit目录，添加了3个文件了。如下所示：

![image-20250617155120933](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171551964.png)

## 四：远程仓库

在了解之前，先注册github账号，由于你的本地Git仓库和github仓库之间的传输是通过SSH加密的，所
以需要一点设置：

### 第一步：创建SSH Key。

在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文
件，如果有的话，直接跳过此如下命令，如果没有的话，打开命令行，输入如下命令：
ssh-keygen -t rsa –C “youremail@example.com”, 由于我本地此前运行过一次，所以本地有，如下所示：

![image-20250617155149588](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171551621.png)

id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。
### 第二步：Add SSH Key
登录github,打开” settings”中的SSH Keys页面，然后点击“Add SSH Key”,填上任意title，在Key文本框里
黏贴id_rsa.pub文件的内容。

![image-20250617155213724](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171552776.png)

点击 Add Key，你就应该可以看到已经添加的key。

![image-20250617155231847](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171552881.png)

如何添加远程库？
现在的情景是：我们已经在本地创建了一个Git仓库后，又想在github创建一个Git仓库，并且希望这两个
仓库进行远程同步，这样github的仓库可以作为备份，又可以其他人通过该仓库来协作。
首先，登录github上，然后在右上角找到“create a new repo”创建一个新的仓库。如下

![image-20250617155243200](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171552245.png)

在Repository name填入testgit，其他保持默认设置，点击“Create repository”按钮，就成功地创建了一
个新的Git仓库：
![image-20250617155300863](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171553918.png)

可以把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到GitHub仓库。
现在，我们根据GitHub的提示，在本地的testgit仓库下运行命令：
git remote add origin https://github.com/tugenhua0707/testgit.git
所有的如下：
![image-20250617155315203](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171553233.png)

把本地库的内容推送到远程，使用 git push命令，实际上是把当前分支master推送到远程。
由于远程库是空的，我们第一次推送master分支时，加上了 –u参数，Git不但会把本地的master分支内
容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推
送或者拉取时就可以简化命令。推送成功后，可以立刻在github页面中看到远程库的内容已经和本地一
模一样了，上面的要输入github的用户名和密码如下所示：

![image-20250617155335260](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171553304.png)

从现在起，只要本地作了提交，就可以通过如下命令：

```bash
git push origin master
```

把本地master分支的最新修改推送到github上了，现在你就拥有了真正的分布式版本库了。

### 如何从远程库克隆？

上面我们了解了先有本地库，后有远程库时候，如何关联远程库。
现在我们想，假如远程库有新的内容了，我想克隆到本地来 如何克隆呢？
首先，登录github，创建一个新的仓库，名字叫testgit2.如下：

![image-20250617155430236](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171554277.png)

如下，我们看到：

![image-20250617155446060](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171554108.png)

现在，远程库已经准备好了，下一步是使用命令git clone克隆一个本地库了。如下所示：

![image-20250617155459126](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171554153.png)

接着在我本地目录下 生成testgit2目录了，如下所示：

![image-20250617155511995](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171555028.png)

## 五：创建与合并分支

在版本回退里，你已经知道，每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止
到目前，只有一条时间线，在Git里，这个分支叫主分支，即master分支。HEAD严格来说不是指向提
交，而是指向master，master才是指向提交的，所以，HEAD指向的就是当前分支。

### 创建dev分支

首先，我们来创建dev分支，然后切换到dev分支上。如下操作：

![image-20250617155536516](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171555544.png)

git checkout 命令加上 –b参数表示创建并切换，相当于如下2条命令

```bash
git branch dev
git checkout dev
```

git branch查看分支，会列出所有的分支，当前分支前面会添加一个星号。然后我们在dev分支上继续做
demo，比如我们现在在readme.txt再增加一行 7777777777777
首先我们先来查看下readme.txt内容，接着添加内容77777777，如下：

![image-20250617155618506](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171556535.png)

现在dev分支工作已完成，现在我们切换到主分支master上，继续查看readme.txt内容如下：

![image-20250617155629395](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171556423.png)

现在我们可以把dev分支上的内容合并到分支master上了，可以在master分支上，使用如下命令 git
merge dev 如下所示：

![image-20250617155644160](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171556193.png)

### git merge合并

git merge命令用于合并指定分支到当前分支上，合并后，再查看readme.txt内容，可以看到，和dev分
支最新提交的是完全一样的。注意到上面的Fast-forward信息，Git告诉我们，这次合并是“快进模式”，
也就是直接把master指向dev的当前提交，所以合并速度非常快。合并完成后，我们可以接着删除dev分
支了，操作如下：

![image-20250617155705157](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171557184.png)

总结创建与合并分支命令如下：

```bash
查看分支：git branch
创建分支：git branch name
切换分支：git checkout name
创建+切换分支：git checkout –b name
合并某分支到当前分支：git merge name
删除分支：git branch –d name
```

### 如何解决冲突？

下面我们还是一步一步来，先新建一个新分支，比如名字叫fenzhi1，在readme.txt添加一行内容
8888888，然后提交，如下所示：

![image-20250617155813071](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171558101.png)

同样，我们现在切换到master分支上来，也在最后一行添加内容，内容为99999999，如下所示：

![image-20250617155826135](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171558166.png)

现在我们需要在master分支上来合并fenzhi1，如下操作：

![image-20250617155854635](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171558673.png)

Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容，其中<<<HEAD是指主分支修改的内容，

>>>>>fenzhi1 是指fenzhi1上修改的内容，我们可以修改下如下后保存：

![image-20250617155915859](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171559899.png)

如果我想查看分支合并的情况的话，需要使用命令 git log.命令行演示如下：

![image-20250617155931261](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171559316.png)

### 分支管理策略。

通常合并分支时，git一般使用”Fast forward”模式，在这种模式下，删除分支后，会丢掉分支信息，现在
我们来使用带参数 –no-ff来禁用”Fast forward”模式。首先我们来做demo演示下：

```bash
1、创建一个dev分支。
2、修改readme.txt内容。
3、添加到暂存区。
4、切换回主分支(master)。
5、合并dev分支，使用命令 git merge –no-ff -m “注释” dev
6、查看历史记录
```

截图如下：

![image-20250617160018417](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171600458.png)

分支策略：首先master主分支应该是非常稳定的，也就是用来发布新版本，一般情况下不允许在上面干
活，干活一般情况下在新建的dev分支上干活，干完后，比如要发布，或者说dev分支代码稳定后可以合
并到主分支master上来。
1、创建一个dev分支。
2、修改readme.txt内容。
3、添加到暂存区。
4、切换回主分支(master)。
5、合并dev分支，使用命令 git merge –no-ff -m “注释” dev
6、查看历史记录

## 六：bug分支

在开发中，会经常碰到bug问题，那么有了bug就需要修复，在Git中，分支是很强大的，每个bug都可以
通过一个临时分支来修复，修复完成后，合并分支，然后将临时的分支删除掉。
比如我在开发中接到一个404 bug时候，我们可以创建一个404分支来修复它，但是，当前的dev分支上
的工作还没有提交。比如如下：

![image-20250617160039981](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171600011.png)

并不是我不想提交，而是工作进行到一半时候，我们还无法提交，比如我这个分支bug要2天完成，但是
我issue-404 bug需要5个小时内完成。怎么办呢？还好，Git还提供了一个stash功能，可以把当前工作现
场 ”隐藏起来”，等以后恢复现场后继续工作。如下：

![image-20250617160059568](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171600597.png)

所以现在我可以通过创建issue-404分支来修复bug了。
首先我们要确定在那个分支上修复bug，比如我现在是在主分支master上来修复的，现在我要在master
分支上创建一个临时分支，演示如下：

![image-20250617160112464](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171601497.png)

修复完成后，切换到master分支上，并完成合并，最后删除issue-404分支。演示如下：
![image-20250617160126415](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171601451.png)

现在，我们回到dev分支上干活了。

![image-20250617160140992](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171601021.png)

工作区是干净的，那么我们工作现场去哪里呢？我们可以使用命令 git stash list来查看下。如下：

![image-20250617160153342](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171601373.png)

工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，可以使用如下2个方法：
1.git stash apply恢复，恢复后，stash内容并不删除，你需要使用命令git stash drop来删除。
2.另一种方式是使用git stash pop,恢复的同时把stash内容也删除了。
演示如下

![image-20250617160236071](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171602109.png)

## 七：多人协作

当你从远程库克隆时候，实际上Git自动把本地的master分支和远程的master分支对应起来了，并且远
程库的默认名称是origin。
要查看远程库的信息 使用 git remote
要查看远程库的详细信息 使用 git remote –v
如下演示：

![image-20250617160247020](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171602049.png)

### 一、推送分支：

推送分支就是把该分支上所有本地提交到远程库中，推送时，要指定本地分支，这样，Git就会把该分支
推送到远程库对应的远程分支上：
使用命令 git push origin master
比如我现在的github上的readme.txt代码如下：

![image-20250617160309703](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171603742.png)

本地的readme.txt代码如下：

![image-20250617160321084](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171603112.png)

现在我想把本地更新的readme.txt代码推送到远程库中，使用命令如下：

![image-20250617160331344](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171603373.png)

我们可以看到如上，推送成功，我们可以继续来截图github上的readme.txt内容 如下：

![image-20250617160341656](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171603703.png)

可以看到 推送成功了，如果我们现在要推送到其他分支，比如dev分支上，我们还是那个命令 git push
origin dev 那么一般情况下，那些分支要推送呢？
master分支是主分支，因此要时刻与远程同步。
一些修复bug分支不需要推送到远程去，可以先合并到主分支上，然后把主分支master推送到远程去。

### 二：抓取分支：

多人协作时，大家都会往master分支上推送各自的修改。现在我们可以模拟另外一个同事，可以在另一
台电脑上（注意要把SSH key添加到github上）或者同一台电脑上另外一个目录克隆，新建一个目录名字
叫testgit2
但是我首先要把dev分支也要推送到远程去，如下

![image-20250617160357563](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171603598.png)

接着进入testgit2目录，进行克隆远程的库到本地来，如下：

![image-20250617160406867](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171604904.png)

现在目录下生成有如下所示：

![image-20250617160431567](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171604602.png)

现在我们的小伙伴要在dev分支上做开发，就必须把远程的origin的dev分支到本地来，于是可以使用命
令创建本地dev分支：git checkout –b dev origin/dev
现在小伙伴们就可以在dev分支上做开发了，开发完成后把dev分支推送到远程库时。
如下：

![image-20250617160448234](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171604271.png)

小伙伴们已经向origin/dev分支上推送了提交，而我在我的目录文件下也对同样的文件同个地方作了修
改，也试图推送到远程库时，如下：

![image-20250617160513583](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171605627.png)

由上面可知：推送失败，因为我的小伙伴最新提交的和我试图推送的有冲突，解决的办法也很简单，上
面已经提示我们，先用git pull把最新的提交从origin/dev抓下来，然后在本地合并，解决冲突，再推
送。

![image-20250617160537118](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171605155.png)

git pull也失败了，原因是没有指定本地dev分支与远程origin/dev分支的链接，根据提示，设置dev和
origin/dev的链接：如下：

![image-20250617160555967](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171605999.png)

这回git pull成功，但是合并有冲突，需要手动解决，解决的方法和分支管理中的 解决冲突完全一样。解
决后，提交，再push：
我们可以先来看看readme.txt内容了。

![image-20250617160608327](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171606357.png)

现在手动已经解决完了，我接在需要再提交，再push到远程库里面去。如下所示：

![image-20250617160620529](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506171606564.png)

因此：多人协作工作模式一般是这样的：

```bash
首先，可以试图用git push origin branch-name推送自己的修改.
如果推送失败，则因为远程分支比你的本地更新早，需要先用git pull试图合并。
如果合并有冲突，则需要解决冲突，并在本地提交。再用git push origin branch-name推送。
```

