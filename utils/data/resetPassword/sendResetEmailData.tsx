import {GET_RESET_PASSWORD_EMAIL_ENDPOINT} from "@/utils/constants/endpoints";

interface IPromise {
    success : boolean
    message : string
}
async function SendResetEmail(
    email : string,
    locale : string
)
    :Promise<IPromise | null>
{
    try {
        const response = await fetch(`${GET_RESET_PASSWORD_EMAIL_ENDPOINT}?lang=${locale}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({reset_email: email})
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
export default SendResetEmail