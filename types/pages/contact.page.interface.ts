import {IBreadcrumb} from "@/types/shop.interface";

export interface IContactsPageInterface {
    id: number
    title: string
    breadcrumbs: IBreadcrumb[]
    data: IContactsData
}
export interface IContactsData {
    workTime: string
    workPlace: string
    phoneNumbers: PhoneNumber[]
}

interface PhoneNumber {
    number: string
}