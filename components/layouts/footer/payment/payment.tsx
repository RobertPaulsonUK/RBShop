import {FC} from "react";
import {IPayment} from "@/types/footer.interface";
import Image from "next/image";
interface IInterface {
    items : IPayment[]
}
const Payment:FC<IInterface> = ({items}) => {
    return(
        <>
            <div className="grid grid-cols-4 gap-4 xl:grid-cols-2 lg:gap-2">
                {items.length > 0 && items.map(
                    ({image},index) => (
                        <Image src={image.url}
                               key={index}
                               alt={image.title}
                               width={100}
                               height={44}
                        />
                    )
                )}
            </div>
        </>
    )
}
export default Payment