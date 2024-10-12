import {FC} from "react";
import {IMethodInterface} from "@/types/singleProduct/product.interface";
import PaymentDeliveryItem from "@/components/singleProduct/paymentAndDelivery/paymentDeliveryItem";

const PaymentAndDelivery:FC<{data : IMethodInterface}> = ({data}) => {
    const {title,methods} = data
    return(
        <>
            <div className="text-[#333E48] text-lg font-medium mb-4">{title}</div>
            <div
                className="grid grid-cols-4 gap-4 mb-7 lg:grid-cols-[100px_100px_100px_100px] sm:grid-cols-4 sm:gap-0 sm:bg-white sm:rounded-md">
                {methods && methods.map(
                    (item,index) =>
                        (<PaymentDeliveryItem key={index}
                                              title={item['title']}
                                              url={item['url']}/>)
                )}
            </div>
        </>
    )
}
export default PaymentAndDelivery