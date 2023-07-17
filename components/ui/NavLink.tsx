'use client'

import { HashLink } from "react-router-hash-link";

interface NavLinkProps {
    label: string,
    id: string,
};

const NavLink:React.FC<NavLinkProps> = ({
    label,
    id,
}) => {

    return (
        <HashLink smooth to={`#${id}`}>
            <button className="text-stone-400 hover:text-primary font-semibold transition-colors ease-in-out duration-300">
                {label}
            </button>
        </HashLink>
    )
}
export default NavLink;
