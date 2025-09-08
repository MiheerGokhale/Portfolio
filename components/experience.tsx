import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

export const Experiences = () => {
    return (
        <Container className="pt-12">
            <h2 className="w-7/8 md:w-1/2 text-xl text-white font-bold pb-6">Experience</h2>
            <div className={cn("w-7/8 border-l border-neutral-700",
                "md:w-1/2"
            )}>
                <Experience {...experiences[0]} />
                <Experience {...experiences[0]} />
            </div>
        </Container>
    )
}

type Experience = {
    role: string;
    company: string;
    date: string;
    description: string;
}

export const Experience = ({role, date, company, description}: Experience) => {
    return (
        <Container className="text-sm items-start text-neutral-400 gap-1 mt-1 pb-6 pl-6
            relative">
            <div className="flex">
                <h2 className="text-white">{role}</h2>
                <div className="flex justify-center items-center px-1">
                    <span className="flex justify-center items-center w-1 h-1 bg-neutral-400 rounded-full"></span>
                </div>
                <span>{company}</span>
                <div className="absolute flex justify-center top-2 left-3 items-center h-5 w-5 text-cyan-400 bg-neutral-700 p-1 rounded-full">
                    <Briefcase className="" />
                </div>
            </div>
            <span>{date}</span>
            <p>{description}</p>
        </Container>
    )
}

const experiences: Experience[] = [
    {role: "Software Engineer Intern", company: "Compnay A", date: "Nov 2024 – Present", description: "Built automation APIs and improved performance."}
];