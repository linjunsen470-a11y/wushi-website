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
  { label: '关于我们', href: '/about', description: '了解团队实力与服务标准' },
  { label: '服务内容', href: '/services', description: '查看适合不同活动的舞狮服务' },
  { label: '场景方案', href: '/solutions', description: '按活动场景选择更合适的方案' },
  { label: '真实案例', href: '/cases', description: '查看落地项目与现场效果' },
  { label: '视频展示', href: '/media', description: '通过真实视频感受现场氛围' },
  { label: '预订指南', href: '/faq', description: '提前了解咨询与预订常见问题' },
];

export const utilityNavLinks = [
  { label: '首页', href: '/', description: '回到首页' },
  { label: '联系我们', href: '/contact', description: '提交活动需求并获取报价' },
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
    subtitle: 'Grand Openings',
    description:
      '适合商场开业、门店启幕、展馆开馆、新店亮相等正式场合，用有仪式感的开场带动人气，也让品牌在第一时间留下深刻印象。',
    image: museumOpening,
    points: ['适合开业仪式开场', '可配合剪彩揭幕环节', '祝福寓意好，现场氛围足'],
  },
  {
    title: '商演活动',
    subtitle: 'Retail Activations',
    description:
      '适合商场中庭、品牌快闪、路演活动、商业街区巡游等场景，既能吸引围观聚集人流，也能让活动现场更热闹、更有传播感。',
    image: mallEntrance,
    points: ['适合商场与街区活动', '互动感强，带动现场气氛', '镜头表现好，便于视频传播'],
  },
  {
    title: '宴会婚礼',
    subtitle: 'Banquets & Weddings',
    description:
      '适合婚礼宴会、企业年会、寿宴家宴和大型庆典晚宴，用喜庆热烈的开场为重要时刻加分，让宾客一到场就感受到氛围。',
    image: weddingBanquet,
    points: ['迎宾开场更有排面', '适合舞台与宴会厅环境', '可配合敬酒、切蛋糕等流程'],
  },
];

export const workflowSteps = [
  {
    title: '沟通需求',
    text: '告诉我们活动时间、城市、场地类型和您希望达到的效果，我们会先帮您判断适合的演出形式。',
  },
  {
    title: '确认方案',
    text: '根据活动流程、空间条件和预算范围，给出更合适的人员配置、节目安排和执行建议。',
  },
  {
    title: '现场演出',
    text: '按约定时间到场执行，配合关键仪式节点，把气氛、观感和现场秩序都兼顾到位。',
  },
  {
    title: '留下素材',
    text: '真实项目中的精彩画面和视频可作为后续宣传、复盘和品牌展示的重要内容。',
  },
];

export const faqItems = [
  {
    question: '报价通常由哪些因素决定？',
    answer:
      '演出形式、人数配置、是否需要高桩或定制内容、活动城市、档期时间和现场条件，都会影响最终报价。',
  },
  {
    question: '一般建议提前多久预订？',
    answer:
      '常规活动建议提前 2 到 4 周沟通；节假日、开业旺季和大型活动越早确认越稳妥。',
  },
  {
    question: '可以配合品牌主题或活动流程调整吗？',
    answer:
      '可以。我们会根据活动主题、流程节奏、场地条件和您希望突出的重点来调整演出内容。',
  },
];

export const caseStudies = [
  {
    title: '商场中庭开业首秀',
    client: '综合商业项目',
    location: '城市商场中庭',
    date: '2025',
    category: 'Grand Opening',
    image: ifcOpening,
    description:
      '围绕开场、采青、合影等关键环节完成整段演出，让现场既有热烈气氛，也有适合拍照和传播的精彩画面。',
    metrics: ['场景化高频聚客能力', '空间适配与高动态调度', '高品质宣发影像输出'],
  },
  {
    title: '品牌年会舞台节目',
    client: '企业年度盛典',
    location: '酒店宴会厅',
    date: '2025',
    category: 'Corporate Gala',
    image: corporateAnnual,
    description:
      '配合主舞台和灯光大屏完成年会开场，让节目既有正式感，也能迅速把全场氛围带起来。',
    metrics: ['专业灯光舞美适配', '标准化流程衔接控制', '舞台仪式感极致呈现'],
  },
  {
    title: '婚宴双狮迎宾',
    client: '婚礼庆典',
    location: '宴会中心',
    date: '2024',
    category: 'Wedding',
    image: weddingBanquet,
    description:
      '从迎宾到合影都围绕喜庆氛围展开，让婚礼现场更热闹，也让新人和宾客留下更有记忆点的照片与视频。',
    metrics: ['中式礼仪氛围营造', '高光时刻全景留念', '婚礼全流程定制配合'],
  },
  {
    title: '高桩竞技展示',
    client: '节庆与城市活动',
    location: '户外广场',
    date: '2024',
    category: 'Pole Performance',
    image: redHighJong,
    description:
      '通过高桩动作形成更强的视觉冲击，适合需要大场面效果、远距离观赏和高传播度的活动现场。',
    metrics: ['高空竞技视觉冲击', '跨场域空间覆盖能力', '社交媒体高传播亮点'],
  },
];

