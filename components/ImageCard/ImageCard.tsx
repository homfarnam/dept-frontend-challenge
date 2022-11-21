import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ImageCardProps {
  image: string | StaticImageData
  alt: string
  description?: () => JSX.Element
  size?: string
  cover?: boolean
}

const ImageCard = ({
  image,
  alt,
  description,
  size,
  cover,
}: ImageCardProps) => {
  return (
    <>
      <Image
        alt={alt}
        quality={100}
        sizes={size}
        fill
        src={image}
        className="object-cover"
      />
      {cover ? (
        <div className="w-full h-full bg-black opacity-20 absolute z-20" />
      ) : null}
      {description ? (
        <div className="imageText z-30">{description()}</div>
      ) : null}
    </>
  )
}

export default ImageCard
