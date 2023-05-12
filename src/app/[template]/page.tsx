import { EMAIL_TEMPLATES } from '@/email-template'

function getTemplate(template: string) {
  return EMAIL_TEMPLATES.find((t) => t.template === template)
}

export default function Template({ params }: { params: { template: string } }) {
  const template = getTemplate(params.template)
  if (!template)
    return (
      <div className='h-full items-center justify-center'>
        <div className='text-3xl'>Template not found</div>
      </div>
    )
  return (
    <div>
      {template && (
        <div className='mockup-window border bg-base-300'>
          <div className='px-4 sm:px-6 pb-8 overflow-x-hidden overflow-y-auto bg-base-200 max-h-[70vh]'>
            <div dangerouslySetInnerHTML={{ __html: template.html }}></div>
          </div>
        </div>
      )}
    </div>
  )
}
