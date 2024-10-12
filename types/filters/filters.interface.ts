export interface IFilters {
    attributes: IFilterAttribute[]
    prices: IFilterPrices
    categories: IFilterCategory[]
}

export interface IFilterAttribute {
    name: string
    slug: string
    options: any
}


export interface IFilterPrices {
    minPrice: number
    maxPrice: number
}

export interface IFilterCategory {
    id: number
    name: string
    url: string
}
