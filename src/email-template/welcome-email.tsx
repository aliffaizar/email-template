import {
  Column,
  Container,
  Heading,
  Hr,
  Img,
  Text,
} from '@react-email/components'

import Base from './components/base'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function WelcomeEmail() {
  return (
    <Base title='Welcome to the app!'>
      <Container className='bg-white'>
        <Img
          src='/images/logoipsum.svg'
          alt='logo'
          className='m-4 mt-8 h-7 sm:h-8'
        />
        <Heading
          as='h1'
          className='text-xl sm:text-2xl text-center font-semibold p-4'
        >
          Welcome to the app!
        </Heading>
        <Text className='px-4 text-sm sm:text-base'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
          praesentium distinctio perspiciatis laboriosam cum sequi corporis
          nostrum nesciunt sapiente totam placeat autem hic quo sit facere. Sed
          eius atque, similique sint vitae commodi, culpa iste exercitationem
          nobis hic saepe maxime.
        </Text>
        <Text className='px-4 text-sm sm:text-base'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          obcaecati corporis, nihil beatae error odit alias molestias?
        </Text>
        <Hr className='my-4' />
        <div className='p-4 flex gap-2 sm:gap-4'>
          <div className='w-5/12'>
            <div className='aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-4'>
              <Img
                src='/images/placeholder.jpg'
                alt='1'
                className='object-cover object-center w-full h-full'
              />
            </div>
          </div>
          <div className='w-full'>
            <Heading as='h2' className='text-sm sm:text-base font-semibold m-0'>
              Lorem ipsum dolor sit amet consectetur.
            </Heading>
            <Text className='text-xs sm:text-sm  sm:block m-0'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              consequatur aliquam orem.
            </Text>
          </div>
        </div>
        <div className='p-4 flex gap-2 sm:gap-4'>
          <div className='w-5/12'>
            <div className='aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-4'>
              <Img
                src='/images/placeholder.jpg'
                alt='1'
                className='object-cover object-center w-full h-full'
              />
            </div>
          </div>
          <div className='w-full'>
            <Heading as='h2' className='text-sm sm:text-base font-semibold m-0'>
              Lorem ipsum dolor sit amet consectetur.
            </Heading>
            <Text className='text-xs sm:text-sm  sm:block m-0'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              consequatur aliquam orem.
            </Text>
          </div>
        </div>
        <Hr className='my-4' />

        <div className='my-8 text-center'>
          <Text className='text-xs sm:text-sm'>
            <strong>Lorem Ipsum Inc.</strong> {new Date().getFullYear()} All
            rights reserved.
          </Text>
          <div className='flex item-center justify-center gap-2 sm:gap-4 pb-8'>
            <FaFacebook className='text-blue-500 text-2xl cursor-pointer' />
            <FaLinkedin className='text-blue-500 text-2xl cursor-pointer' />
            <FaTwitter className='text-blue-500 text-2xl cursor-pointer' />
          </div>
        </div>
      </Container>
    </Base>
  )
}
