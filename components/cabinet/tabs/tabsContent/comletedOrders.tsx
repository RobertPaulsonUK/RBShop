import {FC} from "react";
import {IOrderInterface} from "@/types/user/user.data.interface";
import TabTitle from "@/components/cabinet/tabs/tabTitle";
import OrderItem from "@/components/cabinet/order/orderItem";

const ComletedOrders:FC<{orders : IOrderInterface[],activeIndex : number}> = ({orders,activeIndex}) => {
    const index = 1
    return(
        <div className={`cabinet__item max-w-[440px] md:max-w-full ${activeIndex === index ? 'active' : ''}`}>
            <TabTitle title={'Історія замовлень'}/>
            {orders.length > 0 ?
                orders.map((order,index) => (
                    <OrderItem key={index} order={order}/>
                ))
                :
                <p>Наразі у вас немає виконаних замовлень</p>
            }
        </div>
    )
}
export default ComletedOrders