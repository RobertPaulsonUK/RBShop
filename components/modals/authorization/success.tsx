import {FC} from "react";
import Link from "next/link";
import ModalClose from "@/components/icons/modalClose";
import {useTranslations} from "next-intl";

const SuccessRegistration:FC<{closeHandler : () => void }> = ({closeHandler}) => {
    const t = useTranslations('AuthorisationText')
    return(
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 bg-[hsla(0,0%,0%,0.443)] duration-200">
            <div className="max-w-[372px] mx-auto mt-8">
                <div className="bg-[#F6F6F6] px-4 pb-4 pt-16 rounded-3xl relative">

                    <ModalClose clickHandler={closeHandler}/>
                        <div
                            className="text-lg font-medium text-[#333E48] mb-5 pb-5 text-center border-b border-solid border-[#46B1F0]">
                            {t('SuccessTitle')}
                        </div>
                        <Link
                            className={"max-w-fit mx-auto py-[10px] px-5 block rounded-[40px] bg-[#46B1F0] border-none cursor-pointer text-[#F6F6F6] text-sm font-medium duration-200"}
                            href={'/shop'}>
                            {t('SuccessButtonText')}
                        </Link>
                </div>
            </div>
        </div>
    )
}
export default SuccessRegistration