import ConfirmEmailLayout from "@/components/system/confirmEmailLayout";
import {cookies} from "next/headers";
import {AUTH_TOKEN_NAME} from "@/utils/constants/constants";
import ConfirmEmailData from "@/utils/data/confirm-email/confirmEmailData";
export default async function ConfirmEmail(
    {searchParams,params}
        :
    {
        searchParams: { [key: string]: string } ,
        params: { [key: string]: string }
    }) {
    const hash = searchParams.emailkey
    const cookieStore = cookies()
    const token = cookieStore.get(AUTH_TOKEN_NAME)?.value

    const result = await ConfirmEmailData(token,hash,params.locale)
    return(
        <div className={"container"}>
            <div className={"h-[100vh] flex items-center justify-center flex-col"}>
                {result && <ConfirmEmailLayout success={result.success} message={result.message}/>}
            </div>
        </div>
    )
}