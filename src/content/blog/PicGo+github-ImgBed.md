---
title: "📦 PicGo + GitHub 图床搭建指南"
description: "PicGO 配合Github仓库：实现免费图床！！！"
pubDate: "Jul 23 2025"
image: https://picbed.xiaozhangya.xin/picbed/20250706144128379.png
categories:
  - Course
tags:
  - GitHub
  - ImgBed
  - PicGo
badge: Pin
---
搭配使用 **PicGo** 和 **GitHub**，可构建一个稳定、免费的图床，非常适合博客、文档插图等静态资源管理。

------

⚠️ <span style="color:#e2d849; font-weight: bold;">注：GitHub 可能需科学上网才能访问</span>  
<span style="color:#ef475d; font-weight: bold;">科学上网方面可单独联系我（完全无偿）</span>  
💬 **WeChat：** <span style="color:#1DA1F2; font-weight:bold;">tzyy131714</span>  

## 🚧 流程概述

1. **创建 GitHub 仓库**
2. **安装 PicGo 客户端**
3. **获取 GitHub Token**
4. **PicGo 配置 GitHub 图床**
5. **上传测试，自动生成图片链接**

------

## 🔧 准备工作

- ✅ 一个 GitHub 账号：👉 [https://github.com](https://github.com/)
- ✅ 一个公开仓库（建议命名为 `picbed` 或类似）

------

## 🛠️ 安装 PicGo

- 主下载地址：👉 [**PicGo Releases**](https://github.com/Molunerfinn/PicGo/releases)
- 备用下载： 👉 [**点击下载 PicGo 2.3.1 x64**](https://op.xiaozhangya.xin/software/PicGo-Setup-2.3.1-x64.exe)
- 支持系统：**Windows / macOS / Linux**

------

## ⚙️ 配置 GitHub 图床

1. 打开 **PicGo** → 左侧选择【图床设置】 → 添加图床类型：**GitHub**
2. 填写以下信息：

| **设置项** | **示例**                                                     |
| ---------- | ------------------------------------------------------------ |
| 仓库名     | `yourusername/picbed`                                        |
| 分支名     | `main`（或 `master`）                                        |
| Token      | [生成 GitHub Token](https://github.com/settings/tokens)，勾选 `repo` 权限 |
| 存储路径   | `img/`（可选）                                               |
| 自定义域名 | `https://raw.githubusercontent.com`（或 CDN 加速域名）       |

1. 设置完毕后，点击「**设为默认图床**」，并保存配置 ✅

------

## 🚀 上传使用

- 打开 **PicGo 主界面** → 拖拽图片或点击选择图片上传
- 上传成功后，自动复制 Markdown 格式链接到剪贴板：

```markdown
![image](https://raw.githubusercontent.com/yourusername/picbed/main/img/yourimage.png)
```


📌 推荐使用 **jsDelivr CDN 加速**：

```markdown
https://cdn.jsdelivr.net/gh/yourusername/picbed@main/img/yourimage.png
```

------

## 📁 实操截图

### 1. GitHub 注册与创建仓库

👉 [**点击注册 GitHub 账号**](https://github.com/signup)

![注册账号](https://picbed.xiaozhangya.xin/picbed/picgo-github/20250708233052803.png)

![创建仓库](https://picbed.xiaozhangya.xin/picbed/picgo-github/20250708234253092.png)

------

### 2. 创建 GitHub Token

![生成 Token](https://picbed.xiaozhangya.xin/picbed/picgo-github/20250709000417470.png)

------

### 3. PicGo GitHub 图床配置

📁 添加图床配置：

![添加图床](https://picbed.xiaozhangya.xin/picbed/picgo-github/20250709001039193.png)

📝 填写配置信息：

![配置内容](https://picbed.xiaozhangya.xin/picbed/picgo-github/20250709002102369.png)

💾 保存后查看图床列表：

![保存配置](https://picbed.xiaozhangya.xin/picbed/picgo-github/20250709004155718.png)

------

## 🌐 GitHub Pages 简介（可选加速）

[**GitHub Pages**](https://pages.github.com/) 是 GitHub 提供的免费静态网站托管服务，可用于自定义域名/CDN 加速等。

### ✅ 特点

- 🆓 免费的子域名（如：`username.github.io`）
- 🔧 支持绑定自定义域名（如 `www.example.com`）
- ⚙️ 支持 Jekyll 等静态站点生成器
- 🚀 推送即部署，无需服务器配置

### 🚀 启用方法

1. 创建公开仓库 `yourname.github.io`
2. 上传 HTML/CSS/JS 等网页文件
3. 打开仓库 → `Settings` → `Pages`
4. 选择发布源（如 `main` 分支 `/root` 路径）
5. 稍等几秒，即可访问公开站点！

📸 页面配置示意：

![GitHub Pages 设置](https://picbed.xiaozhangya.xin/picbed/picgo-github/20250709003908369.png)

------

🎉 至此，**PicGo + GitHub 图床搭建完成！**

如需进一步优化（CDN、备份、自动命名等），可探索 PicGo 插件或绑定自定义域名。

🚀 欢迎将此方案用于博客、笔记、技术文档等静态资源托管！