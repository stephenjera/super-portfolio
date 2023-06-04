import React from 'react'
import Image from 'next/image'

type ErdProps = {
  image_url: string
  title: string
  alt: string
}

const DisplayErd: React.FC<ErdProps> = ({ image_url, title, alt }) => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-4 text-center'>{title}</h1>
      <div className='w-full h-full relative'>
        <Image
          src={image_url}
          alt={alt}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}

export default DisplayErd
