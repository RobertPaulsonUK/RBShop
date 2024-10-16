import {CART_ENDPOINT} from "@/utils/constants/endpoints";

interface IRequestData {
    token? : string
    cartKey? : string
    productId : number
    quantity : number
    locale : string
}

async function AddTocArt(requestData: IRequestData){
    const {token,cartKey} = requestData
    const requestBody = {
        id : requestData.productId.toString(),
        quantity : requestData.quantity.toString()
    }
    let url = `${CART_ENDPOINT}add-item?lang=${requestData.locale}`
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
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody),
        });
        const data = await response.json();
        if (!response.ok) {
            return {
                success : false,
                res : data.message
            }
        }

        if (data) {
            return {
                success : true,
                res : {
                    items : data.items,
                    cross_sells : data.cross_sells,
                    count : parseInt(data.item_count),
                    total : parseInt(data.totals.total),
                    errors : data.notices?.error
                }
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
export default AddTocArt