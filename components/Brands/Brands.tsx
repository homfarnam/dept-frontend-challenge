import { allBrands } from 'data/data'
import Image from 'next/image'
import React from 'react'

interface BrandsProps {}

const Brands = ({}: BrandsProps) => {
  return (
    <section className="home__brands">
      <div className="home__brands--title">
        <h3>Clients</h3>
        <p>
          We value a great working relationship with our clients above all else.
          It’s why they often come to our parties. It’s also why we’re able to
          challenge and inspire them to reach for the stars.
        </p>
      </div>
      <div className="home__brands--icons">
        {allBrands.map((item) => (
          <Image
            src={item.image}
            width={171}
            height={43}
            quality={100}
            alt={item.alt}
            key={item.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Brands
