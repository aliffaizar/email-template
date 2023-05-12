import { Container, Heading, Img, Text } from '@react-email/components'
import { ImDiamonds } from 'react-icons/im'

import Base from './components/base'
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa'

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
    <Base title='Portfolio Email'>
      <Container className='bg-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 p-4'>
          <figure className='aspect-h-6 aspect-w-4'>
            <Img
              src='/images/happy-man.jpg'
              alt='Shoes'
              className='object-cover object-center'
            />
          </figure>
          <div className='flex flex-col items-center justify-center py-4'>
            <Heading
              as='h1'
              className='text-3xl text-center sm:text-left font-bold'
            >
              Alif Faizar
            </Heading>
            <Text className='italic font-mono text-base m-2 font-semibold'>
              Fullstack Developer
            </Text>
            <a
              href='#'
              className='bg-teal-500 px-4 py-1 rounded-md text-white text-sm'
            >
              Download CV
            </a>
            <a
              href='#'
              className='text-teal-500 px-4 py-1 rounded-md border border-teal-500 bg-white text-sm mt-2'
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>
      <Container className='bg-gray-100'>
        <Heading as='h2' className='text-2xl font-bold text-center p-4'>
          Skills
        </Heading>
        <div className='grid grid-cols-2 gap-2 sm:gap-4 px-8 mb-4 text-sm'>
          <div className='flex flex-col items-center'>
            <Heading as='h3' className='text-xl font-semibold'>
              Frontend
            </Heading>
            <div className='flex flex-col'>
              {frontend.map((skill) => (
                <div key={skill} className='inline-flex items-center gap-1'>
                  <ImDiamonds />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='flex items-center flex-col'>
            <Heading as='h3' className='text-xl font-semibold'>
              Backend
            </Heading>
            <div className='flex flex-col'>
              {backend.map((skill) => (
                <div key={skill} className='inline-flex items-center gap-1'>
                  <ImDiamonds />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Container className='bg-white'>
        <Heading as='h2' className='text-2xl font-bold text-center p-4'>
          Latest Projects
        </Heading>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 px-8 mb-4 text-sm'>
          <figure className='aspect-h-3 aspect-w-4'>
            <Img src='/images/placeholder.jpg' alt='project' />
          </figure>
          <figure className='aspect-h-3 aspect-w-4'>
            <Img src='/images/placeholder.jpg' alt='project' />
          </figure>
          <figure className='aspect-h-3 aspect-w-4'>
            <Img src='/images/placeholder.jpg' alt='project' />
          </figure>
          <figure className='aspect-h-3 aspect-w-4'>
            <Img src='/images/placeholder.jpg' alt='project' />
          </figure>
        </div>
      </Container>
      <Container className='bg-white'>
        <Heading as='h2' className='text-2xl font-bold text-center p-4'>
          Experiences
        </Heading>
        <div className='flex flex-col pb-8'>
          <div className='flex gap-2 sm:gap-4 px-8 text-sm'>
            <h3 className='font-semibold w-4/12'>2022 - 2023</h3>
            <div className='flex flex-col px-4 border-l-4 border-teal-500 w-full'>
              <h3 className='font-semibold'>
                Frontend Developer{' '}
                <span className='italic font-normal'>PT. ABC</span>
              </h3>
              <Text className='text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatum, quibusdam, quia, quae voluptatem voluptate
                voluptates quod quos doloribus quidem natus. Quisquam, quas
                voluptates. Quisquam, quas voluptates.
              </Text>
            </div>
          </div>
          <div className='flex gap-2 sm:gap-4 px-8 text-sm'>
            <h3 className='font-semibold w-4/12'>2022 - 2023</h3>
            <div className='flex flex-col px-4 border-l-4 border-teal-500 w-full'>
              <h3 className='font-semibold'>
                Frontend Developer{' '}
                <span className='italic font-normal'>PT. ABC</span>
              </h3>
              <Text className='text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptatum, quibusdam, quia, quae voluptatem voluptate
                voluptates quod quos doloribus quidem natus. Quisquam, quas
                voluptates. Quisquam, quas voluptates.
              </Text>
            </div>
          </div>
        </div>
      </Container>
      <Container className='bg-teal-500 text-white'>
        <div className='px-4 py-8 flex items-center justify-center gap-2 sm:gap-4'>
          <a href='#'>
            <FaGithub className='text-3xl' />
          </a>
          <a href='#'>
            <FaLinkedin className='text-3xl' />
          </a>
          <a href='#'>
            <FaGlobe className='text-3xl' />
          </a>
          <a href='#'>
            <FaEnvelope className='text-3xl' />
          </a>
        </div>
      </Container>
    </Base>
  )
}
