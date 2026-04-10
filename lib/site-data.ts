import logoRed from '@/assets/logo-red.png';
import logoYellow from '@/assets/logo-yellow.png';
import wechatQr from '@/assets/wechat-qr.jpg';
import douyinQr from '@/assets/douyin-qr.jpg';
import xhsQr from '@/assets/xhs-qr.jpg';

import heroOpening from '@/assets/photos/lion-dance-mall-opening-couplets-lineup.jpg';
import heroAudience from '@/assets/photos/lion-dance-opening-ceremony-audience-wide.jpg';
import openingStage from '@/assets/photos/lion-dance-opening-ceremony-stage-bowing.jpg';
import openingRow from '@/assets/photos/lion-dance-opening-ceremony-stage-bowing-row.jpg';
import mallEntrance from '@/assets/photos/lion-dance-couplets-shopping-mall-entrance.jpg';
import museumOpening from '@/assets/photos/lion-dance-museum-opening-stage-couplets.jpg';
import ifcOpening from '@/assets/photos/lion-dance-ifc-opening-stage-lineup.jpg';
import corporateAnnual from '@/assets/photos/lion-dance-corporate-annual-stage-lineup.jpg';
import weddingBanquet from '@/assets/photos/lion-dance-banquet-group-photo-couplets.jpg';
import whiteRedCloseup from '@/assets/photos/white-red-lion-dance-stage-closeup.jpg';
import redHighJong from '@/assets/photos/red-lion-dance-high-jong-stage.jpg';
import yellowJongMall from '@/assets/photos/yellow-lion-dance-banner-jong-mall.jpg';
import blueJongLanterns from '@/assets/photos/blue-lion-dance-jong-stance-lanterns.jpg';
import purpleShoulderLift from '@/assets/photos/purple-lion-dance-shoulder-lift-crowd.jpg';
import purpleCrouch from '@/assets/photos/purple-lion-dance-crouch-jong-performance.jpg';
import pinkCloseup from '@/assets/photos/pink-lion-dance-closeup-crowd-park.jpg';
import waterwayOutlet from '@/assets/photos/lion-dance-waterway-walkway-outlet.jpg';
import teamFormation from '@/assets/photos/lion-dance-team-formation-mall-courtyard.jpg';
import sportsParty from '@/assets/photos/lion-dance-sports-festival-party-performance.jpg';
import sportsGroup from '@/assets/photos/lion-dance-sports-festival-group-photo.jpg';
import sportsStack from '@/assets/photos/lion-dance-sports-festival-couplets-stack.jpg';
import dragonField from '@/assets/photos/dragon-dance-field-performance-team.jpg';
import dragonMall from '@/assets/photos/dragon-dance-performance-mall-courtyard.jpg';
import charityBowing from '@/assets/photos/lion-dance-charity-launch-stage-bowing.jpg';
import charityGroup from '@/assets/photos/lion-dance-charity-launch-group-photo.jpg';
import familyOutlet from '@/assets/photos/lion-dance-family-group-photo-outlet-arches.jpg';
import redCarpet from '@/assets/photos/lion-dance-red-carpet-couplets-formation.jpg';
import stageAudience from '@/assets/photos/lion-dance-stage-performance-audience.jpg';
import snowShow from '@/assets/photos/lion-dance-snow-show-mountain-stage.jpg';
import indoorStageLineup from '@/assets/photos/lion-dance-indoor-mall-stage-lineup.jpg';
import pepsiPromo from '@/assets/photos/lion-dance-pepsi-promo-street-plaza.jpg';
import wandaStage from '@/assets/photos/lion-dance-wanda-stage-couplets-photo.jpg';

export const brand = {
  name: '重庆鑫龙堂舞狮',
  tagline: '重庆及西南地区专业舞狮演出服务商',
  logoRed,
  logoYellow,
};

