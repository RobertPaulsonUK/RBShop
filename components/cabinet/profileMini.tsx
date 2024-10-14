import {FC} from "react";
import Image from "next/image";
import {IUserDataInterface} from "@/types/user/user.data.interface";
import {useTranslations} from "next-intl";

const ProfileMini:FC<{
    userData : IUserDataInterface
    imageClickHandler : (index : number) => void
}> = (
    {userData,
        imageClickHandler}
) => {
    const userAddress = () => {
        const { billingCity, billingAddress } = userData;
        return [billingCity, billingAddress].filter(Boolean).join(', ');
    }
    const currentIndex = 2
    const t = useTranslations('Cabinet')
    return(
        <>
            <div className="text-[#46B1F0] text-[32px] leading-[34px] mb-[18px]">
                {t('DetailsTitle')}
            </div>
            <div className="flex items-start justify-start gap-5">
                <div className="w-max cursor-pointer">
                    <Image src={userData.userAvatar.length > 0 ? userData.userAvatar : '/images/cabinet/cabinetphoto-1.webp'}
                           onClick={() => imageClickHandler(currentIndex)}
                           alt={'profile avatar'}
                           className={"rounded-[20px] overflow-hidden max-w-full object-cover max-h-[106px]"}
                           width={124}
                           height={106}/>
                </div>
                <div className="w-1/2">
                    <div className="text-[#333E48] text-base font-medium mb-[18px]">{userData.displayName}</div>
                    <div className="text-[#333E48] text-sm font-normal mb-2">{userData.userEmail}</div>
                    <div className="text-[#333E48] text-sm font-normal mb-2">{userData.billingPhone}</div>
                    <div className="text-[#333E48] text-sm font-normal">{userAddress()}</div>
                </div>
            </div>
        </>
    )
}
export default ProfileMini