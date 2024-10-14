import {FC} from "react";
import {IOrderInterface} from "@/types/user/user.data.interface";
import OrderProduct from "@/components/cabinet/order/orderProduct";
import {useTranslations} from "next-intl";

const OrderItem:FC<{order : IOrderInterface}> = ({order}) => {
    const t = useTranslations('Cabinet')
    return(
        <div className="mb-3">
            <div className="text-[#333E48] text-sm mb-2">{order.date}</div>
            <div className="text-[#AEAEAE] text-sm mb-2">
                {t('OrderStatus')}
                <span
                className="text-[#333E48] text-sm ml-2">{order.status}</span>
                <div className="text-[#AEAEAE] text-sm">
                    {t('OrderTTN')}
                <span
                    className="text-[#333E48] text-sm ml-2">02359451285699</span>
                </div>
                {order.items.map((item,index) => (
                    <OrderProduct key={index} product={item}/>
                ))}
            </div>
        </div>
    )
}
export default OrderItem