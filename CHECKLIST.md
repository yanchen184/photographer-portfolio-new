# ✅ 部署檢查清單

## 已完成的配置

### 📦 專案設置
- [x] React + Vite 項目結構
- [x] Tailwind CSS 已配置
- [x] GSAP 動畫庫已集成
- [x] 中英文雙語支持
- [x] 版本號設置為 1.0.0

### 🎨 首頁設計
- [x] 梯形過場動畫 (右到左, 2秒)
- [x] 白色梯形側邊欄固定
- [x] 深色背景區域
- [x] 分層淡入動畫
- [x] 響應式設計

### 🚀 GitHub Pages 準備
- [x] `.github/workflows/deploy.yml` 已創建
- [x] Vite base path 設置為 `/photographer-portfolio-new/`
- [x] npm install 配置
- [x] CI=false 環境變數設置
- [x] GitHub Pages artifacts 配置

### 📝 部署腳本
- [x] `deploy.bat` (Windows)
- [x] `deploy.sh` (Mac/Linux)
- [x] `update-version.bat` (版本更新)
- [x] `update-version.sh` (版本更新)

### 📚 文檔
- [x] `README.md` - 項目說明
- [x] `DEPLOYMENT_GUIDE.md` - 詳細部署指南
- [x] `QUICK_START.md` - 快速參考
- [x] `CHECKLIST.md` - 此檢查清單

## 待執行的手動步驟

### 第 1 步：初次部署
- [ ] Windows 用戶：雙擊執行 `deploy.bat`
- [ ] Mac/Linux 用戶：執行 `./deploy.sh`

或手動執行第 1-4 步（見 DEPLOYMENT_GUIDE.md）

### 第 2 步：GitHub 設置
- [ ] 進入 https://github.com/yanchez184/photographer-portfolio-new/settings/pages
- [ ] Source 選擇 "GitHub Actions"
- [ ] 保存設置

### 第 3 步：驗證部署
- [ ] 等待 GitHub Actions 執行完成 (約 1-2 分鐘)
- [ ] 訪問 https://yanchez184.github.io/photographer-portfolio-new/
- [ ] 確認網站正常顯示

### 第 4 步：後續更新
- [ ] 修改代碼後執行 `update-version.bat` (Windows)
- [ ] 或執行 `./update-version.sh` (Mac/Linux)
- [ ] 或手動執行 `git add . && git commit && git push`

## 🔍 常見問題排查

### 部署腳本失敗
- [ ] 確認在專案根目錄執行
- [ ] Windows: 使用 PowerShell 或 Git Bash（非 CMD）
- [ ] 檢查 Git 是否已安裝: `git --version`

### GitHub Actions 失敗
- [ ] 進入 https://github.com/yanchez184/photographer-portfolio-new/actions
- [ ] 檢查最新的 workflow 執行日誌
- [ ] 確認 npm install 成功
- [ ] 確認 npm run build 沒有錯誤

### 網站顯示 404
- [ ] 確保 vite.config.js 中 `base: '/photographer-portfolio-new/'` 正確
- [ ] 清除瀏覽器快取 (Ctrl+Shift+Delete)
- [ ] 等待 2-3 分鐘，CDN 可能需要時間更新

### 頁面樣式不正確
- [ ] 在 DevTools (F12) > Network 檢查資源加載路徑
- [ ] 確認 CSS 文件從 `/photographer-portfolio-new/` 路徑加載
- [ ] 不要使用 `http://` 而應使用 `https://`

## 📊 部署進度跟蹤

**部署狀態：** https://github.com/yanchez184/photographer-portfolio-new/actions

**網站地址：** https://yanchez184.github.io/photographer-portfolio-new/

## 💡 重要提醒

> ⚠️ **關鍵步驟** - 根據你的 GitHub Pages 經驗，部署流程：
> 1. Bootstrap gh-pages 分支（init-once）
> 2. 在 GitHub Settings 選擇 "GitHub Actions"
> 3. 之後自動化處理所有部署

## 📋 版本歷史

| 版本 | 日期 | 說明 |
|------|------|------|
| 1.0.0 | 2024-11 | 初始版本 - 首頁完成 |
| - | - | 待更新... |

---

**上次檢查時間：** 2024-11-07  
**檢查者：** Claude  
**狀態：** ✅ 所有配置完成，等待初次部署
