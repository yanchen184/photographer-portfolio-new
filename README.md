# 攝影師作品集 - Photographer Portfolio

一個現代化的攝影師個人作品集網站，採用 React + Vite + Tailwind CSS 技術堆棧。

## ✨ 特性

- 🎬 流暢的頁面過場動畫 (2秒梯形滑動效果)
- 🎨 優雅的設計風格 (靈感來自 SIRUDA)
- 📱 完全響應式設計
- 🚀 快速的 Vite 構建系統
- 🎭 GSAP 動畫庫支持
- 🌐 中英文雙語支持

## 🎯 首頁設計亮點

- **大梯形過場動畫**: 從右到左 2 秒滑過
- **白色梯形側邊欄**: 固定在左側，包含導覽菜單
- **深色背景區域**: 展示攝影作品圖片
- **分層淡入動畫**: 內容依序出現，創造視覺層次感

## 🛠 技術棧

- **前端框架**: React 19
- **構建工具**: Vite 7
- **樣式**: Tailwind CSS
- **動畫**: GSAP 3
- **圖標**: React Icons
- **部署**: GitHub Pages + GitHub Actions

## 📦 安裝

```bash
# 克隆專案
git clone https://github.com/YOUR_USERNAME/photographer-portfolio-new.git

# 進入專案目錄
cd photographer-portfolio-new

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 構建生產版本
npm run build

# 預覽構建結果
npm run preview
```

## 🚀 部署

詳細的部署步驟請參考 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

快速部署到 GitHub Pages:

1. 建立公開的 GitHub repository
2. 推送代碼到 main 分支
3. 在 Repository Settings > Pages 中啟用 GitHub Actions
4. 完成！網站會自動部署到 `https://YOUR_USERNAME.github.io/photographer-portfolio-new/`

## 📁 專案結構

```
photographer-portfolio-new/
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   └── PageTransition.jsx      # 過場動畫組件
│   │   ├── DiagonalSidebar.jsx         # 左邊梯形側邊欄
│   │   ├── Hero.jsx                    # 首頁英雄區
│   │   ├── Header.jsx                  # 頂部導覽
│   │   ├── About.jsx                   # 關於區段
│   │   ├── Portfolio.jsx               # 作品集區段
│   │   ├── Contact.jsx                 # 聯絡區段
│   │   └── Footer.jsx                  # 頁尾
│   ├── App.jsx                         # 主應用組件
│   ├── main.jsx                        # 應用進入點
│   └── index.css                       # 全域樣式
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Actions 工作流
├── public/                             # 靜態資源
├── vite.config.js                      # Vite 設定
├── tailwind.config.js                  # Tailwind 設定
├── postcss.config.js                   # PostCSS 設定
└── package.json                        # 依賴管理

```

## 🎨 自定義

### 修改顏色

編輯 `src/components/*.jsx` 中的 Tailwind CSS class：

- 主色調 (紅色): `bg-red-600` → 改成其他顏色
- 背景 (深灰): `bg-gray-900` → 改成其他顏色
- 文字 (黑/白): `text-gray-900` / `text-white` → 改成其他顏色

### 替換圖片

在 `src/components/Hero.jsx` 中修改:

```javascript
backgroundImage: 'url(YOUR_IMAGE_URL)',
```

### 更新菜單項目

編輯 `src/components/DiagonalSidebar.jsx` 中的 `menuItems` 陣列。

## 📞 聯絡

如有任何問題或建議，歡迎提交 Issue 或 Pull Request！

## 📄 授權

MIT License - 詳見 LICENSE 檔案

---

**版本**: 1.0.0  
**最後更新**: 2024 年 11 月
