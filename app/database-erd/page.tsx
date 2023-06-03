import React from 'react'
import Image from 'next/image'

const Home: React.FC = () => {
  return (
    <div className='w-full h-full relative '>
      <h1 className='text-2xl font-bold mb-4 text-center'>Database ERD</h1>
        <Image
          src='/images/football_database.svg'
          alt='My Image'
          layout='fill'
          objectFit='contain'
        />
    </div>
  )
}

export default Home
