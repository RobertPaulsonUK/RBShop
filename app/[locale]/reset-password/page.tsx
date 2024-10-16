import ResetPasswordForm from "@/components/system/resetPasswordForm";

export default function ResetPassword(
    {searchParams,params}:
        {
            searchParams: { [key: string]: string },
            params: { [key: string]: string }
        }
) {
    const login = searchParams.login
    const resetKey = searchParams.key

    return(
        <div className={"container"}>
            <div className={"h-[100vh] flex items-center justify-center"}>
                {(resetKey && login) && <ResetPasswordForm login={login}
                                                           locale={params.locale}
                                                           resetKey={resetKey}/>}
            </div>
        </div>
    )
}