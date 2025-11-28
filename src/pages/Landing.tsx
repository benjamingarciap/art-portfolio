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
        <div
          className={clsx(
            isSmallScreen ? 'p-9' : 'p-20',
            'h-screen w-full flex flex-col items-center justify-center'
          )}
        >
          <p
            className={clsx(
              isSmallScreen ? 'text-3xl  font-normal' : 'text-6xl  font-normal',
              'text-[#F8F8F8] tracking-tightest whitespace-pre-line w-full font-sans'
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
              className="relative inline-flex items-center cursor-pointer group no-underline"
            >
              <span className="relative z-10">Get in touch&nbsp;</span>
              <span className="relative z-10 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                →
              </span>
              {/* underline moved 0.5rem below the text */}
              <span
                className={clsx(
                  isSmallScreen ? 'h-[3px] -bottom-1' : 'h-[5px] -bottom-2',
                  'absolute left-0 bg-current w-full rounded-sm'
                )}
              />
            </a>
          </p>
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