export const teamHighlights = [
  {
    title: '专业阵容',
    text: '可根据活动规模和场地条件安排不同演出阵容，让现场效果和预算更匹配。',
    image: teamFormation,
  },
  {
    title: '高桩实力',
    text: '适合品牌发布、节庆活动和需要更强记忆点的重点项目，让现场更有看点。',
    image: yellowJongMall,
  },
  {
    title: '多场景经验',
    text: '覆盖商场、宴会厅、户外广场、商业街区和节庆活动，熟悉不同现场的节奏与要求。',
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
    title: '真实器材，真实功底，真实现场表现',
    text:
      '舞狮真正打动人的，不只是热闹，而是近看有质感、远看有气势、镜头里也足够出彩。狮头、动作、鼓点和配合，每一项都会直接影响您的活动效果。',
    imageA: whiteRedCloseup,
    imageB: redHighJong,
    imageC: blueJongLanterns,
  },
  media: {
    title: '不只让现场热闹，也让宣传更有内容',
    text:
      '一场好的舞狮演出，现场观众看得过瘾，主办方也能留下值得发布的视频和照片。真实素材越有感染力，后续传播越有说服力。',
    imageA: openingRow,
    imageB: stageAudience,
    imageC: redCarpet,
  },
  training: {
    title: '稳定配合，才能把重要场合做好',
    text:
      '力量、节奏、默契和控场能力，决定了一场舞狮是普通表演，还是让人真正记住的演出。我们更重视每一次正式活动中的完成度。',
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
  { label: '真实案例', href: '/cases' },
  { label: '视频展示', href: '/media' },
  { label: '场景方案', href: '/solutions' },
  { label: '预订指南', href: '/faq' },
  { label: '联系我们', href: '/contact' },
];

export const stats = [
  { value: '500+', label: '现场演出经验' },
  { value: '20+', label: '落地服务城市' },
  { value: '10+', label: '常见活动场景覆盖' },
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
    description: '适合直观看到开场气势、仪式配合和现场聚客效果。',
  },
  {
    title: '宴会舞台近景表演',
    category: '宴会舞台',
    fileName: 'lion-dance-banquet-fire-stage-closeup.mp4',
    poster: weddingBanquet,
    description: '适合感受宴会氛围、灯光效果和近距离动作表现。',
  },
  {
    title: '品牌发布高桩节目',
    category: '品牌发布',
    fileName: 'lion-dance-haier-launch-jong-stage.mp4',
    poster: redHighJong,
    description: '适合展示高桩实力、大场面视觉效果和舞台表现力。',
  },
  {
    title: '博物馆开馆演出',
    category: '场馆启幕',
    fileName: 'lion-dance-museum-opening-jong-stage.mp4',
    poster: museumOpening,
    description: '适合看到正式开馆场景中的仪式感与整体节奏。',
  },
  {
    title: '夜场 LED 舞狮',
    category: '夜场活动',
    fileName: 'led-lion-dance-night-red-blue.mp4',
    poster: indoorStageLineup,
    description: '适合夜场演出、娱乐活动和更强视觉刺激的项目现场。',
  },
  {
    title: '婚宴高桩舞台节目',
    category: '婚礼宴会',
    fileName: 'lion-dance-wedding-banquet-jong-stage.mp4',
    poster: wandaStage,
    description: '适合展示婚宴舞台气氛、登场仪式和喜庆热烈的现场效果。',
  },
];

