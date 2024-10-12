export interface IFooter {
    information: IInformation
    catalog: ICatalog
    social: ISocial
    payment: IPayment[]
    bottomMenu: BottomMenu[]
    copyright : string
}

export interface IInformation {
    title: string
    items: IInfoItem[]
}

export interface IInfoItem {
    text: string
    phone: string
}

export interface ICatalog {
    title: string
    items: ICatalogItem[]
}

export interface ICatalogItem {
    link: IFooterLink
}

export interface IFooterLink {
    title: string
    url: string
    target: string
}

export interface ISocial {
    title: string
    items: ISocialItem[]
}

export interface ISocialItem {
    link: ISocialLink
    image: IImage
}

export interface ISocialLink {
    title: string
    url: string
    target: string
}

export interface IImage {
    title: string
    url: string
}

export interface IPayment {
    image: IImage
}

export interface BottomMenu {
    title: string
    url: string
    children: any[]
}
