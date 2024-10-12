"use client"
import {FC} from "react";
import Image from "next/image";

const ScrollTopButton:FC = () => {
    const scrollToTopFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return(
        <>
            <button
                onClick={scrollToTopFunction}
                className="btn__top p-[10px] rounded-full bg-[#46B1F0] cursor-pointer border-none w-10 h-10 hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200">
                <Image className={"mx-auto"}
                       src={"/images/arrow-top.svg"}
                       alt={"arrow-top"}
                       width={40}
                       height={40}/>
            </button>

        </>
    )
}
export default ScrollTopButton