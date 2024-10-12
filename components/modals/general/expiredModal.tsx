"use client"
import {FC, useEffect, useState} from "react";
import ModalClose from "@/components/icons/modalClose";

const ExpiredModal:FC<{message : string,clickHandler? : () => void}> = ({message,clickHandler}) => {
    const [isOpen,setIsOpen] = useState(true)
    useEffect(() => {
        if (isOpen) {
            addDocumentScroll()
            const timer = setTimeout(() => {
                clickHandler?.()
                removeDocumentScroll()
                setIsOpen(false)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [isOpen,clickHandler])
    const closeModalHandler = () => {
        if(clickHandler) {
            clickHandler()
        }
        removeDocumentScroll()
        setIsOpen(false)
    }
    const removeDocumentScroll = () => {
        document.documentElement.classList.remove('no-scroll');
    }
    const addDocumentScroll = () => {
        document.documentElement.classList.add('no-scroll');
    }
    return(
        <div
            className={`modal__exit fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-[100] bg-[hsla(0,0%,0%,0.443)] duration-200 ${!isOpen ? 'hidden' : ''}`}>
            <div className="max-w-[300px] mx-auto mt-8">
                <div className="bg-[#F6F6F6] px-8 pb-8 pt-16 rounded-3xl relative">
                    <ModalClose clickHandler={closeModalHandler}/>
                    <div className="text-lg text-center font-medium text-[#333E48] mb-2 pb-2 border-b border-solid border-[#46B1F0]">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExpiredModal