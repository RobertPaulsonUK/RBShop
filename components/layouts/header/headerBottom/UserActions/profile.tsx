"use client"
import {FC} from "react";
import Link from "next/link";
import ProfileIcon from "@/components/icons/profileIcon";
import {useUser} from "@/hooks/UserHook";
import {useModals} from "@/hooks/ModalsHook";


const Profile:FC = () => {
    const {isLogged} = useUser()
    const {modalsHandlers: { authHandler }} = useModals()
    return(
        <>
            <Link
                onClick={isLogged ? undefined :
                    (e) => {
                        e.preventDefault()
                        authHandler()
                    }
                }
                href={"/cabinet"} className={"relative"}>
                <ProfileIcon/>
            </Link>
        </>
    )
}
export default Profile