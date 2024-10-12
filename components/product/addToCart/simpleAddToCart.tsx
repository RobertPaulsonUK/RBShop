"use client"
import {FC, useEffect, useState} from "react";
import {useCart} from "@/hooks/CartHook";
import RegularAddToCartText from "@/components/ui/actionsStates/addToCart/regularText";
import ActiveStateText from "@/components/ui/actionsStates/activeText";

interface IAddToCart {
    id : number
    stockStatus: string
    stock: boolean | number
}
const SimpleAddToCart:FC<IAddToCart> = ({id,stockStatus,stock}) => {
    const {addToCartHandler,cart: {items}} = useCart()
    const [isInCart,setIsInCart] = useState(false)
    const [cartQuantity,setCartQuantity] = useState(0)
    const [isDisabled,setIsDisabled] = useState(false)
    const [isAdding,setIsAdding] = useState(false)

    useEffect(() => {
        checkIsInCart()
    }, [items]);
    useEffect(() => {
        setIsAdding(false)
        checkIsDisabled()
    }, [cartQuantity]);
    const checkIsInCart = () => {
        if(items.length === 0) {
            setIsInCart(false)
            setCartQuantity(0)
            return
        }
        items.forEach(item => {
            if(item.id === id){
                setIsInCart(true)
                setCartQuantity(item.quantity.value)
            }
        })
    }
    const checkIsDisabled = () => {
        if(stockStatus === 'outofstock') {
            setIsDisabled(true)
        }
        if(isInCart && stock === cartQuantity) {
            setIsDisabled(true)
        }
    }
    const buttonClickHandler = () => {
        setIsAdding(true)
        addToCartHandler(id,1)
    }
    return(
        <>
            <button
                onClick={buttonClickHandler}
                className={`goods__item-details-btn relative min-w-[107px] py-[10px]  px-5 rounded-[40px] bg-[#46B1F0] text-white hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 flex items-center justify-center gap-2 xl:mx-auto sm:w-full sm:text-center ${isDisabled ? 'bg-[#AEAEAE] text-[#F6F6F6] pointer-events-none' : ''} ${isAdding ? ' is-adding' : ''}`}
                >
                {isAdding ?
                    (
                        <ActiveStateText text={"Додаємо"}/>
                    )
                :
                    (
                        <RegularAddToCartText/>
                    )
                }

            </button>
        </>
    )
}
export default SimpleAddToCart