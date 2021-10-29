/*eslint comma-dangle: ["error", "never"]*/
const data = [
  {
    name: '系统必备',
    softs: [
      {
        name: '7-Zip',
        des: '常用解压必备，开源',
        version: '19.00',
        down: 'https://www.7-zip.org/a/7z1900-x64.exe',
        link: 'https://sparanoid.com/lab/7z/download.html'
      },
      {
        name: 'windows环境程序集合',
        des: '游戏、开发依赖的一些环境包集合',
        version: '1.1',
        down: 'http://h.hankqin.com:8082/api/public/dl/LjVLDOwg/Gamesys_V1.1-Gamersky.rar',
        link: 'https://down.gamersky.com/pc/201109/30158.shtml'
      },
      {
        name: 'QQ输入法',
        des: '个人比较习惯的输入法',
        version: '6.5.6109.400',
        down: 'http://qq.pinyin.cn/download_pc.php?t=py',
        link: 'http://qq.pinyin.cn/'
      },
      {
        name: 'Chrome',
        des: '个人常用的浏览器',
        version: '84.0.4147.105',
        down: 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7BF067924F-802A-F192-DBB7-E0D1DC73B27C%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe',
        link: 'https://www.google.com/intl/zh-CN/chrome/'
      },
      {
        name: 'Notion',
        des: '全能的笔记平台',
        version: '2.0.18',
        down: 'https://desktop-release.notion-static.com/Notion%20Setup%202.0.18.exe',
        link: 'https://www.notion.so/desktop'
      },
      {
        name: 'Office365',
        des: '拼车买的家庭版正版，感觉足够满足日常',
        version: 'newest',
        down: null,
        link: 'https://account.microsoft.com/services/microsoft365/install'
      },
      {
        name: 'f.lux',
        des: '去蓝光，习惯后再看正常亮度的显示器都会觉得很刺眼',
        version: '4.118',
        down: 'https://justgetflux.com/flux-setup.exe',
        link: 'https://justgetflux.com/'
      },
      {
        name: '火绒安全',
        des: '够轻、存在感极低，作为杀毒软件感觉非常舒适',
        version: '5.0.50.3',
        down: 'https://down5.huorong.cn/sysdiag-full-5.0.50.3-20200807.exe',
        link: 'https://www.huorong.cn/person5.html'
      },
      {
        name: 'IDM',
        des: '下载工具，之前一直用破解版，后来觉得太好用买了正版',
        version: '6.38',
        down: 'http://mirror2.internetdownloadmanager.com/idman638build2.exe?v=lt&filename=idman638build2.exe&crazycache=1',
        link: 'https://www.internetdownloadmanager.com/'
      },
      {
        name: 'Clash',
        des: 'A rule-based tunnel in Go',
        version: '1.0.0',
        down: 'https://github.com/Dreamacro/clash/releases/download/v1.0.0/clash-windows-amd64-v1.0.0.zip',
        link: 'https://github.com/Dreamacro/clash/releases'
      },
      {
        name: 'Everything',
        des: '可能是Win下最高效的资源搜索软件',
        version: '1.4.1.988',
        down: 'https://www.voidtools.com/Everything-1.4.1.988.x64-Setup.exe',
        link: 'https://www.voidtools.com/zh-cn/'
      },
      {
        name: 'Sumatra PDF',
        des: '足够轻的pdf阅读器，关键支持的格式还挺多',
        version: '3.2.0',
        down: 'https://www.sumatrapdfreader.org/dl2/SumatraPDF-3.2-64-install.exe',
        link: 'https://www.sumatrapdfreader.org/download-free-pdf-viewer.html'
      },
      {
        name: 'Typora',
        des: 'Markdown编辑和阅读',
        version: 'newest',
        down: 'https://typora.io/windows/typora-setup-x64.exe?',
        link: 'https://typora.io/#windows'
      },
      {
        name: 'QQ影音',
        des: '相比PotPlayer感觉界面更舒适',
        version: '4.6.3.1104',
        down: 'https://dldir1.qq.com/qqyy/pc/QQPlayerSetup4.6.3.1104.exe',
        link: 'https://player.qq.com/'
      },
      {
        name: 'Spotify',
        des: '上班不听音乐？',
        version: '未知',
        down: 'https://download.scdn.co/SpotifySetup.exe',
        link: 'https://www.spotify.com/us/download/windows/'
      },
      {
        name: 'Quicker',
        des: '您的指尖工具箱，操作更少，收获更多！',
        version: '1.24.7',
        down: 'https://files.getquicker.net/_productfiles/202104/Quicker.x64.1.24.7.0.msi',
        link: 'https://getquicker.net/'
      }
    ]
  },
  {
    name: '通讯工具',
    softs: [
      {
        name: '企业微信',
        des: '社畜专用办公软件',
        version: '3.1.18',
        down: 'https://dldir1.qq.com/wework/work_weixin/WeCom_3.1.18.6007.exe',
        link: 'https://work.weixin.qq.com/#indexDownload'
      },
      {
        name: '腾讯会议',
        des: '社畜专用开会软件',
        version: '3.0.0.043',
        down: 'https://updatecdn.meeting.qq.com/cos/5c5a460f1c2a57bb28c95d66b3ec3c37/TencentMeeting_0300000000_3.0.0.403.publish.exe',
        link: 'https://meeting.tencent.com/download-center.html'
      },
      {
        name: '微信',
        des: 'windows必备',
        version: '2.9.5',
        down: 'https://dldir1.qq.com/weixin/Windows/WeChatSetup.exe',
        link: 'https://pc.weixin.qq.com/'
      },
      {
        name: 'Tim',
        des: '最轻量版QQ',
        version: '3.2.0',
        down: 'https://dldir1.qq.com/qqfile/qq/PCTIM/TIM3.2.0/TIM3.2.0.21856.exe',
        link: 'https://office.qq.com/index.html'
      },
      {
        name: '阿里旺旺',
        des: '淘宝撕逼必备',
        version: '9.12.10',
        down: 'https://download.alicdn.com/wangwang/AliIM_taobao_(9.12.10C).exe?spm=a21e4.8038711.0.0.2d30297d94re3J&file=AliIM_taobao_(9.12.10C).exe',
        link: 'https://alimarket.taobao.com/markets/qnww/portal-group/ww/index?spm=a21e4.8028256.0.0.3716352c49r5y7'
      },
      {
        name: 'Telegram',
        des: '著名聊天软件',
        version: 'newest',
        down: 'https://telegram.org/dl/desktop/win',
        link: 'https://telegram.org/'
      }
    ]
  },
  {
    name: '可选装',
    softs: [
      {
        name: 'Edge Chromium',
        des: '换了内核的edge听说更轻量，或许适合一些轻场景使用',
        version: 'newest',
        down: 'https://c2rsetup.officeapps.live.com/c2r/downloadEdge.aspx?ProductreleaseID=Edge&platform=Default&version=Edge&source=EdgeStablePage&Channel=Stable&language=zh-cn',
        link: 'https://www.microsoft.com/zh-cn/edge?form=MA13DE&OCID=MA13DE'
      },
      {
        name: 'PicGo',
        des: '图床集合，还不错的',
        version: '2.3.0',
        down: 'https://github.com/Molunerfinn/PicGo/releases/download/v2.3.0-beta.3/PicGo-Setup-2.3.0-beta.3.exe',
        link: 'https://github.com/Molunerfinn/picgo/releases'
      },
      {
        name: 'bypass',
        des: '12306分流抢票，抢到的几率挺大的',
        version: '1.14.9',
        down: 'https://www.bypass.cn/api/download?name=Bypass.zip',
        link: 'https://www.bypass.cn/'
      },
      {
        name: '盖伦下载器',
        des: '节约用水，保护水资源',
        version: '2.3.2',
        down: 'http://115.236.47.204:8000/file/%E7%9B%96%E4%BC%A6%E4%B8%8B%E8%BD%BD%E5%99%A82.3.2.rar',
        link: 'http://115.236.47.204:8000/'
      },
      {
        name: '雷电模拟器',
        des: '听说是最好用的安卓模拟器',
        version: '4.x',
        down: 'https://cloud.189.cn/downloadFile.action?fileStr=1BE90FB245ED060EF0A05853D7C94589A039E834B00EA6B1FA84F71B2D9F0D7E78532C844E4C1C8574E6AF6E15B54EFD5954FF69EC46C16871E22436&downloadType=3&shareId=169048361',
        link: 'https://www.ghpym.com/ldmnq4.html'
      },
      {
        name: 'PotPlayer',
        des: '足够强大的视频播放器',
        version: 'newest',
        down: 'https://t1.daumcdn.net/potplayer/PotPlayer/Version/Latest/PotPlayerSetup64.exe',
        link: 'https://potplayer.daum.net/'
      }
    ]
  },
  {
    name: '系统工具',
    softs: [
      {
        name: 'IObit Uninstaller',
        des: '轻量级卸载软件',
        version: '10.0.2',
        down: 'https://files.downloadnow.com/s/software/17/02/59/92/iobituninstaller.exe?token=1602851565_3b1a283a5956a72eebdfe06cee9d7d21&fileName=iobituninstaller.exe',
        link: 'https://www.iobit.com/en/advanceduninstaller.php'
      },
      {
        name: 'CCleaner',
        des: '加速和优化你的电脑',
        version: '5.7.0',
        down: 'https://download.ccleaner.com/ccsetup570.exe',
        link: 'https://www.ccleaner.com/'
      },
      {
        name: 'Dism++',
        des: '也许是最强的实用工具',
        version: '10.1.1002.1',
        down: 'http://gh.api.99988866.xyz/github.com/Chuyu-Team/Dism-Multi-language/releases/download/v10.1.1002.1/Dism++10.1.1002.1.zip',
        link: 'https://www.chuyu.me/zh-Hans/'
      },
      {
        name: 'ReNamer',
        des: '批量重命名工具',
        version: '7.2',
        down: 'http://www.den4b.com/download/renamer/installer?key=5aaed1a27969bec3a6c93902ec02a26a2bf32fc33908a6cc63231bd5b3d35efd',
        link: 'http://www.den4b.com/products/renamer'
      },
      {
        name: '鲁大师',
        des: '娱乐大师纯净版',
        version: '5.20.1240',
        down: 'https://www.lanzous.com/iECpFgd785e',
        link: 'https://www.ghpym.com/ludashi.html'
      },
      {
        name: 'Raidrive',
        des: '云端映射',
        version: '2021.10.9',
        down: 'https://softpedia-secure-download.com/dl/ade0e1fa10ccf5ece784d959cdbb80f9/617bade4/100258610/software/internet/ftp/RaiDrive_2021.10.9.exe',
        link: 'https://www.raidrive.com/download'
      },
      {
        name: '腾讯桌面整理',
        des: '如果腾讯有什么良心产品，那就是它和QQ影音了',
        version: '2.9.1051.127',
        down: 'https://pm.myapp.com/invc/xfspeed/qqpcmgr/data/DeskGo_2_9_1051_127_lite.exe',
        link: 'https://guanjia.qq.com/product/zmzl/'
      }
    ]
  },
  {
    name: '开发工具',
    softs: [
      {
        name: 'git',
        des: 'Git都不会当什么开发？',
        version: '2.28.0',
        down: 'https://github.com/git-for-windows/git/releases/download/v2.28.0.windows.1/Git-2.28.0-64-bit.exe',
        link: 'https://git-scm.com/'
      },
      {
        name: 'VSCode',
        des: '前端开发必备IDE',
        version: '1.47.3',
        down: 'https://vscode.cdn.azure.cn/stable/91899dcef7b8110878ea59626991a18c8a6a1b3e/VSCodeUserSetup-x64-1.47.3.exe',
        link: 'https://code.visualstudio.com/'
      },
      {
        name: 'Charles',
        des: '请求拦截软件',
        version: '4.5.6',
        down: 'https://www.charlesproxy.com/assets/release/4.5.6/charles-proxy-4.5.6-win64.msi',
        link: 'https://www.charlesproxy.com/download/'
      },
      {
        name: 'wireshark',
        des: '另一款抓包工具',
        version: '3.4.2',
        down: 'https://1.as.dl.wireshark.org/win64/Wireshark-win64-3.4.2.exe',
        link: 'https://www.wireshark.org/'
      },
      {
        name: 'mobaxterm',
        des: 'SSH登录好帮手',
        version: '20.3',
        down: 'https://download.mobatek.net/2032020060430358/MobaXterm_Portable_v20.3.zip',
        link: 'https://mobaxterm.mobatek.net/download-home-edition.html'
      },
      {
        name: 'termius',
        des: '全平台的ssh登录工具',
        version: '7.3.2',
        down: 'https://termi.us/win',
        link: 'https://www.termius.com/windows'
      },
      {
        name: 'electerm',
        des: 'github上开源的全平台的ssh登录工具',
        version: '1.12.15',
        down: 'https://github.com/electerm/electerm/releases/download/v1.12.15/electerm-1.12.15-win-x64.tar.gz',
        link: 'https://github.com/electerm/electerm'
      },
      {
        name: 'cmder',
        des: '替代win原生的cmd窗口，非常好用',
        version: '1.3.17',
        down: 'https://github.com/cmderdev/cmder/releases/download/v1.3.17/cmder_mini.zip',
        link: 'https://cmder.net/'
      },
      {
        name: 'Windows Terminal',
        des: '个人觉得windows平台最好用的终端',
        version: '未知',
        down: null,
        link: 'https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701'
      },
      {
        name: 'Navicat for MySQL',
        des: '菜鸟玩转SQL必备软件',
        version: '20238',
        down: 'https://wwa.lanzous.com/iCvT4feqe3c',
        link: 'https://www.navicat.com.cn/products/navicat-for-mysql'
      },
      {
        name: 'FileZilla Client',
        des: '最流行的FTP上传下载软件',
        version: '3.49.1',
        down: 'https://download.filezilla-project.org/client/FileZilla_3.49.1_win64_sponsored-setup.exe',
        link: 'https://filezilla-project.org/download.php?platform=win64'
      },
      {
        name: 'PhotoShop',
        des: '切图仔专用',
        version: '21.0.1.47',
        down: 'https://cloud.189.cn/t/zuY7vyqQZjAv',
        link: 'http://zhannei.baidu.com/cse/site?q=Photoshop&cc=52pojie.cn&ie=gbk'
      },
      {
        name: 'Adobe Illustrator',
        des: '前端兼设计师专用',
        version: '25.2.1.236',
        down: null,
        link: 'https://www.ghxi.com/ai2021.html'
      },
      {
        name: '微信开发者工具',
        des: '开发小程序用的',
        version: '0.9.092300',
        down: 'https://servicewechat.com/wxa-dev-logic/download_redirect?type=x64&from=mpwiki&t=1475052055457',
        link: 'http://www.ionic.wang/weixin/devtools/download.html'
      },
      {
        name: 'OpenVPN',
        des: '隧道代理',
        version: '未知',
        down: 'https://openvpn.net/downloads/openvpn-connect-v3-windows.msi',
        link: 'https://openvpn.net/vpn-client/'
      },
      {
        name: 'COSBrowser',
        des: '腾讯云对象存储 COS 推出的可视化界面工具',
        version: '未知',
        down: 'https://cos5.cloud.tencent.com/cosbrowser/cosbrowser-setup-latest.exe',
        link: 'https://cloud.tencent.com/document/product/436/11366#.E6.9B.B4.E6.96.B0.E6.97.A5.E5.BF.97'
      },
      {
        name: 'AnotherRedisDesktopManager',
        des: 'Redis客户端',
        version: '1.4.9',
        down: 'https://github.com/qishibo/AnotherRedisDesktopManager/releases/download/v1.4.9/Another-Redis-Desktop-Manager.1.4.9.exe',
        link: 'https://github.com/qishibo/AnotherRedisDesktopManager'
      },
      {
        name: 'Sourcetree',
        des: 'git可视化管理工具',
        version: '3.4.6',
        down: 'https://product-downloads.atlassian.com/software/sourcetree/windows/ga/SourceTreeSetup-3.4.6.exe',
        link: 'https://www.sourcetreeapp.com/'
      }
    ]
  },
  {
    name: '油猴插件',
    softs: [
      {
        name: '合集包',
        des: '里面有很多，自己装了看',
        version: '2021.10.25',
        down: 'http://h.hankqin.com:8082/api/public/dl/bY5C9dl-/tampermonkey-backup-chrome-2021-10-29T07-58-39-785Z.zip',
        link: null
      }
    ]
  }
]

export default data
