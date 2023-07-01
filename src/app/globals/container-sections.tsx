import globalsStyle from "../utils/globals-style"

interface Props {
    children: string | JSX.Element | JSX.Element[],
    identify?: string
}

export default function ContainerSections({children, identify}: Props) {
    return (
        <div className={`relative flex flex-col item-left justify-center h-[100vh] snap-start ${globalsStyle.maxWidthScreen} ${identify == 'projects' ? 'pl-7 sm:ml-[5%] lg:pl-0 lg:w-[90%] lg:ml-[auto] lg:mr-[auto]' : 'p-7 sm:w-[90%] ml-[auto] mr-[auto] lg:pl-0 lg:pr-0'}`} id={identify ? identify : ''}>
            {children}
        </div>
    )
}