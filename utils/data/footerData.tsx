import {FOOTER_ENDPOINT} from "@/utils/constants/endpoints";
import {IFooter} from "@/types/footer.interface";

async function FooterData({locale} : {locale : string}): Promise<IFooter | null> {
    try {
        const res = await fetch(`${FOOTER_ENDPOINT}?lang=${locale}`);
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await res.json();
        } else {
            throw new Error('Unexpected response format');
        }
    } catch (error) {
        console.error('Error fetching footer data:', error);
        return null;
    }

}
export default FooterData