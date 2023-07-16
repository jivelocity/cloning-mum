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
        <Link href={id}>
            <p className="text-stone-400 hover:text-primary font-semibold transition-colors ease-in-out duration-300">
                {label}
            </p>
        </Link>
    )
}
export default NavLink;
