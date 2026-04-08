import logoRed from '@/assets/logo-red.png';
import logoYellow from '@/assets/logo-yellow.png';

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
  name: '舞狮堂 WUSHI',
  tagline: '开业庆典、商演活动、婚礼宴会舞狮服务',
  logoRed,
  logoYellow,
};

export const primaryNavLinks = [
  { label: '关于', href: '/about', description: '团队定位与执行经验' },
  { label: '服务', href: '/services', description: '按项目类型查看服务内容' },
  { label: '场景方案', href: '/solutions', description: '按活动场景匹配合适方案' },
  { label: '案例', href: '/cases', description: '查看真实项目落地案例' },
  { label: '媒体', href: '/media', description: '通过视频建立第一层信任' },
  { label: '预订指南', href: '/faq', description: '先了解报价与咨询准备' },
];

export const utilityNavLinks = [
  { label: '首页', href: '/', description: '返回站点总入口' },
  { label: '联系我们', href: '/contact', description: '直接提交活动需求' },
];

export const homeShowcase = {
  hero: heroOpening,
  secondary: heroAudience,
  craft: whiteRedCloseup,
  media: stageAudience,
};

export const serviceCards = [
  {
    title: '开业醒狮',
    subtitle: 'Brand Openings',
    description:
      '适用于商场开业、门店启幕、博物馆开馆、品牌新店落地等正式场景，强调仪式感、品牌露出和现场聚气效果。',
    image: museumOpening,
    points: ['开场节目编排', '揭幕剪彩节点配合', '采青祝福与大合影节奏'],
  },
  {
    title: '商演活动',
    subtitle: 'Retail Activations',
    description:
      '适用于商场中庭、路演活动、品牌快闪、街区巡游等公共传播场景，重点突出围观效果、互动性和镜头表现。',
    image: mallEntrance,
    points: ['中庭演出与巡游双模式', '主持与现场串场适配', '短视频与媒体拍摄友好'],
  },
  {
    title: '宴会婚礼',
    subtitle: 'Banquets & Weddings',
    description:
      '适用于婚礼宴会、企业年会、寿宴家宴及大型庆典晚宴，重点打造入场气势、喜庆氛围和嘉宾互动。',
    image: weddingBanquet,
    points: ['双狮迎宾和登台设计', '宴会灯光舞台适配', '可嵌入敬酒和切蛋糕流程'],
  },
];

export const workflowSteps = [
  { title: '需求沟通', text: '确认活动类型、时间、场地结构、流程节点、预算范围和是否需要品牌定制。' },
  { title: '方案编排', text: '根据场地和客户目标配置人数、节目结构、进退场路线、主持配合和安全边界。' },
  { title: '现场执行', text: '在关键仪式节点准时落位，兼顾舞台效果、观众视线和摄影机位。' },
  { title: '内容复用', text: '保留最强画面和关键镜头，方便后续用于社媒传播、招商物料或销售展示。' },
];

export const faqItems = [
  {
    question: '报价通常由哪些因素决定？',
    answer: '演出人数、节目组合、是否有高桩或特殊形式、活动城市、档期紧张度和定制需求都会影响报价。',
  },
  {
    question: '一般要提前多久预订？',
    answer: '常规活动建议提前 2 到 4 周，春节档期、重大开业和大型节庆活动建议尽早锁档。',
  },
  {
    question: '可以配合品牌主题做调整吗？',
    answer: '可以。我们可以根据品牌主视觉、主持节奏、场地结构和传播目标调整表演重点与出场方式。',
  },
];

export const caseStudies = [
  {
    title: '商场中庭开业首秀',
    client: '综合商业项目',
    location: '城市中庭',
    date: '2025',
    category: 'Grand Opening',
    image: ifcOpening,
    description: '围绕揭幕、采青和品牌合影设计完整开场段落，在黄金时段形成强围观与强传播画面。',
    metrics: ['聚客能力强', '适配大舞台', '媒体镜头友好'],
  },
  {
    title: '品牌年会舞台节目',
    client: '企业年度盛典',
    location: '酒店宴会厅',
    date: '2025',
    category: 'Corporate Gala',
    image: corporateAnnual,
    description: '结合 LED 大屏和宴会主舞台设计进退场节奏，让开场节目兼具仪式感和舞台冲击。',
    metrics: ['适配灯光屏幕', '队形变化完整', '配合主持顺畅'],
  },
  {
    title: '婚宴双狮迎宾',
    client: '婚礼庆典',
    location: '宴会中心',
    date: '2024',
    category: 'Wedding',
    image: weddingBanquet,
    description: '强调喜庆氛围、双狮入场和新人合影时刻，适合婚礼和大型庆典宴会场景。',
    metrics: ['氛围热烈', '合影效果强', '适合喜宴流程'],
  },
  {
    title: '高桩竞技展示',
    client: '节庆与城市活动',
    location: '户外广场',
    date: '2024',
    category: 'Pole Performance',
    image: redHighJong,
    description: '用高桩动作建立强记忆点，适合需要强视觉冲击和大范围观演效果的活动现场。',
    metrics: ['视觉冲击大', '适配户外广场', '内容传播力强'],
  },
];

