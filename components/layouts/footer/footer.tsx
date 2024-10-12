import {FC} from "react";
import {IFooter} from "@/types/footer.interface";
import Information from "@/components/layouts/footer/information/information";
import Catalog from "@/components/layouts/footer/catalog/catalog";
import Social from "@/components/layouts/footer/social/social";
import Copyright from "@/components/layouts/footer/copyright";
import BottomMenu from "@/components/layouts/footer/bottomMenu/bottomMenu";
import CreateByLink from "@/components/layouts/footer/createByLink";
import Payment from "@/components/layouts/footer/payment/payment";


interface IInterface {
    footerData : IFooter
}
const Footer:FC<IInterface> = ({footerData}) => {
    const {
        information,catalog,social,payment,bottomMenu,copyright
    } = footerData
    return (
        <>
            <footer className="footer border-t border-solid border-[#46B1F0]">
                <div className="container">
                    <div className="grid grid-cols-[2fr_2fr_1fr] pt-4 pb-12 lg:grid-cols-[1fr_1fr_120px] md:grid-cols-2 md:py-4">
                        {information && <Information information={footerData.information} social={footerData.social}/>}
                        {catalog && <Catalog catalog={catalog}/>}
                        {social && <Social socialData={social}/>}
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[100px] bg-[#46B1F0] py-3 px-3 xl:gap-[20px]">
                    <div
                        className="flex items-center justify-between gap-[100px] lg:flex-col lg:justify-center lg:items-center lg:gap-[8px]">
                        {copyright && <Copyright copyright={copyright}/>}
                        { bottomMenu && <BottomMenu bottomMenu={bottomMenu}/> }
                    </div>
                    <CreateByLink desktop={true}/>
                    {payment && <Payment items={payment}/>}
                </div>
                <CreateByLink desktop={false}/>
            </footer>
        </>
    )
}
export default Footer