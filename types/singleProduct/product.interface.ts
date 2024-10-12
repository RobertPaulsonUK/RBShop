import {IBreadcrumb} from "@/types/shop.interface";
import {IProductFullInterface} from "@/types/products/product.full.interface";

export interface ISingleProductInterface {
    breadcrumbs : IBreadcrumb[]
    product : IProductInterface
    paymentMethods: IMethodInterface
    shippingMethods: IMethodInterface
    relatedProducts: IProductFullInterface[]
}
export interface IProductInterface extends IProductFullInterface{
    description : string
    content : string
    gallery : string[]
}
export interface IMethodInterface {
    title: string
    methods: [
        title: string,
        url: string
    ]
}
