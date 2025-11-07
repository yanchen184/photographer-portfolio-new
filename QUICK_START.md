# 🚀 快速參考指南

## 初次部署 (一次性)

```bash
# Windows 用戶 - 雙擊執行
deploy.bat

# Mac/Linux 用戶
chmod +x deploy.sh
./deploy.sh
```

**或手動執行：**
```bash
git init
git add .
git commit -m "Initial commit - version 1.0.0"
git remote add origin https://github.com/yanchez184/photographer-portfolio-new.git
git branch -M main
git checkout --orphan gh-pages
git rm -rf .
echo "# GitHub Pages Placeholder" > index.html
git add index.html
git commit -m "Bootstrap gh-pages branch"
git checkout main
git push -u origin main --force
git push -u origin gh-pages --force
```

## 每次更新版本

```bash
# Windows 用戶
update-version.bat

# Mac/Linux 用戶
chmod +x update-version.sh
./update-version.sh

# 或手動執行
git add .
git commit -m "Update version to X.Y.Z"
git push
```

## 監控部署

訪問 GitHub Actions:
https://github.com/yanchez184/photographer-portfolio-new/actions

## 查看你的網站

```
https://yanchen184.github.io/photographer-portfolio-new/
```

## 文件說明

| 文件 | 說明 |
|------|------|
| `deploy.bat` | Windows 初次部署腳本 |
| `deploy.sh` | Mac/Linux 初次部署腳本 |
| `update-version.bat` | Windows 版本更新腳本 |
| `update-version.sh` | Mac/Linux 版本更新腳本 |
| `DEPLOYMENT_GUIDE.md` | 詳細部署指南 |
| `.github/workflows/deploy.yml` | GitHub Actions 配置 |
| `vite.config.js` | Vite 構建配置 (base path 已設定) |

## 關鍵設定已完成

✅ GitHub Actions 工作流已配置  
✅ Vite base path 已設定為 `/photographer-portfolio-new/`  
✅ npm install 和 CI=false 已設定  
✅ 版本管理系統已設置  

## 下一步

1. **執行初次部署腳本**
2. **在 GitHub Settings > Pages 中選擇 "GitHub Actions"**
3. **訪問你的網站並驗證部署成功**
4. **以後每次只需運行版本更新腳本即可**

---

**有問題？** 查看 DEPLOYMENT_GUIDE.md 獲得完整説明。
