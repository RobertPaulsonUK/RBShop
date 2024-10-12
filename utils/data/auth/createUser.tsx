import {CREATE_USER_ENDPOINT} from "@/utils/constants/endpoints";

interface IRequestData {
    login : string
    password : string
}

async function CreateUser(requestData: IRequestData){
    try {
        const response = await fetch(CREATE_USER_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.token) {
            return data.token
        } else {
            console.error('Authentication failed');
            return null
        }
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default CreateUser