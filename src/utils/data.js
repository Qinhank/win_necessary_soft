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
        down: 'http://db7.gamersky.com/Common/ShowDownloadUrl.aspx?urlid=0&id=264410',
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
        name: 'Office365',
        des: '闲鱼买的家庭版正版，感觉足够满足日常',
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
      }
    ]
  },
  {
    name: '通讯工具',
    softs: [
      {
        name: '钉钉',
        des: '社畜专用办公软件',
        version: '5.1.15.15',
        down: 'https://dtapp-pub.dingtalk.com/dingtalk-desktop/win_installer/Release/DingTalk_v5.1.15.15.exe',
        link: 'https://page.dingtalk.com/wow/dingtalk/act/download'
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
        name: 'IObit Driver Booster Pro',
        des: '驱动管理',
        version: '8.0.2.192',
        down: 'https://cdn-cncc.mycsdn.cn:8844/d.php?p=YVSgVaPKuQiwvOzBkOB3-bwwlhhCNMyY0n=zoYxcWUFZVP=yvQSwfpSenZxglpPvvRgnDTEFSQhzIYQkyhh-1ZgIgcPjdRAUTR0xnHw3RQgIdXxe4V=YhsOTENikmXkZwOfatcQslchOLX-gcmcLGHAwlLlJVP-jlXQYQliqBOhktaeHoNR09TThTLyrbPxUtdke1WRMSpAPWPvvEMTNUY=DjXzcJlyNzPQb7dJ97',
        link: 'https://www.ghpym.com/iobitdriverbooster.html'
      },
      {
        name: 'Windows 10 Manager',
        des: 'win10优化工具',
        version: '3.3.4.0',
        down: 'https://www.lanzous.com/ifmbLh9dytc',
        link: 'https://www.ghpym.com/win10manager.html'
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
        name: 'mobaxterm',
        des: 'SSH登录好帮手',
        version: '20.3',
        down: 'https://download.mobatek.net/2032020060430358/MobaXterm_Portable_v20.3.zip',
        link: 'https://mobaxterm.mobatek.net/download-home-edition.html'
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
      }
    ]
  },
  {
    name: '油猴插件',
    softs: [
      {
        name: '115 网盘 Aria2 助手',
        des: '直接将所选 115 下载链接发送至 Aria2',
        version: '0.1.5',
        down: null,
        link: 'https://greasyfork.org/zh-CN/scripts/29177-aria2-helper-for-115'
      },
      {
        name: 'AC-baidu',
        des: '重定向优化百度搜狗谷歌必应搜索',
        version: '24.11',
        down: null,
        link: 'https://greasyfork.org/zh-CN/scripts/14178-ac-baidu-%E9%87%8D%E5%AE%9A%E5%90%91%E4%BC%98%E5%8C%96%E7%99%BE%E5%BA%A6%E6%90%9C%E7%8B%97%E8%B0%B7%E6%AD%8C%E5%BF%85%E5%BA%94%E6%90%9C%E7%B4%A2-favicon-%E5%8F%8C%E5%88%97'
      },
      {
        name: 'segmentfault | 简书 免登录复制 复制去除版权信息',
        des: '无',
        version: '0.15',
        down: null,
        link: 'https://greasyfork.org/zh-CN/scripts/406744-segmentfault-%E7%AE%80%E4%B9%A6-%E5%85%8D%E7%99%BB%E5%BD%95%E5%A4%8D%E5%88%B6-%E5%A4%8D%E5%88%B6%E5%8E%BB%E9%99%A4%E7%89%88%E6%9D%83%E4%BF%A1%E6%81%AF'
      },
      {
        name: 'CSDN广告完全过滤',
        des: '让你体验令人惊喜的崭新CSDN',
        version: '3.4.1',
        down: null,
        link: 'https://greasyfork.org/zh-CN/scripts/378351-%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0-csdn%E5%B9%BF%E5%91%8A%E5%AE%8C%E5%85%A8%E8%BF%87%E6%BB%A4-%E4%BA%BA%E6%80%A7%E5%8C%96%E8%84%9A%E6%9C%AC%E4%BC%98%E5%8C%96-%E4%B8%8D%E7%94%A8%E5%86%8D%E7%99%BB%E5%BD%95%E4%BA%86-%E8%AE%A9%E4%BD%A0%E4%BD%93%E9%AA%8C%E4%BB%A4%E4%BA%BA%E6%83%8A%E5%96%9C%E7%9A%84%E5%B4%AD%E6%96%B0csdn'
      },
      {
        name: '知乎网页助手',
        des: '可能是功能最全面的知乎助手了~',
        version: '1.0.4',
        down: null,
        link: 'https://greasyfork.org/zh-CN/scripts/384172-%E7%9F%A5%E4%B9%8E%E7%BD%91%E9%A1%B5%E5%8A%A9%E6%89%8B'
      },
      {
        name: '网盘助手',
        des: '大概是最优雅好用的网盘助手了',
        version: '0.4.4',
        down: null,
        link: 'https://greasyfork.org/zh-CN/scripts/378301-%E7%BD%91%E7%9B%98%E5%8A%A9%E6%89%8B'
      },
      {
        name: '论坛大师',
        des: '论坛网站页面美化、广告移除、功能增强。美轮美奂的视觉享受，安然恬静的论坛时光……',
        version: '0.3.45',
        down: null,
        link: 'https://greasyfork.org/zh-CN/scripts/400250-forum-grandmaster-for-discuz'
      },
      {
        name: '豆瓣资源下载大师',
        des: '可能是你遇到的最好的豆瓣增强脚本',
        version: '7.8.6',
        down: null,
        link: 'https://greasyfork.org/zh-CN/scripts/329484-%E8%B1%86%E7%93%A3%E8%B5%84%E6%BA%90%E4%B8%8B%E8%BD%BD%E5%A4%A7%E5%B8%88-1%E7%A7%92%E6%90%9E%E5%AE%9A%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1-%E9%9F%B3%E4%B9%90-%E5%9B%BE%E4%B9%A6%E4%B8%8B%E8%BD%BD'
      }
    ]
  }
]

export default data
