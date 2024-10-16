import { GET_USER_TOKEN} from "@/utils/constants/endpoints";

interface IRequestData {
    username : string
    password : string
}

async function CreateToken(requestData: IRequestData,locale : string){
    try {
        const response = await fetch(`${GET_USER_TOKEN}?lang=${locale}`, {
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
export default CreateToken