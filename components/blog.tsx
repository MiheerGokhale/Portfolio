import { Container } from "@/components/container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CustomLink } from "./link";

export const Blogs = () => {
    return (
        <Container className="pt-12">
            <div className="text-neutral-400 flex justify-between w-7/8 md:w-1/2">
                    <p className="text-xl font-bold py-2 shadow-sm text-white">Blog</p>
                    <Link href={"/blogs"}
                        className="flex items-center hover:text-white text-sm"
                        >View all <ArrowRight />
                    </Link>
            </div>
            <div className={cn("grid w-7/8 grid-cols-1 gap-y-4 pt-6",
                "md:grid-cols-3 md:w-1/2 md:gap-x-4"
            )}>
                <Blog {...blogs[0]} />
                <Blog {...blogs[0]} />
                <Blog {...blogs[0]} />
            </div>
        </Container>
    )
}

export type Blog = {
    date: string,
    title: string,
    description: string,
    link?: string
}

export const Blog = ({date, title, description}: Blog) => {
    return (
        <Container className="bg-neutral-800 rounded-sm w-full p-4 items-start gap-y-2 text-sm
            border border-neutral-600 hover:border-neutral-400">
            <span className="text-neutral-400">{date}</span>
            <h2 className="text-white text-lg">{title}</h2>
            <p className="text-neutral-400 leading-relaxed">{description}</p>
            <CustomLink name="Read" href={`/blog/${title}`} className="
             text-cyan-400 text-sm hover:text-cyan-300"><ArrowRight className="h-4 w-4" /></CustomLink>
        </Container>
    )
}

const blogs: Blog[] = [
    {date: "2025-09-01", title: "Composable Minimalism in UI", description: "A practical approach to shipping clean interfaces without losing personality.", link: "#"}
];