"use client"
import {FC, useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import DeleteIconActive from "@/components/icons/deleteIconActive";
import DeleteIcon from "@/components/icons/deleteIcon";

const DeleteButton:FC<{deleteHandler : (key : string) => void,itemKey : string}> = ({deleteHandler,itemKey}) => {
    const [isDeleting,setIsDeleting] = useState(false)
    useEffect(() => {
        setIsDeleting(false)
    }, [itemKey]);
    return(

        <Link href={"#"}
              className={""}
              onClick={(e) => {
                  e.preventDefault()
                  setIsDeleting(true)
                  deleteHandler(itemKey)
              }}
            >
            {isDeleting ?
                <DeleteIconActive/>
                :
                <DeleteIcon/>
            }

        </Link>
    )
}
export default DeleteButton