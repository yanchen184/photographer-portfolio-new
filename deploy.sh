#!/bin/bash

# Photographer Portfolio - GitHub Pages 部署腳本
# 根據你的 GitHub Pages 最佳實踐

echo "🚀 開始部署 photographer-portfolio-new..."

# 1. 初始化 git (如果還沒初始化)
if [ ! -d ".git" ]; then
    echo "📝 初始化 Git 倉庫..."
    git init
    git config user.email "ci@github.com"
    git config user.name "GitHub Actions"
fi

# 2. 添加所有文件
echo "📦 添加所有文件..."
git add .

# 3. 第一次提交
echo "💾 第一次提交..."
git commit -m "Initial commit - version 1.0.0" || echo "已存在提交"

# 4. 連接到遠程倉庫
echo "🔗 連接到 GitHub..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/yanchen184/photographer-portfolio-new.git

# 5. 確保 main 分支存在
git branch -M main || git checkout -b main

# 6. 建立 gh-pages 分支 (初始化)
echo "🌳 建立 gh-pages 分支..."
git branch -D gh-pages 2>/dev/null || true

# 創建空的 gh-pages 分支
git checkout --orphan gh-pages
echo "# GitHub Pages Placeholder" > index.html
git add index.html
git commit -m "Bootstrap gh-pages branch" || true

# 切回 main
git checkout main

# 7. 推送到 GitHub
echo "📤 推送代碼到 GitHub..."
git push -u origin main --force
git push -u origin gh-pages --force

echo "✅ 部署完成！"
echo ""
echo "📍 你的網站將在以下地址可訪問："
echo "https://yanchen184.github.io/photographer-portfolio-new/"
echo ""
echo "⏳ GitHub Actions 會自動構建和部署。"
echo "📊 進度：https://github.com/yanchen184/photographer-portfolio-new/actions"
