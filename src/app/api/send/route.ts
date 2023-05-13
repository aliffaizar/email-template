import { EMAIL_TEMPLATES } from '@/email-template'
import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/utils/send-mail'

const findTemplate = (template: string) => {
  return EMAIL_TEMPLATES.find((t) => t.template === template)
}

export async function POST(req: NextRequest) {
  const { template, email } = await req.json()

  const emailTemplate = findTemplate(template)

  if (!emailTemplate) {
    return NextResponse.json({ error: 'Template not found' }, { status: 404 })
  }

  const subject = 'Testing email template'
  const info = await sendMail(email, subject, emailTemplate.node).catch(
    (err) => {
      console.log(err)
      return NextResponse.json({ error: err }, { status: 500 })
    }
  )

  return NextResponse.json({ message: 'Email sent', info })
}
