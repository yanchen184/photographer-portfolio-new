#!/bin/bash

# 版本更新和提交腳本

# 顯示當前版本
CURRENT_VERSION=$(grep '"version"' package.json | grep -oP '\d+\.\d+\.\d+')
echo "當前版本: $CURRENT_VERSION"
echo ""

# 询问新版本
read -p "輸入新版本 (例如 1.0.1): " NEW_VERSION

# 验证版本格式
if ! [[ $NEW_VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "❌ 版本格式錯誤，應為 X.Y.Z 格式"
    exit 1
fi

# 更新 package.json
echo "📝 更新 package.json..."
sed -i "s/\"version\": \".*\"/\"version\": \"$NEW_VERSION\"/" package.json

# 添加文件
echo "📦 添加變更..."
git add .

# 提交
echo "💾 提交版本 $NEW_VERSION..."
git commit -m "Update version to $NEW_VERSION"

# 推送
echo "📤 推送到 GitHub..."
git push

echo ""
echo "✅ 版本 $NEW_VERSION 已發布！"
echo "⏳ GitHub Actions 將自動構建和部署..."
echo "📊 進度: https://github.com/yanchez184/photographer-portfolio-new/actions"
