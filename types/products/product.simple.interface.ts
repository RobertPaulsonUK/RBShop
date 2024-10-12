import {IProductAttribute, IProductVariation} from "@/types/products/product.full.interface";

export interface IProductSimpleInterface {
    id: number
    type: string
    name: string
    image: string
    slug: string
    link: string
    regularPrice: number | string
    isOnSale: boolean
    salePrice: number
    stockStatus: string
    stock: boolean | number
    currency : string
    newProduct : boolean
    attributes : IProductAttribute[] | []
    variations : IProductVariation[] | []
}