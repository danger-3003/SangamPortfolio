"use client"

import Waves from './Waves'
import { MainLayoutTypes } from '@/types/common'
import Navbar from './Navbar'

function MainLayout({ children }: MainLayoutTypes) {
  return (
    <div className='h-screen relative'>
      <div className='fixed top-0 w-full z-10'>
        <Navbar />
      </div>
      <div className='flex items-center justify-center h-full relative z-5 w-full'>
        {children}
      </div>
      <div className='w-full'>
        <div className='fixed bottom-0 w-full z-0'>
          <Waves
            gradientId='blue-wave'
            fromColor='--wave-from'
            toColor='--wave-to'
            amplitude={10}
            height={10}
            points={4}
            speed={0.35}
            className='h-[35vh] opacity-50 duration-300 transition-colors'
          />
        </div>
        <div className='fixed bottom-0 w-full'>
          <Waves
            gradientId='red-wave'
            fromColor='--wave-from-2'
            toColor='--wave-to-2'
            amplitude={15}
            height={15}
            points={5}
            speed={0.35}
            className='h-[35vh] opacity-50 duration-300 transition-colors'
          />
        </div>
      </div>
    </div>
  )
}

export default MainLayout