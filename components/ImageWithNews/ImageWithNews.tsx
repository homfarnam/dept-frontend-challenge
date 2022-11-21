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
              <p className="font-light text-4xl">{description}</p>
              <button className="flex mt-3 items-baseline justify-start gap-2">
                <Image src={ReadMore} alt="ReadMore" />
                Read More
              </button>
            </div>
          )}
        />
      </div>
      <div className="md:w-1/3 w-full p-10 flex flex-col gap-10 justify-center items-start bg-black text-white h-full">
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
