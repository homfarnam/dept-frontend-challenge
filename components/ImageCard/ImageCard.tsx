import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ImageCardProps {
  image: string | StaticImageData
  alt: string
  description?: () => JSX.Element
  size?: string
  cover?: boolean
  priority?: boolean
}

const ImageCard = ({
  image,
  alt,
  description,
  size,
  cover,
  priority,
}: ImageCardProps) => {
  return (
    <>
      <Image
        alt={alt}
        priority={priority}
        quality={100}
        sizes={size}
        fill
        src={image}
        className="object-cover"
      />
      {cover ? <div className="imageCover" /> : null}
      {description ? <div className="imageText">{description()}</div> : null}
    </>
  )
}

export default ImageCard
