import {Metadata} from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import {CabinetBreadcrumbs} from "@/utils/data/cabinet/cabinetBreadcrumbs";
import CabinetLayout from "@/components/cabinet/cabinet";
import GetUserData from "@/utils/data/cabinet/getUserData";
import { cookies } from 'next/headers'
import {AUTH_TOKEN_NAME} from "@/utils/constants/constants";
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
    title: "Cabinet"
};
export default async function Cabinet({searchParams}: { searchParams: { [key: string]: string } }) {
    const cookieStore = cookies()
    const token = cookieStore.get(AUTH_TOKEN_NAME)?.value
    const activeTab = searchParams.active ?? 0
    if(!token) {
        redirect('/')
    }
    const userData = await GetUserData(token)
    return(
        <>
            <Breadcrumbs items={CabinetBreadcrumbs}/>
            {userData && <CabinetLayout data={userData} defaultTab={parseInt(activeTab)}/>}
        </>
    )
}
