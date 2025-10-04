import Link from "next/link"
import { Item } from "../item"
export default function navbar() {
    return (
        <nav className="flex justify-end w-full mb-20 pb-8 border-b-2 border-slate-200 items-end gap-4">
            {/* logo part start  */}
            <Link href="/" className="text-5xl px-4 mr-auto text-slate-700 font-sans uppercase tracking-widest
             visited:text-slate-700 border-4 border-slate-700 rounded shadow-lg 
             active:translate-y-0.5 transition-all duration-150">Gallery</Link>

            {navItems.map((item, i) => (
                <Item key={i}{...item} />
            )
            )}
            {/* logo part end  */}
        </nav>
    );
};

const navItems = [
    { label: "Photo", url: "/?category=photo" },
    { label: "Vector", url: "/?category=vector" },
];