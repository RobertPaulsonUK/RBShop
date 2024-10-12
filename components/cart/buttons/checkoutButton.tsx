import {FC} from "react";
import Link from "next/link";
import {useModals} from "@/hooks/ModalsHook";
import {useRouter} from "next/navigation";

const CheckoutButton:FC = () => {
    const {modalsHandlers : {cartHandler}} =  useModals()
    const router = useRouter();
    const clickHandler = () => {
        cartHandler(false)
        router.push('/')
    }
    return(
        <>

            <Link
                onClick={(e) => {
                    e.preventDefault()
                    clickHandler()
                }}
                href={'/'}
                className={"mx-auto py-[10px] px-5 block rounded-[40px] bg-[#46B1F0] border-none cursor-pointer text-[#F6F6F6] text-sm font-medium hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 sm:w-full"}>
                Оформити замовлення
            </Link>
        </>
    )
}
export default CheckoutButton