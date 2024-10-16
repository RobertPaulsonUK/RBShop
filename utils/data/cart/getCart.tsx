import {CART_ENDPOINT} from "@/utils/constants/endpoints";

interface IRequestData {
    locale : string
    token? : string
    cartKey? : string
}

async function GetCart(requestData: IRequestData){
    const {token,cartKey} = requestData
    let url = `${CART_ENDPOINT}?lang=${requestData.locale}`
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
            method: 'GET',
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
export default GetCart