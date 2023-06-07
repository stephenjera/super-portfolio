'use client'
import { useEffect } from 'react'

export default function Page () {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'
    script.type = 'module'
    document.body.appendChild(script)
  }, [])

  let smallScreen

  if (typeof window !== 'undefined') {
    smallScreen = window.matchMedia('(max-width: 1000px)')
  }

  if (smallScreen && smallScreen.matches) {
    return (
      <tableau-viz
        id='tableauViz'
        src='https://public.tableau.com/views/AnalysingFootballData/Dashboard1'
        device='phone'
        toolbar='bottom'
      ></tableau-viz>
    )
  } else {
    return (
      <tableau-viz
        id='tableauViz'
        src='https://public.tableau.com/views/AnalysingFootballData/Dashboard1'
        toolbar='bottom'
      ></tableau-viz>
    )
  }
}
