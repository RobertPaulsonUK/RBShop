import {FC} from "react";
import {IContactsData} from "@/types/pages/contact.page.interface";
import ContactPageNumbers from "@/components/contacts/contactPageNumbers";

const ContactsDetails:FC<{data : IContactsData}> = ({data}) => {
    return(
        <>
            <div className="text-lg text-[#F6F6F6] font-medium mb-3">
                Графік роботи:
            </div>
            <div className="flex justify-between items-center gap-2 mb-3 sm:flex-col sm:items-start">
                <div className="text-sm text-[#F6F6F6] font-normal">
                    {data.workTime}
                </div>
                <div className="text-sm text-[#F6F6F6] font-normal">
                    {data.workPlace}
                </div>
            </div>
            {data.phoneNumbers.length > 0 && <ContactPageNumbers numbers={data.phoneNumbers}/> }
        </>
    )
}
export default ContactsDetails