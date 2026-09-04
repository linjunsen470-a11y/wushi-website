import { z } from 'zod';

export const projectTypes = [
  '商场开业/庆典',
  '品牌商演/路演',
  '企业年会/盛典',
  '婚礼/宴会/喜事',
  '其他定制项目',
] as const;

export const contactFormSchema = z.object({
  projectType: z.enum(projectTypes, { message: '请选择活动类型' }),
  preferredContactMethod: z.enum(['wechat', 'phone']),
  name: z.string().trim().min(2, '请输入您的称呼').max(50, '称呼请控制在 50 个字以内'),
  contact: z
    .string()
    .trim()
    .min(5, '请输入有效的手机号或微信号')
    .max(100, '联系方式请控制在 100 个字符以内')
    .refine((value) => {
      const phoneRegex = /^1[3-9]\d{9}$/;
      const wechatRegex = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;
      return phoneRegex.test(value) || wechatRegex.test(value) || value.length > 5;
    }, '请输入有效的手机号或微信号'),
  message: z.string().trim().max(1000, '备注请控制在 1000 个字以内').optional(),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
