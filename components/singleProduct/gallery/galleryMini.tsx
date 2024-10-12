"use client"
import {FC,useState} from "react";
import Image from "next/image";

const GalleryMini:FC<{galleryItems : string[], clickHandler: (index: number) => void }> = ({galleryItems,clickHandler}) => {
    const [activeIndex,setActiveIndex] = useState(0)
    const imageClickHandler = (index : number) => {
        setActiveIndex(index)
        clickHandler(index)
    }
    return(
        <div  className="gallery-thumbnails mb-12 lg:m-0">
                {galleryItems.length > 0 &&galleryItems.map(
                    (item,index) => (
                        <div key={index} className={`gallery-thumbnails-slide ${activeIndex === index ? 'active' : ''}`}>
                            <Image src={item}
                                   width={76}
                                   height={76}
                                   onClick={() => imageClickHandler(index)}
                                   alt={`mini-slide-${index + 1}`}/>
                        </div>
                    )
                ) }
        </div>
    )
}
export default GalleryMini