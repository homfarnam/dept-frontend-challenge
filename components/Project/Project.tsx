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
    <div className="project">
      <ImageCard
        image={image}
        size="100vw"
        cover
        alt={alt}
        description={() => (
          <div className="project__details">
            <h3>{title}</h3>
            <p>{description}</p>
            {withReadMore ? (
              <button>
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
