// HELLO WORLD
export const portfolioData = [
  {
    id: 1,
    title: "STARVESSEL\u00A0HALO\n行動電源",
    brief: "工業仿生產品建模與設計",
    imgUrl:
      "https://i.meee.com.tw/AFLHNuQ.png",
    bannerUrl: "https://i.meee.com.tw/r3JfVvg.png",
    videoUrl: "https://www.youtube.com/shorts/H45J3gs0_x8?feature=share",
    coverPosition: "53% 50%",
    coverScale: "1.3",
    category: "工業設計 3D Modeling",
    date: "2025.10",
    description:
      "StarVessel Halo 是一款為現代行動生活設計的多功能行動電源裝置。隨著人們在旅行、通勤與戶外活動中對電力需求的增加，傳統行動電源往往僅提供單一充電功能，缺乏整合性與多元化的使用情境。因此，本專案以「多功能整合」與「未來科技感」為核心概念，並結合仿生設計的主題，重新思考行動電源在日常生活中的角色。\n\n透過整合無線充電、隱藏式摺疊插頭、多點吸附結構與 LED 能量顯示設計，StarVessel Halo 不僅是一個行動電源，也能在不同情境中轉換為桌面充電座與手機支撐裝置，使充電行為更加便利且直覺。",
    designConcept:
      "StarVessel Halo 是一款為現代行動生活設計的多功能行動電源裝置。隨著人們在旅行、通勤與戶外活動中對電力需求的增加，傳統行動電源往往僅提供單一充電功能，缺乏整合性與多元化的使用情境。因此，本專案以「多功能整合」與「未來科技感」為核心概念，並結合仿生設計的主題，重新思考行動電源在日常生活中的角色。透過整合無線充電、隱藏式摺疊插頭、多點吸附結構與 LED 能量顯示設計，StarVessel Halo 不僅是一個行動電源，也能在不同情境中轉換為桌面充電座與手機支撐裝置，使充電行為更加便利且直覺。",
    gallery: [
      "https://i.meee.com.tw/NGIh01s.jpg",
      "https://i.meee.com.tw/Co2eiWB.jpg",
      "https://i.meee.com.tw/SZKvCEw.jpg",
      "https://i.meee.com.tw/yibU4Lf.png",
    ],
    posterUrl: [
      "https://i.meee.com.tw/dzHeT4x.png"
    ],
    challenge:
      "本專案希望設計一款不只是概念造型，而是具備實際可行性的多功能行動電源裝置。然而，在產品設計過程中，我發現自己電子結構與電路配置的理解有限，因此如何在有限體內整合電源模組、無線充電與 LED 顯示系統，成為設計過程中的主要挑戰。",
    solution:
      "為了讓設計更貼近實際應用，我主動前往電子材料行，向店家請教行動電源與無線充電模組的基本電路結構，並了解不同元件的接線方式與運作原理。透過與店家的交流與查詢相關資料,逐步理解電子元件的配置方式，並將這些資訊回饋到產品設計之中，使設計不僅停留在外觀概念，也更接近可實際實現的產品形式。",
    tools: ["PTC Creo", "3D Print", "Adobe Illustrator", "Adobe Photoshop", "AutoCAD"],
    process: [
      {
        phase: "觀察與啟發：仿生概念的產生",
        details:
          "靈感來源： 從自然界中尋找靈感，觀察到海星（Starfish）獨有的多臂對稱結構。這種結構在自然界中代表了極高的穩定性與抓附力。\n\n初步發想： 繪製了 10 份不同的仿生產品草圖（如昆蟲關節、植物纖維結構等），最終選定以「海星」為核心。\n\n選定理由： 海星的五角/六角放射狀不僅美觀，更能在功能上提供多方位的連接點，打破傳統行動電源死板的方形設計。",
      },
      {
        phase: "功能定義與外觀設計",
        details:
          "設計目標： \n打造一個「一機多用」的行動能量中樞。\n\n核心功能整合：\n1.無線充電： 利用中心平坦區域作為無線充電板。\n\n2.多功能觸手： 模擬海星管足，設計成可收納線材或吸盤結構。\n\n3.隱藏式插頭： 整合摺疊式插頭，讓充電器與行動電源合一。\n\n4.視覺回饋： 中心設計 LED 電量顯示環，賦予產品生命感。",
      },
      {
        phase: "3D 建模與製造",
        details:
          "將感性的仿生概念轉化為理性工程，確保 StarVessel Halo 兼具美學與量產實用性。\n\n參數化建模 (Creo)：精確設定 12cm 直徑與 2.5cm 厚度。透過 Creo 進行全參數化設計，優化內部容積並模擬觸手摺疊與插頭轉動的機構公差。\n\n內部空間與佈線研究：進行線路保留分析與剖面研究（Section Analysis），精密計算骨架厚度，確保電池芯、PCB 主板與伸縮機構完美嵌入且互不干涉。\n\n3D 列印與機能驗證：製作 1:1 實體原型，實際測試海星放射狀結構的人體工學握感、插頭開合阻尼度，以及多點支撐的放置穩定性。\n\n視覺整合與產出：使用 Keyshot 與AI結合進行材質與光影渲染，模擬磨砂金屬與 LED 燈環質感，最終整合工程圖面完成展版設計。",
      },
      {
        phase: "電路研究與功能整合",
        details:
          "本階段目標在於實踐「可運行」的原型，將仿生外殼與功能核心結合，驗證全能充電中樞的可行性。\n\n電路規劃與佈置：\n深入研究 Qi 無線充電感應線圈與多孔輸出（USB/Type-C）硬體配置。在維持外殼美觀的前提下，確保內部電子組件運作順暢且訊號互不干涉。\n\n空間配置挑戰：\n針對海星腔體內的狹小空間進行整合。因應內部容積限制，採取電池室外部配置的策略，優先確保核心電路板與感應線圈的穩定排佈。\n\n視覺互動模擬：\n中央光環（Halo）設計用於模擬電量與充電狀態。透過燈光色彩變化與分段長度的變換，將抽象的電量視覺化，為仿生造型注入動態的數位生命力。\n\n最終產出與反思：\n成功開發出具備實體電力輸出能力的 StarVessel Halo。即便作為原型階段，在供電效能上尚不及市售量產行動電源，但在產品外觀的仿生突破與異材質整合上，已完成了從觀察到實作的高度跨越。",
      },
    ],
    reflection:
      "這次製作 StarVessel Halo 對我來說是一次非常熱血且充滿挑戰的嘗試。起初，我只是想挑戰海星那種獨特的放射狀仿生造型，試圖打破行動電源總是方方正正的刻板印象。但在設計過程中，我意識到如果只有帥氣的外殼，那它只是一個模型，而不是真正的「產品」。\n\n為了讓設計具備實際運行的可能性，我遇到了很大的瓶頸——我對內部的電路配置幾乎一竅不通。於是我決定踏出校園，直接跑去電子材料行請教老闆，從基本的無線充電感應線圈到 Type-C 的接線邏輯一點一滴學起。雖然在建模階段，我發現海星狹小的腔體空間實在塞不下所有零件，最後不得不採取電池室外置的折衷方案，但這個過程讓我學會了如何在 Creo 裡更理性地進行空間預留與干涉分析。\n\n雖然這個原型在充電效能和體積上，還遠遠比不上專業的市售產品，但對我而言，最珍貴的是我親手把 10 份草圖中的其中一份，透過 3D 列印、電路配線與噴漆，真正變成了一個能發光、能供電的實體。這次專案讓我明白，設計師的工作不僅是畫出漂亮的圖，更是在技術限制與美學追求之間，努力找出那個最完美的平衡點。",
  },
  {
    id: 2,
    title: "Channel航向公平\n視障開放水域游泳引導系統",
    brief: "創新科技與工業設計的結合",
    imgUrl:
      "https://i.meee.com.tw/TZ9xXJU.png",
    coverPosition: "50% 0%",
    coverScale: "115%",
    category: "運動科技工業產品",
    date: "2025.07",
    description:
      "Channel 是一套為視障者設計的開放水域游泳導引系統，旨在解決視障運動員在海洋、湖泊等環境中缺乏方向感與安全資訊的問題。系統由震動導引手環、定位浮標與賽事監控 App 組成，透過 GPS 定位與觸覺震動提示，協助泳者即時修正航向、維持配速並安全完成賽程。後端平台可同步監控選手位置與狀態，在突發情況時快速啟動救援機制。此設計以「觸覺等效視覺」為核心，提升開放水域賽事的安全性、公平性與參與包容性，讓視障者能更自信且安全地挑戰水域運動。",
    designConcept:
      "本設計以「觸覺等效視覺」為核心概念，將視覺資訊轉化為可感知的震動語言，讓視障者在開放水域中也能清楚掌握方向與距離。產品造型以流線與圓角構造為主，呼應水域環境的流動感，同時降低使用時的阻力與碰撞風險。整體設計強調功能與情感的平衡：在科技導引與安全機制之下，仍保留運動本身的自主性與公平性。透過簡潔的介面、清晰的觸覺回饋與穩定的航道系統，建立一種更包容的水域運動體驗，體現「平等參與」與「以設計改善社會」的理念。",
    gallery: [
      "https://i.meee.com.tw/UCsUP4y.jpg",
      "https://i.meee.com.tw/uW1jbGR.jpg",
      "https://i.meee.com.tw/4d1D5zq.jpg",
      "https://i.meee.com.tw/VFtp0JL.png",
    ],
    bannerUrl: "https://i.meee.com.tw/06CzWJm.png",
    posterUrl: [
      "https://i.meee.com.tw/JPTb7VG.jpg",
      "https://i.meee.com.tw/L3iwCd4.jpg"
    ],
    team: {
      members: "林煜宸/張陳豪",
      advisors: "李鍇朮 / 張瑋真"
    },
    challenge:
      "在產品造型設計上，本專案最大的挑戰來自於曲面建模的複雜度。\n為了呈現原始草圖中的造型構想，我將浮標外觀設計為上方三角形逐漸過渡到底部圓形的結構。這種由幾何三角形轉換為圓形底座的造型，使曲面在過渡過程中必須同時兼顧流暢度與比例平衡，因此在3D建模階段增加了相當的難度。",
    solution:
      "在實際建模過程中，為了讓曲面轉折自然、不產生不必要的折線或變形，我在 Creo 的曲面建模與邊界控制上花費大量時間反覆調整。過程中我也主動向指導老師請教相關的建模技巧，並重新複習與學習 Creo 的曲面建模課程，以更深入理解曲面建立與邊界控制的方法。透過控制曲面連續性、修整過渡線，以及多次重新建立曲面與邊界關係，逐步優化曲面的流暢度與整體比例，最終讓造型既能符合原始設計概念，也能維持產品的整體美感與結構合理性。",
    tools: [
      "Illustrator",
      "Canva",
      "3D Print",
      "PTC Creo",
    ],
    process: [
      {
        phase: "前期研究",
        details:
          "觀察開放水域游泳環境，分析視障泳者在游泳過程中可能面臨的方向判斷與安全問題，確立本專案的設計目標。",
      },
      {
        phase: "概念發想",
        details:
          "透過繪製使用者地圖與資料蒐集，分析使用情境與需求，進而提出以「航道浮標＋震動手環」為核心的導航系統概念。",
      },
      {
        phase: "造型探索",
        details:
          "透過多次浮標外觀草圖探索，最終確立以三角形逐漸過渡至圓形底部的造型設計，以提升產品辨識度，同時兼顧在水域環境中的抗浪與穩定性。",
      },
      {
        phase: "3D建模與設計調整",
        details:
          "使用 Creo 進行產品建模，在曲面建模與邊界控制上反覆調整，並向老師請教相關技巧，同時重新複習 Creo 課程，以優化曲面流暢度與比例。",
      },
      {
        phase: "試印與結構拆件",
        details:
          "進行模型試印，並因應3D列印機器尺寸限制進行結構拆件，另外製作小型版本模型用於成果展示。",
      },
      {
        phase: "最終成果呈現",
        details:
          "製作產品展板與渲染圖，並設計完整的產品展示方式，以清楚呈現產品功能、造型與使用情境。",
      },
    ],
  },
  {
    id: 3,
    title: "Re-clip\n打造展覽新篇章",
    brief: "展場設計與工業設計的結合",
    imgUrl:
      "https://i.meee.com.tw/4sQ7vIT.jpg",
    bannerUrl: "https://i.meee.com.tw/rFYjTho.png",
    category: "UI/UX 設計",
    date: "2025.04",
    description:
      "為新創金融科技公司設計的內部數據分析儀表板。大量運用毛玻璃效果（Glassmorphism）與深色模式，降低長時間觀看數據的視覺疲勞。",
    designConcept:
      "儀表板的設計核心在「資訊層級的通透感」。為了處理龐雜的金融數據，我引入了毛玻璃 (Glassmorphism) 美學。透過半透明的卡片背景與微妙的背景模糊效果，介面產生了明確的 Z 軸深度 (Z-axis depth)。底層隱約透出的漸層光暈不僅打破了傳統深色模式的死板，更起到了視覺引導的作用，讓使用者的目光自然聚焦於上層高對比的清晰數據圖表上。",
    gallery: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjB3aXJlZnJhbWUlMjBza2V0Y2glMjB1aXxlbnwxfHx8fDE3NzI5NTI0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1733355718906-0ac60bbbc5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwd2ViJTIwZGFzaGJvYXJkJTIwZ2xhc3Ntb3JwaGlzbXxlbnwxfHx8fDE3NzI5NTE4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    posterUrl:
      "https://images.unsplash.com/photo-1712903911024-0503895511b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50YXRpb24lMjBib2FyZCUyMGV4aGliaXRpb24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyOTUyNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge:
      "金融數據極為繁雜，傳統儀表板容易讓使用者感到資訊超載與眼花撩亂。",
    solution:
      "透過 Glassmorphism 的層次感建立資訊的 Z 軸深度，讓重要數據浮現於最上層。同時使用深色背景搭配螢光色系的圖表，提升數據的易讀性。",
    tools: ["Figma", "React", "Recharts"],
    process: [
      {
        phase: "需求訪談",
        details:
          "與資料分析師討論，了解他們日常工作中最常關注的核心指標（KPI）。",
      },
      {
        phase: "Wireframe & 資訊架構",
        details:
          "規劃儀表板的區塊佈局，用網格系統確保視覺一致性。",
      },
      {
        phase: "High-Fidelity Prototype",
        details:
          "運用 Figma 製作高保真原型，並設計圖表互動的微動畫。",
      },
    ],
  },
  {
    id: 4,
    title: "Design ABC Blocks\n框域平衡",
    brief: "幾何形狀的美學組合",
    imgUrl:
      "https://i.meee.com.tw/rx8b228.jpg",
    bannerUrl: "https://i.meee.com.tw/sSLYfeV.png",
    category: "3D 視覺藝術",
    date: "2024.12",
    description:
      "本專案以 A、B、C 三元素的造型組合 為設計基礎，進行立體構成設計。其中 C 元素被設定為獨特元素，在整體造型中形成視覺焦點。設計過程透過幾何形體的組合與結構配置，探索元素之間的比例、平衡與空間關係，最終完成一件整合三元素互動關係的立體模型作品。",
    designConcept:
      "在造型上，我運用了幾何切割與立體交錯的設計，使整體形體簡潔卻富有層次感。設計中透過簡潔的線條與對稱結構，讓作品在視覺上呈現出穩定而平衡的效果，同時兼具工業風格與藝術感，形成具有趣味性的立體造型。",
    gallery: [
      "https://i.meee.com.tw/bmAOOod.jpg",
      "https://i.meee.com.tw/352FT22.jpg",
      "https://i.meee.com.tw/tQpyT8b.jpg",
      "https://i.meee.com.tw/MKw3aBc.jpg",
    ],
    posterUrl:
      "https://i.meee.com.tw/FgfETWF.png",
    challenge:
      "本專案的挑戰在於如何在 A、B、C 三個元素的組合中維持整體造型的平衡，同時讓 C 元素作為獨特元素清楚地成為視覺焦點。此外，在立體構成過程中，需要不斷調整元素之間的比例與空間關係，使整體結構既穩定又具有層次感。在模型製作階段，由於是第一次使用 ABS 板與補土 進行製作，也需要學習材料加工與表面修整的方式。",
    solution:
      "透過反覆調整造型比例與結構配置，逐步建立三個元素之間的平衡關係，使 C 元素能清楚呈現為整體的視覺焦點。在模型製作上，透過實際嘗試 ABS 板切割、組裝與補土修整，並經過多次打磨與細節調整，逐漸掌握材料加工與表面處理技巧，最終完成整體模型的製作與呈現。",
    tools: ["Illustrator", "Canva", "ABS板"],
    process: [
      {
        phase: "概念發想",
        details: "理解題目需求，確立以 A、B、C 三個元素進行立體造型設計，並設定 C 元素為獨特元素。",
      },
      {
        phase: "草圖發展",
        details:
          "先繪製符合設計理念的多種造型草圖，探索不同元素的組合方式，並以保麗龍製作草模，初步測試立體構成與比例關係。",
      },
      {
        phase: "造型確立",
        details:
          "經由比較與調整，確立最終的造型方向與三個元素之間的配置關係。",
      },
      {
        phase: "模型製作",
        details:
          "使用 ABS 板進行切割與組裝，建立模型的基本結構。",
      },
      {
        phase: "渲染與製作展板",
        details:
          "完成模型後，進行 3D 渲染圖製作與展板設計，整理設計過程與最終成果，作為作品展示與成果呈現。",
      },
    ],
    reflection: "在這次立體造型設計專案中，我需要用 A、B、C 三個元素去發展整體造型，也一直在調整元素之間的比例和位置，看看怎樣的組合會比較好看。透過草圖和做保麗龍草模，我慢慢比較能理解立體造型在空間上的關係。\n\n在模型製作的時候，我第一次用 ABS 板和補土。一開始其實很不習慣補土，常常補得不平均，或是打磨完表面還是不夠平，所以需要一直補土、打磨、再修。剛開始做的時候其實有點沒耐心，但做到後面也慢慢知道要一步一步來，不然反而會花更多時間。\n\n另外這也是我第一次噴模型漆。一開始因為沒有什麼經驗，噴的時候沒有控制好距離和漆量，結果噴太多，表面直接「流鼻涕」，最後只好重新打磨噴一次。雖然當下有點崩潰，但也學到噴漆真的要薄薄的一層一層慢慢噴。\n\n這也是我第一次為了一個作品通宵做到天亮。當早上看到作品終於完成的時候，其實真的很開心，那種感覺很難形容，但也讓我覺得前面的辛苦都值得了。",
  },
  {
    id: 5,
    title: "沃土新生\n可分解外殼",
    brief: "創新創意與環保的結合",
    imgUrl:
      "https://i.meee.com.tw/s5DJLBh.png",
    bannerUrl:
      "https://i.meee.com.tw/Eow1rtw.png",
    coverPosition: "60% 50%",
    category: "創新創業設計",
    date: "2024.09",
    team: {
      members: "林煜宸 / 楊蕙如 / 劉宇軒",
      advisors: "游淑萍"
    },
    description:
      "「沃土新生」是一款可分解的植物外殼設計，旨在減少園藝產業中一次性塑膠花盆所造成的環境負擔。透過可自然分解的材料，使植物在移植時能連同容器一同回歸土壤，形成更友善環境的栽培方式。本專案從產品生命週期出發，探索設計與自然循環之間的可能性。",
    designConcept:
      "「沃土新生」的設計以自然循環為核心概念，將產品視為生態系統中的一部分，而非獨立存在的物件。設計語言上以自然、有機的形態為基礎，透過簡潔且柔和的輪廓，使外殼在視覺上更貼近土壤與植物的生長狀態，營造出與自然環境相融合的感受。\n\n在材料與結構上，產品採用可分解材質，使容器在植物成長與移植過程中能逐漸回歸土地，形成完整的生命循環。透過這樣的設計思維，容器不再只是暫時承載植物的工具，而是參與植物生命週期的一部分，展現出產品設計與自然共生的可能性。",
    gallery: [
      "https://i.meee.com.tw/enezLkL.jpg",
      "https://i.meee.com.tw/eOoe9AW.jpg",
    ],
    posterUrl:
      "https://drive.google.com/file/d/1LLoRldPPmL5HK7mRNRWO7sNgAyi0CZB7/view?usp=drive_link",
    challenge:
      "在這次專案的設計過程中，我們遇到的主要挑戰是如何在環保理念與實際使用需求之間取得平衡。可分解材料雖然能減少塑膠花盆所造成的環境負擔，但在植物培育與運輸過程中仍需具備一定的結構強度與穩定性。此外，本專案是與明志科技大學進行跨校、跨系合作，團隊成員來自不同背景，在討論與整合各自想法的過程中，也需花時間進行溝通與協調。",
    solution:
      "透過多次討論與查找相關論文，我們逐漸在材料選擇與結構設計上找到平衡，使產品在使用過程中能維持基本的穩定性，同時在種植後仍能回歸土壤。幸好這次合作的夥伴中，有來自明志科技大學電子工程系的學生，並與電漿與薄膜科技中心相關研究領域有所接觸，因此在材料與技術的討論上也帶來不同的專業觀點。透過跨領域的交流，讓設計不只停留在概念層面，也能從材料應用與技術角度進行更全面的思考，為專案帶來新的突破。",
    tools: ["Canva", "Sketchup for school", "Adobe Illustrator"],
    process: [
      {
        phase: "品牌定位",
        details: "釐清品牌「純粹、專注、極簡」的核心價值。",
      },
      {
        phase: "結構與建模",
        details:
          "設計無膠水的折疊結構，���環保又能降低包裝成本。",
      },
      {
        phase: "視覺排版",
        details:
          "經過多次打樣測試字體大小與閱讀舒適度，確認最終印刷稿件。",
      },
    ],
    reflection: "這是一段預設的設計心得與反思。請提供您的文字內容，我會協助為您更新至此處。",
  },
  {
    id: 6,
    title: "Eject\n調味罐收納模組",
    brief: "廚房家具產品設計",
    imgUrl:
      "https://i.meee.com.tw/bq3qptl.png",
    bannerUrl: "https://i.meee.com.tw/Aq7RuVG.png",
    coverPosition: "50% 15%",
    category: "廚房家具產品設計",
    date: "2024.05",
    description:
      "本專案以「更直覺、更乾淨、更安全」為目標，設計一套可模組化、可拆洗的按壓式調味罐收納系統，讓使用者在烹飪時能縮短取放時間、視線不離鍋面，同時保持檯面整潔。上蓋與瓶身在頂視以 S / P / C 字母與顏色系統快速辨識不同調味類別；彈跳機構提供俐落的彈出與穩定的收納動作，解決傳統調味罐容易打翻、辨識慢與量難控的痛點。",
    designConcept:
      "本產品的設計概念源自「讓日常操作更直覺」。在烹飪過程中，使用者往往需要快速拿取調味料，因此設計以直覺辨識、俐落操作與整潔桌面為核心，打造一套兼具功能與美感的桌面調味罐收納模組。透過按壓彈出的機構設計，使用者只需單手按壓即可讓調味罐升起，取用完成後再按壓收回，使操作流程更加流暢，也讓桌面保持整齊有序。\n\n在美學上，整體外觀採用簡潔俐落的幾何造型與現代廚房風格相呼應。瓶身使用半透明材質，讓使用者能隱約看見內容物，同時維持整體視覺的乾淨感。上蓋以金屬質感呈現，搭配不同顏色與字母標示，形成清楚的辨識系統，使使用者在烹飪時能迅速找到所需的調味料。\n\n此外，產品透過顏色、材質與比例的整合建立統一的設計語言。深色外殼提供穩重的視覺基礎，鮮明色彩的瓶蓋則成為視覺焦點，不僅提升辨識度，也讓產品在廚房空間中具有現代且精緻的風格。整體設計在功能與美感之間取得平衡，使調味罐不僅是實用工具，也成為桌面的一部分設計元素。",
    gallery: [
      "https://i.meee.com.tw/ECFQGXL.jpg",
      "https://i.meee.com.tw/N6GgL5U.jpg",
    ],
    posterUrl: [
      "https://i.meee.com.tw/a43VCXu.jpg",
      "https://i.meee.com.tw/rS1lz6r.jpg"
    ],
    team: {
      advisors: "林鎮山"
    },
    challenge:
      "這個專案最大的挑戰主要在兩個地方：一是彈跳機構的設計，二是瓶蓋與瓶身的螺紋建模。彈跳機構需要在按壓時能順利彈出，但又要保持穩定、不會卡住或歪斜，一開始做出的原型常常出現彈不順或收不回去的情況。另外，瓶蓋與瓶身的螺旋紋路也很難處理，因為使用的 3D 列印機精度有限，如果公差抓不好，瓶蓋不是轉不進去就是太鬆，很難做到剛好貼合。",
    solution:
      "為了解決這些問題，我花了不少時間反覆建模與試印。彈跳機構的部分，我實際到材料行購買零件測試，一邊嘗試不同的結構方式，慢慢找到比較順暢、穩定的彈出效果；螺紋的部分則是不斷調整螺距與間隙，每次列印後都會實際測試瓶蓋與瓶身的配合情況。過程中也有向老師請教列印精度與結構設計的建議，經過多次嘗試與修正，最後才成功做出可以順利旋合、同時又有不錯密合度的版本。這段反覆測試與調整的過程，也讓整個作品逐漸變得更完整。",
    tools: ["PTC Creo", "3D Print", "Adobe Illustrator"],
    process: [
      {
        phase: "概念發想",
        details:
          "從日常烹飪的使用情境出發，觀察調味罐在桌面上容易凌亂、拿取不方便的問題，因此發想出這套以「按壓彈出、使用後收回」的調味罐收納模組，希望讓桌面更整齊、操作也更直覺。",
      },
      {
        phase: "草圖發展",
        details:
          "透過大量草圖探索不同的外觀比例與結構方式，同時思考調味罐在收納與使用時的操作動線，逐步確立整體造型與基本設計方向。",
      },
      {
        phase: "3D 建模與機構設計",
        details:
          "將確定的設計方向建立為 3D 模型，開始設計內部彈跳機構與瓶身結構，同時規劃瓶蓋與瓶身的螺紋結構，使調味罐能順利旋開並保持密合。",
      },
      {
        phase: "試印與結構調整",
        details:
          "完成建模後進行多次 3D 列印測試，觀察彈跳機構的運作狀況與瓶蓋螺紋的配合度，並依照列印結果不斷修改模型參數與結構細節。",
      },
      {
        phase: "最終整合與成果呈現",
        details:
          "在機構與結構逐漸穩定後，完成整體外觀與零件整合，並製作最終模型與展示成果。",
      },
    ],
    reflection:
      "在這次專案中，我慢慢體會到把想法真正做出來其實沒有想像中簡單。很多在電腦裡看起來可行的設計，實際列印出來後才會發現還有很多細節需要調整，例如機構是否順暢、零件能不能真的組裝在一起，都需要透過一次次測試慢慢修正。\n\n曾經的我可能會很堅持，覺得自己設計的產品裡所有機構與零件都應該要自己完成，但在這次專案過程中，我慢慢理解到許多領域其實都有各自的專業。像是機構設計，看起來只是幾個零件的組合，但真正要做到順暢、耐用又好組裝，其實需要很多工程經驗的累積。\n\n因此在後期調整時，我開始嘗試使用現成的機構零件，再搭配自己的外觀與結構設計去整合。這也讓我意識到，設計並不一定要把所有事情都自己完成，而是要懂得整合不同的專業與資源，讓產品最終能夠更好地被實現。這次專案不只是完成一個作品，也讓我更理解設計與工程之間的關係。",
  },
  {
    id: 7,
    title: "社會設計\n嘉義老戲院導覽小書",
    brief: "將設計融入地方創生與視覺傳達",
    imgUrl:
      "https://i.meee.com.tw/GxjUww6.png",
    category: "社會設計 / 視覺藝術設計",
    date: "2024.02",
    bannerUrl: "https://i.meee.com.tw/RWNAe5x.png",
    description:
      "本專案以「嘉義市老戲院文化」為主題，透過資料蒐集、歷史整理與視覺設計，重新梳理嘉義市過去戲院文化的發展脈絡。戲院曾是城市中重要的娛樂與文化交流場所，承載不同世代的生活記憶與情感連結。然而隨著時代變遷與影視產業型態的改變，許多老戲院逐漸歇業或消失，相關的城市記憶也逐漸淡去。\n\n本設計以書籍作為主要媒介，透過老戲院地圖、戲院歷史介紹與時間軸整理，將散落於城市中的文化記憶重新拼湊，使讀者能更完整地了解嘉義戲院文化的發展與變遷。藉由設計的方式記錄地方歷史與文化資產，喚起大眾對城市記憶與文化保存的關注，並進一步思考老戲院空間在未來活化再利用上的可能性。",
    designConcept:
      "本設計以「復古電影文化」作為主要視覺風格，運用拼貼式設計手法，結合老照片、舊報紙紋理、電影膠卷與戲院相關元素，呈現出具有歷史氛圍的視覺語言。透過不同圖像素材的拼貼與重組，象徵城市記憶的碎片被重新整理與連結，使整體畫面帶有懷舊與故事性的感受。\n\n在色彩運用上，以泛黃紙張與暖色調作為基底，模擬舊海報與歷史文件的質感，強化年代感與時間的痕跡。版面構成則透過層次堆疊與不規則排列，營造出時空交錯與記憶堆疊的視覺效果，使讀者在閱讀時彷彿走入一段關於嘉義老戲院的時光旅程。",
    gallery: [],
    posterUrl:
      "https://online.visual-paradigm.com/share/book/-compressed-1--2hzddn3r74",
    team: {
      members: "林煜宸 / 地方文史工作團隊",
    },
    challenge:
      "在本專案的研究與設計過程中，最大的挑戰在於嘉義老戲院相關資料較為零散，許多戲院已經停業或拆除，可取得的影像與歷史記錄相對有限，因此需要透過不同資料來源進行蒐集、整理與比對。同時也透過實地訪查的方式，走訪多個戲院舊址與周邊環境，以更深入了解其歷史背景與城市脈絡。此外，在設計層面上，也需要思考如何將較為歷史性的文字資料轉化為清晰且具有吸引力的視覺呈現，在資訊傳達與版面美感之間取得平衡，使讀者能夠更容易理解嘉義戲院文化的發展脈絡。",
    solution:
      "透過本次專案的研究與設計，將原本零散的嘉義老戲院資料重新整理，並結合時間軸、地圖與戲院故事等方式，建立出較為完整的文化脈絡。同時在視覺設計上運用復古拼貼的風格，融合老照片、歷史資料與電影元素，使原本較為靜態的歷史內容轉化為具有故事性與視覺吸引力的設計呈現。透過設計的方式，不僅讓嘉義老戲院的歷史被重新看見，也希望喚起更多人對地方文化與城市記憶的關注。",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva AI"],
    process: [
      {
        phase: "主題發想與資料蒐集",
        details:
          "確立以「嘉義市老戲院文化」為研究主題，透過書籍、網路資料與地方文獻蒐集相關歷史資料，初步了解嘉義戲院的發展背景與時代脈絡。",
      },
      {
        phase: "實地踏查與資料整理",
        details:
          "實際走訪嘉義市多處老戲院舊址及周邊環境，記錄現場空間與地方痕跡，並整理蒐集到的歷史資料，建立戲院時間軸與分布地圖。",
      },
      {
        phase: "視覺風格發展",
        details:
          "確立以復古電影文化為主要設計方向，嘗試運用拼貼設計、老照片與舊報紙紋理等元素，發展整體視覺風格與版面構成。",
      },
      {
        phase: "版面設計與內容編排",
        details:
          "依照戲院歷史發展順序進行內容編排，設計書籍版面、地圖與時間軸，將文字資料與影像素材整合成完整的視覺內容。",
      },
      {
        phase: "整體設計完成與成果呈現",
        details:
          "完成書籍整體設計與排版，透過設計呈現嘉義老戲院的歷史文化，讓讀者能夠重新認識城市中曾經存在的戲院記憶。",
      },
    ],
    reflection:
      "在這次的專案中，我透過資料蒐集、實地走訪與設計整理，重新認識了嘉義市過去的老戲院文化。原本只是對老戲院感到好奇，但在研究過程中才發現，戲院曾經是城市中非常重要的娛樂與社交場所，也承載了許多人的生活記憶。隨著時代變遷，許多戲院已經消失或被其他建築取代，也讓我開始思考地方文化與城市記憶保存的重要性。\n\n在設計的過程中，我嘗試將蒐集到的歷史資料轉化為較容易閱讀與理解的視覺內容，並透過拼貼與復古風格的設計，呈現老戲院所帶來的時代氛圍。雖然在資料整理與版面設計上花了不少時間，但也讓我學習到如何將研究內容與設計表現結合。透過這次的專案，我不僅完成了一本關於嘉義老戲院的設計作品，也更了解設計在記錄與傳遞文化記憶上的價值。",
  },
  {
    id: 8,
    title: "電影放映會\n流麻溝十五號",
    brief: "用設計打造電影與歷史的結合",
    imgUrl:
      "https://i.meee.com.tw/0AToeLg.png",
    bannerUrl: "https://i.meee.com.tw/QRWfDAz.png",
    coverPosition: "50% 10%",
    category: "平面文宣設計",
    date: "2023.11",
    description:
      "本專案為協同中學與財團法人陳文成博士紀念基金會共同舉辦之電影放映活動宣傳設計。活動以電影《流麻溝十五號》為核心，透過影像與歷史的結合，引導學生與觀眾重新思考臺灣過去的歷史記憶與社會議題。\n\n在本次活動中，我負責整體視覺宣傳設計，包含主視覺海報、活動資訊圖、講者介紹圖卡以及相關宣傳物。設計上以歷史氛圍為主要視覺方向，透過低飽和色調與具有情緒張力的畫面，營造出沉靜且具有歷史感的視覺風格，使觀者在接觸宣傳資訊時，也能感受到電影所傳達的時代背景與議題意涵。\n\n透過一系列視覺設計，讓活動資訊能清楚傳達，同時提升活動的整體辨識度與吸引力，使更多學生與觀眾願意參與此次電影放映與映後座談活動。",
    designConcept:
      "本專案的設計概念建立在「先理解，再設計」的基礎上。在實際開始設計前，我先花時間深入了解電影故事與歷史背景，因為我認為如果沒有理解整個事件的脈絡，就無法做出能讓人產生共鳴的畫面。\n\n在視覺表現上，我選擇以低彩度色調作為主軸，搭配灰藍、暗綠與土色，營造出帶有年代感與壓抑氛圍的畫面，使整體更貼近歷史記憶的質感。同時透過電影劇照的運用，讓畫面具有真實性與故事感，再結合影像處理與描圖效果，讓畫面呈現出略帶朦朧與象徵性的視覺風格。\n\n此外，在文字設計上使用具有筆觸感的書法字體作為標題，強化歷史感與情緒張力，並透過清楚的資訊階層安排，讓觀者能在情緒與資訊之間取得平衡。",
    gallery: [
      "https://i.meee.com.tw/9fg8Nj1.png",
      "https://i.meee.com.tw/gtWtgM2.png",
      "https://images.unsplash.com/photo-1611664778424-c8f83f5f932a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwY2FtZXJhJTIwcmV0cm98ZW58MXx8fHwxNzczNzIxNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1634771141792-12c6a8df9103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMG1vY2t1cCUyMGRhcmt8ZW58MXx8fHwxNzczNzIxNDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    posterUrl: [
      "https://i.meee.com.tw/vy3E8fX.png",
      "https://i.meee.com.tw/aNqtttC.png",
      "https://i.meee.com.tw/DFoeDQH.png",
      "https://i.meee.com.tw/NmTIAlV.png"
    ],
    challenge:
      "本專案最大的挑戰來自於活動本身涉及政治與歷史議題。在設計過程中，原本已完成的設計因學校對內容較為保守，無法提供用印與掛名，導致原有設計必須重新調整，甚至一度面臨無法繼續使用既有素材的狀況。\n\n這樣的突發狀況不僅影響設計方向，也讓整體專案進度受到影響，讓我深刻體會到設計並不只是畫面上的呈現，還會受到現實條件與不同立場的限制。",
    solution:
      "面對這樣的情況，我改變原本的做法，轉而尋求陳文成博士紀念基金會的支持，由基金會提供認證與相關資訊，使活動在沒有學校用印的情況下，仍然具備公信力並能順利推動。\n\n透過這次經驗，我學到在面對限制時，需要快速調整策略，並透過不同單位之間的溝通與合作來解決問題，也讓我更加理解設計不只是創作，更是一種整合資源與解決問題的過程。",
    pdfEmbed: "https://drive.google.com/file/d/1xV1J00ChX4xEKL08tQ9LmYFErhCwjd59/view?usp=sharing",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "PTC Creo"],
    process: [
      {
        phase: "理解主題與資料蒐集",
        details:
          "在正式設計前，我先花時間研究電影《流麻溝十五號》的歷史背景與故事內容，透過網路資料與影像蒐集，建立對整體議題的理解。",
      },
      {
        phase: "影像選擇與概念發想",
        details:
          "從眾多資料中挑選最具代表性的畫面，選擇能同時呈現歷史意象與情緒氛圍的影像，作為主視覺的核心元素。",
      },
      {
        phase: "主視覺設計與影像處理",
        details:
          "透過 Photoshop 進行人物去背與場景合成，並加入「流麻溝」意象與水紋、火焰等元素，象徵歷史場域與時代背景，再透過 Illustrator 進行影像描圖，讓畫面呈現朦朧且具有一致風格的效果。",
      },
      {
        phase: "版面與資訊編排",
        details:
          "加入活動標題與相關資訊，依照重要性安排文字層級，確保主視覺與資訊不互相干擾，同時提升閱讀清晰度。",
      },
      {
        phase: "版本調整與溝通修正",
        details:
          "製作多個排版版本，並與主辦單位反覆討論與修改，依照需求調整細節，最終確定正式版本。",
      },
      {
        phase: "延伸應用設計",
        details:
          "將主視覺延伸至活動流程圖、講者圖卡、明信片與周邊設計，建立完整的活動視覺系統，使整體宣傳具有一致性與辨識度。",
      },
    ],
    reflection:
      "在這次專案中，我發現設計不只是把畫面做好看而已，而是需要先理解活動在做什麼、背後想傳達什麼。因為《流麻溝十五號》本身和歷史議題有關，所以我在一開始沒有急著做設計，而是先花時間去了解整個故事背景，讓自己在設計時可以更貼近內容，而不是只做表面的視覺。\n\n在過程中其實也遇到一些困難，例如設計完成後，因為活動牽涉到政治與歷史議題，學校不願意在宣傳物上蓋章，導致原本的設計需要重新調整。當下其實蠻挫折的，因為等於前面的努力要重新來過，但後來透過基金會的協助，讓活動還是可以順利進行，也讓我學到設計不只是畫面，而是需要和不同單位溝通、一起解決問題。\n\n另外，這次的活動預算也比較有限，所以在設計上我會去思考怎麼用比較少的資源達到好的效果，例如用同一個主視覺去延伸不同的宣傳物，讓整體風格可以統一，也比較有效率。\n透過這次經驗，讓我學到很多，不只是技術上的成長，也讓我更了解設計在活動和議題中的角色。如果以後還有類似的專案，我會希望自己可以把整體規劃做得更完整，也讓設計更有影響力。",
  },
  {
    id: 9,
    title: "視覺介面設計\nKKBOX Redesign",
    brief: "互動式手機APP設計與改造",
    imgUrl:
      "https://images.unsplash.com/photo-1704018731280-6617b0ca1dbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwJTIwZGFya3xlbnwxfHx8fDE3NzI5NTE4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "品牌識別 CIS",
    date: "2023.08",
    description:
      "為智能照明品牌 Lumina 打造的全新品牌識別系統。標誌設計融合了「光波」與「開關」的意象，展現品牌專注於智能家居照明的核心價值。",
    designConcept:
      "以「科技感中的溫暖」為核心美學。多數智能科技品牌常使用冷冽的藍光來彰顯技術，但我選擇了從清晨曙光過渡到日落的漸層色 (Sunrise Gradient)。Logo 的幾何構造極度簡化，確保在最小的 App 圖示尺寸下依然清晰可辨。整套視覺識別 (VI) 規範中，我規定了大量的黑色留白，不僅呼應了「光只有在黑暗中才能彰顯」的哲學，更讓品牌的色彩在深色基調中爆發出極致的質感。",
    gallery: [
      "https://images.unsplash.com/photo-1511405732889-ce3d6256f366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBhZXN0aGV0aWMlMjBtb29kYm9hcmR8ZW58MXx8fHwxNzcyOTUyNDg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1704018731280-6617b0ca1dbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwJTIwZGFya3xlbnwxfHx8fDE3NzI5NTE4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    posterUrl:
      "https://images.unsplash.com/photo-1712903911024-0503895511b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50YXRpb24lMjBib2FyZCUyMGV4aGliaXRpb24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyOTUyNDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    challenge:
      "智能家居市場競爭激烈，多數品牌視覺趨向同質化的藍色科技感」，難以建立獨特記憶點。",
    solution:
      "跳脫傳統科技冷色系，選擇了充滿活力與溫度的漸層色系強調科技應為人類帶來溫暖與便利並產出完整的品牌規範手冊與多樣化的周邊視覺延伸。",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    process: [
      {
        phase: "品牌策略",
        details: "確立品牌人格：創新、溫暖、可靠。",
      },
      {
        phase: "標誌發想",
        details:
          "經過數十次草圖迭代，將抽象的『光』轉化為極簡的幾何圖形組合。",
      },
      {
        phase: "Mockup 應用",
        details:
          "將 Logo 應用於名片、產品包裝、App 介面與展場設計中，驗證視覺的延展性。",
      },
    ],
  },
];

