import fs from 'fs';
import path from 'path';

const baseUrl = 'https://www.cqwushi.com';

const staticRoutes = [
  '',
  '/services',
  '/solutions',
  '/cases',
  '/about',
  '/media',
  '/guide',
  '/contact',
  '/faq',
  '/terms',
  '/privacy'
];

// Read guide post routes
const guideDir = path.join(process.cwd(), 'content/guide');
let guideRoutes = [];
if (fs.existsSync(guideDir)) {
  try {
    guideRoutes = fs.readdirSync(guideDir)
      .filter(file => file.endsWith('.md'))
      .map(file => `/guide/${file.replace(/\.md$/, '')}`);
  } catch (error) {
    console.warn('Warning: Could not read guide posts directory:', error.message);
  }
}

// Define the 6 high-intent landing page routes
const landingRoutes = [
  '/landing/chongqing-wushidui-dianhua',
  '/landing/chongqing-kaiye-wushi',
  '/landing/chongqing-shangchang-wushi',
  '/landing/chongqing-hunli-wushi',
  '/landing/chongqing-wulongwushi',
  '/landing/chongqing-wushi-baojia'
];

const allUrls = [...staticRoutes, ...guideRoutes, ...landingRoutes].map(route => `${baseUrl}${route}`);

console.log(`[SEO-Submit] Generated ${allUrls.length} URLs for submission.`);

// 1. Submit to Baidu Active Push API
async function submitToBaidu() {
  const baiduToken = process.env.BAIDU_PUSH_TOKEN;
  if (!baiduToken) {
    console.log('[SEO-Submit] BAIDU_PUSH_TOKEN is not configured. Skipping Baidu Active Push.');
    return;
  }

  const baiduUrl = `https://data.zz.baidu.com/urls?site=${baseUrl}&token=${baiduToken}`;
  console.log(`[SEO-Submit] Submitting URLs to Baidu...`);

  try {
    const response = await fetch(baiduUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: allUrls.join('\n'),
    });

    const data = await response.json();
    if (data.error) {
      console.error(`[SEO-Submit] Baidu submission error (Code ${data.error}): ${data.message}`);
    } else {
      console.log(`[SEO-Submit] Baidu submission successful!`);
      console.log(` - Success: ${data.success}`);
      console.log(` - Remain: ${data.remain}`);
    }
  } catch (error) {
    console.error('[SEO-Submit] Error during Baidu Active Push:', error.message);
  }
}

// 2. Submit to IndexNow API (Bing / Yandex)
async function submitToIndexNow() {
  const indexNowKey = process.env.INDEXNOW_KEY || '4f128e08d6c74577bf6b3ab2e8db9651';
  if (!indexNowKey) {
    console.log('[SEO-Submit] INDEXNOW_KEY is not configured. Skipping IndexNow.');
    return;
  }

  const indexNowUrl = 'https://api.indexnow.org/indexnow';
  const payload = {
    host: 'www.cqwushi.com',
    key: indexNowKey,
    keyLocation: `${baseUrl}/${indexNowKey}.txt`,
    urlList: allUrls,
  };

  console.log(`[SEO-Submit] Submitting URLs to IndexNow (Bing/Yandex)...`);

  try {
    const response = await fetch(indexNowUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`[SEO-Submit] IndexNow submission successful! Status: ${response.status}`);
    } else {
      const text = await response.text();
      console.error(`[SEO-Submit] IndexNow error (Status ${response.status}): ${text}`);
    }
  } catch (error) {
    console.error('[SEO-Submit] Error during IndexNow submission:', error.message);
  }
}

// Run submissions
(async () => {
  await submitToBaidu();
  console.log('---');
  await submitToIndexNow();
})();
