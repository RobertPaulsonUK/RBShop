"use client"
import {FC, useEffect, useState} from "react";
import {ICabinetInterface, IUserDataInterface} from "@/types/user/user.data.interface";
import CabinetTitle from "@/components/cabinet/cabinetTitle";
import ProfileMini from "@/components/cabinet/profileMini";
import AsideActions from "@/components/cabinet/asideActions";
import ActiveOrders from "@/components/cabinet/tabs/tabsContent/activeOrders";
import CompletedOrders from "@/components/cabinet/tabs/tabsContent/comletedOrders";
import EditProfile from "@/components/cabinet/tabs/tabsContent/editProfile";
import WishlistItems from "@/components/cabinet/tabs/tabsContent/wishlistItems";



const CabinetLayout:FC<{data : ICabinetInterface,defaultTab : number}> = ({data,defaultTab}) => {
    const [userData,setUserData] = useState<IUserDataInterface>(data.userData)
    const [activeTab,setActiveTab] = useState<number>(defaultTab)
    useEffect(() => {
        setUserData(data.userData);
        setActiveTab(defaultTab);
    }, []);

    const updateUserDataHandler = (data : IUserDataInterface) => {
        setUserData(data)
    }
    const updateActiveTab = (index : number) => {
        setActiveTab(index)
    }

    return(
        <section>
            <div className="container">
                <div className="mb-[100px] sm:mb-6">
                    <CabinetTitle/>

                    <div className="flex items-stretch justify-start gap-[150px] xl:gap-[50px] lg:gap-[30px] md:flex-col">
                        <div className="w-[300px] md:w-full">
                            {userData && <ProfileMini userData={userData} imageClickHandler={updateActiveTab}/>}
                            <AsideActions activeIndex={activeTab} clickHandler={updateActiveTab}/>
                        </div>
                        <div className="w-full">
                            {data.activeOrders && <ActiveOrders orders={data.activeOrders} activeIndex={activeTab}/>}
                            {data.completedOrders && <CompletedOrders orders={data.completedOrders} activeIndex={activeTab}/>}
                            {userData && <EditProfile userData={userData} updateHandler={updateUserDataHandler} activeIndex={activeTab}/>}
                            <WishlistItems activeIndex={activeTab}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CabinetLayout

