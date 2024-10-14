import {Metadata} from "next";
import GetContactPageData from "@/utils/data/contact-form/contactPageData";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import ContactsPage from "@/components/contacts/contactsPage";

export const metadata: Metadata = {
    title: "Contacts",
    description: "Fast Woocommerce shop",
};
export default async function Contacts() {
    let data = await GetContactPageData()
    return (
        <>
            {data?.breadcrumbs && <Breadcrumbs items={data.breadcrumbs}/>}
            {data && <ContactsPage title={data.title}
                                   data={data.data}/>}
        </>
    );
}