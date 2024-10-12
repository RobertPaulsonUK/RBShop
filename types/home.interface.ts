import {IProductSimpleInterface} from "@/types/products/product.simple.interface";
import {IProductFullInterface} from "@/types/products/product.full.interface";

export interface IHome {
    id: number
    title: string
    content: string
    pageMenu: IPageMenu[]
    saleProducts: IProductSimpleInterface[]
    popularProducts: IProductFullInterface[]
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

