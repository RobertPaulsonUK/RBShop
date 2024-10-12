import {Metadata} from "next";
import Cart from "@/components/cart";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import {cartBreadcrumbs} from "@/utils/data/cart/cartBreadcrumbs";

export const metadata: Metadata = {
    title: "Cart",
    description: "Cart page"
};

export default function CartPage() {

    return(
        <>
            <Breadcrumbs items={cartBreadcrumbs}/>
            <Cart/>
        </>
    )
}