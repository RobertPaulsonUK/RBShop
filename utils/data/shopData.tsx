import {IShopInterface} from "@/types/shop.interface";
import {PRODUCTS_ENDPOINT} from "@/utils/constants/endpoints";

async function ShopData(params: { [key: string]: string },categorySlug? : string): Promise<IShopInterface | null> {
    try {
        const finalParams = Object.entries(params).flatMap(([key, value]) =>
            Array.isArray(value)
                ? value.map(item => [key, item])
                : [[key, value]]
        );
        const queryString = new URLSearchParams(finalParams)
        if(categorySlug) {
            queryString.append('category',categorySlug)
        }
        let res = await fetch(`${PRODUCTS_ENDPOINT}?${queryString.toString()}`)
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await res.json();
        } else {
            throw new Error('Unexpected response format');
        }
    } catch (error) {
        console.error('Error fetching shop data:', error);
        return null
    }
}
export default ShopData