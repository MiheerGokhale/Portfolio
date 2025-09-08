import { Container } from "@/components/container";
import { TechStack } from "@/components/tech-stack";
import { cn } from "@/lib/utils";

export const Hero = ({className} : {className?: string}) => {
    return (
        <Container className={cn("gap-y-8 pb-8 mt-6",className)}>
            <div className="bg-neutral-800 py-4 px-8 rounded-xl border border-neutral-700 w-7/8 md:w-1/2 text-sm text-center">
                <p className="text-neutral-400 text-shadow-sm">Engineering clean, scalable solutions that balance performance, accessibility, and great user experience.</p>
            </div>
            <TechStack />
        </Container>
    )
}