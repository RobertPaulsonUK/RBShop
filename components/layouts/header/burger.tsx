import {FC} from "react";

interface IBurger {
    toggleMenu: () => void
}
const Burger:FC<IBurger> = ({toggleMenu}) => {
    return (
        <>
            <div id="header__burger" className="hidden lg:block cursor-pointer p-2" onClick={toggleMenu}>
                <div className="w-9 h-0.5 bg-[#46B1F0] mb-1.5"></div>
                <div className="w-9 h-0.5 bg-[#46B1F0] mb-1.5"></div>
                <div className="w-9 h-0.5 bg-[#46B1F0]"></div>
            </div>
        </>
    )
}
export default Burger