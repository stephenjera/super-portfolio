'use client'

export default function Page () {
  const iframeSrc = 'https://graphql-land.nw.r.appspot.com/graphql'
  let smallScreen

  if (typeof window !== 'undefined') {
    smallScreen = window.matchMedia('(max-width: 600px)')
  }

  if (smallScreen && smallScreen.matches) {
    return (
      <div>
        <p>
          The screen is too small to display the content. Please click the link
          below to open it in a new tab.
        </p>
        <a href={iframeSrc} target='_blank' rel='noopener noreferrer'>
          Open in new tab
        </a>
      </div>
    )
  } else {
    return (
      <div className='h-full'>
        <iframe src={iframeSrc} width='100%' height='100%'></iframe>
      </div>
    )
  }
}
