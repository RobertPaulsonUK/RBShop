import {FC} from "react";
import HeaderBottom from "@/components/layouts/header/headerBottom";
import HeaderTop from "@/components/layouts/header/headerTop/headerTop";
import {IHeader} from "@/types/header.interface";
interface Props {
    headerData : IHeader
    locale : string
}
const Header:FC<Props> = ({headerData, locale}) => {
    const {
        logoUrl,
        siteName,
        topMenu,
        bottomMenu,
        buttonText
    } = headerData
    return (
        <>
            <header className="header fixed top-0 left-0 right-0 z-40 w-full min-h-[140px] py-4 bg-[#46B1F0] lg:pt-6 lg:pb-2">
                <div className="mx-auto max-w-[1280px] px-4">
                    <HeaderTop logoUrl={logoUrl} siteName={siteName} topMenu={topMenu} buttonText={buttonText}/>
                    <HeaderBottom bottomMenu={bottomMenu} locale={locale}/>
                </div>
            </header>

            </>
    )
}
export default Header