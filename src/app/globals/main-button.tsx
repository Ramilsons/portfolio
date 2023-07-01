import Link from "next/link";
import Image from "next/image";

interface Props {
    target: string
}

export default function MainButton({target}: Props) {
    return (
        <div>
            <Link href={{hash: `#${target}`}} className="hover:scale-[1.1] w-12 h-12 rounded bg-[var(--blue)] flex justify-center items-center mt-7">
                <Image 
                    src={'/images/arrow-down-large.png'} 
                    alt="Clique para ir para a seção sobre mim"
                    width={15}
                    height={20}
                />
            </Link>
        </div>
    )
}