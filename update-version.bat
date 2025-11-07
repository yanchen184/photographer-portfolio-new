@echo off
REM 版本更新腳本 (Windows)

setlocal enabledelayedexpansion

echo.
echo ============================================
echo 📝 版本更新工具
echo ============================================
echo.

REM 讀取當前版本
for /f "tokens=2" %%i in ('findstr /r "version" package.json ^| findstr /r "[0-9]"') do (
    set CURRENT_VERSION=%%i
    goto :found_version
)

:found_version
echo 當前版本: %CURRENT_VERSION%
echo.

REM 询問新版本
set /p NEW_VERSION="輸入新版本 (例如 1.0.1): "

REM 驗證版本格式 (簡單檢查)
echo %NEW_VERSION% | findstr /r "^[0-9]*\.[0-9]*\.[0-9]*$" >nul
if errorlevel 1 (
    echo.
    echo ❌ 版本格式錯誤，應為 X.Y.Z 格式
    echo.
    pause
    exit /b 1
)

echo.
echo 📝 更新 package.json...

REM 使用 PowerShell 更新版本 (Windows 更穩定的方法)
powershell -Command ^
    "$content = Get-Content 'package.json'; " ^
    "$content = $content -replace '\"version\": \"[^\"]*\"', '\"version\": \"%NEW_VERSION%\"'; " ^
    "Set-Content 'package.json' $content"

echo.
echo 📦 添加變更...
git add .

echo.
echo 💾 提交版本 %NEW_VERSION%...
git commit -m "Update version to %NEW_VERSION%"

echo.
echo 📤 推送到 GitHub...
git push

echo.
echo ============================================
echo ✅ 版本 %NEW_VERSION% 已發布！
echo ============================================
echo.
echo ⏳ GitHub Actions 將自動構建和部署...
echo 📊 進度: https://github.com/yanchez184/photographer-portfolio-new/actions
echo.
pause
