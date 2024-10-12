import {FC} from "react";
import Link from "next/link";

interface PhoneNumber {
    number: string
}
const ContactPageNumbers:FC<{numbers : PhoneNumber[]}> = ({numbers}) => {
    return(
        <div className="flex justify-between items-center gap-2 mb-6">
            {numbers.map(({number},index) => (
                <Link href={`tel:${number.replace(/[ \(\)-]/g, '')}`}
                      key={index}
                      className={'text-sm text-[#F6F6F6] font-normal'}>
                    {number}
                </Link>
            ))}
        </div>
    )
}
export default ContactPageNumbers