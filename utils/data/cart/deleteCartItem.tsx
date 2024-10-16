import {CART_ENDPOINT} from "@/utils/constants/endpoints";

interface IRequestData {
    token? : string
    cartKey? : string
    productKey : string
    locale : string
}

async function DeleteCartData(requestData: IRequestData){
    const {token,cartKey} = requestData
    let url = `${CART_ENDPOINT}item/${requestData.productKey}?lang=${requestData.locale}`
    const headers = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    } else if (!token && cartKey) {
        const urlObj = new URL(url);
        urlObj.searchParams.append('cart_key', cartKey);
        url = urlObj.toString();
    } else {
        console.error('No token and cartKey');
        return null;
    }


    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
            return {
                items : data.items,
                cross_sells : data.cross_sells,
                count : parseInt(data.item_count),
                total : parseInt(data.totals.total),
                errors : data.notices?.error
            }
        } else {
            console.error('Get cart failed');
            return null
        }
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default DeleteCartData