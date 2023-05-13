'use client'
import { useState } from 'react'
import { EMAIL_TEMPLATES } from '@/email-template'

export default function SendEmail() {
  const [template, setTemplate] = useState('')
  const [email, setEmail] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!template || !email) return
    const res = await fetch(
      `https://email-template-aliffaizar.vercel.app/api/send`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ template, email }),
      }
    )
    if (res.ok) {
      alert('Email sent!')
    } else {
      alert('Failed to send email')
    }
    setTemplate('')
    setEmail('')
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <form onSubmit={submit} className='flex flex-col gap-4'>
        <select
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          required
          className='select select-primary w-full max-w-xs'
        >
          <option value={''} disabled>
            Select a template
          </option>
          {EMAIL_TEMPLATES.map((template) => (
            <option value={template.template} key={template.name}>
              {template.name}
            </option>
          ))}
        </select>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
