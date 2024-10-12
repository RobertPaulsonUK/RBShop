import {FC} from "react";

interface Props {
    title? : string
    content : string
}
const PageContent:FC<Props> = ({title,content}) => {
    return(
        <section className={"pb-[50px]"}>
            <div className="container">
                <div>
                    {title && (
                        <h1 className={"text-[#46B1F0] text-[40px] leading-[48px] font-semibold mb-[40px] sm:text-[32px] sm:leading-[34px] sm:mb-6"}>
                            {title}
                        </h1>
                    )}
                    <div className={"text-[#333E48] text-sm font-normal"}
                         dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </section>
    )
}
export default PageContent