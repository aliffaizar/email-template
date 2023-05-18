'use client'
import { useState } from 'react'
import { EMAIL_TEMPLATES } from '@/email-template'
// import { SubmitButtons } from '@/components/buttons/SubmitButtons'
// import { sendMail } from '@/utils/send-mail'

export default function SendEmail() {
  const [form, setForm] = useState({
    email: '',
    template: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  // ----------------------------------------------------------------
  // this is for server action
  // async function send(data: FormData) {
  //   'use server'
  //   const email = data.get('email')
  //   const template = data.get('template')

  //   const emailTemplate = EMAIL_TEMPLATES.find((t) => t.template === template)
  //   await sendMail(
  //     email as string,
  //     template as string,
  //     emailTemplate?.node || 'template not found'
  //   )
  //   data.set('email', '')
  //   data.set('template', '')
  // }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    fetch(`/api/send`, {
      method: 'POST',
      body: JSON.stringify(form),
    }).then((res) => {
      if (res.ok) {
        setSuccess(true)
        setForm({ email: '', template: '' })
      } else {
        setError('Something went wrong')
      }
      setLoading(false)
    })
  }

  console.log(error, success, loading)

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <select
          id='template'
          name='template'
          value={form.template}
          onChange={(e) => setForm({ ...form, template: e.target.value })}
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
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          placeholder='Type here'
          className='input input-bordered input-primary w-full max-w-xs'
        />
        <button
          type='submit'
          className='btn btn-primary w-full max-w-xs'
          disabled={loading || success}
        >
          {loading ? 'Sending...' : success ? 'Sent!' : 'Send'}
        </button>
        {/* 
        // this is for server action
        // doesn't work in production (experimental only)
        <SubmitButtons action={send} /> 
        */}
      </form>
    </div>
  )
}
