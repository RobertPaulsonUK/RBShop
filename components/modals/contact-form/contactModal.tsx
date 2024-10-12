"use client"
import {FC} from "react";
import ContactForm from "@/components/modals/contact-form/contactForm";
import {useModals} from "@/hooks/ModalsHook";
import ModalClose from "@/components/icons/modalClose";

const ContactModal:FC = () => {
    const {modalsState:{isContactFormOpen},modalsHandlers: {contactFormHandler}} = useModals()

    return(
        <div
            className={`modal fixed top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 invisible z-50 bg-[hsla(0,0%,0%,0.443)] duration-200 ${isContactFormOpen ? 'active' : ''}`}>
            <div className="max-w-[660px] mx-auto mt-8 lg:max-w-[95%]">
                <div className="bg-[#F6F6F6] p-6 rounded-3xl relative sm:p-4">
                    <ModalClose clickHandler={contactFormHandler}/>
                    <div className="text-[#46B1F0] text-[32px] leading-9 font-medium mb-9 sm:mb-2">Зв’яжіться з нами</div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}
export default ContactModal