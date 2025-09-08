"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const stacks = [
    {name: "JavaScript"},
    {name: "TypeScript"},
    {name: "React"},
    {name: "Next.js"},
    {name: "Tailwind CSS"},
    {name: "PostgreSQL"},
    {name: "Docker"},
    {name: "Java"},
    {name: "Spring Boot"},
];

export const TechStack = () => {
    return (
        <div className="flex flex-col gap-4 items-start w-7/8 text-xs md:text-sm md:w-1/2 pt-8">
            <h2 className="font-bold text-xl shadow-sm">Tech Stack</h2>
            <p className="text-neutral-400 text-sm">Tools I use day-to-day. Focus on reliability and developer ergonomics.</p>
            <Stacks stacks={stacks}/>
        </div>
    )
}


export type Stack = {
    name: string,
    logo?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const Stacks = ({stacks, title, className}:{stacks: Stack[], title?: string, className?: string})  => {
    return (
        <motion.div layoutId={`stack-${title}`} className={cn("flex justify-between gap-1 md:gap-2 flex-wrap font-bold text-xs md:text-sm text-shadow-sm",
            className
        )}
            >
                {stacks.map(({name}) => {
                return (
                    <div  key={name}
                        className={cn("px-2 py-1 bg-black rounded-sm border border-neutral-700",
                            "hover:text-cyan-400 hover:border-cyan-400 transition-all duration-200 ease-in-out",
                        )}>
                        {name}
                    </div>
                )
            })}
            </motion.div>
    )
};