"use client"
import {useContext} from "react";
import {ModalsContext} from "@/context/ModalsContext";
export  const useModals = () => {
    const context = useContext(ModalsContext);
    if (!context) {
        throw new Error("useModals must be used within a ModalsProvider");
    }
    return context;
};