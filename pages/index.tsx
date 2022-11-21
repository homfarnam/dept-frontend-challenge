import Image from 'next/image'
import {
  Filters,
  ImageCard,
  ImageWithNews,
  Layout,
  Project,
  Projects,
  Slider,
} from '../components'
import Building from '../public/images/building.png'
import Cartoon from '../public/images/cartoon.png'
import BehindMan from '../public/images/behind-man.png'
import Ecosystem from '../public/images/ecosystem.jpeg'

export default function Home() {
  const news: {
    id: number
    title: string
    description: string
  }[] = [
    {
      id: 1,
      title: 'Microsoft',
      description:
        'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
    },
    {
      id: 2,
      title: 'O’NEILL',
      description:
        'Integrating existing content into O’Neills’s new e-commerce platform',
    },
    {
      id: 3,
      title: 'Microsoft',
      description:
        'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
    },
  ]

  return (
    <Layout title="Dept Frontend Challenge">
      <div className="home">
        <Slider />
        <Filters />
        <Projects />
        <ImageWithNews
          data={news}
          image={BehindMan}
          alt="BehindMan"
          title="FLORENSIS"
          description="Rethinking the entire online ecosystem"
        />
        <div className="gallery">
          <Project
            image={Building}
            alt="Building"
            title="BE LIGHTNING"
            description="Delivering clarity on a global scale"
            withReadMore
          />
          <Project
            image={Cartoon}
            alt="Cartoon"
            title="TUI"
            description="Swipe to find your next holiday destination"
            withReadMore
          />
        </div>
        <ImageWithNews
          data={news}
          image={Ecosystem}
          alt="Ecosystem"
          title="FLORENSIS"
          description="Rethinking the entire online ecosystem"
          reverse
        />
      </div>
    </Layout>
  )
}
