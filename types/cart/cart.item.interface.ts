export interface ICartItemInterface {
    item_key: string
    id: number
    name: string
    title: string
    price: string
    quantity: Quantity
    totals: Totals
    slug: string
    cart_item_data: any[]
    featured_image: string
    permalink : string
    stock_status : {
        status: string
        stock_quantity : number | null
    }
}

interface Quantity {
    value: number
    min_purchase: number
    max_purchase: number
}

interface Totals {
    subtotal: string
    subtotal_tax: number
    total: number
    tax: number
}