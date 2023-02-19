# Gamania - react-starter

2023 前端 React Starter

## 簡介

經由 `create-react-app` 產生的專案，內建 `react` 開發用環境。

## 資源介紹

1. 建置工具: 使用 `react-app-rewired` 調整 `webpack` config
2. 專案架構: `react-router-dom`、`redux`
3. 開發語言: `typescript`、`sass`
4. 測試工具: `storybook`、`jest`、`cypress`

## 專案架構

此架構是參考 [Atom design](http://bradfrost.com/blog/post/atomic-web-design/) 和 [Fractal Project Structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure) 所整理出來

> 註： atom design 裡的 Template 是這裡的 Layout，而 Page 則是在 routes 資料夾下

以下是這個專案的各資料夾定義

- src
  - components
    - **atom**: 原子 component ，不可再分割的基本 component， ex `button`, `label`, `html tag`
    - **molecules**: 分子 component，由原子組成的基本 component， ex `地址輸入欄位` (包含 `label`, `input`, `button` 等)
    - **organisms**: 組織 component，由原子、分子組成的多功能 component， ex `header`, `footer`
  - assets
  - **layouts**: 放置版型的地方，提供不同版型給許多頁面
  * **models**: 存放 reducer 和 action 的地方
  * **routes**: 定義每一頁的 routing 規則

## npm script

- **npm run start**: 啟動開發環境
- **npm run build**: 打包正式環境專案
- **npm run test**: 跑 jest 測試
- **npm run lint**: 跑 eslint 跟 stylelint 檢查 coding style
- **npm run commit**: 跑 git-cz 提交

## Contribution

commit message 使用 [commitizen](http://commitizen.github.io/cz-cli/) 輔助產生 commit message

- 跑 eslint 跟 stylelint 檢查 coding style `npm run lint`
- 跑 jest 測試 `npm test`
- 加入修改的檔案 `git add .`
- 產生 commit message `npm run commit`
