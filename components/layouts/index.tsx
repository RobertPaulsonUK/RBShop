import HeaderData from "@/utils/data/headerData";
import Header from "@/components/layouts/header/header";
import FooterData from "@/utils/data/footerData";
import Footer from "@/components/layouts/footer/footer";
import ButtonsLayout from "@/components/layouts/buttons/buttonsLayout";
import {UserProvider} from "@/context/UserContext";
import AuthorizationModals from "@/components/modals/authorization/authorization";
import {ModalsProvider} from "@/context/ModalsContext";
import {CartProvider} from "@/context/CartContext";
import CartModal from "@/components/modals/cart/cartModal";
import {WishlistProvider} from "@/context/WishlistContext";
import SuccessAddToWishlist from "@/components/modals/wishlist/successAddToWishlist";
import ContactModal from "@/components/modals/contact-form/contactModal";
import CartErrorModal from "@/components/modals/cart/cartErrorModal";
import CartGeneralErrorModal from "@/components/modals/cart/cartGeneralErrorModal";

export default async function Layout({children,locale}) {
    const headerData = await HeaderData({locale})
    const footerData = await FooterData({locale})
    return (
        <>
            <UserProvider locale={locale}>
                <ModalsProvider>
                    <CartProvider locale={locale}>
                        <WishlistProvider locale={locale}>
                            {headerData && <Header headerData={headerData} locale={locale}/>}
                            <div className="wrapper">
                                <main className={"main"}>
                                    {children}
                                </main>
                                <ButtonsLayout/>
                                {footerData && <Footer footerData={footerData}/>}
                                <AuthorizationModals></AuthorizationModals>
                                <CartModal/>
                                <CartErrorModal/>
                                <CartGeneralErrorModal/>
                                <ContactModal/>
                                <SuccessAddToWishlist/>
                            </div>
                        </WishlistProvider>
                    </CartProvider>
                </ModalsProvider>
            </UserProvider>
        </>
    )
}

