import {
  Button,
  Column,
  Container,
  Heading,
  Img,
  Row,
  Section,
  Text,
} from '@react-email/components'

import Base from './components/base'
import { BASE_URL } from '.'

const backend = ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Nest.js']
const frontend = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
]

export default function PortfolioEmail() {
  return (
    <Base title='Portfolio'>
      <Container>
        <Section className='bg-white w-full'>
          <Row className='w-full'>
            <Column className='w-full sm:w-1/2 inline-block'>
              <Img
                src={`${BASE_URL}/images/happy-man.jpg`}
                alt='image'
                className='object-cover object-center mx-auto'
                width={200}
                height={300}
              />
            </Column>
            <Column className='w-full sm:w-1/2 inline-block mb-4 sm:mb-0'>
              <Heading
                as='h1'
                className='text-3xl mt-4 sm:mt-0 text-center font-bold'
              >
                John Doe
              </Heading>
              <Heading
                as='h3'
                className='italic font-mono text-lg text-center m-0 font-semibold'
              >
                Fullstack Developer
              </Heading>
              <Text className='text-center m-2 flex sm:flex-col justify-center items-center gap-2'>
                <Button
                  className='bg-teal-500 border border-teal-500 text-white py-2 rounded-md text-xs w-36 font-semibold'
                  href='https://aliffaizar.com'
                  target='_blank'
                >
                  Download CV
                </Button>

                <Button
                  className='bg-white text-teal-500 border border-teal-500 py-2 rounded-md text-xs w-36 font-semibold'
                  href='https://aliffaizar.com'
                  target='_blank'
                >
                  Contact
                </Button>
              </Text>
            </Column>
          </Row>
        </Section>
        <Section className='bg-gray-100 w-full'>
          <Heading as='h2' className='text-2xl font-bold text-center p-4'>
            Skills
          </Heading>
          <Row className='mb-4'>
            <Column className='w-1/2 inline-block'>
              <Heading as='h3' className='text-lg font-semibold text-center'>
                Frontend
              </Heading>
              <ul className='list-disc list-inside px-8'>
                {frontend.map((skill) => (
                  <li key={skill} className='text-gray-500'>
                    {skill}
                  </li>
                ))}
              </ul>
            </Column>
            <Column className='w-1/2 inline-block'>
              <Heading as='h3' className='text-lg font-semibold text-center'>
                Backend
              </Heading>
              <ul className='list-disc list-inside px-8'>
                {backend.map((skill) => (
                  <li key={skill} className='text-gray-500'>
                    {skill}
                  </li>
                ))}
              </ul>
            </Column>
          </Row>
        </Section>
        <Section className='bg-white'>
          <Heading as='h2' className='text-2xl font-bold text-center p-4'>
            Latest Projects
          </Heading>
          <Row>
            <Column className='w-1/2 inline-block p-2'>
              <Img
                src={`${BASE_URL}/images/placeholder.jpg`}
                alt='project'
                className='object-cover object-center'
              />
              <Heading as='h3' className='text-lg font-semibold text-center'>
                Project Name
              </Heading>
            </Column>
            <Column className='w-1/2 inline-block p-2'>
              <Img
                src={`${BASE_URL}/images/placeholder.jpg`}
                alt='project'
                className='object-cover object-center'
              />
              <Heading as='h3' className='text-lg font-semibold text-center'>
                Project Name
              </Heading>
            </Column>
            <Column className='w-1/2 inline-block p-2'>
              <Img
                src={`${BASE_URL}/images/placeholder.jpg`}
                alt='project'
                className='object-cover object-center'
              />
              <Heading as='h3' className='text-lg font-semibold text-center'>
                Project Name
              </Heading>
            </Column>
            <Column className='w-1/2 inline-block p-2'>
              <Img
                src={`${BASE_URL}/images/placeholder.jpg`}
                alt='project'
                className='object-cover object-center'
              />
              <Heading as='h3' className='text-lg font-semibold text-center'>
                Project Name
              </Heading>
            </Column>
          </Row>
        </Section>
        <Section className='bg-white px'>
          <Heading as='h2' className='text-2xl font-bold text-center p-4'>
            Experiences
          </Heading>
          <Section className='mb-4'>
            <Row>
              <Column className='w-4/12 pl-4 align-baseline'>
                <Heading as='h3' className='font-semibold text-xs sm:text-sm'>
                  2022-2023
                </Heading>
              </Column>
              <Column className='w-8/12 px-4 border-l-2 border-l-teal-500'>
                <Heading as='h3' className='font-semibold'>
                  Frontend Developer{' '}
                  <span className='italic font-normal'>PT. ABC</span>
                </Heading>
                <Text className='text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quia, quae voluptatem voluptate
                  voluptates quod quos doloribus quidem natus. Quisquam, quas
                  voluptates. Quisquam, quas voluptates.
                </Text>
              </Column>
            </Row>
            <Row>
              <Column className='w-4/12 pl-4 align-baseline'>
                <Heading as='h3' className='font-semibold text-xs sm:text-sm'>
                  2022-2023
                </Heading>
              </Column>
              <Column className='w-8/12 px-4 border-l-2 border-l-teal-500'>
                <Heading as='h3' className='font-semibold'>
                  Frontend Developer{' '}
                  <span className='italic font-normal'>PT. ABC</span>
                </Heading>
                <Text className='text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  voluptatum, quibusdam, quia, quae voluptatem voluptate
                  voluptates quod quos doloribus quidem natus. Quisquam, quas
                  voluptates. Quisquam, quas voluptates.
                </Text>
              </Column>
            </Row>
          </Section>
        </Section>
        <Section className='bg-teal-500 text-white'>
          <Text className='px-4 py-8 m-0 flex items-center justify-center gap-2 sm:gap-4'>
            <a href='https://aliffaizar.com'>
              <Img src='/icons/github.svg' alt='logo' className='h-7' />
            </a>
            <a href='https://aliffaizar.com'>
              <Img src='/images/linkedin.svg' alt='logo' className='h-7' />
            </a>
            <a href='https://aliffaizar.com'>
              <Img src='/icons/globe.svg' alt='logo' className='h-7' />
            </a>
            <a href='https://aliffaizar.com'>
              <Img src='/icons/envelope.svg' alt='logo' className='h-7' />
            </a>
          </Text>
        </Section>
      </Container>
    </Base>
  )
}
