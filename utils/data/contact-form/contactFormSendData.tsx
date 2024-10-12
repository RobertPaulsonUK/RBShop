import {CONTACT_FORM_ENDPOINT, GET_RESET_PASSWORD_EMAIL_ENDPOINT} from "@/utils/constants/endpoints";

interface IRequestData {
    name : string
    email : string
    second_name : string
    message? : string
}
interface IPromise {
    success : boolean
    message : string
}
async  function SendContactFormData
(name : string, email : string, second_name : string,   message? : string)
    :Promise<IPromise | null>
{
    const requestData: IRequestData = {
        name,
        email,
        second_name,
        message,
    }
    try {
        const response = await fetch(CONTACT_FORM_ENDPOINT, {
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
            console.error('Sending email failed');
            return null
        }
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default SendContactFormData