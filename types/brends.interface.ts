export type BrandsType = IBrandInterface[]

export interface IBrandInterface {
    id: number
    title: string
    slug: string
    image: IBrandImage
}

interface IBrandImage {
    title: string
    url: string
}