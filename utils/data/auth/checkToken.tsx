import { GET_USER_TOKEN} from "@/utils/constants/endpoints";

async function CheckToken(token : string){
    try {
        const response = await fetch(`${GET_USER_TOKEN}/validate`, {
            method: 'POST',
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        return result.data.status === 200
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default CheckToken