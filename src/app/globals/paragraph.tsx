interface Props{
    text: String,
}

export default function Paragraph(props: Props) {
    return(
        <h3 className="text-base mb-8 font-light text-[#37352F] max-w-[275px]">{props.text}</h3>
    )
}