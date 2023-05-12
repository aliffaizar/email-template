import { EMAIL_TEMPLATES } from '@/email-template'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4'>
      {EMAIL_TEMPLATES.map((template) => (
        <div
          key={template.name}
          className='card card-compact bg-base-100 shadow-xl'
        >
          <figure className='aspect-h-3 aspect-w-4'>
            <Image
              src={template?.image || '/images/placeholder.jpg'}
              alt='Shoes'
              width={300}
              height={300}
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{template.name}</h2>
            <Link
              href={`/${template.template}`}
              className='btn btn-sm btn-primary text-base-100 capitalize'
            >
              detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
