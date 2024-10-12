import {FC} from "react";
import Image from "next/image";

interface IItem {
    title: string,
    url: string
}
const PaymentDeliveryItem:FC<IItem> = ({title,url}) => {
    return(
        <>
            <Image src={url}
                   alt={title}
                   className={"sm:w-full"}
                   width={100}
                   height={44}/>
        </>
    )
}
export default PaymentDeliveryItem