import {FC} from "react";
import {IUserDataInterface} from "@/types/user/user.data.interface";
import TabTitle from "@/components/cabinet/tabs/tabTitle";
import ProfileForm from "@/components/cabinet/profile/profileForm";
import {useTranslations} from "next-intl";

interface Props {
    userData : IUserDataInterface,
    updateHandler : (data : IUserDataInterface) => void,activeIndex : number
}
const EditProfile:FC<Props> = ({userData,updateHandler,activeIndex}) => {
    const index = 2
    const t = useTranslations('CabinetTabs')
    return(
        <div className={`cabinet__item min-w-[600px] lg:min-w-max ${activeIndex === index ? 'active' : ''}`}>
            <TabTitle title={t('EditProfile')}/>
            <ProfileForm userData={userData} updateHandler={updateHandler}/>
        </div>
    )
}
export default EditProfile