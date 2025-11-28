import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function Landing(): React.ReactElement {
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  useEffect(() => {
    function checkWidth() {
      const small = window.innerWidth <= 815
      setIsSmallScreen(small)
    }
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div
        className={clsx(
          'absolute top-0 left-0 z-10 tracking-wide h-screen w-full whitespace-pre-line'
        )}
      >
        <div className="h-screen w-full flex flex-col items-center justify-center p-20">
          <h2
            className={clsx(
              isSmallScreen ? 'hidden' : 'text-6xl top-0 left-0 font-normal',
              'text-white tracking-tightest whitespace-pre-line w-full font-sans'
            )}
          >
            An evolving body of work
            <br />
            reflecting a journey of
            <br /> artistic exploration.
            <br />
            <br />
            <a
              href="contact"
              className="underline underline-offset-10 decoration-4 cursor-pointer hover:underline"
            >
              Get in touch →
            </a>
          </h2>
        </div>
      </div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/dsncbmlkl/video/upload/v1763729747/art-portfolio-videos/Timeline_7-_music_longer_g8uk3b.mov"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* <div className="relative z-10 flex items-center justify-center w-full h-full">
          <h1 className="text-white text-4xl font-bold">Landing Page</h1>
        </div> */}

        <div className="absolute inset-0 bg-black/30 z-0" />
      </div>
    </div>
  )
}
