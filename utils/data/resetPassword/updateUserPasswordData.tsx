import { UPDATE_RESET_PASSWORD_DATA_ENDPOINT } from "@/utils/constants/endpoints";

interface IPromise {
    success : boolean
    message : string
}
interface Props {
    login : string
    key : string
    password : string
}
async function UpdateUserPassword(
    {requestData,locale} : {requestData : Props,locale : string} )
    :Promise<IPromise | null>
{
    try {
        const response = await fetch(`${UPDATE_RESET_PASSWORD_DATA_ENDPOINT}?lang=${locale}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        });
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
            return data
        } else {
            console.error('Updating password failed');
            return null
        }
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default UpdateUserPassword