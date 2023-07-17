import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode
    className?: string
    id?: string
};

const Container:React.FC<ContainerProps> = ({
    children,
    className,
    id,
}) => {

    return (
        <div id={id} className={cn(
            'max-w-[1920px] mx-auto px-4 sm:px-4 md:px-10 lg:px-20',
            className
        )}>
            {children}
        </div>
    )
}
export default Container;
