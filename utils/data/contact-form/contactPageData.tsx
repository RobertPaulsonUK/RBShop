import { GET_CONTACT_PAGE_DATA_ENDPOINT} from "@/utils/constants/endpoints";
import {IContactsPageInterface} from "@/types/pages/contact.page.interface";

async  function GetContactPageData (locale : string) :Promise<IContactsPageInterface | null>
{
    try {
        const response = await fetch(`${GET_CONTACT_PAGE_DATA_ENDPOINT}?lang=${locale}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
            return data
        } else {
            console.error('Getting contacts data failed');
            return null
        }
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default GetContactPageData