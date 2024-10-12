import {FC} from "react";
import ModalClose from "@/components/icons/modalClose";
import SocialRegistration from "@/components/modals/authorization/socialRegistration";
import Button from "@/components/ui/button";

interface IErrorInterface {
    closeHandler : () => void
    registrationHandler : () => void
    loginHandler : () => void
}
const ErrorAuth:FC<IErrorInterface> = ({closeHandler,registrationHandler,loginHandler}) => {
    return(
        <div
            className="modal__sign fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 bg-[hsla(0,0%,0%,0.443)] duration-200">
            <div className="max-w-[372px] mx-auto mt-8">
                <div className="bg-[#F6F6F6] px-4 pb-4 pt-16 rounded-3xl relative">
                    <ModalClose clickHandler={closeHandler}/>
                        <div className="mb-3 pb-2 border-b border-solid border-[#46B1F0]">
                            <div className="text-base text-center font-medium text-[#F91600] mb-7">
                                Невірний логін або пароль
                            </div>
                            <Button classname={"mx-auto py-[10px] px-5 block rounded-[40px] bg-[#46B1F0] border-none cursor-pointer text-[#F6F6F6] text-sm font-medium hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200"}
                                    text={"Спробувати знову"}
                                    clickHandler={loginHandler}/>
                        </div>
                        <SocialRegistration/>
                        <div className="mt-2 mb-2 pt-2 pb-2 text-sm font-normal text-[#AEAEAE] text-center">
                            Новий користувач?</div>
                       <Button classname={"w-max py-[10px] px-[24px] mx-auto block text-sm font-medium text-[#333E48] rounded-[48px] border-2 border-solid border-[#46B1F0] transition-all duration-200 hover:text-white hover:bg-[#46B1F0]"}
                               text={"Зареєструватись"}
                               clickHandler={registrationHandler}/>

                </div>
            </div>
        </div>
    )
}
export default ErrorAuth