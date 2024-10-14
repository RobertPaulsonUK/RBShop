"use client"
import {FC, useEffect, useState} from "react";
import ToggleListhandler from "@/components/cabinet/tabs/tabsHandlers/toggleListhandler";
import LogoutButton from "@/components/cabinet/tabs/tabsHandlers/logoutButton";
import LogoutModal from "@/components/modals/authorization/logout";
import {useTranslations} from "next-intl";
import CabinetTabButton from "@/components/cabinet/tabs/tabsHandlers/cabinetTabButton";

const AsideActions:FC<{activeIndex : number,clickHandler : (index : number) => void}> = ({activeIndex,clickHandler}) => {
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const [isLogout,setIsLogout] = useState<boolean>(false)
    useEffect(() => {
        setIsOpen(false)
    }, []);
    useEffect(() => {
        if(isLogout) {
            document.documentElement.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
        }
    }, [isLogout]);
    const toggleButtonHandler = () => {
        setIsOpen(!isOpen)
    }
    const toggleLogoutModal = () => {
        setIsLogout(!isLogout)
    }
    const t = useTranslations('CabinetTabs')
    return(
            <>
                <div
                    className="sm:max-w-[192px] sm:py-[18px] sm:px-2 sm:rounded-b-[20px] sm:mt-6 sm:shadow_mod sm:md:max-w-full">
                    <ToggleListhandler clickHandler={toggleButtonHandler} isOpen={isOpen}/>
                    <ul className={`cabinet__list max-w-[192px] py-[18px] px-2 rounded-b-[20px] mt-6 shadow_mod md:max-w-full sm:p-0 sm:rounded-none sm:m-0 sm:!shadow-none sm:opacity-0 sm:invisible sm:h-0 ${isOpen ? 'active' : ''}`}>
                        <CabinetTabButton activeIndex={activeIndex}
                                          clickHandler={clickHandler}
                                          index={0}
                                          text={t('ActiveOrders')}/>
                        <CabinetTabButton activeIndex={activeIndex}
                                          clickHandler={clickHandler}
                                          index={1}
                                          text={t('FinishedOrders')}/>
                        <CabinetTabButton activeIndex={activeIndex}
                                          clickHandler={clickHandler}
                                          index={2}
                                          text={t('EditProfile')}/>
                        <CabinetTabButton activeIndex={activeIndex}
                                          clickHandler={clickHandler}
                                          index={3}
                                          text={t('Wishlist')}/>
                        <LogoutButton clickHandler={toggleLogoutModal} text={t('ExitFromProfile')}/>
                    </ul>
                </div>
                {isLogout && <LogoutModal closeModalHandler={toggleLogoutModal}></LogoutModal>}
            </>
    )
}
export default AsideActions