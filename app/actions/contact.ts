'use server';

import { Resend } from 'resend';
import { z } from 'zod';

import { headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

const contactFormSchema = z.object({
  projectType: z.string().min(1, '请选择项目类型').max(50),
  preferredContactMethod: z.enum(['wechat', 'phone']),
  name: z.string().min(2, '请输入您的称呼').max(50),
  contact: z.string()
    .min(5, '请输入有效的联系方式')
    .max(100)
    .refine(val => {
      // Basic regex for Chinese phone numbers or common WeChat ID patterns
      const phoneRegex = /^1[3-9]\d{9}$/;
      const wechatRegex = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;
      return phoneRegex.test(val) || wechatRegex.test(val) || val.length > 5;
    }, '请输入有效的手机号或微信号'),
  eventDate: z.string().max(20).optional(),
  venue: z.string().max(100).optional(),
  message: z.string().max(1000, '留言内容过长，请精简').optional(),
  // Honeypot field - should be empty
  website: z.string().max(0).optional(),
});

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  // 1. Rate Limiting Check
  const headerList = await headers();
  const ip = headerList.get('x-forwarded-for') || 'anonymous';
  const now = Date.now();
  const rateLimit = rateLimitMap.get(ip);

  if (rateLimit && now - rateLimit.lastReset < RATE_LIMIT_WINDOW) {
    if (rateLimit.count >= MAX_REQUESTS) {
      return {
        success: false,
        error: '请求过于频繁，请 1 分钟后再试。',
      };
    }
    rateLimit.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
  }

  // 2. Data Validation (includes Honeypot check via zod schema)
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    // If honeypot is filled, it fails validation here
    return {
      success: false,
      error: '表单校验失败，请检查填写内容。',
    };
  }

  const { projectType, preferredContactMethod, eventDate, name, contact, venue, message } = validatedFields.data;
  
  // Clean inputs for email display
  const cleanName = escapeHtml(name);
  const cleanContact = escapeHtml(contact);
  const cleanVenue = venue ? escapeHtml(venue) : '';
  const cleanMessage = message ? escapeHtml(message) : '';
  const cleanEventDate = eventDate ? escapeHtml(eventDate) : '';

  const preferredContactLabel = preferredContactMethod === 'wechat' ? '优先微信' : '优先电话';

  try {
    const { error } = await resend.emails.send({
      from: process.env.LEAD_FROM_EMAIL || 'Wushi Leads <onboarding@resend.dev>',
      to: [process.env.LEAD_TO_EMAIL || 'service@cqwushi.com'],
      subject: `[新商机] ${cleanName} - ${projectType}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #eee; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
              .header { background: #a30011; color: white; padding: 32px; border-radius: 12px 12px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.02em; }
              .content { padding: 32px; background: #ffffff; }
              .field { margin-bottom: 24px; }
              .label { font-size: 11px; font-weight: 900; color: #a30011; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; display: block; }
              .value { font-size: 16px; color: #1a1714; font-weight: 600; line-height: 1.4; }
              .divider { height: 1px; background: #f0f0f0; margin: 24px 0; }
              .footer { padding: 24px; text-align: center; color: #999; font-size: 12px; border-top: 1px solid #f0f0f0; background: #fafafa; border-radius: 0 0 12px 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>鑫龙堂舞狮 - 新咨询通知</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">项目类型</span>
                  <div class="value">${projectType}</div>
                </div>
                <div class="field">
                  <span class="label">优先联系</span>
                  <div class="value">${preferredContactLabel}</div>
                </div>
                <div class="field">
                  <span class="label">活动日期</span>
                  <div class="value">${cleanEventDate || '待定'}</div>
                </div>
                <div class="divider"></div>
                <div class="field">
                  <span class="label">客户称呼</span>
                  <div class="value">${cleanName}</div>
                </div>
                <div class="field">
                  <span class="label">联系方式</span>
                  <div class="value">${cleanContact}</div>
                </div>
                <div class="field">
                  <span class="label">活动地点</span>
                  <div class="value">${cleanVenue || '待定'}</div>
                </div>
                <div class="divider"></div>
                <div class="field">
                  <span class="label">更多细节备注</span>
                  <div class="value" style="white-space: pre-wrap;">${cleanMessage || '（未提供）'}</div>
                </div>
              </div>
              <div class="footer">
                <p>此邮件由 鑫龙堂舞狮 官方网站后台自动发出</p>
                <p>© 2026 鑫龙堂舞狮. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: '邮件服务暂时不可用，请稍后再试。' };
    }

    return { success: true };
  } catch (err) {
    console.error('Submission Error:', err);
    return { success: false, error: '系统繁忙，请稍后再试。' };
  }
}
