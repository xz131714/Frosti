---
title: "🌟 CloudFlare ImgBed：美化界面✨与无限存储🚀的完美结合！"
description: "Telegram 配合Cloudflare ImgBed：实现无限存储空间的图床！！！"
pubDate: "Jul 23 2025"
image: /image/Course/CloudflareImgBed.png
categories:
  - Course
tags:
  - Cloudflare
  - ImgBed
  - Telegram
badge: Pin
---

<div align="center">
        <img width="80%" alt="CloudFlare ImgBed logo" src="https://img.xiaozhangya.xin/file/Customer/1753263471324_image.png"/>
    <p><em>🗂️ 一个开源的文件托管解决方案，支持 Docker 和无服务器部署，支持 Telegram Bot、Cloudflare R2、S3 等多种存储渠道</em></p>
    <p>
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/README.md">简体中文</a> | 
        <a href="https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/README_en.md">English</a> | 
        <a href="https://cfbed.sanyue.de">官方网站</a>
    </p>
</div>


### 🌐 什么是 CloudFlare ImgBed？

CloudFlare ImgBed 是一个轻量级、开源的图床解决方案，支持通过多种存储渠道进行图像存储。该项目提供了简单的部署方式，支持 Docker 和无服务器（Serverless）部署，使得用户可以在不同的环境下轻松搭建自己的图床系统。

通过集成 Telegram Bot，用户可以实现自动上传功能，将图片上传至 Cloudflare R2 或 S3 存储，实现“无限存储”需求，既方便又高效。

### 🔧 功能特点

- **多存储支持**：支持 Telegram Bot、Cloudflare R2、S3 等多种存储渠道。
- **Docker 支持**：支持 Docker 部署，快速搭建。
- **无服务器支持**：可以在云端环境下无缝部署，避免本地存储的限制。
- **自动化图床**：通过 Telegram Bot 自动上传图片，免去手动上传的麻烦。
- **开源项目**：项目代码完全开源，任何人都可以贡献或修改。

### 🚀 部署步骤

1. **Docker 部署**：

   - 确保已经安装 Docker 和 Docker Compose。

   - 克隆项目：

     ```bash
     git clone https://github.com/MarSeventh/CloudFlare-ImgBed.git
     ```

   - 进入项目目录，运行 Docker Compose：

     ```bash
     cd CloudFlare-ImgBed
     docker-compose up -d
     ```

   - 通过访问 `http://your-domain` 访问图床管理后台。

2. **无服务器部署**：

   - 参考官方文档配置无服务器部署，支持 AWS Lambda 等云端服务。
   - 根据文档中的配置指南，设置环境变量和存储渠道。

### 📸 通过 Telegram 实现图像上传

- 通过 Telegram Bot，用户可以直接将图片发送到 Bot，Bot 会自动将图片上传到配置的存储系统中。您可以参考[官方指南](https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/docs/telegram.md)进行配置。

### 🎨 示例展示

![CloudFlare ImgBed Example](https://github.com/MarSeventh/CloudFlare-ImgBed/blob/main/static/readme/%E6%B5%B7%E6%8A%A5.png)

通过这种方式，您可以轻松管理和分享您的图像资源，无需担心存储限制。

### 💡 常见问题

- **如何修改存储渠道？**

  - 您可以通过修改 `config.json` 文件来更改存储渠道设置，例如切换至 Cloudflare R2 或 S3。

- **如何更新 Docker 镜像？**

  - 通过以下命令拉取最新镜像：

    ```bash
    docker pull marseventh/cloudflare-imgbed
    ```

---

**GitHub 仓库**：[CloudFlare ImgBed GitHub](https://github.com/MarSeventh/CloudFlare-ImgBed)