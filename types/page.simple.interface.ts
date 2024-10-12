import {IBreadcrumb} from "@/types/shop.interface";

export interface IPageSimpleInterface {
    title : string
    id : string
    breadcrumbs : IBreadcrumb[]
    content : string
}