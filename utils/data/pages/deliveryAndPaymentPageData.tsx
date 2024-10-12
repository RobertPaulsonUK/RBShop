import { GET_PAYMENT_AND_DELIVERY_DATA_ENDPOINT} from "@/utils/constants/endpoints";
import {IPageSimpleInterface} from "@/types/page.simple.interface";

async  function GetPaymentAndDeliveryPageData () :Promise<IPageSimpleInterface | null>
{
    try {
        const response = await fetch(GET_PAYMENT_AND_DELIVERY_DATA_ENDPOINT, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
            return data
        } else {
            console.error('Getting payment and delivery data failed');
            return null
        }
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default GetPaymentAndDeliveryPageData