import {Metadata} from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import CabinetLayout from "@/components/cabinet/cabinet";
import GetUserData from "@/utils/data/cabinet/getUserData";
import { cookies } from 'next/headers'
import {AUTH_TOKEN_NAME} from "@/utils/constants/constants";
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
    title: "Cabinet"
};
export default async function Cabinet({searchParams,params}: { searchParams: { [key: string]: string },params: { [key: string]: string } }) {
    const cookieStore = cookies()
    const token = cookieStore.get(AUTH_TOKEN_NAME)?.value
    const activeTab = searchParams.active ?? 0
    if(!token) {
        redirect('/')
    }
    const userData = await GetUserData(token,params.locale)
    return(
        <>
            {userData?.breadcrumbs && <Breadcrumbs items={userData.breadcrumbs}/>}
            {userData && <CabinetLayout data={userData} defaultTab={parseInt(activeTab)}/>}
        </>
    )
}
