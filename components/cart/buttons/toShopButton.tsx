import {FC} from "react";
import Button from "@/components/ui/button";
import {useModals} from "@/hooks/ModalsHook";
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

const ToShopButton:FC = () => {
    const {modalsHandlers : {cartHandler}} =  useModals()
    const router = useRouter();
    const clickHandler = () => {
        cartHandler(false)
        router.push('/shop')
    }
    const t = useTranslations('Cart')
    return(
        <>
            <Button classname={"py-[10px] px-[8px] text-sm rounded-[48px] border-2 border-solid border-[#46B1F0] transition-all duration-200 hover:text-white hover:bg-[#46B1F0] sm:w-full"}
                    text={t('ToProductsText')}
                    clickHandler={clickHandler}/>
        </>
    )
}
export default ToShopButton