import {CONFIRM_EMAIL_ENDPOINT} from "@/utils/constants/endpoints";

interface IPromise {
    success : boolean
    message : string
}
async function ConfirmEmailData(token : string | undefined,hash : string | null, locale : string):Promise<IPromise | null>{
    const headers = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    } else {
        console.error('no token provided')
        return null
    }
    if(!hash) {
        console.error('No token email hash provided')
        return null
    }

    try {
        const response = await fetch(`${CONFIRM_EMAIL_ENDPOINT}?lang=${locale}&emailkey=${hash}`, {
            method: 'GET',
            headers: {
                ...headers,
            }
        });
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
            return data
        } else {
            console.error('Confirm email failed');
            return null
        }
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default ConfirmEmailData