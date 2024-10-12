"use client"
import {FC,useState} from "react";
import GridButton from "@/components/shop/rowControls/gridButton";
import RowButton from "@/components/shop/rowControls/rowButton";

export interface IRowControls {
    isGrid : boolean
    changeGridToRow : () => void
}
const RowControls:FC = () => {
    const [isGrid,setIsGrid] = useState(true)
    const setGridActive = () => {
        setIsGrid(true)
        toggleProductsWrapperClass()
    }
    const setRowActive = () => {
        setIsGrid(false)
        toggleProductsWrapperClass()
    }
    const toggleProductsWrapperClass = () => {
        let wrapper = document.querySelector('.goods__items')
        if(wrapper) {
            wrapper.classList.toggle('active')
        }

    }
    return(
        <>
            <div className="absolute -top-[80px] right-0 flex items-center justify-center gap-4">
                <GridButton isGrid={isGrid} changeGridToRow={setGridActive}/>
                <RowButton isGrid={isGrid} changeGridToRow={setRowActive}/>
            </div>
        </>
    )
}
export default RowControls