import {CREATE_USER_ENDPOINT} from "@/utils/constants/endpoints";

interface IRequestData {
    login : string
    password : string
}

async function CreateUser(requestData: IRequestData,locale : string){
    try {
        const response = await fetch(`${CREATE_USER_ENDPOINT}?lang=${locale}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });
        const data = await response.json();
        if (!response.ok) {
            return {
                success : false,
                message : data.message
            }
        }
        if (data.token) {
            return {
                success : true,
                token : data.token
            }
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