export const primaryNavLinks = [
  { label: '关于我们', href: '/about', description: '了解我们的团队与资历' },
  { label: '服务项目', href: '/services', description: '提供开业、商演、宴会等多样化演出' },
  { label: '场景方案', href: '/solutions', description: '看看不同活动怎么安排' },
  { label: '真实案例', href: '/cases', description: '查看以往落地项目的现场图' },
  { label: '视频展示', href: '/media', description: '直接通过视频看演出效果' },
  { label: '预订指南', href: '/faq', description: '了解报价并准备咨询信息' },
];

export const utilityNavLinks = [
  { label: '首页', href: '/', description: '回到首页' },
  { label: '联系我们', href: '/contact', description: '获取实时报价与排期' },
];

export const homeShowcase = {
  hero: heroOpening,
  secondary: heroAudience,
  craft: whiteRedCloseup,
  media: stageAudience,
};

export const partnerLogos = [
  '重庆万象城', '重庆 IFS', '北城天街', '融创茂', '尼依格罗', '万达广场', '大悦城', '金辉广场', '来福士'
];

export const testimonials = [
  {
    content: '我是帮客户筹办开业活动的，鑫龙堂的配合度非常高。不仅演得精彩，最重要的是现场流程衔接得特别稳，不乱套，帮我们省了很多心。',
    author: '陈女士',
    role: '知名品牌活动策划人',
    avatar: pinkCloseup
  },
  {
    content: '新店开业请了鑫龙堂。师傅们提前一个多小时就到了，狮头和衣服看起来都很新，很有排面。现场的人气一下就带起来了，推荐。',
    author: '王先生',
    role: '餐饮店主 (大学城门店)',
    avatar: teamFormation
  },
  {
    content: '非常专业。我们是室内舞台演出，对灯光和卡点要求高，鑫龙堂的动作和鼓点踩得特别准，视频拍出来效果非常好。',
    author: '李经理',
    role: '重庆某大型商场企划部',
    avatar: corporateAnnual
  }
];

export const teamMembers = [
  {
    name: '周老师',
    role: '创始人 / 艺术指导',
    bio: '深耕舞狮行业 15 年，多次代表重庆团队参与西南地区高水平竞技，注重传承与商业创新的平衡。',
    image: blueJongLanterns
  },
  {
    name: '李领队',
    role: '执行总监',
    bio: '负责过 500+ 场次的中大型商业演出，对现场动线、流程及突发状况有极强的把控能力。',
    image: purpleShoulderLift
  },
  {
    name: '张师傅',
    role: '首席高桩狮头',
    bio: '核心桩上演出负责。具备扎实的基本功和极佳的爆发力，确保高桩节目的高观赏性与安全性。',
    image: redHighJong
  }
];

export const serviceCards = [
  {
    title: '开业醒狮',
    subtitle: '适合正式启幕',
    description:
      '适合商场、门店、展馆开业。除了精彩的表演，我们更注重剪彩、点睛、揭幕等环节的标准化礼仪配合，让您的开业更有仪式感。',
    image: museumOpening,
    points: ['标准礼仪配合', '流程精准卡点', '拉升现场人气'],
  },
  {
    title: '商演路演',
    subtitle: '适合聚人流',
    description:
      '适合品牌路演、快闪店或街区巡游。通过高频度的互动和视觉冲击，快速吸引路人围观，并为后续传播留下大量出彩的视频素材。',
    image: mallEntrance,
    points: ['强互动感', '适合手机拍摄', '大场面调度'],
  },
  {
    title: '宴会婚礼',
    subtitle: '适合喜庆氛围',
    description:
      '适合婚礼、寿宴、乔迁、答谢宴和企业庆功宴等以喜庆氛围为主的重要场合。',
    image: weddingBanquet,
    points: ['舞台适配性强', '喜庆气氛浓烈', '多形式可定制'],
  },
];

