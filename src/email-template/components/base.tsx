import { Body, Head, Html, Preview, Tailwind } from '@react-email/components'

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
        <Body>{children}</Body>
      </Html>
    </Tailwind>
  )
}
