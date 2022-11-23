import { ImagesListType, Post } from 'types/types'

const news: Post[] = [
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

const FirstImagesList: ImagesListType[] = [
  {
    id: 1,
    image: '/images/summer-island.png',
    alt: 'SummerIsland',
    title: 'BOL.COM',
    description: 'A Summer island in the Netherlands',
  },
  {
    id: 2,
    image: '/images/office.png',
    alt: 'Office',
    title: 'KEMPEN',
    description: 'Not some average banking website',
  },
  {
    id: 3,
    image: '/images/light-room.png',
    alt: 'LightRoom',
    title: 'PHILIPS',
    description: 'Beautiful design meets innovative technology',
  },
  {
    id: 4,
    image: '/images/gallery-paint.png',
    alt: 'GalleryPaint',
    title: 'GEMEENTEMUSEUM',
    description: 'A 100 years of Mondriaan & De Stijl',
  },
]

const SecondImagesList: ImagesListType[] = [
  {
    id: 1,
    image: '/images/hearts.png',
    alt: 'hearts',
    title: 'CHOCOMEL',
    description: 'A campaign for the limited edition letter packs',
  },
  {
    id: 2,
    image: '/images/headphone.png',
    alt: 'headphone',
    title: 'JBL',
    description: 'Live like a champion with Jerome Boateng',
  },
  {
    id: 3,
    image: '/images/whiteboard.png',
    alt: 'whiteboard',
    title: 'ZALANDO',
    description: 'Innovative SEO and content strategy for Zalando',
  },
  {
    id: 4,
    image: '/images/books.png',
    alt: 'books',
    title: 'KONINKLIJKE BIBLIOTHEEK',
    description: 'The search of the most influential book ever',
  },
]

const ThirdImagesList: ImagesListType[] = [
  {
    id: 1,
    image: '/images/building.png',
    alt: 'Building',
    title: 'BE LIGHTNING',
    description: 'Delivering clarity on a global scale',
  },
  {
    id: 2,
    image: '/images/cartoon.png',
    alt: 'Cartoon',
    title: 'TUI',
    description: 'Swipe to find your next holiday destination',
  },
]

const FourthImagesList: ImagesListType[] = [
  {
    id: 1,
    image: '/images/server-room.png',
    alt: 'server-room',
    title: 'LIBERTY GLOBAL ',
    description: 'Delivering complex commerce solutions',
  },
  {
    id: 2,
    image: '/images/drinks.png',
    alt: 'drinks',
    title: 'ARLA',
    description: 'Swipe to find your next holiday destination',
  },
]

const allBrands: {
  id: number
  image: string
  alt: string
}[] = [
  {
    id: 1,
    image: '/images/brands/google.svg',
    alt: 'Google',
  },
  {
    id: 2,
    image: '/images/brands/levis.svg',
    alt: 'levis',
  },
  {
    id: 3,
    image: '/images/brands/netflix.svg',
    alt: 'netflix',
  },
  {
    id: 4,
    image: '/images/brands/spotify.svg',
    alt: 'spotify',
  },
  {
    id: 5,
    image: '/images/brands/patagonia.svg',
    alt: 'patagonia',
  },
  {
    id: 6,
    image: '/images/brands/fujitso.svg',
    alt: 'fujitso',
  },
  {
    id: 7,
    image: '/images/brands/ayden.svg',
    alt: 'ayden',
  },
  {
    id: 8,
    image: '/images/brands/audi.svg',
    alt: 'audi',
  },
  {
    id: 9,
    image: '/images/brands/triumph.svg',
    alt: 'triumph',
  },
  {
    id: 10,
    image: '/images/brands/tesla.svg',
    alt: 'tesla',
  },
  {
    id: 11,
    image: '/images/brands/asos.svg',
    alt: 'asos',
  },
  {
    id: 12,
    image: '/images/brands/takeaway.svg',
    alt: 'takeaway',
  },
]

export {
  news,
  FirstImagesList,
  SecondImagesList,
  ThirdImagesList,
  FourthImagesList,
  allBrands,
}
