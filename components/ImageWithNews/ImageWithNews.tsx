import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import BehindMan from '../../public/images/behind-man.png'
import ReadMore from '../../public/images/read-more.svg'
import Image, { StaticImageData } from 'next/image'

interface ImageWithNewsProps {
  reverse?: boolean
  data: {
    id: number
    title: string
    description: string
  }[]
  image: string | StaticImageData
  alt: string
  title: string
  description: string
}

const ImageWithNews = ({
  reverse,
  image,
  alt,
  data,
  title,
  description,
}: ImageWithNewsProps) => {
  return (
    <div
      className={`w-full flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center md:h-[568px] relative`}
    >
      <div className="relative w-full md:w-2/3 h-[568px]">
        <ImageCard
          image={image}
          alt={alt}
          cover
          size="100vw"
          description={() => (
            <div className="text-white">
              <h3 className="my-4">{title}</h3>
              <p className="text-4xl font-light">{description}</p>
              <button className="flex items-baseline justify-start gap-2 mt-3">
                <Image src={ReadMore} alt="ReadMore" />
                Read More
              </button>
            </div>
          )}
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full h-full gap-10 p-10 text-white bg-black md:w-1/3">
        <div className="flex flex-col items-start gap-1">
          <h3>Microsoft</h3>
          <p>
            Tapping into Ireland’s unique gaming culture and bringing a fresh
            flavour to their Xbox social media channels
          </p>
          <button className="flex items-baseline justify-start gap-2">
            <Image src={ReadMore} alt="ReadMore" />
            Read More
          </button>
          <hr className="w-full" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <h3>O’NEILL</h3>
          <p>
            Integrating existing content into O’Neills’s new e-commerce platform
          </p>
          <button className="flex items-baseline justify-start gap-2">
            <Image src={ReadMore} alt="ReadMore" />
            Read More
          </button>
        </div>
        <hr className="w-full" />

        <div className="flex flex-col items-start gap-1">
          <h3>Microsoft</h3>
          <p>
            Tapping into Ireland’s unique gaming culture and bringing a fresh
            flavour to their Xbox social media channels
          </p>
          <button className="flex items-baseline justify-start gap-2">
            <Image src={ReadMore} alt="ReadMore" />
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageWithNews
