"use client";

import { 
    CardLink,
    Details,
    DetailsCard,
    DetailsHeading,
} from "@/components/details";
import { blogs } from "@/lib/data/blogs";
import { ArrowLeft } from "lucide-react";

const BlogsHome = () => {
    return (
        <div className="min-h-screen pt-40 bg-neutral-900 text-white flex justify-center">
            <Details>
                <DetailsHeading>
                     <span className="text-3xl font-bold">Blogs</span>
                    <CardLink
                        href="/" 
                        className="hover:text-white">
                        <ArrowLeft className="h-4 w-4" />
                        Back  
                    </CardLink>
                </DetailsHeading>

                {/* Blogs */}
                {blogs.map((blog) => {
                    return (
                        <DetailsCard  key={blog.title}  className="cursor-pointer">
                            <span className="text-neutral-400">{blog.date}</span>
                            <CardLink  className="hover:underline font-bold text-xl text-white">{blog.title}</CardLink>
                            <p  className="text-neutral-400">{blog.description}</p>
                        </DetailsCard>
                    )
                })}
            </Details>
        </div>
    )
}

export default BlogsHome;