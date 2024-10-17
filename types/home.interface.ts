import {IProductSimpleInterface} from "@/types/products/product.simple.interface";
import {IProductFullInterface} from "@/types/products/product.full.interface";
import {Schema} from "@/types/seo.interface";

export interface IHome {
    id: number
    title: string
    content: string
    pageMenu: IPageMenu[]
    saleProducts: IProductSimpleInterface[]
    popularProducts: IProductFullInterface[]
    schema : any
}

export interface IPageMenu {
    title: string
    link: ILink[]
}

interface ILink {
    title: string
    url: string
    target: string
}

