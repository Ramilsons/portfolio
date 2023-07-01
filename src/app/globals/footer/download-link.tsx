interface Props {
    target: string,
    text: string,
    fileName: string
}

export default function DownloadLink({target, text, fileName}: Props) {

    return (
        <div className='mb-4'>
            <div className='w-max relative'>
                <a href={target} className="relative z-[3] font-light text-base" download={fileName}> 
                    {text}
                </a>
                <span className="block w-[100%] h-2 absolute bottom-1 bg-[var(--blue)] z-[2]" />
            </div>
        </div>
    )   
}