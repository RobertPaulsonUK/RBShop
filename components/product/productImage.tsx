import {FC} from "react";
import Link from "next/link";
import Image from "next/image";

interface IProductImage {
    link : string
    name : string
    image : string
    className? : string
}
const ProductImage:FC<IProductImage> = ({link,name,image,className}) => {
    return(
        <>
            <Link className={"mb-4 w-full block"}
                  href={link}>
                <Image className={"w-full rounded-tl-2xl rounded-tr-2xl"}
                       src={image}
                       alt={name}
                       width={296}
                       height={296}
                />
            </Link>
        </>
    )
}
export default ProductImage