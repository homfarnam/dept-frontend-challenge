import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import SliderImage from '../../public/images/slider.png'

export interface ISliderProps {}

const Slider = ({}: ISliderProps) => {
  return (
    <div className="w-full h-[628px] relative shadow-xl">
      <ImageCard
        image={SliderImage}
        size="100vw"
        alt="slider"
        priority
        description={() => (
          <div className="text-white">
            <h3 className="my-4">Work</h3>
            <p className="text-4xl font-light">
              A selection of projects that{' '}
              <strong className="font-bold">pioneer tech</strong> and{' '}
              <strong className="font-bold">marketing </strong> to help brands
              stay ahead.
            </p>
          </div>
        )}
      />
    </div>
  )
}

export default Slider
