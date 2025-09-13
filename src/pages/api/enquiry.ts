import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const transporter = nodemailer.createTransport({
  host: 'smtp.163.com',
  port: 587,
  secure: false,
  logger: true,
  auth: {
    user: 'lcgservices2@163.com',
    pass: 'Liguang1994',
  },
})

// recipient address must be verified with Amazon SES if sandbox mode is enabled.
const EMAIL_SENDER = 'lcgservices2@163.com'
const EMAIL_GM_RECIPIENT ='lcgservices@163.com'
// const EMAIL_GM_RECIPIENT ='guang.li@artatechfin.com'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('enquiry.ts API endpoint called');
  console.log('Request method:', req.method);
  console.log('Request headers:', req.headers);
  console.log('Raw request body:', req.body);
  
  try {
    console.log('Processing request body...');
    // 尝试直接使用req.body，如果不行则尝试解析
    const reqMessage = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    console.log('Request body processed successfully:', reqMessage);

    // 安全处理HTML内容
    const sensitize = (str: string | undefined) => str?.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const toPlainText = (str: string | undefined) => str?.replace(/<[^>]*>/g, '')

    // 表单数据
    const { name, phone, wechat, email, projects, demand } = reqMessage

    // 格式化项目类型（如果有多个，用逗号分隔）
    const formattedProjects = projects && projects.length > 0 
      ? projects.join('，') 
      : '未选择'

    // 生成美观的邮件HTML内容
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
          .header { background-color: #b4d7fd; color: #fff; padding: 15px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px -20px; }
          .header h2 { margin: 0; font-size: 20px; }
          table { width: 100%; border-collapse: collapse; }
          td { padding: 8px 0; vertical-align: top; }
          .label { font-weight: bold; color: #555; width: 120px; }
          .value { color: #333; }
          .divider { border-top: 1px solid #ddd; margin: 15px 0; }
          .footer { color: #666; font-style: italic; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>客户评估申请表</h2>
          </div>
          
          <table>
            <tr>
              <td class="label">姓名：</td>
              <td class="value">${sensitize(name)}</td>
            </tr>
            <tr>
              <td class="label">电话：</td>
              <td class="value">${sensitize(phone)}</td>
            </tr>
            ${wechat ? `
            <tr>
              <td class="label">微信：</td>
              <td class="value">${sensitize(wechat)}</td>
            </tr>
            ` : ''}
            ${email ? `
            <tr>
              <td class="label">邮箱：</td>
              <td class="value">${sensitize(email)}</td>
            </tr>
            ` : ''}
            <tr>
              <td class="label">项目类型：</td>
              <td class="value">${sensitize(formattedProjects)}</td>
            </tr>
            ${demand ? `
            <tr>
              <td class="label" style="vertical-align: top;">需求描述：</td>
              <td class="value">${sensitize(demand)}</td>
            </tr>
            ` : ''}
          </table>
          
          <div class="divider"></div>
          
          <div class="footer">
            <p>此邮件由系统自动发送，请勿直接回复。</p>
          </div>
        </div>
      </body>
      </html>
    `

    // 生成纯文本内容（用于不支持HTML的邮件客户端）
    const plainText = `
    客户评估申请表
    ------------------------
    姓名：${sensitize(name)}
    电话：${sensitize(phone)}
    ${wechat ? `微信：${sensitize(wechat)}
` : ''}
    ${email ? `邮箱：${sensitize(email)}
` : ''}
    项目类型：${sensitize(formattedProjects)}
    ${demand ? `需求描述：${sensitize(demand)}
` : ''}
    ------------------------
    此邮件由系统自动发送，请勿直接回复。
    `

    // 构建邮件消息
    const message = {
      from: EMAIL_SENDER,
      to: EMAIL_GM_RECIPIENT,
      subject: `客户评估申请 - ${sensitize(name)}`,
      text: plainText,
      html: html,
    }
    console.log('准备发送邮件: ', message)
    
    try {
      await transporter.sendMail(message)
      console.log('邮件发送成功')
      res.status(200).json({ status: 'success', message: '邮件发送成功' })
    } catch (emailError) {
      console.error('邮件发送失败:', emailError)
      res.status(200).json({ 
        status: 'success', 
        message: '表单提交成功，但邮件发送失败',
        emailError: emailError instanceof Error ? emailError.message : String(emailError)
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8mb',
    },
  },
}
