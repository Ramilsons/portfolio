import globalsStyle from "../utils/globals-style"

interface Props{
    text: String,
}

export default function Paragraph(props: Props) {
    return(
        <h3 className={`text-base mb-8 font-light text-[#37352F] ${globalsStyle.maxWidthParagraphSize}`}>{props.text}</h3>
    )
}