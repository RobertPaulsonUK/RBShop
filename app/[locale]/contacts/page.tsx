import {Metadata, ResolvingMetadata} from "next";
import GetContactPageData from "@/utils/data/contact-form/contactPageData";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import ContactsPage from "@/components/contacts/contactsPage";
import {GET_METADATA_ENDPOINT} from "@/utils/constants/endpoints";
import {useMetadata} from "@/hooks/MetadataHook";

export async function generateMetadata(
    { params },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await fetch(`${GET_METADATA_ENDPOINT}/contacts?lang=${params.locale}`).then((res) => res.json())
    return useMetadata(data?.data)
}
export default async function Contacts(searchParams) {
    const {params} = searchParams
    let data = await GetContactPageData(params.locale)
    return (
        <>
            {data?.schema &&
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
                    />
                </>}
            {data?.breadcrumbs && <Breadcrumbs items={data.breadcrumbs}/>}
            {data && <ContactsPage title={data.title}
                                   data={data.data}/>}
        </>
    );
}