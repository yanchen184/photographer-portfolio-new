@echo off
REM Photographer Portfolio - GitHub Pages 部署腳本 (Windows)

echo.
echo ============================================
echo 🚀 photographer-portfolio-new 部署開始
echo ============================================
echo.

REM 1. 檢查 git 是否已初始化
if not exist .git (
    echo 📝 初始化 Git 倉庫...
    git init
    git config user.email "ci@github.com"
    git config user.name "GitHub Actions"
) else (
    echo ✓ Git 倉庫已存在
)

REM 2. 添加所有文件
echo.
echo 📦 添加所有文件...
git add .

REM 3. 提交
echo.
echo 💾 提交更改...
git commit -m "Initial commit - version 1.0.0" 2>nul || echo ✓ 已是最新提交

REM 4. 設定遠程倉庫
echo.
echo 🔗 連接到 GitHub...
for /f %%i in ('git remote') do git remote remove %%i 2>nul
git remote add origin https://github.com/yanchen184/photographer-portfolio-new.git

REM 5. 重命名分支為 main
echo.
echo 🌳 準備分支...
git branch -M main 2>nul || git checkout -b main

REM 6. 建立 gh-pages 分支
echo.
echo 🌳 初始化 gh-pages 分支...
git branch -D gh-pages 2>nul || echo.

REM 創建佔位符並提交到 gh-pages
git checkout --orphan gh-pages
echo # GitHub Pages Placeholder > index.html
git add index.html
git commit -m "Bootstrap gh-pages branch" 2>nul || echo ✓ gh-pages 已初始化

REM 切回 main
git checkout main

REM 7. 推送到 GitHub
echo.
echo 📤 推送代碼到 GitHub...
git push -u origin main --force
git push -u origin gh-pages --force

echo.
echo ============================================
echo ✅ 部署完成！
echo ============================================
echo.
echo 📍 你的網站將在以下地址可訪問：
echo https://yanchen184.github.io/photographer-portfolio-new/
echo.
echo ⏳ GitHub Actions 會自動構建和部署
echo 📊 進度：https://github.com/yanchen184/photographer-portfolio-new/actions
echo.
pause
