import nodemailer from 'nodemailer'

const smtpConfig = {
  host: String(process.env.SMTP_HOST),
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}

const transporter = nodemailer.createTransport(smtpConfig)

export const sendMail = async (to: string, subject: string, html: string) => {
  try {
    const info = await transporter.sendMail({
      from: `Alif Faizar <${smtpConfig.auth.user}>`,
      to,
      subject,
      html,
    })
    return info
  } catch (err) {
    console.log(err)
    return
  }
}
