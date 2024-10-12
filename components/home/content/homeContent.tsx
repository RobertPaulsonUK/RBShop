import {FC} from "react";
interface IContent {
    content : string
}
const HomeContent:FC<IContent> = ({content}) => {
    return(
        <>
            <section className="pt-[104px] sm:pt-8">
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </section>
        </>
    )
}
export default HomeContent