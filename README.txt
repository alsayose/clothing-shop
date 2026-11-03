服飾店網站使用說明
==================

【資料夾內容】
index.html        首頁（網站入口，檔名不要改）
css/style.css     外觀樣式
js/config.js      店名、LINE、Instagram、電話、運費設定（上傳前先改這裡）
js/products.js    商品資料（新增、修改商品改這裡）
js/app.js         網站功能（篩選、購物車、訂單），不需要改
images/           商品圖片，目前是示範圖，之後換成真實照片

【一、改成你自己的資料】
1. 用記事本或 VS Code 開啟 js/config.js，把店名、LINE ID、Instagram、電話、信箱改成你的。
2. 開啟 js/products.js，照格式修改商品名稱、價格、顏色、尺寸、說明。

【二、換成真實商品照片】
1. 把照片放進 images/ 資料夾，建議直式 4:5（例如 800x1000），格式 jpg 或 png 都可以。
2. 每個顏色在 js/products.js 裡有兩個圖片欄位：
   "image"  商品列表上顯示的縮圖（填第一張主圖）
   "images" 點進商品後顯示的多張照片，每張寫成 { "src": "images/檔名.jpg", "label": "說明文字" }
   目前每個顏色有 4 張示範圖：正面、背面、細節、面料特寫。
   你可以增加或減少張數，第一張會當作主圖，後面的會變成可點選的小圖。
   例如：{ "src": "images/white-tee-detail.jpg", "label": "領口細節" }
3. 檔名請用英文、數字與減號，不要有空格。

【三、上傳到 GitHub（手動）】
1. 登入 GitHub，按右上角「＋」→「New repository」，取一個名字（例如 my-shop），選 Public，按 Create。
2. 進入新倉庫，按「uploading an existing file」。
3. 把 clothing-shop 資料夾「裡面的所有內容」（index.html、css、js、images）一起拖進去。
   注意：index.html 必須在最外層，不要多包一層資料夾。
4. 按下方的「Commit changes」。
5. 到倉庫的 Settings → Pages，Source 選「Deploy from a branch」，Branch 選 main、資料夾選 / (root)，按 Save。
6. 等 1～2 分鐘，頁面上方會出現網址，打開就是你的網站。

【四、注意】
- 購物車不會真的收款，顧客產生訂單後，會把內容傳給你，由你確認庫存與收款。
- 購物車資料只存在顧客自己的瀏覽器裡。
