# GitHub Pages 部署指南 - 攝影師作品集

## 📋 重要！按照以下步驟操作

根據你之前的 GitHub Pages 部署經驗，我們需要先 **bootstrap** gh-pages 分支，然後才能自動化部署。

## 🚀 快速部署 (推薦)

### 方法 1: 使用自動腳本 (最簡單)

**Windows 用戶：**
```bash
# 在專案根目錄執行
deploy.bat
```

**Mac/Linux 用戶：**
```bash
# 給予執行權限
chmod +x deploy.sh

# 執行腳本
./deploy.sh
```

### 方法 2: 手動步驟

如果自動腳本出問題，按照以下步驟手動執行：

#### 第 1 步：初始化 Git

```bash
cd D:\frontend\photographer-portfolio-new

# 初始化 git
git init

# 設定 git 用戶信息
git config user.email "ci@github.com"
git config user.name "GitHub Actions"

# 添加所有文件
git add .

# 第一次提交
git commit -m "Initial commit - version 1.0.0"
```

#### 第 2 步：連接到 GitHub

```bash
# 添加遠程倉庫
git remote add origin https://github.com/yanchen184/photographer-portfolio-new.git

# 確保分支名為 main
git branch -M main
```

#### 第 3 步：初始化 gh-pages 分支 (關鍵!)

這是你必須做的關鍵步驟，才能讓 GitHub Pages 正常工作：

```bash
# 創建孤立的 gh-pages 分支
git checkout --orphan gh-pages

# 清空所有文件（因為我們只要一個佔位符）
git rm -rf .

# 創建佔位符
echo "# GitHub Pages Placeholder" > index.html

# 提交佔位符
git add index.html
git commit -m "Bootstrap gh-pages branch"

# 切回 main 分支
git checkout main
```

#### 第 4 步：推送到 GitHub

```bash
# 推送 main 分支
git push -u origin main --force

# 推送 gh-pages 分支
git push -u origin gh-pages --force
```

## 🔧 在 GitHub 上設定 Pages

1. 進入 https://github.com/yanchen184/photographer-portfolio-new
2. 點擊 **Settings**
3. 左側菜單選擇 **Pages**
4. 在 "Source" 下拉菜單選擇 **GitHub Actions**
5. 保存設定

## ⏳ 自動部署流程

完成上述步驟後，以後每次你推送代碼到 main 分支：

```
main 分支 push
     ↓
GitHub Actions 觸發
     ↓
npm install （使用 npm install 而非 npm ci）
     ↓
npm run build （設定 CI=false 避免警告被視為錯誤）
     ↓
自動部署到 gh-pages 分支
     ↓
GitHub Pages 更新
```

## 📍 你的網站 URL

```
https://yanchen184.github.io/photographer-portfolio-new/
```

部署完成後，訪問上面的 URL 應該就能看到你的網站！

## 📊 監控部署進度

每次推送後，你可以在這裡看到部署進度：

https://github.com/yanchen184/photographer-portfolio-new/actions

## 🔄 更新版本

每次更新時的步驟：

```bash
# 1. 修改代碼

# 2. 更新版本號 (可選但推薦)
# 編輯 package.json，例如改成 1.0.1

# 3. 提交並推送
git add .
git commit -m "Update version to 1.0.1"
git push

# GitHub Actions 會自動構建和部署！
```

## ⚠️ 常見問題

### 問題 1: "fatal: origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/yanchez184/photographer-portfolio-new.git
```

### 問題 2: "failed to push some refs"
```bash
# 使用 --force 強制推送
git push -u origin main --force
git push -u origin gh-pages --force
```

### 問題 3: 網站顯示 404
- 確保 vite.config.js 中的 `base: '/photographer-portfolio-new/'` 正確
- 等待 GitHub Actions 完成部署 (通常 1-2 分鐘)
- 檢查 Pages 設定是否選擇 "GitHub Actions" 為 Source

### 問題 4: 頁面樣式不正確
- 清除瀏覽器快取：Ctrl+Shift+Delete
- 檢查 Network 標籤確認資源是否從正確的路徑載入

## 🎯 完整工作流程確認清單

- [ ] 執行部署腳本或手動步驟 1-4
- [ ] 在 GitHub Pages 設定中選擇 "GitHub Actions"
- [ ] 訪問 https://yanchen184.github.io/photographer-portfolio-new/
- [ ] 確認網站正常顯示
- [ ] 以後每次只需 `git push` 即可自動部署

## 📚 相關資源

- [GitHub Pages 官方文件](https://docs.github.com/en/pages)
- [GitHub Actions 官方文件](https://docs.github.com/en/actions)
- [Vite GitHub Pages 部署指南](https://vitejs.dev/guide/static-deploy.html#github-pages)

---

**記住關鍵點：**
1. ✅ 先初始化 gh-pages 分支（bootstrap）
2. ✅ GitHub Pages 設定選擇 "GitHub Actions"
3. ✅ vite.config.js 必須設定正確的 base 路徑
4. ✅ 之後每次 push 都會自動部署
