import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink} from "lucide-react";
import { CustomLink } from "./link";
import { achievements } from "@/lib/data/achievements";
import Link from "next/link";

export const Achievements = ({className}: {className?: string}) => {
    return (
        <Container className="pt-12">
            <div className={cn("text-neutral-400 flex justify-between w-7/8",
                "md:w-1/2"
            )}>
                    <p className="text-xl font-bold py-2 shadow-sm text-white">Achievements</p>
                    <CustomLink name="View all" href="/achievements" className="hover:text-white text-sm"><ArrowRight className="h-4 w-4" /></CustomLink>
            </div>
            <div className={cn("w-7/8 grid grid-cols-1 gap-y-3",
                "md:w-1/2 md:grid md:grid-cols-3 md:gap-x-3",
                className
            )}>
                {achievements.map((achievement, index) => {
                    return <AchievementCard key={index} {...achievement} />
                })}
            </div>

        </Container>
    )
}

export type AchievementCardProps = {
    times: string;
    title: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
    achievements?: AchievementProps[]
}

export const AchievementCard = ({times, title, Icon} : AchievementCardProps) => {
    return (
        <div className="flex justify-start items-center gap-2 text-sm bg-neutral-800 pl-4 rounded-lg py-3 border border-neutral-700">
            <div className="flex justify-center items-center bg-black p-2 rounded-lg border border-neutral-700">
                <Icon className="text-cyan-400" fontSize={24} />
            </div>
            <div className="flex flex-col items-start gap-y-1 text-white text-shadow-sm">
                <span className="font-bold">{times}</span>
                <p className="text-neutral-400">{title}</p>
            </div>
        </div>
    )
}

type AchievementProps = {
    title: string;
    link: string;
}

export const Achievement = ({title, link}: AchievementProps) => {
    return (
        <div className="flex justify-between p-2 w-full">
            <div className="w-7/8 flex items-center">
                <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                <span className="pl-2">{title}</span>
            </div>
            <Link href={link} target="_blank"
                    className="flex justify-center items-center text-neutral-400 hover:text-cyan-400"
                >
                    <ExternalLink height={18} width={18} className="" />
            </Link>
        </div>
    )
}