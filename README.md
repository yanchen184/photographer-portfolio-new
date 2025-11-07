# 攝影師形象網站 | Photographer Portfolio

一個現代化的攝影師形象網站，以簡約專業的設計風格呈現攝影作品及服務。參考 Siruda 企業官網的設計理念，採用 GSAP 動畫庫打造流暢的互動體驗。

## 特色

- 🎨 **簡約專業設計** - 白色、深灰色主題，企業級風格
- 🌍 **多語言支援** - 中文/英文完整支援
- 📱 **100% 響應式** - 完美適配手機、平板、桌面
- ⚡ **GSAP ScrollTrigger** - 高效的滾動動畫
- 🎬 **流暢動畫** - 元素進入時的淡入效果
- 📧 **聯絡表單** - 完整的訊息提交功能
- 🚀 **高性能** - Vite 快速開發和構建

## 技術棧

- **React 19** - UI 框架
- **Vite** - 快速構建工具
- **Tailwind CSS 3.4** - 樣式框架
- **GSAP 3.12** - 動畫庫
- **React Icons 5.5** - 圖標庫

## 項目結構

```
src/
├── components/
│   ├── Header.jsx         # 固定導航欄 + 多語言切換
│   ├── Hero.jsx          # 英雄部分 + GSAP 動畫
│   ├── About.jsx         # 關於部分 + ScrollTrigger 動畫
│   ├── Portfolio.jsx     # 作品集 + 分類篩選
│   ├── Contact.jsx       # 聯絡表單
│   └── Footer.jsx        # 社交媒體 + 連結
├── App.jsx               # 主應用程式
├── main.jsx              # 入口點
└── index.css             # 全局樣式
```

## 安裝 & 運行

### 1. 安裝依賴
```bash
npm install
```

### 2. 開發模式
```bash
npm run dev
```

開發伺服器將在 `http://localhost:3000` 啟動

### 3. 構建
```bash
npm run build
```

構建的文件將輸出到 `dist` 文件夾

### 4. 預覽構建
```bash
npm run preview
```

## 功能詳解

### 1️⃣ 導航欄 (Header)
- ✅ 固定在頂部
- ✅ 桌面版 - 完整菜單
- ✅ 手機版 - 漢堡菜單
- ✅ 多語言切換按鈕
- ✅ 平滑滾動連結

### 2️⃣ 英雄部分 (Hero)
- ✅ 大標題 + 副標題
- ✅ GSAP 入場動畫
- ✅ 兩個 CTA 按鈕
- ✅ 裝飾性背景

### 3️⃣ 關於部分 (About)
- ✅ ScrollTrigger 動畫
- ✅ 攝影師介紹
- ✅ 三個特點卡片
- ✅ 響應式版面

### 4️⃣ 作品集 (Portfolio)
- ✅ 六個作品項目
- ✅ 分類篩選（全部、婚禮、人像、商業）
- ✅ 平滑的分類轉換
- ✅ Hover 效果

### 5️⃣ 聯絡部分 (Contact)
- ✅ 三個聯絡方式卡片
- ✅ 完整的聯絡表單
- ✅ 表單驗證
- ✅ 成功提交反饋

### 6️⃣ 頁腳 (Footer)
- ✅ 品牌信息
- ✅ 快速連結
- ✅ 聯絡資訊
- ✅ 社交媒體連結

## 自訂義

### 修改顏色主題
編輯 `tailwind.config.js` 或直接修改組件的 className

主要顏色：
- 主色: `bg-gray-900` (深灰色)
- 背景: `bg-white` / `bg-gray-50`
- 文字: `text-gray-900` / `text-gray-600`

### 修改文本
所有文本都在各個組件的 `translations` 物件中，方便多語言編輯

### 修改動畫
使用 GSAP 的 `ScrollTrigger` 自訂滾動動畫，詳見各組件的 `useEffect`

### 添加背景視頻
在 Hero.jsx 中添加：
```jsx
<video autoplay muted loop className="absolute inset-0">
  <source src="your-video.mp4" type="video/mp4" />
</video>
```

## 瀏覽器支援

- ✅ Chrome (最新版本)
- ✅ Firefox (最新版本)
- ✅ Safari (最新版本)
- ✅ Edge (最新版本)

## 部署

### GitHub Pages
1. 推送到 GitHub
2. 在倉庫設定中啟用 GitHub Pages
3. 設置主分支為來源

### Netlify
```bash
npm run build
# 上傳 dist 文件夾到 Netlify
```

### Vercel
```bash
npm run build
# 連接 Vercel 自動部署
```

## 性能優化

- ✅ 圖片懶加載 (可選)
- ✅ GSAP 動畫優化
- ✅ Tailwind CSS 樹搖
- ✅ 代碼分割
- ✅ 快速首屏加載

## 常見問題

### Q: 如何修改公司名稱？
A: 在 Header.jsx 和 Footer.jsx 中修改 `攝影師` 文字

### Q: 如何添加實際圖片？
A: 在 `public` 文件夾放置圖片，然後在組件中引用

### Q: 動畫太快/太慢？
A: 修改組件中 GSAP `duration` 值

### Q: 如何集成真實後端 API？
A: 在 Contact.jsx 的 `handleSubmit` 中添加 fetch 請求

## 授權

MIT License

## 作者

Created with ❤️ for photographers

---

## 版本記錄

### v0.0.1
- ✅ 初始版本發佈
- ✅ 完成所有基本功能
- ✅ 多語言支援
- ✅ GSAP 動畫集成

---

**需要幫助？** 查看 [Vite 文檔](https://vitejs.dev) 或 [GSAP 文檔](https://greensock.com/docs)
