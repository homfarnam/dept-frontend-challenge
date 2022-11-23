import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Layout } from '../components'
import BehindMan from '../public/images/behind-man.png'
import Ecosystem from '../public/images/ecosystem.jpeg'
import {
  FirstImagesList,
  FourthImagesList,
  news,
  SecondImagesList,
  ThirdImagesList,
} from 'data/data'

const Slider = dynamic(() => import('../components/Slider/Slider'), {
  ssr: false,
})

const Filters = dynamic(() => import('../components/Filters/Filters'), {
  ssr: false,
})

const Projects = dynamic(() => import('../components/Projects/Projects'), {
  ssr: false,
})

const Brands = dynamic(() => import('../components/Brands/Brands'), {
  ssr: false,
})

const ContactForm = dynamic(
  () => import('../components/ContactForm/ContactForm'),
  {
    ssr: false,
  }
)

const ImageWithNews = dynamic(
  () => import('../components/ImageWithNews/ImageWithNews'),
  {
    ssr: false,
  }
)

const Home: NextPage = () => {
  return (
    <Layout title="Dept Frontend Challenge">
      <div className="home">
        <Slider />
        <Filters />
        <Projects data={FirstImagesList} />
        <ImageWithNews
          data={news}
          image={BehindMan}
          alt="BehindMan"
          title="FLORENSIS"
          description="Rethinking the entire online ecosystem"
        />
        <Projects data={ThirdImagesList} />

        <ImageWithNews
          data={news}
          image={Ecosystem}
          alt="Ecosystem"
          title="FLORENSIS"
          description="Rethinking the entire online ecosystem"
          reverse
        />
        <Projects data={SecondImagesList} />
        <div className="flex flex-col items-center justify-center w-full py-10 text-white bg-black">
          <p className="w-2/3 text-center md:w-1/2">
            “Dept helped us tell our story through a bold new identity and a
            robust online experience. To the tone of 60% growth in online
            bookings in just one month””
          </p>
          <span className="mt-3 text-sm font-light">
            MATTIJS TEN DRINK - CEO, TRANSAVIA
          </span>
        </div>

        <Projects data={FourthImagesList} />
        <Brands />
        <ContactForm />
      </div>
    </Layout>
  )
}

export default Home
