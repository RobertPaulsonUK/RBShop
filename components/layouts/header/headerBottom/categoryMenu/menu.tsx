"use client"
import {FC, useState,useEffect} from "react";
import {IBottomMenu} from "@/types/header.interface";
import MenuButton from "@/components/layouts/header/headerBottom/categoryMenu/menuButton";
import CategoryMenuItem from "@/components/layouts/header/headerBottom/categoryMenu/menuItem";
import {useModals} from "@/hooks/ModalsHook";

interface IMenuItems {
    menuItems : IBottomMenu[]
}
const BottomMenu:FC<IMenuItems> = ({menuItems}) => {
    const {
        modalsState : {isMenuOpen},
        modalsHandlers : {menuHandler}
        } = useModals()

    return(
        <>
            <div className="relative min-w-[210px] md:order-2 md:min-w-max">
                <MenuButton toggleMenu={menuHandler}/>
                <nav className={`${isMenuOpen ? '' : 'active '}header__menu absolute top-[57px] -left-2 right-0 z-10 py-[15px] px-4 bg-[#F6F6F6] rounded-b-[20px] shadow_mod md:w-[200px] md:-right-4 md:left-auto`}>
                <ul>
                {menuItems.map((item,index) => (
                    <CategoryMenuItem key={index} item={item}/>
                ))}
                </ul>
                </nav>
            </div>
        </>
    )
}
export default BottomMenu