"use client"
import {FC} from "react";
import Image from "next/image";

interface Props {
    galleryItems : string[]
    clickHandler : (index : number) => void
    activeIndex : number
}
const GalleryMini:FC<Props> = ({galleryItems,clickHandler,activeIndex}) => {

    return(
        <div  className="gallery-thumbnails mb-12 lg:m-0">
                {galleryItems.length > 0 &&galleryItems.map(
                    (item,index) => (
                        <div key={index} className={`gallery-thumbnails-slide ${activeIndex === index ? 'active' : ''}`}>
                            <Image src={item}
                                   width={76}
                                   height={76}
                                   onClick={() => clickHandler(index)}
                                   alt={`mini-slide-${index + 1}`}/>
                        </div>
                    )
                ) }
        </div>
    )
}
export default GalleryMini