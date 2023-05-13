import { EMAIL_TEMPLATES } from '@/email-template'
import { sendMail } from '@/utils/send-mail'

export default function SendEmail() {
  async function send(data: FormData) {
    'use server'
    const email = data.get('email')
    const template = data.get('template')

    const emailTemplate = EMAIL_TEMPLATES.find((t) => t.template === template)
    await sendMail(
      email as string,
      template as string,
      emailTemplate?.node || 'template not found'
    )
    data.set('email', '')
    data.set('template', '')
    alert('Email sent')
  }
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <form action={send} className='flex flex-col gap-4'>
        <select
          id='template'
          name='template'
          required
          className='select select-primary w-full max-w-xs'
        >
          {EMAIL_TEMPLATES.map((template) => (
            <option value={template.template} key={template.name}>
              {template.name}
            </option>
          ))}
        </select>
        <input
          type='email'
          id='email'
          name='email'
          required
          placeholder='Type here'
          className='input input-bordered input-primary w-full max-w-xs'
        />
        <button type='submit' className='btn btn-primary w-full max-w-xs'>
          Send
        </button>
      </form>
    </div>
  )
}
