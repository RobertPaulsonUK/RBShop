import {HOME_ENDPOINT} from "@/utils/constants/endpoints";
import {IHome} from "@/types/home.interface";

async function HomeData(locale : string):Promise <IHome | null > {
    try {
        const response =  await fetch(`${HOME_ENDPOINT}?lang=${locale}`)
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            throw new Error('Неожиданный формат ответа');
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return null;
    }
}
export default HomeData