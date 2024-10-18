import {Metadata, ResolvingMetadata} from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import CabinetLayout from "@/components/cabinet/cabinet";
import GetUserData from "@/utils/data/cabinet/getUserData";
import { cookies } from 'next/headers'
import {AUTH_TOKEN_NAME} from "@/utils/constants/constants";
import { redirect } from 'next/navigation'
import {GET_METADATA_ENDPOINT} from "@/utils/constants/endpoints";
import {useMetadata} from "@/hooks/MetadataHook";

export async function generateMetadata(
    { params },
    parent: ResolvingMetadata
): Promise<Metadata> {

    const data = await fetch(`${GET_METADATA_ENDPOINT}/cabinet?lang=${params.locale}`).then((res) => res.json())
    return useMetadata(data?.data)
}
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
            {userData?.schema &&
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(userData.schema) }}
                    />
                </>}
            {userData?.breadcrumbs && <Breadcrumbs items={userData.breadcrumbs}/>}
            {userData && <CabinetLayout data={userData} defaultTab={parseInt(activeTab)}/>}
        </>
    )
}
