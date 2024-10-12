import {IProductSimpleInterface} from "@/types/products/product.simple.interface";

export interface IProductFullInterface extends IProductSimpleInterface{}


export interface IProductVariation {
    id: number
    name: string
    image: string
    regular_price: string
    sale_price: string
    stock_status: string
    stock : number
    attributes: IProductAttribute[]
    link: string
    currency : string
}
export interface IProductAttribute {
    slug : string
    name: string
    options: IOptionAttribute[]
}
export interface IOptionAttribute {
    name : string
    slug: string
}
