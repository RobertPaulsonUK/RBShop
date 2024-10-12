"use client"
import {FC, useEffect, useRef, useState} from "react";
import Image from "next/image";
import {UseFormRegister, UseFormSetValue} from "react-hook-form";
import {FormData} from "@/components/cabinet/profile/profileForm";


interface Props {
    userAvatar : string
    register : UseFormRegister<FormData>
    setValue : UseFormSetValue<FormData>
}
const ImageInput:FC<Props> = ({userAvatar,register,setValue}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string>(userAvatar.length > 0 ? userAvatar : '/images/cabinet/cabinetphoto-1.webp');
    useEffect(() => {
        setPreview(userAvatar.length > 0 ? userAvatar : '/images/cabinet/cabinetphoto-1.webp')
    }, [userAvatar]);

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setPreview(URL.createObjectURL(file));
            setValue('update_avatar', e.target.files);
        }
    };

    return(
        <div className={"w-max cursor-pointer"}>
            <Image
                src={preview}
                onClick={handleImageClick}
                title={"avatar"}
                alt={"avatar"}
                className={"rounded-[20px] overflow-hidden max-w-[150px] max-h-[150px] object-cover"}
                width={150}
                height={150}/>
            <input type={"file"}
                   ref={fileInputRef}
                   className={"hidden"}
                   onChange={handleFileChange}
            />
        </div>
    )
}
export default ImageInput