"use client";

import { 
    Details,
    DetailsHeading,
    CardLink,
    DetailsCard, 
    DetialsCardLayout,
    DetialsCardImage,
    DetialsCardDescription,
    DetialsCardContent
} from "@/components/details";
import { Stacks } from "@/components/tech-stack";
import { ArrowLeft, ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { useState } from "react";
import { Content, ProjectProps } from "@/components/projects";
import Image from "next/image";
import { useOutSideClick } from "@/lib/hooks";
import { easeInOut, motion } from "motion/react";
import Link from "next/link";


const ProjectsHome = () => {
    const [current, setCurrent] = useState<ProjectProps | null>(null);
    const ref = useOutSideClick<HTMLDivElement>(() => setCurrent(null));
    
    return (    
        <div className="min-h-screen pt-40 bg-neutral-900 text-white flex justify-center">
            <Details className="relative">
                <DetailsHeading>
                    <span className="text-3xl font-bold">Projects</span>
                    <CardLink
                        href="/" 
                        className="hover:text-white">
                        <ArrowLeft className="h-4 w-4" />
                        Back  
                    </CardLink>
                </DetailsHeading>
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
                    ref={ref} className="w-7/8 h-7/8 md:h-fit  md:w-1/4 fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
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
                                className="font-bold text-xl" 
                                layoutId={`project-title-${current.title}`}
                                transition={{
                                    ease: easeInOut
                                }}
                            >{current.title}</motion.h2>
                                <Link href={current.github} target="_blank"
                                    className="flex justify-center items-center text-neutral-400 hover:text-cyan-400"
                                 >
                                    <GithubIcon height={18} width={18} className="" />
                                </Link>
                                <Link href={current.live} target="_blank"
                                    className="flex justify-center items-center text-neutral-400 hover:text-cyan-400"
                                >
                                    <ExternalLink height={18} width={18} className="" />
                                </Link>
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
                
                {/* All projects */}
                {projects.map((project) => {
                    return (
                        <DetailsCard layoutId={`project-${project.title}`} key={project.title} onClick={() => setCurrent(project)} className="cursor-pointer">
                            <CardLink layoutId={`project-title-${project.title}`} className="hover:underline font-bold text-xl text-white">{project.title}</CardLink>
                            <motion.p layoutId={`project-desc-${project.title}`} className="text-neutral-400">{project.description}</motion.p>
                            <Stacks title={project.title} stacks={project.stacks} />
                        </DetailsCard>
                    );
                })}
            </Details>
        </div>
    )
}

export default ProjectsHome;