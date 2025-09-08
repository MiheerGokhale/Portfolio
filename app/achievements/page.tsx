"use client";

import { Achievement } from "@/components/achievements";
import { CardLink, Details, DetailsCard, DetailsHeading } from "@/components/details";
import { achievements } from "@/lib/data/achievements";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {  easeInOut, motion } from "motion/react";

const AchievementsHome = () => {
    const [current, setCurrent] = useState<string>("");

    return (
        <div className="min-h-screen pt-40 bg-neutral-900 text-white flex justify-center">
            <Details>
                <DetailsHeading>
                     <span className="text-lg md:text-3xl font-bold">Achievements</span>
                    <CardLink
                        href="/" 
                        className="hover:text-white">
                        <ArrowLeft className="h-4 w-4" />
                        Back  
                    </CardLink>
                </DetailsHeading>

                {/* Blogs */}
                   {achievements.map((achievement) => {
                    return (
                        <DetailsCard 
                            onClick={() => setCurrent(
                                current === achievement.title ? "" : achievement.title // toggle
                            )}
                          key={achievement.title}  className="cursor-pointer gap-y-0">
                            <DetailsHeading className="w-full md:text-2xl font-bold">
                                <span className="">{achievement.title}</span>
                                <span className="flex justify-center items-center gap-x-2 text-neutral-400">
                                    {achievement.times}
                                        {current == achievement.title ? 
                                        <>
                                          <ChevronUp />
                                        </> 
                                        : 
                                        <>
                                            <ChevronDown />
                                         </>
                                        }
                                </span>
                            </DetailsHeading>
                            
                            {current == achievement.title && (
                                    <motion.div
                                        initial={{
                                            filter: `blur(10px)`,
                                            opacity: 0
                                        }}

                                        animate={{
                                            filter: `blur(0px)`,
                                            opacity: 1
                                        }}

                                        transition={{
                                            delay: 0.2,
                                            ease: easeInOut
                                        }}
                                        className="w-full text-sm md:text-lg text-neutral-400 font-bold">
                                        {achievement.achievements?.map((achievement) => {
                                            return (
                                                <Achievement key={achievement.title} {...achievement} />
                                            )
                                        })}
                                    </motion.div>
                                        )
                            }
                        </DetailsCard>
                    )
                })}
            </Details>
        </div>
    )
}

export default AchievementsHome;