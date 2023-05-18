import { Body, Head, Html, Preview } from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type Prop = {
  children: React.ReactNode
  title?: string
}

export default function Base({
  children,
  title = 'Welcome to the app!',
}: Prop) {
  return (
    <Tailwind>
      <Html>
        <Preview>{`This is an example of ${title} template`}</Preview>
        <Head>
          <title>{title}</title>
        </Head>
        <Body className='w-full'>{children}</Body>
      </Html>
    </Tailwind>
  )
}
