"use client"
import {FC, useEffect, useState} from "react";
import Link from "next/link";
import {useTranslations} from "next-intl";

interface Props {
    success : boolean
    message : string
}
const ConfirmEmailLayout:FC<Props> = ({message, success}) => {
    const t = useTranslations('ConfirmEmailPage')
    return (
        <>
            <h1 className={"text-[#46B1F0] text-center text-[40px] leading-[48px] font-semibold mb-[40px] sm:text-[32px] sm:leading-[34px] sm:mb-6"}>
                {message}
            </h1>
            <Link href={"/cabinet"}
                  className={"min-w-[107px] py-[10px]  px-5 rounded-[40px] bg-[#46B1F0] text-white hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 flex items-center justify-center gap-2 xl:mx-auto sm:w-full sm:text-center"}>
                {t('ToProfileText')}
            </Link>
        </>
    )
}
export default ConfirmEmailLayout