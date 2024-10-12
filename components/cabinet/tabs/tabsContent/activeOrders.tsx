import {FC} from "react";
import {IOrderInterface} from "@/types/user/user.data.interface";
import TabTitle from "@/components/cabinet/tabs/tabTitle";
import OrderItem from "@/components/cabinet/order/orderItem";

const ActiveOrders:FC<{orders : IOrderInterface[],activeIndex : number}> = ({orders,activeIndex}) => {
    const index = 0
    return(
        <div className={`cabinet__item max-w-[440px] md:max-w-full ${activeIndex === index ? 'active' : ''}`}>
            <TabTitle title={'Поточні замовлення'}/>
            {orders.length > 0 ?
                orders.map((order,index) => (
                    <OrderItem key={index} order={order}/>
                ))
                :
                <p>Наразі у вас немає активних замовлень</p>
            }
        </div>
    )
}
export default ActiveOrders