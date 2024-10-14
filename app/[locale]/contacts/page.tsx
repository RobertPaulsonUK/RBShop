import {Metadata} from "next";
import GetContactPageData from "@/utils/data/contact-form/contactPageData";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import ContactsPage from "@/components/contacts/contactsPage";

export const metadata: Metadata = {
    title: "Contacts",
    description: "Fast Woocommerce shop",
};
export default async function Contacts(searchParams) {
    const {params} = searchParams
    let data = await GetContactPageData(params.locale)
    return (
        <>
            {data?.breadcrumbs && <Breadcrumbs items={data.breadcrumbs}/>}
            {data && <ContactsPage title={data.title}
                                   data={data.data}/>}
        </>
    );
}