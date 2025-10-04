import Link from "next/link"
import { FC } from "react"

type Tprops = { label: string, url: string }
export  const Item : FC<Tprops>=({ url, label })=>(
    <Link href={url} className="relative inline-block group overflow-hidden p-2 uppercase tracking-wide text-lg">
        <span className="relative z-10 text-slate-800 transition-colors duration-300 group-hover:text-white"> {label}</span>
        <span className=" absolute left-0 bottom-0 w-full h-0 bg-slate-800 transition-all duration-300 
  ease-in-out group-hover:h-full"></span>
    </Link>
)