export const workflowSteps = [
  {
    title: '沟通需求',
    text: '通过微信或电话，我们将详细了解您的活动时间、地点与形式，为您提供专业的建议。',
  },
  {
    title: '确认方案',
    text: '根据场地情况和您的预算，匹配合适的演出规模，明确人员配置与环节流程。',
  },
  {
    title: '到场执行',
    text: '演职人员将提前到场，完成彩排或动线调试。现场严格执行既定方案，确保演出品质。',
  },
  {
    title: '后续支持',
    text: '演出结束后，如您需要现场拍摄的高清原片或后期宣传建议，我们也乐于提供支持。',
  },
];

export const faqItems = [
  {
    question: '报价大概是多少？',
    answer:
      '受人数规模、演出项目（是否需要高桩）、活动城市等影响，均价通常在 1500 - 3000 元人民币左右。具体请联系我们获取实时报价单。',
  },
  {
    question: '需要提前多久预订？',
    answer:
      '常规活动建议提前 1-2 周确认。如果是开业旺季或大型节假日，建议越早预约越好。',
  },
  {
    question: '现场需要我们准备什么吗？',
    answer:
      '通常仅需提供简单的更衣休息室和充足的演出空间（如舞台或广场）。其余道具、话筒配合均由我们团队负责。',
  },
];

export const caseStudies = [
  {
    title: '万象城一周年庆演出',
    client: '重庆万象城',
    location: '九龙坡区 万象城中庭',
    date: '2025.01',
    category: '商场周年庆',
    image: ifcOpening,
    description:
      '在密闭的中庭空间内高效转场演出，高质量完成采青环节，为商场聚客并提供了极佳的自媒体传播素材。',
    metrics: ['人流量瞬时翻倍', '配合商场流程', '高清原片交付'],
  },
  {
    title: ' Haier 海尔年度盛典',
    client: '海尔智家',
    location: '南岸区 谢菲尔德酒店',
    date: '2024.12',
    category: '企业年会',
    image: corporateAnnual,
    description:
      '配合舞台灯光与大屏进行定制化表演，卡点精准，节奏稳健，极大地提升了年会现场的仪式感与感官震撼。',
    metrics: ['无缝衔接大厅环节', '定制鼓点配合', '零失误交付'],
  },
  {
    title: '精品酒店中式婚礼',
    client: '私人婚礼',
    location: '渝中区 尼依格罗',
    date: '2024.10',
    category: '婚礼宴会',
    image: weddingBanquet,
    description:
      '双狮迎宾与舞台敬酒环节配合，注重与宾客及新人的互动，在喜庆热烈的氛围中融入传统礼仪，深受欢迎。',
    metrics: ['深受宾客欢迎', '氛围感十足', '互动性强'],
  },
  {
    title: '融创茂户外高桩展示',
    client: '重庆融创茂',
    location: '沙坪坝区 户外核心广场',
    date: '2024.08',
    category: '品牌发布',
    image: redHighJong,
    description:
      '顶尖高桩实力展示，通过连续的高难度动作，在户外开阔空间形成了极强的视觉记忆点，吸引万人驻足。',
    metrics: ['核心地段驻足', '感官刺激强', '社交媒体讨论度高'],
  },
];

export const teamHighlights = [
  {
    title: '重庆资深团队',
    text: '成员均有多年的实战经验，熟悉重庆各大商场、酒店的场地环境与入场流程。',
    image: teamFormation,
  },
  {
    title: '高桩竞技功底',
    text: '具备专业级的高桩竞技实力，不仅能做普通表演，也能承接高难度、高观赏性的竞技项目。',
    image: yellowJongMall,
  },
  {
    title: '自有真实案例',
    text: '坚持"所见即所得"，所有网站展示的图片和视频均来自我们真实的执行现场。',
    image: sportsParty,
  },
];

