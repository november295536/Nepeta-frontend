# 貓薄荷
網路上其實到處都有寫好的 blog 系統，如果單純只是想不依賴平台的創造一個屬於自己的空間，實在沒有必要這麼麻煩，所以我寫這個系統是有其他目標的，畢竟按照功能的完整性來講，我不可能做到像網路上的其他解決方案那樣完整，因為我沒有足夠的時間。貓薄荷專案有三個目標，按照時間排列如下:
- 短期目標: 藉此驗證自己在後端領域所學。
- 中期目標: 有一個可用的 blog 系統，讓我不用依賴平台。
- 長期目標: 做成一個教學專案，讓想學程式的人可以當成教材來使用。

之所以會想做成教學的專案，主要原因是我週遭好多人想要轉行當軟體工程師，雖然我不能算一個很厲害的工程師，但我也希望自己有能力可以幫助他們，可以說第三個目標才是激發我寫這個專案的契機，其他目標都是後來才慢慢浮現出來的。

## 技術選型
我從三個面向來考量貓薄荷專案的技術選擇，分別是專案目的、參與人員、技術特性。

這個專案的目的前面有大致說過，長期來說是希望發展程一個教育型的專案的，考量到當今前後端分離的架構趨勢，前端的技術選擇必定會在 Vue、React、Angular 這三者之中擇其一。以技術特性來說，React 和 Vue 是相對更多人使用的框架，這兩者的技術成熟度、社群的活躍程度、框架的演化等指標都相當的優秀，在易用性和學習成本上，以我個人的經驗來說是比較偏向 Vue 的。進一步考量到本專案的參與人員可能長期來看也只會有我一個人而已，而我已經決定把更多的時間投入在後端技術的研究而不是深入鑽研前端，選擇一個我熟悉的框架來進行介紹是更方便且對我來說時間成本較低的選擇，真的發展到具有教育功能的時候，我也有相關的工程經驗來確保一定的品質。

基於上述的考量，我使用我具有工程經驗的 Vue 來當作前端的框架。這絕對不會是一個 blog 系統的最佳實踐，但我相信在我繼續投入之後，有機會發展成具有一定教育價值的教材。

## 版本控制
版本控制使用 Git + Github，沒有什麼特別的，主要講一下開發管理的策略。本專案主要分成兩個 branch 來進行維護，開發中以及最新的功能會放在 master branch 中，線上運行的則是 production branch 版本。因為目前為止沒有多人協作的問題，而且一次通常只專注於一件事情(一個新功能或重構)，所以開發工作會直接在 master 上進行，除非是有比較大的一個功能才會拆分出其他的分支。 

如果想看當前 production 分支運行的成果，可以直接參考我的部落格 https://blog.nov29.one 

## 前端 TODO

- [ ] Category System
- [ ] Tag system
- [ ] UI re-design
- [ ] 拆分管理員到獨立專案
- [ ] jwt token auto renew

## 目錄結構
這邊只列出 Nuxt 架構中沒有的部份。如果想知道 Nuxt 的運作機制，可以參考 [Nuxt.js docs](https://nuxtjs.org)。
```
root
├── .github
├── api
├── tool
├── nuxt-deploy.sh
└── Makefile
```
1. root
   
   基本上和專案有關的設定檔和一些命令行工具都直接放在這裡，包含了 nuxt 自己的 nuxt.config.js 等，還有我自己寫的有關於部屬方面的 Makefile 、ecosysyem.config.js 等文件。

2. .github

    存放 github action 的配置文件。

3. api

    這邊存放的是和後端交互的 api 資料和配置文件。

4. tool

    這裡放的是一些工具函數，一些第三方庫的初始化也會在這邊進行之後再引入專案。

## RESTful API 定義
請移駕後端的 [README](https://github.com/november295536/Cataria-backend) 頁。
## 啟動方式

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
