'use client'

import { onGotoElement } from "@/lib/utils";
import Link from "next/link";

interface NavLinkProps {
    label: string,
    id: string,
};

const NavLink:React.FC<NavLinkProps> = ({
    label,
    id,
}) => {

    return (
            <button onClick={() => onGotoElement(id)} className="text-stone-400 hover:text-primary font-semibold transition-colors ease-in-out duration-300">
                {label}
            </button>
    )
}
export default NavLink;
