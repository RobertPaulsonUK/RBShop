import {FC} from "react";
import ScrollTopButton from "@/components/layouts/buttons/scrollTopButton";
import FormInitButton from "@/components/layouts/buttons/formInitButton";

const ButtonsLayout:FC = () => {

    return(
        <div className="flex flex-col gap-y-2 fixed z-20 right-2 bottom-20 sm:bottom-[134px]">
            <ScrollTopButton/>
            <FormInitButton/>
        </div>
    )
}
export default ButtonsLayout