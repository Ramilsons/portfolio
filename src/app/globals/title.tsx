interface Props {
    text: String,
}

export default function Title(props: Props) {
    return(
        <h2 className="font-medium text-shadow text-[20px] mb-8">{props.text}</h2>
    )
}