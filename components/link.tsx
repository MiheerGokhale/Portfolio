import { cn } from "@/lib/utils";
import Link from "next/link";

type Link = {
    name: string;
    href: string;
    className?: string;
    children : React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const CustomLink = ({name, href, className, children, onClick}: Link) => {
    return (
        <Link href={href} className={cn("flex items-center",
            className
        )}
        onClick={onClick}
        >
                <p>{name}</p>
                {children}
        </Link>
    )
}