export const teamHighlights = [
  {
    title: '专业阵容',
    text: '可根据活动规模安排标准地面节目、舞台版节目和高桩类表演阵容。',
    image: teamFormation,
  },
  {
    title: '高桩实力',
    text: '适合品牌首秀、节庆活动和需要更强记忆点的重点项目。',
    image: yellowJongMall,
  },
  {
    title: '多场景经验',
    text: '覆盖商场、户外广场、酒店宴会厅、商业街区、赛事活动和节庆现场。',
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
    title: '匠心器材与传统工艺',
    text: '狮头、狮被、鼓乐与高桩设备共同决定现场气质。我们坚持使用高规格手工扎制狮头，确保每一个动作都能展现传统文化的质感与力量感。',
    imageA: whiteRedCloseup,
    imageB: redHighJong,
    imageC: blueJongLanterns,
  },
  media: {
    title: '现场演出也要服务传播',
    text: '好的舞狮节目不仅要让现场观众看得过瘾，也要让甲方能拿到可传播、可复用的活动内容。',
    imageA: openingRow,
    imageB: stageAudience,
    imageC: redCarpet,
  },
  training: {
    title: '专业默契与团队控场',
    text: '力量、节奏、配合和控场能力，决定了舞狮节目是简单的热闹，还是专业的演艺。鑫龙堂核心队员均有百场以上大型活动执行经验。',
    images: [purpleCrouch, sportsGroup, sportsStack, dragonField],
  },
};

export const contactPanel = {
  phone: '+86 138 0000 0000',
  email: 'booking@wushi.studio',
  address: '面向中国大陆地区承接开业、商演、婚礼、节庆及舞台活动项目。',
  image: charityBowing,
};

export const footerLinks = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  { label: '服务内容', href: '/services' },
  { label: '案例展示', href: '/cases' },
  { label: '媒体视频', href: '/media' },
  { label: '场景方案', href: '/solutions' },
  { label: '预订指南', href: '/faq' },
  { label: '联系我们', href: '/contact' },
];

export const stats = [
  { value: '500+', label: '场演出经验' },
  { value: '20+', label: '城市落地' },
  { value: '10+', label: '常见活动类型' },
  { value: '100%', label: '按流程配合执行' },
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
    title: '银行开业红毯现场',
    category: '开业庆典',
    fileName: 'lion-dance-bank-opening-red-carpet.mp4',
    poster: redCarpet,
    description: '适合展示红毯、剪彩、进场节点与现场聚客效果。',
  },
  {
    title: '宴会火焰舞台近景',
    category: '宴会舞台',
    fileName: 'lion-dance-banquet-fire-stage-closeup.mp4',
    poster: weddingBanquet,
    description: '更适合呈现舞台灯光、宴会氛围与近景动作表现。',
  },
  {
    title: '品牌发布高桩节目',
    category: '品牌发布',
    fileName: 'lion-dance-haier-launch-jong-stage.mp4',
    poster: redHighJong,
    description: '适合突出高桩实力、品牌发布舞台和大场面视觉冲击。',
  },
  {
    title: '博物馆开馆表演',
    category: '场馆启幕',
    fileName: 'lion-dance-museum-opening-jong-stage.mp4',
    poster: museumOpening,
    description: '适合展示正式开馆场景中的礼仪感与结构化节目节奏。',
  },
  {
    title: '夜场 LED 舞狮',
    category: '夜场活动',
    fileName: 'led-lion-dance-night-red-blue.mp4',
    poster: indoorStageLineup,
    description: '适合夜场演艺、娱乐项目和更强视觉刺激的商业活动。',
  },
  {
    title: '婚宴高桩舞台版',
    category: '婚礼宴会',
    fileName: 'lion-dance-wedding-banquet-jong-stage.mp4',
    poster: wandaStage,
    description: '适合展示婚宴舞台、登场仪式和高热度喜庆氛围。',
  },
];

