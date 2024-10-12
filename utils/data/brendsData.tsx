import {BRANDS_ENDPOINT} from "@/utils/constants/endpoints";
import {BrandsType} from "@/types/brends.interface";

async function BrandsData(): Promise<BrandsType | null> {
    try {
        const res = await fetch(BRANDS_ENDPOINT);

        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await res.json();
        } else {
            throw new Error('Unexpected response format');
        }
    } catch (error) {
        console.error('Error fetching brands data:', error);
        return null;
    }
}
export default BrandsData