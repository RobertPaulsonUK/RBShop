import { GET_USER_DATA_ENDPOINT} from "@/utils/constants/endpoints";
import { IUserDataInterface} from "@/types/user/user.data.interface";
import {InterfaceFormData} from "@/components/cabinet/profile/profileForm";



async function UpdateUserData(
    token : string | undefined,
    requestData : InterfaceFormData
):Promise<{userData : IUserDataInterface,message : string} | null>
{
    const formData = new FormData();
    formData.append('display_name', requestData.display_name)
    formData.append('first_name', requestData.first_name)
    formData.append('last_name', requestData.last_name)
    formData.append('user_email', requestData.user_email)
    formData.append('billing_phone', requestData.billing_phone)
    formData.append('billing_city', requestData.billing_city)
    formData.append('billing_address_1', requestData.billing_address_1)
    if (requestData.update_avatar && requestData.update_avatar.length > 0) {
        formData.append('update_avatar', requestData.update_avatar[0])
    }
    const headers = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    } else {
        console.error('no token provided')
        return null
    }

    try {
        const response = await fetch(GET_USER_DATA_ENDPOINT, {
            method: 'POST',
            headers: {
                ...headers,
            },
            body: formData,
        });
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
            return {
                userData : data.userData,
                message : data.message
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
export default UpdateUserData