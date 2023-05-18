'use client'

import { useTransition } from 'react'

export function SubmitButtons({
  action,
  children = 'Send',
}: {
  action: (data: FormData) => void
  children?: string | React.ReactNode
}) {
  let [isPending, startTransition] = useTransition()
  return (
    <button
      onClick={() =>
        startTransition(() => action(new FormData(document.forms[0])))
      }
      type='submit'
      className='btn btn-primary w-full max-w-xs'
      disabled={isPending}
    >
      {isPending ? 'Sending...' : children}
    </button>
  )
}
