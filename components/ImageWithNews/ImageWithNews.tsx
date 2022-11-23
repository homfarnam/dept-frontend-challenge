import React, { useEffect, useState } from 'react'
import ImageCard from '../ImageCard/ImageCard'
import BehindMan from '../../public/images/behind-man.png'
import ReadMore from '../../public/images/read-more.svg'
import Image, { StaticImageData } from 'next/image'
import type { Post } from 'types/types'

interface ImageWithNewsProps {
  reverse?: boolean
  data: Post[]
  image: string | StaticImageData
  alt: string
  title: string
  description: string
}

const PostDetails = ({ data }: { data: Post }) => {
  return (
    <>
      {data.id % 2 === 0 && <hr className="w-full" />}

      <div className="flex flex-col items-start gap-1">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <button className="flex items-baseline justify-start gap-2">
          <Image src={ReadMore} alt="ReadMore" />
          Read More
        </button>
      </div>
      {data.id % 2 === 0 && <hr className="w-full" />}
    </>
  )
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
        {data.map((item) => (
          <PostDetails data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default ImageWithNews
