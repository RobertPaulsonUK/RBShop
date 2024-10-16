import Image from "next/image";

export default function Loading() {
    return(
        <div className={"min-h-[80vh] flex justify-center items-center"}>
            <div>
                <Image src={"/images/loading.gif"} width={256} height={256} alt={"loading"}/>
            </div>
        </div>
    )
}