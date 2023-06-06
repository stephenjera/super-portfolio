'use client'
import React, { useState } from 'react'
import TableauReport from '@/components/TableauReport'

export default function Page () {
  const [showReport, setShowReport] = useState(true)
  let smallScreen

  if (typeof window !== 'undefined') {
    smallScreen = window.matchMedia('(max-width: 600px)')
  }

  if (smallScreen && smallScreen.matches && showReport) {
    return (
      <div className='p-4'>
        <p className='text-lg font-medium mb-2'>
          This report is best viewed on a desktop device. Do you want to Load
          anyway?
        </p>
        <div className='flex space-x-2'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => setShowReport(false)}
          >
            Yes
          </button>
          <button
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
            onClick={() => setShowReport(true)}
          >
            No
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <TableauReport reportId='viz1684652351781' />
      </div>
    )
  }
}