export const aboutGallery = {
  story: openingStage,
  portraitA: pinkCloseup,
  portraitB: purpleShoulderLift,
  portraitC: blueJongLanterns,
  materialA: whiteRedCloseup,
  materialB: redHighJong,
};

export const homepageSections = {
  craft: {
    title: '真实功底，才能保证现场不出错',
    text:
      '每一对狮头的扎制、每一个动作的爆发、每一次鼓点的配合，都决定了您的活动是平平无奇还是全场焦点。我们更在意这些影响质感的细节。',
    imageA: whiteRedCloseup,
    imageB: redHighJong,
    imageC: blueJongLanterns,
  },
  media: {
    title: '不只是热闹，也是极佳的宣传点',
    text:
      '现在的活动都讲究二次传播。一场极具画面感的舞狮演出，能让路人主动掏出手机记录，也能让您的官方推文更有内容、更上档次。',
    imageA: openingRow,
    imageB: stageAudience,
    imageC: redCarpet,
  },
  training: {
    title: '稳定交付，是我们坚持的标准',
    text:
      '我们深知每一场活动的不可逆性。坚持稳定的阵容、统一的装备和标准化流程，就是为了让您在最重要的时刻，心里更有底。',
    images: [purpleCrouch, sportsGroup, sportsStack, dragonField],
  },
};

export const contactPanel = {
  phone: '18983662830',
  email: 'service@cqwushi.com',
  wechatQr,
  douyinQr,
  xhsQr,
  address: '总部位于重庆，核心服务重庆及西南区域，承接各类高规格舞狮演艺项目。',
  image: charityBowing,
};

export const socialLinks = [
  { label: '抖音', icon: 'douyin', href: 'https://www.douyin.com/user/YOUR_ACCOUNT_ID' },
  { label: '小红书', icon: 'xiaohongshu', href: 'https://www.xiaohongshu.com/user/YOUR_ACCOUNT_ID' },
  { label: '微信视频号', icon: 'wechat', href: '#' },
];

export const footerLinks = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  { label: '服务项目', href: '/services' },
  { label: '真实案例', href: '/cases' },
  { label: '视频展示', href: '/media' },
  { label: '场景方案', href: '/solutions' },
  { label: '预订指南', href: '/faq' },
  { label: '联系我们', href: '/contact' },
];

export const stats = [
  { value: '10年+', label: '深耕重庆本地市场' },
  { value: '1000+', label: '场次执行经验' },
  { value: '专业', label: '高桩实力保障' },
  { value: '标准', label: '现场服务流程' },
];

export const mixedGallery = [
  mallEntrance,
  familyOutlet,
  waterwayOutlet,
  charityGroup,
  sportsParty,
  dragonMall,
  snowShow,
];

export const mediaVideos = [
  {
    title: '平安银行开业红毯',
    category: '开业庆典',
    fileName: 'lion-dance-bank-opening-red-carpet.mp4',
    poster: redCarpet,
    description: '直观展示开场步法、红毯动线及迎宾礼仪。',
  },
  {
    title: '尼依格罗宴会舞台',
    category: '宴会舞台',
    fileName: 'lion-dance-banquet-fire-stage-closeup.mp4',
    poster: weddingBanquet,
    description: '适合感受舞台表现、环节配合及灯光氛围。',
  },
  {
    title: '海尔年会高桩节目',
    category: '品牌发布',
    fileName: 'lion-dance-haier-launch-jong-stage.mp4',
    poster: redHighJong,
    description: '展示顶尖高桩功底及大型活动控场能力。',
  },
  {
    title: '三峡博物馆开馆',
    category: '场馆启幕',
    fileName: 'lion-dance-museum-opening-jong-stage.mp4',
    poster: museumOpening,
    description: '正式大型展示，看到整体仪式的庄重感。',
  },
  {
    title: '九街 LED 夜场舞狮',
    category: '夜场活动',
    fileName: 'led-lion-dance-night-red-blue.mp4',
    poster: indoorStageLineup,
    description: '发光舞狮，适合更潮、更有氛围的时尚活动。',
  },
  {
    title: '万象城舞台竞技',
    category: '婚礼宴会',
    fileName: 'lion-dance-wedding-banquet-jong-stage.mp4',
    poster: wandaStage,
    description: '舞台竞技展示，互动性极强，炒热全场。',
  },
];

