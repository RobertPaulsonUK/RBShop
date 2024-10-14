import {FC} from "react";
import {routing, usePathname} from "@/i18n/routing";
import Link from "next/link";
import { useLocale } from 'next-intl';

const LangPanel:FC = () => {
    const pathname = usePathname();
    const { locales, defaultLocale } = routing
    const locale = useLocale();
    const changeLanguage = (newLocale: string) => {
        return `/${newLocale}${pathname}`
    };

    return(
        <>
            <div className="flex justify-center items-center gap-[10px] -mr-5 lg:gap-8">
                {locales.map((lng,index) => (
                    <Link
                        className={`lang__link text-sm font-medium text-[#AEAEAE] lg:text-base ${lng === locale ? 'active' : ''}`}
                        key={index}
                        disabled={lng === locale}
                        href={changeLanguage(lng)}
                    >
                        {lng === 'ua' ? 'Укр' : 'Рос'}
                    </Link>
                ))}
            </div>
        </>
    )
}
export default LangPanel