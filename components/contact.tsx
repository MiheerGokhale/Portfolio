import { Container } from "@/components/container";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { EmailButton } from "./email-button";

export const Contact = () => {
    

    return (
        <Container className="mt-12">
            <h2 className="text-xl font-bold text-center pb-4">Contact</h2>
            <div className={cn("flex justify-between bg-neutral-800 border border-neutral-700 p-3 rounded-lg",
                "flex-col md:flex-row w-7/8 md:w-1/2 py-6 px-4"
            )}>
                <Container className={cn("text-sm text-shadow-sm gap-y-2",
                    "md:items-start pb-4 md:pb-0"
                )}>
                    <p className="text-neutral-400 text-center md:text-start">Prefer email. I usually reply within a day.</p>
                    <Link href={""}
                        className="text-cyan-400 hover:underline">
                        miheergokhale24@gmail.com
                    </Link>
                </Container>
                <div className="flex justify-between items-center ">
                    <EmailButton text="miheergokhale24@gmail.com" />
                    <CopyButton text="miheergokhale24@gmail.com" />
                </div>
            </div>
        </Container>
    )
}