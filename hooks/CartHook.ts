"use client"
import {useContext} from "react";
import {CartContext} from "@/context/CartContext";
export  const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useModals must be used within a ModalsProvider");
    }
    return context;
};