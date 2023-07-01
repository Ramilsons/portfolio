import Link from "next/link";

interface Props {
    target: string,
    text: string,
    headerLink?: boolean
}

export default function LinkNavigation({target, text, headerLink}: Props) {

    if(headerLink){
        return (
            <div className='relative z-10'>
                <Link href={{hash: target}} className="relative z-[3] font-light text-base">
                    {text}
                </Link>
                <span className="block w-[100%] h-2 absolute bottom-1 bg-[var(--blue)] z-[2]" />
            </div>
    
        )
    }else {
        return (
            <div className='mb-4'>
                <div className='w-max relative'>
                    <a target="_blank" href={target} className="relative z-[3] font-light text-base">
                        {text}
                    </a>
                    <span className="block w-[100%] h-2 absolute bottom-1 bg-[var(--blue)] z-[2]" />
                </div>
            </div>
        )
    }
}