"use client"
import { useRouter } from "next/navigation";
interface Props {
    id: number
    title: string,
    short_content: string
}

export default function Thread({id, title, short_content}: Props) {
    const router = useRouter();
    return (
        <div 
            className="w-8/10 mx-auto my-4 pb-4 px-4 overflow-hidden border-b cursor-pointer group"
            onClick={() => {router.push(`${id}`)}}
            style={{
                borderColor: "var(--border)"
            }}
        >
            <div 
            className="text-2xl group-hover:underline"
            style={{color: "var(--text-link)"}}>
                {title}
            </div>
            <div 
            className="text-sm h-10 overflow-y-clip"
            style={{color: "var(--text-secondary)"}}>
                {short_content}
            </div>
        </div>
    )
}