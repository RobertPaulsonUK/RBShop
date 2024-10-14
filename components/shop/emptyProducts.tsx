import {FC} from "react";
import {useTranslations} from "next-intl";

const EmptyProducts:FC = () => {
    const t = useTranslations('EmptyMessages')
    return(
        <div>
            <p>{t('EmptyProducts')}</p>
        </div>
    )
}