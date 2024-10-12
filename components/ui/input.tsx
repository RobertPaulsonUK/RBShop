"use client"
import {FC,useState,useEffect} from "react";
import InputError from "@/components/ui/inputError";
interface iInput {
    label : boolean
    labelText? : string
    labelClass? : string
    inputClass? : string
    inputValue : string
    inputHandler : (value : string) => void
    type : string
    placeholder? : string
    isError : boolean
    errorText : string
}
const Input:FC<iInput> = (
    {label,labelText,labelClass,inputClass,inputValue,inputHandler,type,placeholder,isError,errorText }
) => {
    const [inputId,setInputId] = useState<string>('')
    useEffect(() => {
        setInputId(`input-${Math.random().toString(36).substr(2, 9)}`);
    }, []);

    return(
        <>
            {label && <label
                className={labelClass ?? ''}
                htmlFor={inputId}>
                {labelText ?? ''}
            </label>}

            <input
            id={inputId}
            className={inputClass}
            type={type}
            placeholder={placeholder}
            onChange={(e) => {
                inputHandler(e.target.value)
            }}
            />
            {isError && <InputError text={errorText}/>}
        </>
    )
}
export default Input