interface Props {
    text: string
}

export default function MainEmoji({text}: Props) {
    return(
        <span className="text-6xl mb-4">{text}</span>
    )
}