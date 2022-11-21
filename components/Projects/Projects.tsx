import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import SummerIsland from '../../public/images/summer-island.png'
import Office from '../../public/images/office.png'
import LightRoom from '../../public/images/light-room.png'
import GalleryPaint from '../../public/images/gallery-paint.png'
import ReadMore from '../../public/images/read-more.svg'
import Image from 'next/image'
import Project from '../Project/Project'

interface ProjectsProps {}

const Projects = ({}: ProjectsProps) => {
  return (
    <section className="home__works">
      <Project
        image={SummerIsland}
        alt="SummerIsland"
        title="BOL.COM"
        description="A Summer island in the Netherlands"
        withReadMore
      />

      <Project
        image={Office}
        alt="Office"
        title="KEMPEN"
        description="Not some average banking website"
        withReadMore
      />

      <Project
        image={LightRoom}
        alt="LightRoom"
        title="PHILIPS"
        description="Beautiful design meets innovative technology"
        withReadMore
      />

      <Project
        image={GalleryPaint}
        alt="GalleryPaint"
        title="GEMEENTEMUSEUM"
        description="A 100 years of Mondriaan & De Stijl"
        withReadMore
      />
    </section>
  )
}

export default Projects
