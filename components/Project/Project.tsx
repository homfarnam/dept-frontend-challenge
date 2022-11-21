import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import ReadMore from '../../public/images/read-more.svg'
import Image, { StaticImageData } from 'next/image'

interface IProjectProps {
  image: string | StaticImageData
  alt: string
  title: string
  description: string
  withReadMore?: boolean
}

const Project = ({
  image,
  alt,
  title,
  description,
  withReadMore,
}: IProjectProps) => {
  return (
    <div className="w-full h-[500px] relative">
      <ImageCard
        image={image}
        size="100vw"
        cover
        alt={alt}
        description={() => (
          <div className="text-white">
            <h3 className="my-4 uppercase">{title}</h3>
            <p className="font-light text-4xl">{description}</p>
            {withReadMore ? (
              <button className="flex mt-3 items-baseline justify-start gap-2">
                <Image src={ReadMore} alt="ReadMore" />
                Read More
              </button>
            ) : null}
          </div>
        )}
      />
    </div>
  )
}

export default Project
