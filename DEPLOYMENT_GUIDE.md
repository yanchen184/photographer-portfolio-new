# GitHub 部署指南 - 攝影師作品集

## 📋 預備條件
- GitHub 帳號
- Git 已安裝
- Node.js 已安裝

## 🚀 部署步驟

### 1. 在 GitHub 建立新的 Repository
- 前往 https://github.com/new
- 輸入 Repository 名稱：`photographer-portfolio-new`
- 選擇 **Public** (公開)
- 不要初始化 README、.gitignore 或 license
- 點擊 "Create repository"

### 2. 初始化 Local Git Repository
在專案根目錄執行：

```bash
git init
git add .
git commit -m "Initial commit - version 1.0.0"
```

### 3. 連接到 GitHub Repository
將 `YOUR_USERNAME` 替換成你的 GitHub 用戶名：

```bash
git remote add origin https://github.com/YOUR_USERNAME/photographer-portfolio-new.git
git branch -M main
git push -u origin main
```

### 4. 啟用 GitHub Pages

進入 Repository 設定：
1. 點擊 "Settings" 標籤
2. 左側菜單選擇 "Pages"
3. 在 "Source" 下選擇 "GitHub Actions"
4. 保存設定

### 5. 首次部署

GitHub Actions 會自動在你推送代碼時執行：
- 自動安裝依賴 (`npm install`)
- 自動構建項目 (`npm run build`)
- 自動部署到 GitHub Pages

### 6. 檢查部署狀態

1. 進入 Repository 首頁
2. 點擊 "Actions" 標籤
3. 查看 "Deploy to GitHub Pages" workflow 的執行狀態

### 7. 訪問你的網站

部署完成後，你的網站將在以下地址可訪問：

```
https://YOUR_USERNAME.github.io/photographer-portfolio-new/
```

## 📝 後續更新版本

每次有新的更新時，只需執行：

```bash
# 修改 package.json 中的 version 號
# 例如: "version": "1.0.1"

git add .
git commit -m "Update version to 1.0.1"
git push
```

GitHub Actions 會自動執行部署流程。

## 🔧 故障排除

**問題 1：部署失敗**
- 檢查 GitHub Actions 中的錯誤日誌
- 確保 CI=false 環境變數已設置
- 檢查 npm install 是否成功

**問題 2：網站顯示 404**
- 確保 vite.config.js 中的 `base: '/photographer-portfolio-new/'` 正確
- 等待 GitHub Actions 部署完成（通常需要 1-2 分鐘）

**問題 3：頁面樣式不正確**
- 清除瀏覽器快取（Ctrl+Shift+Delete）
- 確保所有 CSS 資源已正確載入

## 📚 相關資源

- [GitHub Pages 文件](https://docs.github.com/en/pages)
- [GitHub Actions 文件](https://docs.github.com/en/actions)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html#github-pages)
