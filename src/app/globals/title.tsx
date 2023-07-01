interface Props {
    text: String,
    isDark?: boolean
}

export default function Title(props: Props) {
    return(
        <h2 className={`font-medium text-shadow text-[20px] pt-4 mb-8 ${props.isDark ? 'text-[#fff]' : ''}`}>{props.text}</h2>
    )
}