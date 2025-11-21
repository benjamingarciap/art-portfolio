import React from 'react'

export default function Landing(): React.ReactElement {
  return (
    <div className="flex items-center justify-center w-full h-screen">
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
