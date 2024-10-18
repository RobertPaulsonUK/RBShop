import {IBreadcrumb} from "@/types/shop.interface";

export interface ICabinetInterface {
    breadcrumbs : IBreadcrumb[]
    userData: IUserDataInterface
    activeOrders: IOrderInterface[] | []
    completedOrders: IOrderInterface[] | []
    schema : any
}

export interface IUserDataInterface {
    displayName: string
    firstName: string
    lastName: string
    userEmail: string
    billingPhone: string
    billingAddress : string
    billingCity : string
    userAvatar: string
}

export interface IOrderInterface {
    id: number
    date: string
    total: string
    status: string
    items: IOrderItem[]
}

export interface IOrderItem {
    name: string
    image : string
    quantity: number
    total: string
    link: string
    currency : string
}
