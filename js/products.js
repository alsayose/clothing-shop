// 商品資料：想新增或修改商品，只要照著下面的格式改這個檔案就可以。
// name 商品名稱｜gender 女裝或男裝｜type 上衣／褲裝／裙洋裝／外套／配件｜price 價格（數字）
// colors 顏色清單，每個顏色有：name 名稱、hex 色碼、image 列表縮圖、images 商品視窗的多張照片
// images 的每一張是 { src: "圖片路徑", label: "說明文字" }，第一張會當作主圖，可放任意張數
// 圖片都放在 images/ 資料夾。sizes 尺寸清單｜desc 商品說明｜tag 標籤（NEW、熱銷，不需要就留空白）
const PRODUCTS = [
  {
    "id": "p01",
    "name": "棉質圓領短袖 T 恤",
    "gender": "女裝",
    "type": "上衣",
    "price": 590,
    "colors": [
      {
        "name": "白",
        "hex": "#f4f4f1",
        "image": "images/p01-1-front.svg",
        "images": [
          {
            "src": "images/p01-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p01-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p01-1-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p01-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "灰",
        "hex": "#b9bcc0",
        "image": "images/p01-2-front.svg",
        "images": [
          {
            "src": "images/p01-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p01-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p01-2-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p01-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p01-3-front.svg",
        "images": [
          {
            "src": "images/p01-3-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p01-3-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p01-3-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p01-3-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "desc": "柔軟親膚的純棉，剪裁微寬，單穿或內搭都好看。",
    "tag": "熱銷",
    "order": 1
  },
  {
    "id": "p02",
    "name": "寬鬆亞麻襯衫",
    "gender": "女裝",
    "type": "上衣",
    "price": 1280,
    "colors": [
      {
        "name": "米白",
        "hex": "#e9e2d3",
        "image": "images/p02-1-front.svg",
        "images": [
          {
            "src": "images/p02-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p02-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p02-1-detail.svg",
            "label": "細節：領口與鈕扣"
          },
          {
            "src": "images/p02-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "淺藍",
        "hex": "#a9c0d6",
        "image": "images/p02-2-front.svg",
        "images": [
          {
            "src": "images/p02-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p02-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p02-2-detail.svg",
            "label": "細節：領口與鈕扣"
          },
          {
            "src": "images/p02-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "desc": "透氣亞麻材質，夏天不悶熱，袖口可以捲起來穿。",
    "tag": "NEW",
    "order": 2
  },
  {
    "id": "p03",
    "name": "針織短版上衣",
    "gender": "女裝",
    "type": "上衣",
    "price": 890,
    "colors": [
      {
        "name": "燕麥",
        "hex": "#d8cdb8",
        "image": "images/p03-1-front.svg",
        "images": [
          {
            "src": "images/p03-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p03-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p03-1-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p03-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "墨綠",
        "hex": "#3f5a4e",
        "image": "images/p03-2-front.svg",
        "images": [
          {
            "src": "images/p03-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p03-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p03-2-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p03-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "desc": "細緻針織，長度剛好蓋住腰線，搭高腰褲最有比例。",
    "tag": "",
    "order": 3
  },
  {
    "id": "p04",
    "name": "高腰直筒牛仔褲",
    "gender": "女裝",
    "type": "褲裝",
    "price": 1480,
    "colors": [
      {
        "name": "深藍",
        "hex": "#33475f",
        "image": "images/p04-1-front.svg",
        "images": [
          {
            "src": "images/p04-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p04-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p04-1-detail.svg",
            "label": "細節：腰頭與口袋"
          },
          {
            "src": "images/p04-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "牛仔藍",
        "hex": "#8fa7c2",
        "image": "images/p04-2-front.svg",
        "images": [
          {
            "src": "images/p04-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p04-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p04-2-detail.svg",
            "label": "細節：腰頭與口袋"
          },
          {
            "src": "images/p04-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "desc": "微彈丹寧，高腰修飾腿型，久穿不變形。",
    "tag": "熱銷",
    "order": 4
  },
  {
    "id": "p05",
    "name": "寬版西裝褲",
    "gender": "女裝",
    "type": "褲裝",
    "price": 1380,
    "colors": [
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p05-1-front.svg",
        "images": [
          {
            "src": "images/p05-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p05-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p05-1-detail.svg",
            "label": "細節：腰頭與口袋"
          },
          {
            "src": "images/p05-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "卡其",
        "hex": "#b8a98a",
        "image": "images/p05-2-front.svg",
        "images": [
          {
            "src": "images/p05-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p05-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p05-2-detail.svg",
            "label": "細節：腰頭與口袋"
          },
          {
            "src": "images/p05-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "desc": "垂墜感佳的寬版褲型，上班與假日都適合。",
    "tag": "",
    "order": 5
  },
  {
    "id": "p06",
    "name": "A 字中長裙",
    "gender": "女裝",
    "type": "裙洋裝",
    "price": 1080,
    "colors": [
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p06-1-front.svg",
        "images": [
          {
            "src": "images/p06-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p06-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p06-1-detail.svg",
            "label": "細節：腰頭與拉鍊位置"
          },
          {
            "src": "images/p06-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "駝",
        "hex": "#b08d65",
        "image": "images/p06-2-front.svg",
        "images": [
          {
            "src": "images/p06-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p06-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p06-2-detail.svg",
            "label": "細節：腰頭與拉鍊位置"
          },
          {
            "src": "images/p06-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "desc": "好走動的 A 字裙擺，鬆緊腰設計穿起來很輕鬆。",
    "tag": "",
    "order": 6
  },
  {
    "id": "p07",
    "name": "襯衫式洋裝",
    "gender": "女裝",
    "type": "裙洋裝",
    "price": 1680,
    "colors": [
      {
        "name": "白",
        "hex": "#f4f4f1",
        "image": "images/p07-1-front.svg",
        "images": [
          {
            "src": "images/p07-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p07-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p07-1-detail.svg",
            "label": "細節：領口與腰線"
          },
          {
            "src": "images/p07-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "淺藍",
        "hex": "#a9c0d6",
        "image": "images/p07-2-front.svg",
        "images": [
          {
            "src": "images/p07-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p07-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p07-2-detail.svg",
            "label": "細節：領口與腰線"
          },
          {
            "src": "images/p07-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "desc": "附腰帶，可以收腰也可以直接穿，一件就完成造型。",
    "tag": "NEW",
    "order": 7
  },
  {
    "id": "p08",
    "name": "連身長洋裝",
    "gender": "女裝",
    "type": "裙洋裝",
    "price": 1880,
    "colors": [
      {
        "name": "墨綠",
        "hex": "#3f5a4e",
        "image": "images/p08-1-front.svg",
        "images": [
          {
            "src": "images/p08-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p08-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p08-1-detail.svg",
            "label": "細節：領口與腰線"
          },
          {
            "src": "images/p08-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "酒紅",
        "hex": "#7a2e3a",
        "image": "images/p08-2-front.svg",
        "images": [
          {
            "src": "images/p08-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p08-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p08-2-detail.svg",
            "label": "細節：領口與腰線"
          },
          {
            "src": "images/p08-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "desc": "俐落的 V 領與長版裙擺，微涼天氣單穿剛剛好。",
    "tag": "",
    "order": 8
  },
  {
    "id": "p09",
    "name": "輕量風衣外套",
    "gender": "女裝",
    "type": "外套",
    "price": 2480,
    "colors": [
      {
        "name": "卡其",
        "hex": "#b8a98a",
        "image": "images/p09-1-front.svg",
        "images": [
          {
            "src": "images/p09-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p09-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p09-1-detail.svg",
            "label": "細節：拉鍊與口袋"
          },
          {
            "src": "images/p09-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p09-2-front.svg",
        "images": [
          {
            "src": "images/p09-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p09-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p09-2-detail.svg",
            "label": "細節：拉鍊與口袋"
          },
          {
            "src": "images/p09-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "desc": "防潑水布料，輕到可以收進包包，換季時很實用。",
    "tag": "熱銷",
    "order": 9
  },
  {
    "id": "p10",
    "name": "羊毛混紡大衣",
    "gender": "女裝",
    "type": "外套",
    "price": 3980,
    "colors": [
      {
        "name": "駝",
        "hex": "#b08d65",
        "image": "images/p10-1-front.svg",
        "images": [
          {
            "src": "images/p10-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p10-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p10-1-detail.svg",
            "label": "細節：拉鍊與口袋"
          },
          {
            "src": "images/p10-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "灰",
        "hex": "#b9bcc0",
        "image": "images/p10-2-front.svg",
        "images": [
          {
            "src": "images/p10-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p10-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p10-2-detail.svg",
            "label": "細節：拉鍊與口袋"
          },
          {
            "src": "images/p10-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "desc": "羊毛混紡保暖不厚重，經典大衣版型穿多年都不退流行。",
    "tag": "",
    "order": 10
  },
  {
    "id": "p11",
    "name": "帆布托特包",
    "gender": "女裝",
    "type": "配件",
    "price": 780,
    "colors": [
      {
        "name": "米",
        "hex": "#e6dcc6",
        "image": "images/p11-1-front.svg",
        "images": [
          {
            "src": "images/p11-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p11-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p11-1-detail.svg",
            "label": "細節：五金與縫線"
          },
          {
            "src": "images/p11-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p11-2-front.svg",
        "images": [
          {
            "src": "images/p11-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p11-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p11-2-detail.svg",
            "label": "細節：五金與縫線"
          },
          {
            "src": "images/p11-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "F"
    ],
    "desc": "容量足夠放 A4 文件與水壺，肩帶長度剛好。",
    "tag": "",
    "order": 11
  },
  {
    "id": "p12",
    "name": "皮革斜背包",
    "gender": "女裝",
    "type": "配件",
    "price": 1680,
    "colors": [
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p12-1-front.svg",
        "images": [
          {
            "src": "images/p12-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p12-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p12-1-detail.svg",
            "label": "細節：五金與縫線"
          },
          {
            "src": "images/p12-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "駝",
        "hex": "#b08d65",
        "image": "images/p12-2-front.svg",
        "images": [
          {
            "src": "images/p12-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p12-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p12-2-detail.svg",
            "label": "細節：五金與縫線"
          },
          {
            "src": "images/p12-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "F"
    ],
    "desc": "小巧好搭，剛好放手機、鑰匙與錢包。",
    "tag": "NEW",
    "order": 12
  },
  {
    "id": "p13",
    "name": "重磅純棉 T 恤",
    "gender": "男裝",
    "type": "上衣",
    "price": 690,
    "colors": [
      {
        "name": "白",
        "hex": "#f4f4f1",
        "image": "images/p13-1-front.svg",
        "images": [
          {
            "src": "images/p13-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p13-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p13-1-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p13-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p13-2-front.svg",
        "images": [
          {
            "src": "images/p13-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p13-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p13-2-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p13-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "灰",
        "hex": "#b9bcc0",
        "image": "images/p13-3-front.svg",
        "images": [
          {
            "src": "images/p13-3-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p13-3-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p13-3-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p13-3-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "desc": "厚實不透的重磅棉，領口耐洗不鬆垮。",
    "tag": "熱銷",
    "order": 13
  },
  {
    "id": "p14",
    "name": "牛津紡襯衫",
    "gender": "男裝",
    "type": "上衣",
    "price": 1180,
    "colors": [
      {
        "name": "白",
        "hex": "#f4f4f1",
        "image": "images/p14-1-front.svg",
        "images": [
          {
            "src": "images/p14-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p14-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p14-1-detail.svg",
            "label": "細節：領口與鈕扣"
          },
          {
            "src": "images/p14-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "淺藍",
        "hex": "#a9c0d6",
        "image": "images/p14-2-front.svg",
        "images": [
          {
            "src": "images/p14-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p14-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p14-2-detail.svg",
            "label": "細節：領口與鈕扣"
          },
          {
            "src": "images/p14-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "desc": "經典牛津紡布料，休閒與正式場合都能穿。",
    "tag": "",
    "order": 14
  },
  {
    "id": "p15",
    "name": "圓領針織衫",
    "gender": "男裝",
    "type": "上衣",
    "price": 1280,
    "colors": [
      {
        "name": "深灰",
        "hex": "#4a4f55",
        "image": "images/p15-1-front.svg",
        "images": [
          {
            "src": "images/p15-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p15-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p15-1-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p15-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "海軍藍",
        "hex": "#27364d",
        "image": "images/p15-2-front.svg",
        "images": [
          {
            "src": "images/p15-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p15-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p15-2-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p15-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "desc": "細針織不扎人，秋冬單穿或當內搭都合適。",
    "tag": "",
    "order": 15
  },
  {
    "id": "p16",
    "name": "連帽運動上衣",
    "gender": "男裝",
    "type": "上衣",
    "price": 1380,
    "colors": [
      {
        "name": "灰",
        "hex": "#b9bcc0",
        "image": "images/p16-1-front.svg",
        "images": [
          {
            "src": "images/p16-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p16-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p16-1-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p16-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p16-2-front.svg",
        "images": [
          {
            "src": "images/p16-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p16-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p16-2-detail.svg",
            "label": "細節：領口與車縫"
          },
          {
            "src": "images/p16-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "desc": "刷毛內裡保暖，日常通勤與運動都好穿。",
    "tag": "NEW",
    "order": 16
  },
  {
    "id": "p17",
    "name": "修身牛仔褲",
    "gender": "男裝",
    "type": "褲裝",
    "price": 1480,
    "colors": [
      {
        "name": "深藍",
        "hex": "#33475f",
        "image": "images/p17-1-front.svg",
        "images": [
          {
            "src": "images/p17-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p17-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p17-1-detail.svg",
            "label": "細節：腰頭與口袋"
          },
          {
            "src": "images/p17-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "牛仔藍",
        "hex": "#8fa7c2",
        "image": "images/p17-2-front.svg",
        "images": [
          {
            "src": "images/p17-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p17-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p17-2-detail.svg",
            "label": "細節：腰頭與口袋"
          },
          {
            "src": "images/p17-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "desc": "微彈修身版型，坐下蹲下都不緊繃。",
    "tag": "熱銷",
    "order": 17
  },
  {
    "id": "p18",
    "name": "休閒工作褲",
    "gender": "男裝",
    "type": "褲裝",
    "price": 1280,
    "colors": [
      {
        "name": "卡其",
        "hex": "#b8a98a",
        "image": "images/p18-1-front.svg",
        "images": [
          {
            "src": "images/p18-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p18-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p18-1-detail.svg",
            "label": "細節：腰頭與口袋"
          },
          {
            "src": "images/p18-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "橄欖",
        "hex": "#6b6f4a",
        "image": "images/p18-2-front.svg",
        "images": [
          {
            "src": "images/p18-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p18-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p18-2-detail.svg",
            "label": "細節：腰頭與口袋"
          },
          {
            "src": "images/p18-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "desc": "耐磨斜紋布與多口袋設計，實用又有型。",
    "tag": "",
    "order": 18
  },
  {
    "id": "p19",
    "name": "運動長褲",
    "gender": "男裝",
    "type": "褲裝",
    "price": 980,
    "colors": [
      {
        "name": "灰",
        "hex": "#b9bcc0",
        "image": "images/p19-1-front.svg",
        "images": [
          {
            "src": "images/p19-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p19-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p19-1-detail.svg",
            "label": "細節：腰頭與口袋"
          },
          {
            "src": "images/p19-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p19-2-front.svg",
        "images": [
          {
            "src": "images/p19-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p19-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p19-2-detail.svg",
            "label": "細節：腰頭與口袋"
          },
          {
            "src": "images/p19-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "desc": "束口褲管、鬆緊腰頭，在家或運動都舒服。",
    "tag": "",
    "order": 19
  },
  {
    "id": "p20",
    "name": "丹寧外套",
    "gender": "男裝",
    "type": "外套",
    "price": 2180,
    "colors": [
      {
        "name": "牛仔藍",
        "hex": "#8fa7c2",
        "image": "images/p20-1-front.svg",
        "images": [
          {
            "src": "images/p20-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p20-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p20-1-detail.svg",
            "label": "細節：拉鍊與口袋"
          },
          {
            "src": "images/p20-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "深藍",
        "hex": "#33475f",
        "image": "images/p20-2-front.svg",
        "images": [
          {
            "src": "images/p20-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p20-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p20-2-detail.svg",
            "label": "細節：拉鍊與口袋"
          },
          {
            "src": "images/p20-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "desc": "洗舊質感的丹寧，越穿越有個人風格。",
    "tag": "",
    "order": 20
  },
  {
    "id": "p21",
    "name": "輕量夾克",
    "gender": "男裝",
    "type": "外套",
    "price": 2280,
    "colors": [
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p21-1-front.svg",
        "images": [
          {
            "src": "images/p21-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p21-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p21-1-detail.svg",
            "label": "細節：拉鍊與口袋"
          },
          {
            "src": "images/p21-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "海軍藍",
        "hex": "#27364d",
        "image": "images/p21-2-front.svg",
        "images": [
          {
            "src": "images/p21-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p21-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p21-2-detail.svg",
            "label": "細節：拉鍊與口袋"
          },
          {
            "src": "images/p21-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "desc": "立領設計，防風輕盈，早晚溫差大時剛好。",
    "tag": "NEW",
    "order": 21
  },
  {
    "id": "p22",
    "name": "羽絨背心",
    "gender": "男裝",
    "type": "外套",
    "price": 2680,
    "colors": [
      {
        "name": "海軍藍",
        "hex": "#27364d",
        "image": "images/p22-1-front.svg",
        "images": [
          {
            "src": "images/p22-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p22-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p22-1-detail.svg",
            "label": "細節：拉鍊與口袋"
          },
          {
            "src": "images/p22-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p22-2-front.svg",
        "images": [
          {
            "src": "images/p22-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p22-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p22-2-detail.svg",
            "label": "細節：拉鍊與口袋"
          },
          {
            "src": "images/p22-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "desc": "輕盈保暖，可單穿也可疊在外套裡面。",
    "tag": "",
    "order": 22
  },
  {
    "id": "p23",
    "name": "素面皮帶",
    "gender": "男裝",
    "type": "配件",
    "price": 680,
    "colors": [
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p23-1-front.svg",
        "images": [
          {
            "src": "images/p23-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p23-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p23-1-detail.svg",
            "label": "細節：扣頭與皮帶孔"
          },
          {
            "src": "images/p23-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "駝",
        "hex": "#b08d65",
        "image": "images/p23-2-front.svg",
        "images": [
          {
            "src": "images/p23-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p23-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p23-2-detail.svg",
            "label": "細節：扣頭與皮帶孔"
          },
          {
            "src": "images/p23-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "85",
      "90",
      "95"
    ],
    "desc": "簡約金屬扣頭，西裝褲與牛仔褲都能搭。",
    "tag": "",
    "order": 23
  },
  {
    "id": "p24",
    "name": "棒球帽",
    "gender": "男裝",
    "type": "配件",
    "price": 520,
    "colors": [
      {
        "name": "黑",
        "hex": "#2a2d31",
        "image": "images/p24-1-front.svg",
        "images": [
          {
            "src": "images/p24-1-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p24-1-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p24-1-detail.svg",
            "label": "細節：帽型與縫線"
          },
          {
            "src": "images/p24-1-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "卡其",
        "hex": "#b8a98a",
        "image": "images/p24-2-front.svg",
        "images": [
          {
            "src": "images/p24-2-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p24-2-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p24-2-detail.svg",
            "label": "細節：帽型與縫線"
          },
          {
            "src": "images/p24-2-fabric.svg",
            "label": "面料特寫"
          }
        ]
      },
      {
        "name": "海軍藍",
        "hex": "#27364d",
        "image": "images/p24-3-front.svg",
        "images": [
          {
            "src": "images/p24-3-front.svg",
            "label": "正面"
          },
          {
            "src": "images/p24-3-back.svg",
            "label": "背面"
          },
          {
            "src": "images/p24-3-detail.svg",
            "label": "細節：帽型與縫線"
          },
          {
            "src": "images/p24-3-fabric.svg",
            "label": "面料特寫"
          }
        ]
      }
    ],
    "sizes": [
      "F"
    ],
    "desc": "後方可調整大小，弧形帽簷修飾臉型。",
    "tag": "",
    "order": 24
  }
];
