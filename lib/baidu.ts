/**
 * Baidu Search Resource Platform API Submission Utility
 */

export interface BaiduSubmitResponse {
  success: number;
  remain: number;
  not_same_site?: string[];
  not_valid?: string[];
  error?: number;
  message?: string;
}

const BAIDU_API_ENDPOINT = 'https://data.zz.baidu.com/urls';
const DEFAULT_SITE = process.env.APP_URL || 'https://www.cqwushi.com';

function getBaiduConfig() {
  const token = process.env.BAIDU_PUSH_TOKEN;
  const site = process.env.BAIDU_SITE || DEFAULT_SITE;

  if (!token) {
    throw new Error('BAIDU_PUSH_TOKEN is required to submit URLs to Baidu.');
  }

  return {
    token,
    site: site.replace(/\/$/, ''),
  };
}

/**
 * Submits a list of URLs to Baidu
 * @param urls Array of absolute URLs to submit
 * @returns Promise with Baidu API response
 */
export async function submitToBaidu(urls: string[]): Promise<BaiduSubmitResponse> {
  if (!urls.length) {
    return { success: 0, remain: 0 };
  }

  try {
    const { site, token } = getBaiduConfig();
    const url = `${BAIDU_API_ENDPOINT}?site=${site}&token=${token}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: urls.join('\n'),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting to Baidu:', error);
    return {
      success: 0,
      remain: 0,
      error: 500,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
