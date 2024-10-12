import {FC} from "react";
import {ITopMenu} from "@/types/header.interface";
import menuItem from "@/components/layouts/header/topMenu/menuItem";
import MenuItem from "@/components/layouts/header/topMenu/menuItem";

interface IMenu {
    items : ITopMenu[]
}
const TopMenu:FC<IMenu> = ({items}) => {
    return(
        <>
            <ul className="flex justify-center items-center gap-12 lg:flex-col lg:gap-3 lg:items-end">
                {items.map((item,index) => (
                    <MenuItem key={index} item={item}/>
                ))}
            </ul>
        </>
    )
}
export default TopMenu