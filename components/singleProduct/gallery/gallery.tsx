"use client"
import {FC, useEffect, useState} from "react";
import { useSwipeable } from "react-swipeable";
import GallerySlide from "@/components/singleProduct/gallery/gallerySlide";
import "./gallery-style.scss"
import GalleryWrapper from "@/components/singleProduct/gallery/galleryWrapper";
import GalleryMini from "@/components/singleProduct/gallery/galleryMini";

interface IGallery {
    mainImage : string
    galleryImages? : string[]
}
const ProductGallery:FC<IGallery> = ({mainImage,galleryImages}) => {
    const [startWidth,setStartWidth] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        setStartWidth(0)
        setCurrentIndex(0)
    }, []);
    const readyGallery = [mainImage, ...galleryImages]
    const setCurrentTranslateWidth = (index) => {
        let slideWidth = document.querySelector('.product-slider-wrapper').clientWidth
        let newWidth = slideWidth * index
        setStartWidth(-(newWidth))
        setCurrentIndex(index)
    }
    const handleSwipeLeft = () => {
        if (currentIndex < readyGallery.length - 1) {
            setCurrentTranslateWidth(currentIndex + 1);
        }
    };

    const handleSwipeRight = () => {
        if (currentIndex > 0) {
            setCurrentTranslateWidth(currentIndex - 1);
        }
    };
    const swipeHandlers = useSwipeable({
        onSwipedLeft : handleSwipeLeft,
        onSwipedRight : handleSwipeRight,
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    })

    return(
        <>
            <div className={"product-slider good__slider mySwiper2 sm:mb-4"} {...swipeHandlers}>
                <GalleryWrapper transformWidth={startWidth}>
                    {readyGallery.length > 0 && readyGallery.map(
                        (item,index) => (
                            <GallerySlide src={item}
                                          key={index}
                                          index={index + 1}/>
                        )
                    )}
                </GalleryWrapper>
            </div>
            <GalleryMini galleryItems={readyGallery}
                         activeIndex={currentIndex}
                         clickHandler={setCurrentTranslateWidth}/>
        </>
    )
}
export default ProductGallery