export const mediaLogos = ['商场项目', '酒店宴会', '场馆开馆', '企业年会', '城市节庆', '婚礼喜宴'];

export const mediaHighlights = [
  {
    title: '真实无滤镜素材',
    text: '您看到的都是真实的项目实拍，没有拼凑，没有过度美化。',
  },
  {
    title: '效果一看便知',
    text: '通过视频就能判断我们的水平、节奏和专业程度，沟通成本更低。',
  },
  {
    title: '兼顾镜头感',
    text: '我们特别注重狮头朝向与精彩动作的定格，让您的视频拍出来更好看。',
  },
];

export const solutionPlaybooks = [
  {
    title: '商场周年庆与开业',
    summary: '适合新店开业、商场周年庆等需要极致人气和正式感的场合。',
    image: ifcOpening,
    fit: ['流程包含剪彩、点睛', '需要吸引大量外部客流', '有高质量自媒体传播需求'],
    deliverables: ['定制化开场表演', '点睛礼仪全程协助', '巡游及互动环节'],
  },
  {
    title: '品牌路演与快闪店',
    summary: '适合人流量大的核心商圈巡展，讲究瞬时聚客和强互动。',
    image: pepsiPromo,
    fit: ['空间动线灵活多变', '需要与路人频繁互动', '作为短视频拍摄的核心素材'],
    deliverables: ['高爆发力的舞蹈动作', '多频率互动安排', '配合固定机位拍摄'],
  },
  {
    title: '企业年会与晚宴',
    summary: '适合室内酒店舞台，讲究仪式感、卡点准和不乱场。',
    image: weddingBanquet,
    fit: ['有主舞台及灯光配合', '作为开场或压轴重点节目', '配合固定环节的登场衔接'],
    deliverables: ['舞台深度配合方案', '人员提前进驻确认', '彩牌流程精准对接'],
  },
  {
    title: '中式婚礼与寿宴',
    summary: '适合喜宴氛围，讲究喜庆、亲和力以及与宾客的互动。',
    image: snowShow,
    fit: ['长辈、小孩较多的喜庆场合', '需要热烈且富有亲和力的表演', '与迎宾、主流程深度绑定'],
    deliverables: ['喜庆双狮组合', '合影环节重点照顾', '吉祥话及互动物品'],
  },
];

export const faqSections = [
  {
    title: '咨询前准备',
    items: [
      {
        question: '第一次咨询需要准备什么信息？',
        answer:
          '请告诉我活动的日期、大概地点、是室内还是室外，以及您期望的档次规模。我们会迅速给您一份合理的建议。',
      },
      {
        question: '关于场地，有什么硬性要求吗？',
        answer:
          '如果是常规演出，只要地面平整即可；如果是高桩竞技，则需要 5x5 米以上的平整舞台空间及 4.5 米以上的层高。',
      },
    ],
  },
  {
    title: '执行细节',
    items: [
      {
        question: '你们会提前到场吗？',
        answer:
          '正式活动我们都会提前 1 小时左右到达现场，完成候场及最后一遍流程核对。',
      },
      {
        question: '衣服会很烂很旧吗？',
        answer:
          '完全不会。我们深知商业演出的门面重要性，所有狮头和演出服都会定期清理更换，保证上镜效果极佳。',
      },
    ],
  },
];

export const prepChecklist = [
  '具体活动日期与时间段',
  '活动所在城市与具体场地',
  '大致需求（开场表演/剪彩点睛/全场巡游等）',
  '现场是否有层高或舞台空间限制',
];
