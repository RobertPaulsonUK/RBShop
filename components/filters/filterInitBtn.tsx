import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {useTranslations} from "next-intl";

const FilterInitBtn:FC<{clickHandler : () => void}> = ({clickHandler}) => {
    const t = useTranslations('Filters')
    return(
        <>
            <Link
                className={"filter_btn hidden md:flex items-center justify-start absolute top-2 left-0"}
                href={"#"}
                onClick={(e) => {
                    e.preventDefault();
                    clickHandler();
                }}
            >
                <div className="text-xl font-medium text-[#46B1F0]">
                    {t('Title')}
                </div>
                <Image
                    width={24}
                    height={24}
                    src={"/images/filter.svg"}
                    alt={"filter"}/>
            </Link>
        </>
    )
}
export default FilterInitBtn