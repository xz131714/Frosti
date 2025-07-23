---
title: "🌟 OpenList本地部署（Windows）！"
description: "在本地电脑部署一个超级网盘集结器，当然也包含本机存储！"
pubDate: "Jul 23 2025"
image: https://picbed.xiaozhangya.xin/picbed/20250710225034957.jpg
categories:
  - Course
tags:
  - OpenList
  - 网盘
badge: Pin
---
# 🎉 OpenList 本地部署指南（Windows）

## 📁 1. 文件准备

> ⚠️ 注意：原 Alist 项目已被出售，存在数据安全隐患，推荐使用 **OpenList** 替代。

🔗 **官方下载地址：**
[👉 OpenList Releases（GitHub）](https://github.com/OpenListTeam/OpenList/releases)

📌 请根据你的 Windows 系统架构选择对应版本下载，**推荐默认下载后缀为 `amd64` 的 ZIP 文件**。

![下载包选择示意图](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506141123097.png)

---

## 🚀 2. 启动本地服务

1. 解压下载的 ZIP 文件，**默认仅包含 `openlist.exe` 文件**。
   启动后会自动生成 `data` 目录，其他脚本为后续设置自启动使用。

   ![解压目录结构](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506141123096.png)

2. 进入该目录，在地址栏输入 `cmd` 回车，打开命令行窗口，执行以下命令启动服务：

   ```bash
   openlist.exe server
   # 或者
   openlist server
   ```

3. 启动成功后，命令行窗口将输出如下内容：

   ![服务启动效果](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506141123095.png)

---

## 🌐 3. 访问 OpenList UI 页面

🔗 浏览器输入以下任一地址访问 Web UI：

```
http://localhost:5244
http://127.0.0.1:5244
```

📌 **默认账号密码如下：**

* **用户名：** `admin`
* **密码：** 启动服务时生成（可后续修改）

![登录页面](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506141123094.png)

📂 登录后即可看到已挂载的网盘、本机存储等资源：

![UI展示图](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506141123102.png)

⚙️ 更多配置可在页面底部的管理栏中完成，如：存储添加、用户管理等。

📖 **官方文档（强烈推荐查阅）：**
[📘 OpenList 使用文档](https://docs.oplist.org/zh/)

![文档图示](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506141123100.png)

---

## 🔄 4. 设置开机自启动

📦 **自启动脚本下载地址：**
[📥 点击下载（run.vbs 脚本）](https://openlist.xiaozhangya.xin/software/OpenList%E8%87%AA%E5%90%AF%E5%8A%A8)

📌 步骤如下：

1. 将下载的脚本放入 **OpenList 安装目录**。
2. 为 `run.vbs` 创建快捷方式。
3. 按下 `Win + R`，输入 `shell:startup` 并回车。
4. 将快捷方式拖入打开的启动目录中：

   ![自启动设置步骤图](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506141123099.png)

---

## ✅ 部署完成！

🎉 至此，OpenList 本地部署已经全部完成，快去享受属于自己的私有网盘服务吧！

![结尾图](https://cdn.jsdelivr.net/gh/xz131714/PicBed@main/202506141123098.png)
