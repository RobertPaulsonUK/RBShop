import {FC} from "react";
import {IOrderInterface} from "@/types/user/user.data.interface";
import TabTitle from "@/components/cabinet/tabs/tabTitle";
import OrderItem from "@/components/cabinet/order/orderItem";
import {useTranslations} from "next-intl";

const ComletedOrders:FC<{orders : IOrderInterface[],activeIndex : number}> = ({orders,activeIndex}) => {
    const index = 1
    const t = useTranslations('CabinetTabs')
    const e = useTranslations('EmptyMessages')
    return(
        <div className={`cabinet__item max-w-[440px] md:max-w-full ${activeIndex === index ? 'active' : ''}`}>
            <TabTitle title={t('FinishedOrders')}/>
            {orders.length > 0 ?
                orders.map((order,index) => (
                    <OrderItem key={index} order={order}/>
                ))
                :
                <p>{e('EmptyFinishedOrders')}</p>
            }
        </div>
    )
}
export default ComletedOrders