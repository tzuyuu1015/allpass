const questions = [
  {
    "question": "IP協定屬於哪一種傳輸型態？",
    "options": ["有確認傳輸", "實時同步", "最佳努力傳輸（Best Effort）", "訊息重組保障"],
    "answer": 2
  },
  {
    "question": "下列哪一類IP是保留用於群播(Multicast)？",
    "options": ["Class A", "Class C", "Class D", "Class E"],
    "answer": 2
  },
  {
    "question": "Class C 的IP位址前幾個bit固定為？",
    "options": ["0", "10", "110", "111"],
    "answer": 2
  },
  {
    "question": "下列哪個是私有IP位址？",
    "options": ["172.32.0.1", "10.0.0.1", "192.0.2.1", "8.8.8.8"],
    "answer": 1
  },
  {
    "question": "哪個IP遮罩對應的CIDR為 /24？",
    "options": ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.128"],
    "answer": 2
  },
  {
    "question": "無等級位址劃分（CIDR）的主要優點是？",
    "options": ["增加IP數量", "減少傳輸延遲", "提高網路安全性", "彈性劃分子網與Supernet"],
    "answer": 3
  },
  {
    "question": "如果你需要 1600 個主機，最合適的子網數量為？",
    "options": ["1024", "2048", "512", "256"],
    "answer": 1
  },
  {
    "question": "NAT技術的目的之一是？",
    "options": ["加快傳輸速度", "節省合法IP數量", "提供無限頻寬", "濾除不明封包"],
    "answer": 1
  },
  {
    "question": "NAPT的特色是什麼？",
    "options": ["每台內部主機對應一個外部IP", "每個Port皆不變", "多個內部IP共用一個外部IP + Port編號", "無需修改任何封包"],
    "answer": 2
  },
  {
    "question": "下列何者是靜態NAT的特性？",
    "options": ["由伺服器動態指定IP", "每次連線更換IP", "一對一固定對應", "只適用於IPv6"],
    "answer": 2
  },
  {
    "question": "IPv6的位址長度是？",
    "options": ["32 bits", "64 bits", "128 bits", "256 bits"],
    "answer": 2
  },
  {
    "question": "IPv6的位址格式使用哪種符號區隔？",
    "options": ["斜線 /", "句點 .", "冒號 :", "分號 ;"],
    "answer": 2
  },
  {
    "question": "哪一種IPv6位址對應「單一主機傳送給多個接收端」？",
    "options": ["Unicast", "Broadcast", "Multicast", "Anycast"],
    "answer": 2
  },
  {
    "question": "哪一種IPv6位址是「來源主機傳送給最近一個目標節點」？",
    "options": ["Multicast", "Unicast", "Anycast", "Loopback"],
    "answer": 2
  },
  {
    "question": "IP Spoofing攻擊的原理是？",
    "options": ["使用加密破譯資訊", "偽造來源IP地址進行攻擊", "攔截資料封包", "模擬合法伺服器"],
    "answer": 1
  },
  {
    "question": "IPv6 自動定址中，Stateless 的特點是？",
    "options": ["一定要 DHCP server", "由主機自行產生IP", "不可改變 IP", "僅能內部使用"],
    "answer": 1
  },
  {
    "question": "哪一個是IPv6對IPv4轉換的常用技術？",
    "options": ["IPSec", "ICMPv6", "NAT-PT", "VPN"],
    "answer": 2
  },
  {
    "question": "IPv6中的封包標頭固定長度為多少 bytes？",
    "options": ["20 bytes", "32 bytes", "40 bytes", "60 bytes"],
    "answer": 2
  },
  {
    "question": "下列哪個組織負責全球IP位址分配？",
    "options": ["IANA", "ICANN", "IEEE", "TWNIC"],
    "answer": 1
  },
  {
    "question": "CIDR 中的「/x」中 x 的意義為？",
    "options": ["主機位元數", "網路位元數", "最大封包大小", "子網數量"],
    "answer": 1
  },
  {
    "question": "ARP 協定的主要功能是？",
    "options": ["解析 IP 對應的 MAC 位址", "轉換主機名稱為 IP", "將資料分段封裝", "檢查網路是否斷線"],
    "answer": 0
  },
  {
    "question": "RARP 協定的功能是？",
    "options": ["將 MAC 位址轉換為 IP 位址", "將 IP 位址轉換為 MAC 位址", "保護封包不被竊聽", "建立 TCP 連線"],
    "answer": 0
  },
  {
    "question": "ARP 的 Request 封包是向哪一種位址廣播？",
    "options": ["單一指定 MAC 位址", "網域廣播 MAC 位址", "公有 IP 位址", "本機迴圈位址"],
    "answer": 1
  },
  {
    "question": "ARP 快取（ARP Cache）的作用是？",
    "options": ["儲存 DNS 查詢結果", "保留已解析的 MAC-IP 對應", "記錄所有封包", "緩衝器流量"],
    "answer": 1
  },
  {
    "question": "若查不到對應 MAC 位址，主機會？",
    "options": ["直接封包送出", "透過 ICMP 訊息通報", "發送 ARP Request", "進行 RARP 回傳"],
    "answer": 2
  },
  {
    "question": "下列哪個協定可在無 IP 位址時取得 IP？",
    "options": ["ARP", "DHCP", "RARP", "ICMP"],
    "answer": 2
  },
  {
    "question": "ARP 封包中包含哪些主要欄位？",
    "options": ["來源 MAC 與來源 IP", "來源 MAC 與目的 MAC", "目的 IP 與 MAC", "TTL 與 port 號"],
    "answer": 0
  },
  {
    "question": "ICMP 協定屬於哪一層？",
    "options": ["應用層", "傳輸層", "網路層", "資料鏈結層"],
    "answer": 2
  },
  {
    "question": "下列哪一種 ICMP 訊息類型為查詢型？",
    "options": ["目的地不可達", "時間超時", "Echo Request", "端口不可達"],
    "answer": 2
  },
  {
    "question": "ping 指令主要使用哪種 ICMP 訊息？",
    "options": ["Redirect", "Echo Request/Echo Reply", "Time Exceeded", "Source Quench"],
    "answer": 1
  },
  {
    "question": "ICMP 的 Time Exceeded 訊息會在什麼情況出現？",
    "options": ["DNS查詢失敗", "IP封包 TTL 為0", "ARP失敗", "封包損毀"],
    "answer": 1
  },
  {
    "question": "ICMP 錯誤訊息中「目的地不可達」對應的狀況是？",
    "options": ["MAC 錯誤", "ARP cache 滿", "找不到路由", "TCP 斷線"],
    "answer": 2
  },
  {
    "question": "ICMP 封包格式中，前兩個欄位為？",
    "options": ["Type 與 Checksum", "Type 與 Code", "Code 與 Checksum", "TTL 與 Type"],
    "answer": 1
  },
  {
    "question": "traceroute 工具的原理是利用？",
    "options": ["DNS輪詢", "ICMP Echo不斷遞增 TTL", "ARP 封包掃描", "TCP 重送機制"],
    "answer": 1
  },
  {
    "question": "若 ping 某主機時出現『Request timed out』，可能原因為？",
    "options": ["ARP cache 過期", "DNS查詢失敗", "對方未回應 ICMP Echo", "封包TTL設太高"],
    "answer": 2
  },
  {
    "question": "下列哪一個是 ICMP 錯誤回報訊息？",
    "options": ["Echo Request", "Time Exceeded", "Router Advertisement", "Address Mask Request"],
    "answer": 1
  },
  {
    "question": "ICMP Echo Request 與 Echo Reply 常見於哪個指令？",
    "options": ["netstat", "ipconfig", "ping", "arp -a"],
    "answer": 2
  },
  {
    "question": "ARP 作用在哪兩層間的轉換？",
    "options": ["應用層與網路層", "網路層與資料鏈結層", "資料鏈結層與實體層", "傳輸層與網路層"],
    "answer": 1
  },
  {
    "question": "當一部主機開機後沒有IP位址，它可能會使用什麼協定？",
    "options": ["ICMP", "RARP", "ARP", "Telnet"],
    "answer": 1
  },
  {
    "question": "ICMP 封包的目的之一是？",
    "options": ["建立TCP連線", "進行名稱解析", "傳送路由錯誤回報", "確認IP與MAC對應"],
    "answer": 2
  },
  {
    "question": "TCP 是什麼類型的傳輸協定？",
    "options": ["連線導向、可靠", "非連線導向、不可靠", "非連線導向、可靠", "連線導向、不可靠"],
    "answer": 0
  },
  {
    "question": "UDP 的主要特性是？",
    "options": ["提供順序保證", "支援流量控制", "無需建立連線", "自動重傳遺失封包"],
    "answer": 2
  },
  {
    "question": "TCP 建立連線的程序稱為什麼？",
    "options": ["四次交握", "三次交握", "雙向握手", "單向握手"],
    "answer": 1
  },
  {
    "question": "UDP 的標頭總共佔用幾個位元組？",
    "options": ["4", "6", "8", "12"],
    "answer": 2
  },
  {
    "question": "下列哪一項是 TCP 提供但 UDP 沒有的？",
    "options": ["位址解析", "流量控制與重傳", "封包編號", "應用層介面"],
    "answer": 1
  },
  {
    "question": "TCP 的可靠傳輸依賴哪一種機制？",
    "options": ["ACK 回應與重傳", "MAC 封裝", "DNS 映射", "ARP 快取"],
    "answer": 0
  },
  {
    "question": "TCP 封包中負責流量控制的欄位是什麼？",
    "options": ["Port", "Checksum", "Window size", "Urgent pointer"],
    "answer": 2
  },
  {
    "question": "UDP 通常應用於哪類型的傳輸需求？",
    "options": ["高可靠度文件傳輸", "即時影音、VoIP", "線上銀行交易", "郵件接收"],
    "answer": 1
  },
  {
    "question": "TCP 封包結束連線時，通常需要幾次封包交換？",
    "options": ["1", "2", "3", "4"],
    "answer": 3
  },
  {
    "question": "UDP 的 Checksum 欄位主要作用是？",
    "options": ["記錄連線數量", "執行錯誤檢查", "追蹤路由", "計算TTL"],
    "answer": 1
  },
  {
    "question": "下列哪個服務最可能使用 UDP 協定？",
    "options": ["HTTPS", "FTP", "VoIP", "SSH"],
    "answer": 2
  },
  {
    "question": "TCP 使用哪個技術避免過多資料一次傳送？",
    "options": ["Port scanning", "Congestion control", "Check bit stuffing", "Segment stripping"],
    "answer": 1
  },
  {
    "question": "Socket 是由哪三個要素組成？",
    "options": ["MAC、IP、Port", "IP、Port、協定", "IP、DNS、TTL", "Port、ACK、資料"],
    "answer": 1
  },
  {
    "question": "公認埠號（Well-known ports）範圍為？",
    "options": ["0–255", "0–1023", "1024–49151", "49152–65535"],
    "answer": 1
  },
  {
    "question": "TCP 如何處理封包遺失？",
    "options": ["略過該封包", "通知使用者", "重傳遺失封包", "等待超時"],
    "answer": 2
  },
  {
    "question": "TCP 中的 Sliding Window 主要目的是？",
    "options": ["控制接收速率", "增加封包大小", "減少 ACK 數量", "封鎖不明 IP"],
    "answer": 0
  },
  {
    "question": "以下哪個 port 號是為 HTTPS 保留？",
    "options": ["80", "53", "443", "25"],
    "answer": 2
  },
  {
    "question": "Port 號 53 提供哪一項服務？",
    "options": ["DNS", "SMTP", "FTP", "Telnet"],
    "answer": 0
  },
  {
    "question": "TCP 為什麼比較適合檔案傳輸用途？",
    "options": ["延遲低", "有封包重傳與順序控制", "不需建立連線", "使用最小封包"],
    "answer": 1
  },
  {
    "question": "UDP 在封包傳送時，若封包遺失會？",
    "options": ["通知主機重送", "自動補送", "略過處理", "建立新連線"],
    "answer": 2
  },
  {
    "question": "DNS 的主要用途是什麼？",
    "options": ["加密資料", "傳送郵件", "將網域名稱轉換為 IP 位址", "控制路由選擇"],
    "answer": 2
  },
  {
    "question": "DNS 採用哪一種資料庫架構？",
    "options": ["集中式", "隨機式", "階層且分散式", "區塊鏈式"],
    "answer": 2
  },
  {
    "question": "哪一種 DNS 伺服器擁有完整區域資料並能授權回覆？",
    "options": ["根伺服器", "快取伺服器", "權威名稱伺服器", "轉送器"],
    "answer": 2
  },
  {
    "question": "使用者輸入網址後，DNS 查詢的第一步通常是什麼？",
    "options": ["查詢根名稱伺服器", "查詢本地 DNS 快取", "查詢區域名稱伺服器", "封包重新導向"],
    "answer": 1
  },
  {
    "question": "以下哪個是 DNS 中的資源記錄類型？",
    "options": ["A", "B", "R", "P"],
    "answer": 0
  },
  {
    "question": "DNS 的 A 記錄對應什麼？",
    "options": ["IPv6 位址", "郵件伺服器資訊", "別名", "IPv4 位址"],
    "answer": 3
  },
  {
    "question": "MX 記錄在 DNS 中的作用是？",
    "options": ["定義主機別名", "定義郵件交換伺服器", "定義區域權威", "定義 IPv6"],
    "answer": 1
  },
  {
    "question": "DNS 中 AAAA 記錄對應什麼？",
    "options": ["IPv4", "IPv6", "別名", "郵件伺服器"],
    "answer": 1
  },
  {
    "question": "下列哪一項屬於權威名稱伺服器的角色？",
    "options": ["傳遞封包", "記錄網頁內容", "提供域名解析", "重送電子郵件"],
    "answer": 2
  },
  {
    "question": "CNAME 記錄的用途是什麼？",
    "options": ["指向真實 IP", "建立別名指向其他主機名", "記錄 TTL", "回應錯誤類型"],
    "answer": 1
  },
  {
    "question": "哪種查詢方式只要求 DNS 伺服器提供最終答案？",
    "options": ["遞迴查詢", "反向查詢", "轉送查詢", "迭代查詢"],
    "answer": 0
  },
  {
    "question": "迭代查詢的過程中，DNS 伺服器會？",
    "options": ["查完整解析後回傳", "告知下一個查詢對象", "重新封包傳送", "無法回應"],
    "answer": 1
  },
  {
    "question": "DNS 查詢流程中，哪一層級的伺服器會知道 .com 的位址？",
    "options": ["本地 DNS", "權威伺服器", "根名稱伺服器", "終端使用者"],
    "answer": 2
  },
  {
    "question": "DNS 封包格式中，ID 欄位的作用是？",
    "options": ["資料加密", "查詢類型記錄", "辨識查詢與回應", "指向 TTL"],
    "answer": 2
  },
  {
    "question": "封包格式中 RD (Recursion Desired) 代表？",
    "options": ["請求進行遞迴查詢", "重新定址封包", "記錄延遲", "重新定義名稱"],
    "answer": 0
  },
  {
    "question": "DNS 使用的預設埠號為？",
    "options": ["25", "110", "53", "443"],
    "answer": 2
  },
  {
    "question": "為何 DNS 採階層式設計？",
    "options": ["易於記憶", "分散負載與提升效率", "可自動轉址", "減少 DNS 快取"],
    "answer": 1
  },
  {
    "question": "下列哪項是 DNS 快取的好處？",
    "options": ["防止病毒", "加快查詢速度", "減少IP碰撞", "過濾惡意網站"],
    "answer": 1
  },
  {
    "question": "哪一項不是 DNS 協定的功能？",
    "options": ["解析主機名稱", "提供郵件遞送協議", "查詢 IP", "管理資源記錄"],
    "answer": 1
  },
  {
    "question": "SOA 資源記錄包含？",
    "options": ["序號與管理者信箱", "公鑰與金鑰長度", "憑證類型", "逾時重傳參數"],
    "answer": 0
  },
  {
    "question": "DHCP 相較於 BOOTP 的主要優點是什麼？",
    "options": [
      "支援靜態 IP 指派",
      "支援動態 IP 指派",
      "不需硬體位址",
      "無需伺服器"
    ],
    "answer": 1
  },
  {
    "question": "DHCP 三種 IP 配置方式中，哪一種是由 DHCP 伺服器指派固定 IP？",
    "options": [
      "動態分配",
      "自動分配",
      "手動分配",
      "混合分配"
    ],
    "answer": 1
  },
  {
    "question": "DHCP 使用的預設通訊埠為？",
    "options": [
      "TCP 67 / 68",
      "UDP 67 / 68",
      "TCP 53 / 67",
      "UDP 53 / 68"
    ],
    "answer": 1
  },
  {
    "question": "當 DHCP 客戶端尚無 IP 時，其來源 IP 為？",
    "options": [
      "127.0.0.1",
      "192.168.0.1",
      "0.0.0.0",
      "255.255.255.255"
    ],
    "answer": 2
  },
  {
    "question": "哪一個 DHCP 訊息用於客戶端廣播請求 IP？",
    "options": [
      "DHCPACK",
      "DHCPOFFER",
      "DHCPDISCOVER",
      "DHCPREQUEST"
    ],
    "answer": 2
  },
  {
    "question": "哪一種 DHCP 封包用來正式確認租約？",
    "options": [
      "DHCPOFFER",
      "DHCPACK",
      "DHCPREQUEST",
      "DHCPNAK"
    ],
    "answer": 1
  },
  {
    "question": "當 DHCP 伺服器與客戶端不在同一網段時，應使用哪種技術？",
    "options": [
      "ARP 轉送",
      "DHCP Relay Agent",
      "IP Tunnel",
      "DNS Proxy"
    ],
    "answer": 1
  },
  {
    "question": "DHCP 封包中的 Op 值為 1 表示什麼？",
    "options": [
      "伺服器回應",
      "客戶端請求",
      "租約續約",
      "錯誤通知"
    ],
    "answer": 1
  },
  {
    "question": "DHCP 封包中 FLAGS 欄位的 B 位元若為 1，代表？",
    "options": [
      "單播回應",
      "多播回應",
      "廣播回應",
      "錯誤回應"
    ],
    "answer": 2
  },
  {
    "question": "客戶端發送 DHCPREQUEST 是為了？",
    "options": [
      "請求特定伺服器租約",
      "取消租約",
      "尋找新的伺服器",
      "啟用 Relay Agent"
    ],
    "answer": 0
  },
  {
    "question": "DHCP 更新租約的 T1 時間通常為租約期限的多少？",
    "options": [
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 1
  },
  {
    "question": "若租約續約失敗，會轉為何種狀態再次嘗試？",
    "options": [
      "INIT",
      "BOUND",
      "REBINDING",
      "SELECTING"
    ],
    "answer": 2
  },
  {
    "question": "APIPA 配置的 IP 範圍是？",
    "options": [
      "192.168.0.1~192.168.255.254",
      "10.0.0.1~10.255.255.254",
      "172.16.0.1~172.31.255.254",
      "169.254.0.1~169.254.255.254"
    ],
    "answer": 3
  },
  {
    "question": "DHCP 封包的 Transaction ID (XID) 用途為？",
    "options": [
      "識別來源 MAC",
      "驗證伺服器 IP",
      "確認租約時間",
      "唯一識別該次交握流程"
    ],
    "answer": 3
  },
  {
    "question": "若伺服器接收到錯誤 IP 要求，會發送哪個封包？",
    "options": [
      "DHCPNAK",
      "DHCPACK",
      "DHCPOFFER",
      "DHCPDISCOVER"
    ],
    "answer": 0
  },
  {
    "question": "下列哪個 DHCP 訊息用於拒絕已被佔用的 IP？",
    "options": [
      "DHCPNAK",
      "DHCPDECLINE",
      "DHCPACK",
      "DHCPRELEASE"
    ],
    "answer": 1
  },
  {
    "question": "DHCP 的 Options 欄位中，哪一個指定要求的租約時間？",
    "options": [
      "Requested IP Address",
      "Lease Time",
      "Parameter Request List",
      "Server Identifier"
    ],
    "answer": 1
  },
  {
    "question": "若客戶端要手動更新 DHCP 租約，指令為？",
    "options": [
      "ipconfig /release",
      "ipconfig /show",
      "ipconfig /renew",
      "ipconfig /config"
    ],
    "answer": 2
  },
  {
    "question": "哪個 DHCP 封包會使用於 INFORM 型態請求中？",
    "options": [
      "DHCPDISCOVER",
      "DHCPOFFER",
      "DHCPINFORM",
      "DHCPNAK"
    ],
    "answer": 2
  },
  {
    "question": "DHCP 封包若超過 312 bytes 資料時，會如何處理？",
    "options": [
      "分段傳輸",
      "使用 file/sname 欄位擴展",
      "忽略超過資料",
      "丟棄該封包"
    ],
    "answer": 1
  },
  {
    "question": "資訊網路安全的主要目的為何？",
    "options": ["提升資料傳輸速度", "保障資訊的保密性與完整性", "增加頻寬使用率", "降低網路成本"],
    "answer": 1
  },
  {
    "question": "DES 加密演算法使用幾位元的金鑰？",
    "options": ["64位元", "56位元", "128位元", "192位元"],
    "answer": 1
  },
  {
    "question": "AES 加密的金鑰長度不包括下列哪一項？",
    "options": ["128位元", "192位元", "256位元", "512位元"],
    "answer": 3
  },
  {
    "question": "非對稱式加密系統的代表演算法為何？",
    "options": ["DES", "AES", "RSA", "3DES"],
    "answer": 2
  },
  {
    "question": "數位簽章主要透過哪種金鑰進行簽署？",
    "options": ["公開金鑰", "私密金鑰", "對稱金鑰", "AES金鑰"],
    "answer": 1
  },
  {
    "question": "數位信封的核心概念是？",
    "options": ["僅使用公開金鑰加密", "結合對稱與非對稱加密", "透過生物辨識認證", "僅透過對稱加密"],
    "answer": 1
  },
  {
    "question": "數位憑證的發行由哪個機構負責？",
    "options": ["NAT", "ICANN", "IEEE", "CA"],
    "answer": 3
  },
  {
    "question": "封包過濾防火牆主要工作在哪兩層？",
    "options": ["資料連結層與應用層", "網路層與傳輸層", "傳輸層與應用層", "實體層與網路層"],
    "answer": 1
  },
  {
    "question": "代理防火牆的優勢是？",
    "options": ["傳輸速度快", "不需設定", "可過濾內部資料", "可避免入侵者直接攻擊內部網路"],
    "answer": 3
  },
  {
    "question": "IPSec 中 AH 協定主要提供哪些功能？",
    "options": ["資料加密", "身份認證與完整性", "資料壓縮", "頻寬保證"],
    "answer": 1
  },
  {
    "question": "IPSec 中 ESP 協定可提供？",
    "options": ["資料加密與認證", "僅資料完整性", "僅身份驗證", "僅資料壓縮"],
    "answer": 0
  },
  {
    "question": "IP 封包中的協定欄位值為 51，表示使用哪個協定？",
    "options": ["ESP", "TCP", "AH", "UDP"],
    "answer": 2
  },
  {
    "question": "IP 封包中協定欄位為 50 表示？",
    "options": ["ESP", "TCP", "AH", "ICMP"],
    "answer": 0
  },
  {
    "question": "ESP 的 Authentication Data 欄位用來？",
    "options": ["加密資料", "表示協定版本", "驗證封包完整性", "確認傳送端地址"],
    "answer": 2
  },
  {
    "question": "ESP 協定的加密範圍不包含？",
    "options": ["ESP 標尾", "Payload Data", "ESP 標頭", "ICV"],
    "answer": 3
  },
  {
    "question": "在 AH 協定中，用來防止重送攻擊的欄位為？",
    "options": ["SPI", "Next Header", "Sequence Number", "Authentication Data"],
    "answer": 2
  },
  {
    "question": "HMAC 是什麼技術的組合？",
    "options": ["非對稱加密與雜湊", "對稱加密與雜湊", "RSA與數位簽章", "對稱加密與公開金鑰"],
    "answer": 1
  },
  {
    "question": "IPSec 原先設計應用於哪個協定？",
    "options": ["IPv4", "UDP", "IPv6", "TCP"],
    "answer": 2
  },
  {
    "question": "ISAKMP 是用於什麼目的？",
    "options": ["金鑰產生", "身份驗證", "網域名稱解析", "安全關聯管理"],
    "answer": 3
  },
  {
    "question": "數位簽章中，驗證簽章使用哪一種金鑰？",
    "options": ["私密金鑰", "對稱金鑰", "公開金鑰", "動態金鑰"],
    "answer": 2
  },
  {
    "question": "Dual Stack 技術的主要優點是？",
    "options": [
      "僅支援 IPv4 通訊",
      "封包處理速度最快",
      "可與 IPv4 與 IPv6 主機通訊",
      "減少硬體需求"
    ],
    "answer": 2
  },
  {
    "question": "在 Dual Stack 架構下，設備需要？",
    "options": [
      "同時支援 NAT-PT",
      "同時配置 IPv4 與 IPv6 位址",
      "只需 IPv6 位址",
      "轉換 IPv4 成 IPv6"
    ],
    "answer": 1
  },
  {
    "question": "Dual Stack 的缺點是？",
    "options": [
      "無法支援 IPv6 封包",
      "效率太高導致延遲",
      "增加設備資源負擔",
      "無法與 NAT 搭配"
    ],
    "answer": 2
  },
  {
    "question": "Tunneling 技術主要用途是？",
    "options": [
      "完全取代 IPv4",
      "封裝 IPv6 封包以透過 IPv4 網路傳送",
      "建立 DNS 快取",
      "加速 DHCP 發送"
    ],
    "answer": 1
  },
  {
    "question": "6to4 是哪種轉換技術的一種實作？",
    "options": [
      "Dual Stack",
      "NAT64",
      "Tunneling",
      "DNS64"
    ],
    "answer": 2
  },
  {
    "question": "Teredo 技術最適合用在哪種網路環境？",
    "options": [
      "IPv6-only 網路",
      "NAT 環境",
      "無線網路",
      "封包過濾防火牆"
    ],
    "answer": 1
  },
  {
    "question": "ISATAP 協定適用於什麼場景？",
    "options": [
      "外部公網互聯",
      "VPN 網路",
      "內部網路",
      "無 NAT 的 IPv4 網路"
    ],
    "answer": 2
  },
  {
    "question": "Tunneling 技術的主要缺點之一是？",
    "options": [
      "需要 DNS 記錄",
      "需每台設備安裝代理程式",
      "封裝與解封裝會降低效率",
      "無法通過 NAT"
    ],
    "answer": 2
  },
  {
    "question": "在 Tunneling 過程中，IPv6 封包會被？",
    "options": [
      "丟棄",
      "轉為 TCP 流",
      "包裹在 IPv4 封包中",
      "改為 DNS 查詢"
    ],
    "answer": 2
  },
  {
    "question": "協定轉換技術如 NAT64 的目的為？",
    "options": [
      "實現 IPv4 封包加密",
      "讓 IPv6 主機與 IPv4 主機通訊",
      "提升頻寬利用率",
      "阻擋非授權存取"
    ],
    "answer": 1
  },
  {
    "question": "NAT64 通常會搭配哪項技術使用？",
    "options": [
      "NAT-PT",
      "DNS64",
      "ARP",
      "Teredo"
    ],
    "answer": 1
  },
  {
    "question": "DNS64 的作用是？",
    "options": [
      "提供 IPv4 DNS 回應",
      "合成 IPv4 成 IPv6 回應",
      "壓縮封包",
      "強制更新 IPv6 租約"
    ],
    "answer": 1
  },
  {
    "question": "協定轉換的缺點是？",
    "options": [
      "設備不需支援 IPv6",
      "無法處理 IPv4 封包",
      "部分協定（如 FTP）不完全相容",
      "需使用 6to4 封包"
    ],
    "answer": 2
  },
  {
    "question": "以下哪項不屬於 Tunneling 技術實作？",
    "options": [
      "6to4",
      "ISATAP",
      "Teredo",
      "NAT64"
    ],
    "answer": 3
  },
  {
    "question": "協定轉換的運作位置通常在？",
    "options": [
      "終端主機",
      "區域交換機",
      "網路邊界設備",
      "DNS Server"
    ],
    "answer": 2
  },
  {
    "question": "以下哪個描述屬於 Dual Stack？",
    "options": [
      "以 IPv6 封包包住 IPv4 封包",
      "同時具備 IPv4/IPv6 位址",
      "主機僅有 IPv4 位址",
      "主機僅有 IPv6 位址"
    ],
    "answer": 1
  },
  {
    "question": "Tunneling 技術可用於？",
    "options": [
      "降低延遲",
      "跨越 IPv4-only 網路傳送 IPv6 封包",
      "建立 DNS 記錄",
      "發送 DHCP 封包"
    ],
    "answer": 1
  },
  {
    "question": "Tunneling 效率較低的主因為？",
    "options": [
      "硬體不相容",
      "路由器無法辨識",
      "封裝與解封裝增加開銷",
      "不支援 IPv4 位址"
    ],
    "answer": 2
  },
  {
    "question": "NAT64 轉換過程中，IPv6 封包會？",
    "options": [
      "直接送出",
      "轉為 IPv4 封包後再傳送",
      "經 DNS 資料解碼",
      "由 DNS64 重新分流"
    ],
    "answer": 1
  },
  {
    "question": "使用 NAT64 + DNS64 的架構中，DNS 回應會？",
    "options": [
      "合成 AAAA 記錄供 IPv6 使用",
      "轉為 CNAME 記錄",
      "只回應 A 記錄",
      "封包不回應"
    ],
    "answer": 0
  },
    {
    "question": "在啟用 OSPF 前，需使用哪個命令進入 OSPF 設定模式？",
    "options": ["router bgp", "router ospf", "router eigrp", "router rip"],
    "answer": 1
  },
  {
    "question": "以下哪個命令會將 192.168.0.0 網段加入 OSPF 並屬於 Area 0？",
    "options": [
      "network 192.168.0.0 255.255.255.0 area 0",
      "network 192.168.0.0 0.0.0.255 area 1",
      "network 192.168.0.0 0.0.255.255 area 0",
      "ip ospf area 0"
    ],
    "answer": 2
  },
  {
    "question": "OSPF 預設的行政距離（Administrative Distance）是多少？",
    "options": ["100", "120", "90", "110"],
    "answer": 3
  },
  {
    "question": "OSPF 通常使用哪一種演算法計算路徑？",
    "options": ["Bellman-Ford", "Dijkstra", "Flooding", "CSMA/CD"],
    "answer": 1
  },
  {
    "question": "哪個命令可用來檢視目前路由表？",
    "options": ["show interfaces", "show ip interface brief", "show ip ospf", "show ip route"],
    "answer": 3
  },
  {
    "question": "在 OSPF 中，標記為 'O' 的路由代表什麼？",
    "options": ["EIGRP 路由", "OSPF 路由", "RIP 路由", "靜態路由"],
    "answer": 1
  },
  {
    "question": "OSPF 的 Cost 主要是根據哪個介面參數計算？",
    "options": ["延遲", "頻寬", "MTU", "IP 位址"],
    "answer": 1
  },
  {
    "question": "變更 Serial0/0/0 頻寬的命令為？",
    "options": [
      "ip bandwidth 1544",
      "set bandwidth 1544",
      "bandwidth 1544",
      "mtu 1544"
    ],
    "answer": 2
  },
  {
    "question": "OSPF 鄰居狀態從 LOADING 到 FULL 表示什麼？",
    "options": [
      "路由尚未建立",
      "鄰居不穩定",
      "資料同步完成",
      "路由器關機"
    ],
    "answer": 2
  },
  {
    "question": "OSPF 資訊 'via 192.168.120.1, Serial0/0/0' 中的數字 [110/129] 各代表什麼？",
    "options": [
      "優先順序/負載",
      "跳數/延遲",
      "管理距離/成本",
      "頻寬/距離"
    ],
    "answer": 2
  },
  {
    "question": "哪個命令可顯示介面 IP 與狀態簡表？",
    "options": [
      "show interfaces ip brief",
      "show ip int brief",
      "ip route show",
      "show version"
    ],
    "answer": 1
  },
  {
    "question": "路由表中 'C' 表示？",
    "options": [
      "連接失敗",
      "OSPF 動態學習",
      "直接連接",
      "靜態設定"
    ],
    "answer": 2
  },
  {
    "question": "L 路由項目表示？",
    "options": [
      "本地介面 IP",
      "遠端預設閘道",
      "靜態指派路由",
      "OSPF 外部路由"
    ],
    "answer": 0
  },
  {
    "question": "OSPF 的預設成本計算公式是？",
    "options": [
      "10000 / 頻寬",
      "100 / 頻寬",
      "100000000 / 頻寬",
      "100000 / 頻寬"
    ],
    "answer": 2
  },
  {
    "question": "OSPF 鄰居狀態變為 DOWN，可能的原因是？",
    "options": [
      "封包遺失",
      "線路故障",
      "閘道錯誤",
      "ACL 阻擋"
    ],
    "answer": 1
  },
  {
    "question": "在路由表中 'via 192.168.50.2' 表示？",
    "options": [
      "目的地為 192.168.50.2",
      "下一跳為 192.168.50.2",
      "本地 IP 是 192.168.50.2",
      "來源 IP 是 192.168.50.2"
    ],
    "answer": 1
  },
  {
    "question": "下列哪個協定類型代號與 OSPF 有關？",
    "options": ["R", "D", "O", "S"],
    "answer": 2
  },
  {
    "question": "欲查詢 Serial0/0/0 介面的詳細統計資訊，應使用？",
    "options": [
      "show interface s0/0/0",
      "show ip s0/0/0",
      "interface detail s0/0/0",
      "ip summary s0/0/0"
    ],
    "answer": 0
  },
  {
    "question": "如果 Serial0/0/0 的狀態為 'administratively down'，表示？",
    "options": [
      "IP 設定錯誤",
      "被手動關閉",
      "自動故障排除中",
      "OSPF 未啟用"
    ],
    "answer": 1
  },
  {
    "question": "show ip route 的 'Gateway of last resort is not set' 表示？",
    "options": [
      "沒有預設路由",
      "OSPF 未啟動",
      "靜態路由設定錯誤",
      "RIP 正在更新"
    ],
    "answer": 0
  },
  {
    "question": "Go-Back-N 是屬於哪一類型的傳輸協定？",
    "options": ["停止等待", "滑動視窗", "虛擬通道", "洪泛式傳輸"],
    "answer": 1
  },
  {
    "question": "Go-Back-N 協定中，當接收端偵測到遺失封包時會？",
    "options": ["只要求遺失封包重傳", "發送 NAK", "丟棄後續封包並等待重傳", "自動修復錯誤"],
    "answer": 2
  },
  {
    "question": "在 Go-Back-N 協定中，若發送端的視窗大小為 N，最多可以發送幾個未確認的封包？",
    "options": ["N", "N-1", "N+1", "無限制"],
    "answer": 0
  },
  {
    "question": "下列哪一項為 Go-Back-N 相較於 Selective Repeat 的缺點？",
    "options": ["更高的儲存需求", "更複雜的接收邏輯", "重傳效率較差", "需要額外確認機制"],
    "answer": 2
  },
  {
    "question": "Go-Back-N 中接收端的 ACK 號碼表示？",
    "options": ["最後正確接收的封包編號", "下一個期望接收的封包編號", "當前視窗大小", "最後一個傳送封包的時間"],
    "answer": 1
  },
  {
    "question": "當出現封包遺失時，Go-Back-N 發送端的行為為？",
    "options": ["只重傳遺失的封包", "繼續傳送", "停止傳送", "重傳從遺失處開始的所有封包"],
    "answer": 3
  },
  {
    "question": "Go-Back-N 協定中，使用者資料的順序由誰來保證？",
    "options": ["IP 協定", "接收端應用程式", "TCP 協定", "發送端硬體"],
    "answer": 2
  },
  {
    "question": "下列何者不是 Go-Back-N 協定的特性？",
    "options": ["連線導向", "支援確認機制", "選擇性重傳", "具滑動視窗機制"],
    "answer": 2
  },
  {
    "question": "Go-Back-N 中使用的滑動視窗機制屬於哪一端？",
    "options": ["僅發送端", "僅接收端", "雙端", "僅路由器"],
    "answer": 0
  },
  {
    "question": "Go-Back-N 接收端在發現封包編號與期望值不符時，會？",
    "options": ["將其儲存等待缺失封包", "立即重發請求", "直接丟棄", "將其送交應用層"],
    "answer": 2
  },
  {
    "question": "Go-Back-N 協定需要什麼來確保資料的正確傳送？",
    "options": ["CRC 校驗", "計時器與重傳機制", "壓縮算法", "加密算法"],
    "answer": 1
  },
  {
    "question": "哪一種協定重傳較少但需要更多儲存空間？",
    "options": ["Go-Back-N", "停止等待", "Selective Repeat", "純廣播協定"],
    "answer": 2
  },
  {
    "question": "Go-Back-N 協定中，滑動視窗的功能是？",
    "options": ["提高頻寬", "控制封包大小", "控制流量與同步傳輸", "加速封包轉發"],
    "answer": 2
  },
  {
    "question": "在 Go-Back-N 中，超時事件會觸發什麼行為？",
    "options": ["清除封包", "調整視窗大小", "重新傳送所有未確認封包", "改用 Selective Repeat"],
    "answer": 2
  },
  {
    "question": "接收端回傳的 ACK 編號為 5，表示已正確接收？",
    "options": ["封包編號 5", "封包編號 1 至 5", "封包編號 4", "期待收到編號 5 的封包"],
    "answer": 3
  },
  {
    "question": "Go-Back-N 中視窗大小受限於？",
    "options": ["接收端記憶體", "協定規範", "通訊協定類型", "序號範圍"],
    "answer": 3
  },
  {
    "question": "若視窗大小為 4，則最早可能重傳的是哪一個封包？",
    "options": ["最後一個", "第一個", "最早未確認的封包", "所有已傳送的封包"],
    "answer": 2
  },
  {
    "question": "Go-Back-N 協定相較於 Stop-and-Wait 最大優勢是？",
    "options": ["減少封包數量", "提升通訊效率", "減少錯誤率", "加強封包驗證"],
    "answer": 1
  },
  {
    "question": "Go-Back-N 的滑動視窗中，允許的封包數量最多為？",
    "options": ["2^n", "2^n - 1", "n", "無限制"],
    "answer": 1
  },
  {
    "question": "Go-Back-N 和 Selective Repeat 的主要差異在於？",
    "options": [
      "是否使用計時器",
      "是否支援雙向傳輸",
      "接收端是否儲存亂序封包",
      "是否使用序號"
    ],
    "answer": 2
  },
  {
    "question": "TCP 壅塞控制中，初始會進入哪一階段？",
    "options": ["擁塞避免", "快重傳", "快恢復", "慢啟動"],
    "answer": 3
  },
  {
    "question": "在慢啟動階段，每收到一個 ACK，擁塞視窗 cwnd 會？",
    "options": ["減半", "加 1", "變成 1", "維持不變"],
    "answer": 1
  },
  {
    "question": "慢啟動階段的 cwnd 成長速度為？",
    "options": ["線性", "指數", "固定", "隨機"],
    "answer": 1
  },
  {
    "question": "當 cwnd >= ssthresh 時，TCP 會進入？",
    "options": ["快恢復", "擁塞避免", "重新建立連線", "快重傳"],
    "answer": 1
  },
  {
    "question": "擁塞避免階段中，cwnd 的成長方式是？",
    "options": ["指數成長", "乘法成長", "線性成長", "固定不變"],
    "answer": 2
  },
  {
    "question": "TCP 中的快重傳是何時觸發的？",
    "options": ["超時未收到 ACK", "接收到三個重複 ACK", "收到 FIN", "收到 SYN"],
    "answer": 1
  },
  {
    "question": "快恢復機制中，cwnd 被設定為？",
    "options": ["1", "ssthresh", "ssthresh + 1", "0"],
    "answer": 1
  },
  {
    "question": "快恢復之後，TCP 會進入哪一階段？",
    "options": ["慢啟動", "擁塞避免", "斷線", "快重傳"],
    "answer": 1
  },
  {
    "question": "TCP 中 ssthresh 是什麼？",
    "options": ["最大封包大小", "閘道器頻寬", "慢啟動閾值", "傳輸時間"],
    "answer": 2
  },
  {
    "question": "封包丟失後若是超時偵測，cwnd 會？",
    "options": ["設為 1 並進入慢啟動", "減半", "保持不變", "加倍"],
    "answer": 0
  },
  {
    "question": "接收端視窗 rwnd 的功能為何？",
    "options": ["限制網路頻寬", "避免網路壅塞", "避免接收端緩衝區溢出", "控制封包大小"],
    "answer": 2
  },
  {
    "question": "擁塞視窗 cwnd 的主要功能是？",
    "options": ["控制錯誤率", "加密資料", "避免網路壅塞", "儲存路由資訊"],
    "answer": 2
  },
  {
    "question": "TCP 真正傳送資料的數量是由哪個決定？",
    "options": ["rwnd", "cwnd", "min(cwnd, rwnd)", "MSS"],
    "answer": 2
  },
  {
    "question": "rwnd 屬於哪種控制機制？",
    "options": ["壅塞控制", "錯誤控制", "流量控制", "順序控制"],
    "answer": 2
  },
  {
    "question": "下列哪一項不是 cwnd 的特性？",
    "options": ["由接收端控制", "由發送端根據壅塞情況調整", "會根據封包丟失縮小", "非 sliding window 本體"],
    "answer": 0
  },
  {
    "question": "TCP sliding window 的核心是？",
    "options": ["cwnd", "rwnd", "MSS", "TTL"],
    "answer": 1
  },
  {
    "question": "在一個 RTT 中 cwnd 翻倍，代表 TCP 處於？",
    "options": ["擁塞避免", "快恢復", "慢啟動", "快重傳"],
    "answer": 2
  },
  {
    "question": "cwnd 會在什麼情況下減半？",
    "options": ["收到 FIN", "三次重複 ACK", "收到 SYN", "正常傳輸中"],
    "answer": 1
  },
  {
    "question": "快恢復機制中，ssthresh 被設為？",
    "options": ["cwnd 的一半", "1", "rwnd 的大小", "最大頻寬"],
    "answer": 0
  },
  {
    "question": "TCP 擁塞控制的四大機制包含？",
    "options": [
      "擁塞回饋、擁塞避免、緩衝控制、加密認證",
      "慢啟動、擁塞避免、快重傳、快恢復",
      "流量控制、封包排序、快重傳、檔案傳輸",
      "分段重組、位址解析、快恢復、延遲檢查"
    ],
    "answer": 1
  },
  {
    "question": "VPN 的主要功能之一為何？",
    "options": ["提升 DNS 查詢速度", "提供雲端儲存", "建立加密通道", "封鎖垃圾郵件"],
    "answer": 2
  },
  {
    "question": "下列哪一項不是 VPN 的用途？",
    "options": ["保護公共 Wi-Fi 使用", "跨區連線國外網站", "提升手機電池壽命", "遠端連線公司內網"],
    "answer": 2
  },
  {
    "question": "VPN 中的『隧道』功能指的是？",
    "options": ["物理線路連接", "將資料流量封裝並加密", "建構網站伺服器", "建立固定 IP"],
    "answer": 1
  },
  {
    "question": "VPN 架構中，Site-to-Site VPN 的用途為？",
    "options": ["讓個人連公司", "讓公司內部設備共用帳密", "讓不同地點的網路安全連線", "讓外部合作夥伴登入公司系統"],
    "answer": 2
  },
  {
    "question": "哪個 VPN 協定為新興且兼具速度與安全性？",
    "options": ["PPTP", "L2TP", "WireGuard", "OpenVPN"],
    "answer": 2
  },
  {
    "question": "哪一種 VPN 協定常用於 HTTPS 網頁應用登入？",
    "options": ["IKEv2", "SSL VPN", "PPTP", "WireGuard"],
    "answer": 1
  },
  {
    "question": "VPN 使用加密技術主要目的是？",
    "options": ["提升資料壓縮率", "降低流量費用", "防止資料被竊聽", "擴大頻寬"],
    "answer": 2
  },
  {
    "question": "VPN 技術可以協助使用者？",
    "options": ["提升搜尋引擎排名", "繞過地區限制", "移除廣告", "減少 RAM 使用"],
    "answer": 1
  },
  {
    "question": "下列何者不是 VPN 的核心功能？",
    "options": ["加密", "認證", "匿名化", "壓縮資料"],
    "answer": 3
  },
  {
    "question": "哪個協定速度快但加密弱，現已不建議使用？",
    "options": ["PPTP", "OpenVPN", "IKEv2", "WireGuard"],
    "answer": 0
  },
  {
    "question": "企業若希望讓外部合作夥伴安全存取系統，應使用哪種 VPN 架構？",
    "options": ["Remote Access VPN", "Intranet VPN", "Extranet VPN", "Site-to-Site VPN"],
    "answer": 2
  },
  {
    "question": "在 VPN 運作中，資料從使用者端傳送到哪裡？",
    "options": ["NAT Router", "VPN Server", "HTTP Proxy", "FTP Server"],
    "answer": 1
  },
  {
    "question": "以下哪個協定最適合用於行動裝置上？",
    "options": ["OpenVPN", "IKEv2/IPsec", "PPTP", "SSL VPN"],
    "answer": 1
  },
  {
    "question": "VPN 最常用在哪一種情境？",
    "options": ["拍照上傳", "同步日曆", "遠端辦公", "社群媒體管理"],
    "answer": 2
  },
  {
    "question": "若公司希望各部門內網安全通訊，應採用哪種 VPN？",
    "options": ["Site-to-Site VPN", "Intranet VPN", "Extranet VPN", "Remote VPN"],
    "answer": 1
  },
  {
    "question": "使用 VPN 後，瀏覽網站時會？",
    "options": ["顯示虛擬 IP 位址", "封鎖所有圖片", "停止音訊傳輸", "提升廣告精準度"],
    "answer": 0
  },
  {
    "question": "SSL VPN 的特點為？",
    "options": ["需安裝驅動程式", "透過 HTTPS 建立連線", "僅限 Linux 使用", "需手動交換金鑰"],
    "answer": 1
  },
  {
    "question": "VPN 架構中的 Remote Access VPN 適合？",
    "options": ["企業與企業間連線", "一般用戶遠端存取公司", "內部員工匿名登入", "VPN 伺服器對外提供服務"],
    "answer": 1
  },
  {
    "question": "下列哪個為 VPN 的缺點？",
    "options": ["可提升隱私", "可穿越防火牆", "有些國家禁止使用", "增強封包驗證"],
    "answer": 2
  },
  {
    "question": "下列哪個說明正確描述 VPN？",
    "options": [
      "一種加密路由器設備",
      "一種連接 Facebook 的工具",
      "一種在公網上建立私密通道的技術",
      "一種代替 IP 位址的 DNS 技術"
    ],
    "answer": 2
  }
]
