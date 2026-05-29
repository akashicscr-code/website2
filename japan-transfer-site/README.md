# Japan Transfer Service Website

## 项目概述
这是一个轻量化的企业展示官网，专为提供日本接送机和包车服务而设计。网站支持简体中文、繁体中文、英文和日文四种语言切换，适合国际游客使用。

## 网站结构
- **首页** (`src/index.html`): 包含网站的主要内容和导航，展示服务的卖点和轮播Banner。
- **关于我们** (`src/about.html`): 介绍公司的背景和服务理念。
- **行程案例** (`src/cases.html`): 展示客户的成功案例和体验。
- **常见问题** (`src/faq.html`): 提供用户可能会问的问题及其答案。
- **联系方式** (`src/contact.html`): 提供联系信息和预订流程。
- **车型展示** (`src/vehicles.html`): 详细介绍丰田阿尔法和丰田海狮的特点和适用场景。
- **价格参考** (`src/pricing.html`): 列出各项服务的参考价格。
- **预订流程** (`src/booking.html`): 详细说明如何进行预订和联系信息。
- **服务页面**:
  - 机场接送服务 (`src/services/airport-transfer.html`)
  - 定制包车服务 (`src/services/private-charter.html`)
  - 观光包车服务 (`src/services/sightseeing.html`)
  - 商务包车服务 (`src/services/business-charter.html`)

## 组件
- **头部组件** (`src/components/header.html`): 包含导航和Logo。
- **底部组件** (`src/components/footer.html`): 包含版权信息和联系信息。
- **导航组件** (`src/components/nav.html`): 提供各个页面的链接。
- **轮播Banner组件** (`src/components/hero-banner.html`): 展示主要的宣传图和卖点。

## 资源
- **图片资源** (`src/assets/images`): 存放网站使用的图片。
- **字体资源** (`src/assets/fonts`): 存放网站使用的字体。

## 样式
- **Tailwind CSS** (`styles/tailwind.css`): 提供响应式设计和样式支持。
- **自定义样式** (`styles/styles.css`): 包含额外的样式定义。

## 脚本
- **主JavaScript文件** (`scripts/main.js`): 负责初始化和页面交互逻辑。
- **国际化脚本** (`scripts/i18n.js`): 处理语言切换和文本翻译。
- **轮播图脚本** (`scripts/carousel.js`): 负责轮播Banner的功能实现。
- **WhatsApp咨询按钮脚本** (`scripts/whatsapp.js`): 提供悬浮咨询入口。

## 国际化
- **语言包**:
  - 英文 (`i18n/en.json`)
  - 简体中文 (`i18n/zh-CN.json`)
  - 繁体中文 (`i18n/zh-TW.json`)
  - 日文 (`i18n/ja.json`)

## 部署
该项目为纯静态展示站，无需后台、登录或支付功能。可直接部署到服务器或GitHub Pages。

## 联系方式
如需咨询，请通过WhatsApp联系：+86 199 6988 2825。客服时间：24小时（日本时间）。