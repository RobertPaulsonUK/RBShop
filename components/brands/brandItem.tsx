import {FC} from "react";
import {IBrandInterface} from "@/types/brends.interface";
import Image from "next/image";

interface IBrand {
    brand : IBrandInterface
}
const BrandItem:FC<IBrand> = ({brand}) => {
    const {image} =brand
    return(
        <>
            <div className="sm:scale-150">
                <Image
                    src={image.url}
                    width={215}
                    height={50}
                    alt={image.title}/>
            </div>
        </>
    )
}
export default BrandItem