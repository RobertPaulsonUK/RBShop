import { SINGLE_PRODUCT_ENDPOINT} from "@/utils/constants/endpoints";
import {ISingleProductInterface} from "@/types/singleProduct/product.interface";

async function ProductData(slug : string): Promise<ISingleProductInterface | null> {
    try {
        let res = await fetch(`${SINGLE_PRODUCT_ENDPOINT}${slug}`)
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await res.json();
        } else {
            throw new Error('Unexpected response format');
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
        return null
    }
}
export default ProductData