import {IProductFullInterface} from "@/types/products/product.full.interface";

export interface IShopInterface {
    title : string
    breadcrumbs : IBreadcrumb[]
    products : IProductFullInterface[]
    pagination : IPagination
    schema : any
}
export interface IBreadcrumb {
    id : number
    title: string
    url: string
}
export interface IPagination {
    per_page: number
    total: number
    current_page: number
    max_pages: number
}