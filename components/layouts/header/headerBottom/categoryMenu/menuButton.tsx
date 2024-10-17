"use client"
import {FC} from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

interface IInterface {
    toggleMenu : () => void
}
const MenuButton:FC<IInterface> = ({toggleMenu}) => {
    const t = useTranslations('Header');
    return(
        <>
            <button
                className="btn__menu py-1 px-5 flex justify-center items-center gap-1 rounded-[48px] border-2 border-solid border-[#F6F6F6] group md:p-2"
                onClick={toggleMenu}
            >
                <Image
                    className={"transition-transform duration-300 ease-in-out group-hover:transform group-hover:scale-x-[-1]"}
                    src={"/images/header/menu-icon.svg"}
                    alt={"menu-icon"}
                    width={25}
                    height={25}
                />
                <div className="text-lg font-medium text-[#F6F6F6] whitespace-nowrap md:hidden">
                    {t('CategoryMenuTitle')}
                </div>
            </button>
        </>
    )
}
export default MenuButton