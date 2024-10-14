import { GET_USER_DATA_ENDPOINT} from "@/utils/constants/endpoints";
import {ICabinetInterface} from "@/types/user/user.data.interface";


async function GetUserData(token : string | undefined,locale : string):Promise<ICabinetInterface | null>{
    const headers = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    } else {
        console.error('no token provided')
        return null
    }


    try {
        const response = await fetch(`${GET_USER_DATA_ENDPOINT}?lang=${locale}`, {
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
                breadcrumbs : data.breadcrumbs,
                wishlist : data.wishlist,
                userData : data.userData,
                activeOrders : data.activeOrders,
                completedOrders : data.completedOrders
            }
        } else {
            console.error('Get user data failed');
            return null
        }
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default GetUserData