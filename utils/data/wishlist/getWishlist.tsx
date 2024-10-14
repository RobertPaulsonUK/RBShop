import { WISHLIST_ENDPOINT} from "@/utils/constants/endpoints";
import Cookies from 'js-cookie';
import {AUTH_TOKEN_NAME} from "@/utils/constants/constants";

async function GetWishlist(locale : string){
    const token = Cookies.get(AUTH_TOKEN_NAME)


    const headers = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    } else {
        console.error('No token');
        return null;
    }


    try {
        const response = await fetch(`${WISHLIST_ENDPOINT}?lang=${locale}`, {
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
            return data
        } else {
            console.error('Get wishlist failed');
            return null
        }
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default GetWishlist