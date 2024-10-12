import {FC} from "react";
import {IContactsData} from "@/types/pages/contact.page.interface";
import ContactsDetails from "@/components/contacts/contactsDetails";
import ContactPageForm from "@/components/contacts/contactPageForm";


interface Props {
    title : string
    data : IContactsData
}
const ContactsPage:FC<Props> = ({title,data}) => {
    return(
        <section>
            <div className="container">
                <div className="mb-[100px] sm:mb-6">
                    <div
                        className="text-[#46B1F0] text-[40px] leading-[48px] font-semibold mb-[40px] sm:text-[32px] sm:leading-[34px] sm:mb-6">
                        {title}
                    </div>
                    <ContactPageForm pageData={data}/>
                </div>
            </div>
        </section>
    )
}
export default ContactsPage