export type ExperienceType = {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  certificate?: string;
  certificates?: string[];
  certificateText?: string;
  link?: string;
  extraLinks?: string[];
  extraImages?: string[];
  imageAspect?: string;
  projectId?: number;
  extraProjectIds?: number[];
};

export const competitionData: ExperienceType[] = [
  {
    id: 1,
    year: "2025 年 12 月",
    title: "長庚大學工業設計學系第二十三屆期末總展",
    subtitle: "優勝 (兩項參展作品均得獎)",
    description: "兩項參展作品均獲得評審高度肯定，雙雙榮獲期末總展優勝佳績。",
    image: "https://i.meee.com.tw/nOGAc0i.png",
    extraImages: [
      "https://i.meee.com.tw/aIHnQA1.jpg",
    ],
    projectId: 6,
    extraProjectIds: [2],
    certificates: [
      "https://images.unsplash.com/photo-1772761667737-37990ddbd7ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGF3YXJkJTIwcGFwZXJ8ZW58MXx8fHwxNzczNzE1MDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1698502809110-6731bd8dc29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMHdpbm5lciUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc3MzczMjk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
  },
  {
    id: 2,
    year: "2025 年 10 月",
    title: "TSTA_2025運動科技創新設計競賽",
    subtitle: "金獎 / 創新科技獎 / 優選獎",
    description: "參與運動科技創新設計競賽，作品榮獲創新設計項目「金獎」、鞋技中心「創新科技獎」及台灣運動發展協會「優選獎」三項殊榮。",
    image: "https://i.meee.com.tw/TZ9xXJU.png",
    projectId: 2,
    extraImages: [
      "https://i.meee.com.tw/zs8Tdwz.jpg",
    ],
    certificates: [
      "https://i.meee.com.tw/PUrdVEX.jpg",
      "https://i.meee.com.tw/FzFsL1u.jpg",
      "https://i.meee.com.tw/VpBduZe.jpg"
    ]
  },
  {
    id: 3,
    year: "2025 年 6 月",
    title: "長庚大學工業設計學系第二十二屆期末總展",
    subtitle: "優勝",
    description: "於期末總展中展現優異設計成果，獲得評審青睞榮獲優勝。",
    image: "https://i.meee.com.tw/kPo7sHV.png",
    projectId: 4,
    certificate: "https://i.meee.com.tw/EcU50IM.jpg",
  },
  {
    id: 4,
    year: "2025 年 5 月",
    title: "長庚大學【2025青年老闆】校際盃創新創業設計競賽",
    subtitle: "決賽-永續創新組 第三名",
    description: "結合永續發展概念與創新商業模式，提出具體可行的設計方案，於決賽中獲得第三名佳績。",
    image: "https://i.meee.com.tw/cOVvkSJ.png",
    projectId: 5,
    certificate: "https://images.unsplash.com/photo-1773212902295-14c35ee22235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXJpdCUyMGNlcnRpZmljYXRlJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzczNzMyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    year: "2025 年 4 月",
    title: "大專院校跨校創新創業競賽「GoGreen2025」",
    subtitle: "決賽 第四名",
    description: "參與跨校創新創業競賽，提出綠色創新永續方案，成功晉級決賽並榮獲第四名。",
    image: "https://i.meee.com.tw/cOVvkSJ.png",
    projectId: 5,
    certificate: "https://i.meee.com.tw/7mMe41u.jpg",
  },
  {
    id: 6,
    year: "2025 年 3 月",
    title: "明志大學跨校設計思考跨領域設計競賽",
    subtitle: "決賽組 佳作",
    description: "運用設計思考解決跨領域實務問題，於跨校競賽決賽中獲得佳作肯定。",
    image: "https://i.meee.com.tw/EVNc1Ql.jpg",
    certificate: "https://images.unsplash.com/photo-1770208524687-9ed3dfa80c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd2FyZCUyMGRpcGxvbWElMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MzczMjk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 9,
    year: "2022 年 11 月",
    title: "協同中學平面海報設計競賽",
    subtitle: "佳作",
    description: "於平面海報設計競賽中初試啼聲，展現對排版與視覺設計的潛力與熱忱，獲得佳作。",
    image: "https://i.meee.com.tw/d9TjyTu.png",
    imageAspect: "aspect-[210/297]",
    certificate: "https://i.meee.com.tw/m92cDab.png",
  },
];

export const projectData: ExperienceType[] = [
  {
    id: 10,
    year: "2022 年 1 月",
    title: "《流麻溝十五號》歷史與電影放映會",
    subtitle: "活動統籌與視覺設計",
    description: "本專案為協同中學與財團法人陳文成博士紀念基金會共同舉辦之電影放映活動宣傳設計。活動以電影《流麻溝十五號》為核心，透過影像與歷史的結合，引導學生與觀眾重新思考臺灣過去的歷史記憶與社會議題。\n\n在本次活動中，我負責整體視覺宣傳設計，包含主視覺海報、活動資訊圖、講者介紹圖卡以及相關宣傳物。設計上以歷史氛圍為主要視覺方向，透過低飽和色調與具有情緒張力的畫面，營造出沉靜且具有歷史感的視覺風格，使觀者在接觸宣傳資訊時，也能感受到電影所傳達的時代背景與議題意涵。\n\n透過一系列視覺設計，讓活動資訊能清楚傳達，同時提升活動的整體辨識度與吸引力，使更多學生與觀眾願意參與此次電影放映與映後座談活動。",
    image: "https://i.meee.com.tw/9WFNTFV.png",
    projectId: 8,
    extraImages: [
      "https://i.meee.com.tw/M5dZwyZ.png",
      "https://i.meee.com.tw/NfV51jP.png"
    ],
    link: "https://drive.google.com/file/d/1xV1J00ChX4xEKL08tQ9LmYFErhCwjd59/view?usp=sharing",
  },
  {
    id: 11,
    year: "2024 年 4 月",
    title: "協同中學畢業紀念冊編排",
    subtitle: "設計委員",
    description: "在這「疫」年，我們的認識與相處，從電腦螢幕開始。無論是課程形式的轉變，或是以線上的方式進行，每個這樣的特殊時期的經歷，都逐漸成為我們生命中難忘的一部分。在未來回顧時，也將更加深刻地感受到我們共同經歷的歷史痕跡。\n\n方格子的視窗，模仿疫情下在 Google Classroom 上上課的我們。我們相信，在未來回憶時，能夠與他人分享：「對，這就是那時候的上課方式。」\n\n在班級生活中，排球比賽與各項競賽是我們共同的重要記憶。在球場上，我們彼此合作、互相鼓勵，為了每一球全力以赴。或許我們並不是最突出的那一隊，但在彼此的陪伴與努力下，我們從不缺席。\n\n排球也是我們班最具代表性的活動之一。無論男女，大家都投入其中。這份共同的參與與熱情，將成為未來珍貴的回憶，承載著屬於我們的青春與熱血。",
    image: "https://i.meee.com.tw/dNU2jpw.png",
    extraImages: [
      "https://i.meee.com.tw/KrUlCXv.png",
      "https://i.meee.com.tw/yLcPl1t.png",
      "https://i.meee.com.tw/vEKzPK8.png"
    ],
    link: "https://drive.google.com/file/d/19dZfcURaNQtXtIvezqWdKadKmJTHO858/view?usp=sharing",
  },
  {
    id: 12,
    year: "2023 年 1 月",
    title: "協同中學學測祝福大型布條",
    subtitle: "設計及統籌委員",
    description: "本專案以學測祝福活動為主題，延續校園傳統並嘗試以創新的方式呈現祝福形式。透過巨型直式海報的設計，使祝福能在校園中長時間展示，成為具視覺焦點的公共裝置。\n\n設計結合插畫與動態構圖，傳達對高三學生的鼓勵與支持。在製作過程中，從企劃、設計到輸出與安裝，完整經歷實務流程，並透過與廠商溝通與問題解決，確保作品品質。\n\n最終海報成功展出，不僅提升活動參與感，也成為延續校園文化的重要象徵。",
    image: "https://i.meee.com.tw/YJEbUyI.png",
    link: "https://drive.google.com/file/d/1LVQqK--jXdHArm9dmA5Zp73mHf-Nxgyq/view?usp=sharing",
    imageAspect: "aspect-[1/2] md:aspect-[1/2]",
  },
  {
    id: 13,
    year: "2023 年 3 月",
    title: "台灣師範大學設計營創意風格海報",
    subtitle: "視覺創意與版面編排",
    description: "本專案為參與台灣師範大學設計營期間完成之招牌設計，題目要求結合「美式漢堡」與「日式漫畫」兩種風格，打造具高辨識度的品牌視覺。\n\n我們以日式漫畫為主要視覺語言，將漢堡食材拆解後「層層堆疊」，透過誇張的構圖與分鏡安排，創造強烈的動態感與視覺張力。同時，運用漫畫常見的網點、集中線與狀聲詞，並以黑白為主體搭配紅色點綴，不僅強化視覺節奏，更呼應招牌在街道環境的吸睛需求。\n\n此設計成功透過跨文化的視覺融合，展現漢堡豐富層次的同時，也建立出充滿個性的品牌形象。",
    image: "https://i.meee.com.tw/Cdr7NtE.png",
    imageAspect: "aspect-[3/4]",
    projectId: 7,
    certificate: "https://i.meee.com.tw/HJvzEVs.png",
    certificateText: "查看證照",
  },
];