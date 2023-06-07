'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <html lang='en'>
      <Head>
        <title>Football Project</title>
      </Head>
      <body className={`${inter.className} flex flex-col h-screen`}>
        <nav className='bg-gray-800 p-4 text-white relative'>
          <div className='flex justify-between items-center'>
            <div className='sm:hidden'>
              <button
                className='bg-transparent border-none cursor-pointer'
                onClick={handleToggle}
              >
                ☰ Menu
              </button>
            </div>
          </div>
          <div>
            <ul
              className={`${
                isOpen ? 'block' : 'hidden'
              } relative top-full left-0 w-full bg-gray-800 
                sm:static sm:flex flex-col sm:flex-row space-y-2 
                sm:space-y-0 sm:space-x-4`}
            >
              <li>
                <Link
                  href='/'
                  className='hover:bg-gray-700 px-3 py-1 rounded-md block text-center'
                  onClick={handleClose}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/scoreboard'
                  className='hover:bg-gray-700 px-3 py-1 rounded-md block text-center'
                  onClick={handleClose}
                >
                  Scoreboard
                </Link>
              </li>
              <li>
                <Link
                  href='/dashboard'
                  className='hover:bg-gray-700 px-3 py-1 rounded-md block text-center'
                  onClick={handleClose}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href='/graphiql'
                  className='hover:bg-gray-700 px-3 py-1 rounded-md block text-center'
                  onClick={handleClose}
                >
                  GraphQL API
                </Link>
              </li>
              <li>
                <Link
                  href='/database-erd'
                  className='hover:bg-gray-700 px-3 py-1 rounded-md block text-center'
                  onClick={handleClose}
                >
                  Database ERD
                </Link>
              </li>
              <li>
                <Link
                  href='/warehouse-erd'
                  className='hover:bg-gray-700 px-3 py-1 rounded-md block text-center'
                  onClick={handleClose}
                >
                  Warehouse ERD
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className='p-4 flex-grow '>{children}</main>

        <footer className='bg-gray-800 p-4 text-white mt-auto'>
          <p className='text-center'>Made by Stephen Jeranyama</p>
        </footer>
      </body>
    </html>
  )
}
