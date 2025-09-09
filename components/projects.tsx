"use client";

import { Container } from "@/components/container";
import { ArrowRight, ExternalLink, GithubIcon} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Stack, Stacks } from "@/components/tech-stack";
import { projects } from "@/lib/data/projects";
import { useState } from "react";
import { CardLink, DetailsHeading, DetialsCardContent, DetialsCardDescription, DetialsCardImage, DetialsCardLayout } from "./details";
import { easeInOut, motion } from "motion/react";
import { useOutSideClick } from "@/lib/hooks";

export const Projects = ({className}: {className?: string, href: string}) => {
    const [current, setCurrent] = useState<ProjectProps | null>(null);
    const ref = useOutSideClick<HTMLDivElement>(() => setCurrent(null));
    
    return (
        <Container className={cn("pt-8 relative",
            className
        )}>
             {/* Layout Background */}
                {current && <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"></motion.div>}

                {/* Layout */}
                {current && (
                    <DetialsCardLayout
                    layoutId={`project-${current.title}`}
                    transition={{
                        ease: easeInOut
                    }}
                    ref={ref} className="w-7/8 h-7/8 md:w-1/4 fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                        <DetialsCardImage 
                            initial={{
                                filter: `blur(10px)`,
                                opacity: 0
                            }}
                            animate={{
                                filter: `blur(0px)`,
                                opacity: 1
                            }}
                            transition={{
                                delay: 0.3,
                                ease: easeInOut
                            }}>
                            <Image src={current.image} fill={true} alt="" />
                        </DetialsCardImage>

                        <DetailsHeading>
                            <motion.h2
                                className="font-bold text-xl flex items-center gap-x-2" 
                                layoutId={`project-title-${current.title}`}
                                transition={{
                                    ease: easeInOut
                                }}
                            >{current.title}
                            
                            {current.github != "" && 
                            (
                            <Link href={current.github} target="_blank"
                                className="flex justify-center items-center text-neutral-400 hover:text-cyan-400"
                            >
                                <GithubIcon height={18} width={18} className="" />
                            </Link>
                            )}
                            <Link href={current.live} target="_blank"
                                className="flex justify-center items-center text-neutral-400 hover:text-cyan-400"
                            >
                                <ExternalLink height={18} width={18} className="" />
                            </Link>
                            </motion.h2>
                            <CardLink className="hover:text-white">
                                Details
                                <ArrowRight className="h-4 w-4" />
                            </CardLink>
                        </DetailsHeading>

                        <Stacks title={current.title} className="justify-start" stacks={current.stacks} />

                        <DetialsCardDescription layoutId={`project-desc-${current.title}`}>
                            {current.description}
                        </DetialsCardDescription>

                        <DetialsCardContent className="mask-b-from-80%"
                            initial ={{
                                filter: `blur(10px)`,
                                opacity: 0
                            }}

                            animate={{
                                filter: `blur(0px)`,
                                opacity: 1
                            }}

                            transition={{
                                delay: 0.2
                            }}
                        >
                        {current.contents?.map((content, idx) => {
                                return (
                                    <Content key={idx} content={content} />
                        )
                        })}
                        </DetialsCardContent>
                    </DetialsCardLayout>
                )}

            <div className="text-neutral-400 flex justify-between w-7/8 md:w-1/2">
                    <p className="text-xl font-bold py-2 shadow-sm text-white">Projects</p>
                    <Link href={"/projects"}
                        className="flex items-center hover:text-white text-sm"
                        >View all <ArrowRight />
                    </Link>
            </div>
             <div className={cn("pt-8 w-7/8 grid grid-cols-1 gap-y-4",
                "md:w-1/2 md:grid-cols-2 md:gap-x-4"
             )}>
                {projects.map((project) => {
                    return (
                        <Project
                            onClick={() => setCurrent(project)}
                            key={project.title} {...project} />
                    )
                })}
            </div>

        </Container>
    )
}

export type ProjectProps = {
    title: string;
    description: string;
    image: string;
    stacks : Stack[];
    live: string;
    link: string;
    github: string;
    contents?: string[];
    onClick?: () => void
}

export const Project = ({title, description,image, stacks, live, link, github, onClick}: ProjectProps) => {
    return (
        <Container onClick={onClick}
          className="bg-neutral-800 gap-y-4 items-start p-6 rounded-xl w-full border border-neutral-600 cursor-pointer">
            <div className="flex justify-center itmes-center gap-2">
                <Link aria-disabled className="font-bold" href={link}>{title}</Link>
                {github != "" &&
                (
                    <Link href={github} target="_blank"
                        className="flex justify-center items-center text-neutral-400 hover:text-cyan-400"
                    >
                    <GithubIcon height={18} width={18} className="" />
                </Link>
                )
                }
                <Link href={live} target="_blank"
                    className="flex justify-center items-center text-neutral-400 hover:text-cyan-400"
                >
                    <ExternalLink height={18} width={18} className="" />
                </Link>
            </div>
            <p className="text-neutral-400 text-sm">{description}</p>
            <div className="h-40 w-full bg-white relative rounded-sm">
                <Image src={image} fill={true} className="object-fill rounded-sm" alt="" />
            </div>
            <Stacks stacks={stacks} className="text-xs justify-normal gap-1" />
            {/* <CustomLink name="Details" href="" className=" text-cyan-400 text-sm hover:text-cyan-300"><ArrowRight className="h-4 w-4" /></CustomLink> */}
        </Container>
    )
}

export const Content = ({content}: {content: string}) => {
    return (
        <div className="flex p-2 w-full text-sm items-center">
                <div className="w-2 h-2  bg-neutral-400 rounded-full mr-2"></div>
                <span className="ml-2 w-7/8 flex flex-wrap">{content}</span>
        </div>
    )
}
