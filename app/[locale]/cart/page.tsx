import {Metadata, ResolvingMetadata} from "next";
import Cart from "@/components/cart";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import {cartBreadcrumbs} from "@/utils/data/cart/cartBreadcrumbs";
import {GET_METADATA_ENDPOINT} from "@/utils/constants/endpoints";
import {useMetadata} from "@/hooks/MetadataHook";

export async function generateMetadata(
    { params },
    parent: ResolvingMetadata
): Promise<Metadata> {

    const data = await fetch(`${GET_METADATA_ENDPOINT}/cart?lang=${params.locale}`).then((res) => res.json())
    return useMetadata(data?.data)
}

export default function CartPage() {

    return(
        <>
            <Breadcrumbs items={cartBreadcrumbs}/>
            <Cart/>
        </>
    )
}