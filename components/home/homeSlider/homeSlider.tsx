"use client"
import {FC, ReactNode, useEffect, useState,Children} from "react";
import SliderWrapper from "@/components/home/homeSlider/sliderWrapper";
import Image from "next/image";
import './/slider.scss';
import SliderPagination from "@/components/home/homeSlider/sliderPagination";



const HomeSlider:FC<{children : ReactNode}> = ({children}) => {
    const [transformWidth,setTransformWidth] = useState(0)
    const [windowWidth,setWindowWidth] = useState(0)
    const [activeSlide,setActiveSlide] = useState(0)
    const containerEndpoint = 1264
    const childrenArray = Children.toArray(children)
    const [slideWidth,setSlideWidth] = useState(windowWidth > containerEndpoint ? 1262 : windowWidth - 32)

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth
            setWindowWidth(newWidth)
            setSlideWidth(newWidth > containerEndpoint ? 1262 : newWidth - 32)
        }

        window.addEventListener('resize', handleResize)
        handleResize()
    }, [containerEndpoint])



    const nextButtonHandler  = () => {
        setActiveSlide(activeSlide + 1)
        setTransformWidth(transformWidth - slideWidth)
    }
    const prevButtonHandler  = () => {
        setActiveSlide(activeSlide - 1)
        setTransformWidth(transformWidth + slideWidth)
    }

    const paginationItemHandler = (index : number) => {
        setActiveSlide(index)
        setTransformWidth(-(index * slideWidth) )
    }


    return(
        <>
            <section className={"py-24 sm:py-8"}>
                <div className={"container"}>
                    <div className={"home-slider bg-[#46B1F0] rounded-[48px] relative"}>
                        <SliderWrapper width={transformWidth}>
                            {children}
                        </SliderWrapper>
                        <Image
                            onClick={nextButtonHandler}
                            className={`absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer z-10 xl:w-[30px] sm:right-1 sm:w-[20px] ${Math.abs(transformWidth) === (childrenArray.length - 1) * slideWidth ? 'disabled' : ''}`}
                            src={"/images/banner/arrow-next.svg"}
                            width={69}
                            height={154}
                            alt={"arrow-next"}/>
                        <Image
                            onClick={prevButtonHandler}
                            className={`absolute top-1/2 -translate-y-1/2 left-5 cursor-pointer z-10 xl:w-[30px] sm:left-1 sm:w-[20px] ${transformWidth === 0 ? 'disabled' : ''}`}
                            src={"/images/banner/arrow-prev.svg"}
                            width={69}
                            height={154}
                            alt={"arrow-prev"}/>
                        <SliderPagination itemsLength={childrenArray.length} paginationHandler={paginationItemHandler} activeIndex={activeSlide}/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeSlider