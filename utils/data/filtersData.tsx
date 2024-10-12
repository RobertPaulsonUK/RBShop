import {FILTERS_ENDPOINT} from "@/utils/constants/endpoints";
import {IFilters} from "@/types/filters/filters.interface";

async function FiltersData(categorySlug? : string): Promise<IFilters | null> {
    try {
        let res = await fetch(`${FILTERS_ENDPOINT}${categorySlug ? '?category=' + categorySlug : ''}`)
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await res.json();
        } else {
            throw new Error('Unexpected response format');
        }
    } catch (error) {
        console.error('Error fetching filters data:', error);
        return null
    }
}
export default FiltersData