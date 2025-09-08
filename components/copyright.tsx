import { cn } from "@/lib/utils"

export const Copyright = () => {
    return (
        <div className={cn("flex justify-center items-center py-12 text-neutral-400 text-sm",
            ""
        )}>
            <span className="w-7/8 md:w-1/2">
                © 2025 Miheer Gokhale.
            </span>
        </div>
    )
}