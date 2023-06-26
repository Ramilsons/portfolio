import Link from "next/link";

interface Props {
    target: string,
    text: string
}

export default function LinkNavigation({target, text}: Props) {
    return (
        <div className="fixed right-0 top-0 pr-7 pt-7">
            <div className="relative">
                <Link href={{hash: target}} className="relative z-[3] font-light text-base">
                    {text}
                </Link>
                <span className="block w-[100%] h-2 absolute bottom-1 bg-[var(--blue)] z-[2]" />
            </div>
        </div>
    )
}