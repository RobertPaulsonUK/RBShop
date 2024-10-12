"use client"
import {FC} from "react";

const ToggleListHandler:FC<{clickHandler : () => void,isOpen : boolean}> = ({clickHandler,isOpen}) => {
    return(
        <div className={`cabinet_mob_btn hidden justify-between items-center gap-[10px] py-2 cursor-pointer sm:flex-row-reverse sm:flex ${isOpen ? 'active' : ''}`}
            onClick={clickHandler}
        >
            <button
                className="text-lg text-[#46B1F0] duration-200 group-hover:text-[#46B1F0] md:order-1 md:text-right">
                Дії в профілі
            </button>
            <svg className="min-w-[22px] h-[22px] md:rotate-180 sm:rotate-0" viewBox="0 0 18 16"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="group-hover:fill-[#47B1F0] duration-200 md:fill-[#47B1F0]"
                      d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9H17V7L1 7V9Z"
                      fill="#AEAEAE" />
            </svg>
        </div>
    )
}
export default ToggleListHandler