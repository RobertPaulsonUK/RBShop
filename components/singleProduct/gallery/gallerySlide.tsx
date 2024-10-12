import {FC} from "react";
import Image from "next/image";

const GallerySlide:FC<{src : string,index : number}> = ({src,index}) => {
    return(
        <div className="good__slider-slide ">
            <Image
                className="w-full pointer-events-none"
                src={src}
                width={616}
                height={616}
                alt={`slide-${index}`}/>
        </div>
    )
}
export default GallerySlide