export const mediaLogos = ['商场项目', '酒店宴会', '博物馆开馆', '企业年会', '城市节庆', '婚礼喜宴'];

export const mediaHighlights = [
  {
    title: '适合社媒短视频',
    text: '优先展示最能打动甲方和围观用户的开场、采青、登台、高潮和合影时刻。',
  },
  {
    title: '适合作为销售证明',
    text: '视频比图文更快建立信任，让客户直接判断现场气场、流程配合和视觉完成度。',
  },
  {
    title: '高品质交付标准',
    text: '每一个环节都遵循严格的执行规范，从提前落位到现场互动，确保活动流程顺畅且视觉完成度极高。',
  },
];

export const solutionPlaybooks = [
  {
    title: '商场与开业启幕',
    summary: '适合新店开业、综合体启幕、品牌门店上线、馆藏空间开馆等正式场景。',
    image: ifcOpening,
    fit: ['揭幕、剪彩、点睛等仪式节点', '适合高客流和主舞台场景', '适合媒体拍摄与大合影'],
    deliverables: ['开场段落设计', '围观动线和主舞台节目', '祝福收尾与合影画面'],
  },
  {
    title: '品牌商演与路演活动',
    summary: '适合商场中庭、商业广场、品牌促销、快闪活动和高人流转化场景。',
    image: pepsiPromo,
    fit: ['商场中庭和街区广场', '品牌节点活动', '需要围观和互动的快节奏场景'],
    deliverables: ['可循环节目段落', '互动节点安排', '便于拍摄传播的高潮镜头'],
  },
  {
    title: '婚礼喜宴与庆典宴会',
    summary: '适合婚礼、寿宴、乔迁、答谢宴和企业庆功宴等喜庆型项目。',
    image: weddingBanquet,
    fit: ['婚礼迎宾', '宴会舞台节目', '年会和庆典活动'],
    deliverables: ['双狮迎宾与入场设计', '舞台亮相段落', '适合合影和收尾的节目结构'],
  },
  {
    title: '节庆与城市活动',
    summary: '适合文旅节庆、赛事活动、冰雪项目、城市庆典和户外广场活动。',
    image: snowShow,
    fit: ['室外大空间', '节庆巡游或展演', '需要更强远距离观看效果'],
    deliverables: ['户外安全适配', '远距离可视效果', '模块化节目组合'],
  },
];

export const faqSections = [
  {
    title: '预订基础信息',
    items: [
      {
        question: '客户第一次咨询前需要准备什么？',
        answer: '至少准备活动日期、城市、场地类型、预计人数、希望的节目形式，以及是否有揭幕、剪彩、领导出场等关键节点。',
      },
      {
        question: '为什么预订流程中需要明确场地细节？',
        answer: '因为不同的场地（如商场中庭 vs 酒店宴会厅）对舞狮动线、音响配合及表演强度的要求完全不同，明确细节可以确保最佳呈现效果。',
      },
    ],
  },
  {
    title: '场地与执行',
    items: [
      {
        question: '商场中庭和酒店宴会厅都能做吗？',
        answer: '可以，但节目结构要根据层高、舞台尺寸、动线和观众距离做不同安排。',
      },
      {
        question: '节目形式可以按品牌要求调整吗？',
        answer: '可以。我们会优先根据客户的活动目标和现场流程来做节目重点调整。',
      },
    ],
  },
  {
    title: '商业价值',
    items: [
      {
        question: '什么样的舞狮节目更适合商业活动？',
        answer: '不仅要热闹，还要能配合仪式、照顾镜头、适配主持、形成传播画面，并且方便后续内容复用。',
      },
      {
        question: '如何通过视频案例判断团队实力？',
        answer: '重点关注视频中的动作整齐度、狮头表情的生动性、鼓乐配合的节奏感，以及与观众互动的自然程度。',
      },
    ],
  },
];

export const prepChecklist = [
  '活动日期与城市',
  '场地类型与舞台尺寸',
  '预计观众数量',
  '是否有剪彩、揭幕、领导出场等关键节点',
  '是否需要高桩、LED 或品牌定制配合',
];
