import {GET_ABOUT_US_DATA_ENDPOINT} from "@/utils/constants/endpoints";
import {IPageSimpleInterface} from "@/types/page.simple.interface";

async  function GetAboutUsPageData (locale : string) :Promise<IPageSimpleInterface | null>
{
    try {
        const response = await fetch(`${GET_ABOUT_US_DATA_ENDPOINT}?lang=${locale}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data) {
            return data
        } else {
            console.error('Getting about us data failed');
            return null
        }
    } catch (error) {
        console.error('Request failed:', error);
        return null
    }
}
export default GetAboutUsPageData