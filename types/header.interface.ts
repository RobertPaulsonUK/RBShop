export interface IHeader {
    logoUrl: string
    siteName: string
    topMenu: ITopMenu[]
    bottomMenu: IBottomMenu[]
    buttonText: string
}

export interface ITopMenu {
    title: string
    url: string
    children: any[]
}

export interface IBottomMenu {
    title: string
    url: string
    children: any[]
}