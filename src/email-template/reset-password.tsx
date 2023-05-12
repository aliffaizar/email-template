import {
  Section,
  Container,
  Heading,
  Text,
  Button,
} from '@react-email/components'
import Base from './components/base'
import Logo from './components/logo'

export default function ResetPassword() {
  return (
    <Base title='Reset Password'>
      <Section>
        <Container className='flex items-center justify-center p-4'>
          <Logo />
        </Container>
      </Section>
      <Section>
        <Container className=' bg-white'>
          <Heading
            className='text-lg sm:text-xl font-bold my-8 text-center'
            as='h1'
          >
            Reset Password
          </Heading>
          <Text className='px-4 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            praesentium distinctio perspiciatis laboriosam cum sequi corporis.
          </Text>
          <div className='px-4'>
            <button className='bg-blue-500 text-white px-6 text-center py-2 rounded text-sm sm:text-base'>
              Reset Password
            </button>
          </div>
          <Text className='px-4 mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            obcaecati corporis.
          </Text>
        </Container>
      </Section>
      <Section>
        <Container className='flex items-center justify-center p-4'>
          <div>
            <Text className='text-xs sm:text-sm mb-0'>
              Lorem Company Ltd. 123 Lorem St. Ipsum City, Ipsum State 12345
            </Text>
          </div>
        </Container>
      </Section>
    </Base>
  )
}
