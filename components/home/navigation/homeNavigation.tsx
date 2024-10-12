"use client"
import {FC, useEffect} from "react";
import HomeNavItem from "@/components/home/navigation/homeNavItem";
import {useModals} from "@/hooks/ModalsHook";
import {IPageMenu} from "@/types/home.interface";

const HomeNavigation:FC<{navItems : IPageMenu[]}> = ({navItems}) => {
    const {
        modalsState : {isMenuOpen},
        modalsHandlers : {setMenuOpen}
        } = useModals()

    useEffect(() => {
        if(setMenuOpen) {
            setMenuOpen()
        }
    }, []);

    return(
        <>
            <section className="mt-[202px] sm:mt-[160px]">
                <div className="container">
                    <div
                        className={`${!isMenuOpen ? 'active' : ''} intro__wrapper grid grid-cols-3 gap-x-4 gap-y-5 ml-[312px] duration-500 lg:ml-[250px] md:ml-[0] sm:grid-cols-2 sm:gap-3`}>
                        {navItems.length > 0 && navItems.map(
                            (item,index) =>
                                ( <HomeNavItem key={index} title={item.title} link={item.link}/> )
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeNavigation