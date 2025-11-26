import React, { useEffect, useState } from 'react'
import { clsx } from 'clsx'

export default function AboutInfo(): React.ReactElement {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    function checkHeight() {
      const small = window.innerHeight <= 667 || window.innerHeight === 740
      setIsSmallScreen(small)
      console.log('Height check:', window.innerHeight, small)
    }
    checkHeight()
    window.addEventListener('resize', checkHeight)
    return () => window.removeEventListener('resize', checkHeight)
  }, [])
  return (
    <div
      className={clsx(isSmallScreen && 'pt-[279px]', 'flex pt-30 px-10 gap-10')}
    >
      <div className="w-full">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="mb-4 font-light text-gray-700 text-sm">
          Born in 1986, Caracas (Venezuela). Currently based in Madrid (Spain).
        </p>
        <h3 className="font-semibold text-gray-800">EDUCATION</h3>
        <p className="mb-4 font-light text-gray-700 text-sm">
          2006-2010 – BFA, Instituto de Diseño de Caracas. Major in Design and
          Illustration. Caracas, Venezuela.
        </p>
        <h3 className="font-semibold text-gray-800">GROUP EXHIBITIONS</h3>
        <p className="mb-4 font-light text-gray-700 text-sm">
          December, 2017 – Scope Art Show, Thinkspace Gallery booth.
          <br />
          June, 2017 – & Gallery Miami, A Black Ship Moment, curated by Black
          Ship Gallery <br />
          November, 2016 – The Brand Library & Art Center, curated by Thinkspace
          Gallery
          <br />
          February, 2016 – Corey Helford Gallery Los Angeles in the “Below the
          surface group show
          <br />
          February, 2016 – POW! WOW! Hawaii Curated by Thinkspace Gallery
          <br />
          February, 2016 – LA Art Fair Los Angeles, with Smash Gallery <br />
          December, 2015 – Abend Gallery, Denver. Collective exhibition: 25th
          Annual Miniatures Show
          <br />
          November, 2015 – Smash Gallery, San Francisco. Collective exhibition:
          Holiday group show
          <br />
          August, 2015 – Abend Gallery, Denver. Collective exhibition: Edge of
          Realism
          <br />
          April, 2014 – Affordable Art Fair of New York, with One Art Space
          Gallery
          <br />
          February, 2013 – La Ventana Artkao Gallery. Collective exhibition:
          Novísimos
        </p>
        <h3 className="font-semibold text-gray-800">SOLO EXHIBITIONS</h3>
        <p className="mb-4 font-light text-gray-700 text-sm">
          Sept, 2018 – Thinkspace Gallery, Los Angeles: PANACEA
        </p>
      </div>
      <div className="[@media(max-width:800px)]:hidden">
        <img
          src="https://res.cloudinary.com/dsncbmlkl/image/upload/v1763734021/art-portfolio-bio/Screenshot_2025-11-21_at_15.05.13_hsuicd.png"
          alt=""
        />
      </div>
    </div>
  )
}
