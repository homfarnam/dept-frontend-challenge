type ImagesListType = {
  id: number
  image: string
  alt: string
  title: string
  description: string
}

type NavLinksType = {
  id: number
  title: string
  link: string
}

interface Rating {
  rate: number
  count: number
}

interface ProductsType {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export { ImagesListType, NavLinksType, ProductsType }