export const mediaLogos = ['商场项目', '酒店宴会', '场馆开馆', '企业年会', '城市节庆', '婚礼喜宴'];

export const mediaHighlights = [
  {
    title: '全部来自真实项目',
    text: '看到的都是实际演出现场，不是概念演示，也不是拼凑素材。',
  },
  {
    title: '先看效果，再做决定',
    text: '通过视频就能快速判断氛围、配合度和整体完成度，减少沟通成本。',
  },
  {
    title: '兼顾现场与传播',
    text: '既能服务当下活动气氛，也能留下后续宣传可用的真实画面。',
  },
];

export const solutionPlaybooks = [
  {
    title: '商场与开业启幕',
    summary: '适合新店开业、综合体启幕、品牌入驻、展馆开馆等需要仪式感和热度的正式场景。',
    image: ifcOpening,
    fit: ['适合剪彩、揭幕、采青等关键仪式节点', '适合商场中庭、门店门前和主舞台区域', '适合拍照、合影和品牌宣传素材输出'],
    deliverables: ['开场节目设计', '关键仪式流程配合', '适合收尾合影的完整演出节奏'],
  },
  {
    title: '品牌商演与路演活动',
    summary: '适合商场中庭、商业街区、品牌快闪、促销路演等需要吸引围观和提升热度的活动。',
    image: pepsiPromo,
    fit: ['适合人流密集的商业空间', '适合需要互动和驻足观看的活动', '适合短视频记录与社交平台传播'],
    deliverables: ['可灵活拆分的节目段落', '互动节奏安排', '更容易形成亮点镜头的现场效果'],
  },
  {
    title: '婚礼喜宴与庆典宴会',
    summary: '适合婚礼、寿宴、乔迁、答谢宴和企业庆功宴等以喜庆氛围为主的重要场合。',
    image: weddingBanquet,
    fit: ['适合婚礼迎宾与仪式开场', '适合宴会舞台节目安排', '适合年会、庆典等正式晚宴'],
    deliverables: ['双狮迎宾与登场设计', '适合宴会厅环境的节目安排', '方便合影和收尾的完整流程'],
  },
  {
    title: '节庆与城市活动',
    summary: '适合文旅节庆、城市庆典、赛事活动、户外广场和大型公共活动现场。',
    image: snowShow,
    fit: ['适合户外大空间与远距离观看', '适合巡游、展演和节庆舞台', '适合需要气势与参与感的公共活动'],
    deliverables: ['适配户外场地的安全安排', '更强远距离观感', '可按活动节奏组合的模块化节目'],
  },
];

export const faqSections = [
  {
    title: '预订前先了解',
    items: [
      {
        question: '第一次咨询前，需要准备哪些信息？',
        answer:
          '准备好活动日期、所在城市、场地类型、大致人数，以及是否有剪彩、揭幕、领导出场等关键流程，就能更快拿到合适建议。',
      },
      {
        question: '为什么要提前确认场地细节？',
        answer:
          '不同场地对动线、人数安排、演出强度和节目形式要求都不同。提前了解清楚，方案会更准确，现场也更稳妥。',
      },
    ],
  },
  {
    title: '场地与执行',
    items: [
      {
        question: '商场中庭和酒店宴会厅都能做吗？',
        answer:
          '可以。我们会根据层高、舞台大小、观众距离和流程安排，调整更适合该场地的演出形式。',
      },
      {
        question: '节目内容可以根据品牌或流程调整吗？',
        answer:
          '可以。只要提前沟通活动重点，我们会尽量让节目和流程衔接得更自然、更好看。',
      },
    ],
  },
  {
    title: '效果与选择',
    items: [
      {
        question: '什么样的舞狮更适合商业活动？',
        answer:
          '既要有现场感染力，也要能配合仪式流程、适应镜头拍摄，并在活动结束后留下有价值的照片和视频素材。',
      },
      {
        question: '怎么通过视频判断团队是否靠谱？',
        answer:
          '重点看动作是否整齐、节奏是否稳、现场配合是否顺畅，以及观众反应和镜头呈现是否自然有感染力。',
      },
    ],
  },
];

export const prepChecklist = [
  '活动日期与所在城市',
  '场地类型与舞台大致尺寸',
  '预计观众人数',
  '是否有剪彩、揭幕、领导出场等关键流程',
  '是否需要高桩、LED 或品牌定制配合',
];
