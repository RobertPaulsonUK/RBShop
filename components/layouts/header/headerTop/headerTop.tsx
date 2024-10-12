"use client"
import {FC, useState} from "react";
import Logo from "@/components/layouts/header/logo";
import Burger from "@/components/layouts/header/burger";
import TopMenu from "@/components/layouts/header/topMenu/menu";
import LangPanel from "@/components/layouts/header/langPanel";
import HeaderButton from "@/components/layouts/header/headerButton";
import {ITopMenu} from "@/types/header.interface";

interface IInterface {
    logoUrl : string
    siteName : string
    topMenu : ITopMenu[]
    buttonText : string
}
const HeaderTop:FC<IInterface> = ({logoUrl,siteName,topMenu,buttonText}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <>
            <div className="flex justify-between items-center py-[8px] px-6 mb-4 rounded-[48px] bg-[#F6F6F6] shadow_mod lg:relative lg:mb-2">
                {logoUrl && siteName && <Logo logoUrl={logoUrl} siteName={siteName}/>}
                <Burger toggleMenu={toggleMenu}/>
                <nav
                    className={`${menuOpen ? 'active ' : ''}header__nav flex justify-between items-center gap-[48px] lg:fixed lg:top-[140px] lg:-right-full lg:z-40 lg:bg-[#F6F6F6] lg:flex-col lg:gap-5 lg:py-5 lg:px-4 lg:rounded-bl-[20px] lg:rounded-br-[20px] lg:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] lg:opacity-0 lg:invisible duration-200`}>
                    {topMenu && <TopMenu items={topMenu}/>}
                    <LangPanel/>
                    {buttonText && <HeaderButton buttonText={buttonText}/>}
                </nav>
            </div>
        </>
    )
}
export default HeaderTop