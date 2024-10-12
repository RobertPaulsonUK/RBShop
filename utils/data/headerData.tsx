import {HEADER_ENDPOINT} from "@/utils/constants/endpoints";
import {IHeader} from "@/types/header.interface";

async function HeaderData(): Promise<IHeader | null> {
    try {
        const res = await fetch(HEADER_ENDPOINT);

        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await res.json();
        } else {
            throw new Error('Unexpected response format');
        }
    } catch (error) {
        console.error('Error fetching header/footer data:', error);
        return null;
    }
}
export default HeaderData