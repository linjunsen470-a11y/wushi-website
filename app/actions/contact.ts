'use server';

import { Resend } from 'resend';
import { headers } from 'next/headers';
import { contactFormSchema, type ContactFormData } from '@/lib/contact-schema';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;
let lastCleanupTime = Date.now();
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function submitContactForm(data: ContactFormData) {
  // 0. Cleanup expired entries periodically to prevent memory leaks (H-3 fix)
  const now = Date.now();
  if (now - lastCleanupTime > CLEANUP_INTERVAL) {
    lastCleanupTime = now;
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now - record.lastReset > RATE_LIMIT_WINDOW * 5) {
        rateLimitMap.delete(ip);
      }
    }
  }

  // 1. Rate Limiting Check
  const headerList = await headers();
  const ip = headerList.get('x-forwarded-for')?.split(',')[0]?.trim()
    || headerList.get('x-real-ip')
    || 'anonymous';
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

  const { projectType, preferredContactMethod, name, contact, message } = validatedFields.data;
  
  // Clean inputs for email display
  const cleanName = escapeHtml(name);
  const cleanContact = escapeHtml(contact);
  const cleanMessage = message ? escapeHtml(message) : '';

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
                <div class="divider"></div>
                <div class="field">
                  <span class="label">客户称呼</span>
                  <div class="value">${cleanName}</div>
                </div>
                <div class="field">
                  <span class="label">联系方式</span>
                  <div class="value">${cleanContact}</div>
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
