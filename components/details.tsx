import { cn } from "@/lib/utils";
import React from "react";
import { motion, MotionProps } from "motion/react";

import { Slot } from "@radix-ui/react-slot";

// Wrap Slot with motion and extend its props with MotionProps
const MotionSlot = motion<React.ComponentProps<typeof Slot>>(Slot);

export const Details = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean } & MotionProps> (({className, asChild = false, ...props}, ref) => {
    const Comp:React.ElementType = asChild ? MotionSlot: motion.div;

    return (
        <Comp
            ref={ref}
            className={cn("flex flex-col w-7/8 md:w-1/2",
                className
            )}
            {...props}
            />    
    )
});

Details.displayName = "Details";

export const DetailsHeading = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean } & MotionProps> (({className, asChild = false, ...props}, ref) => {
    const Comp:React.ElementType = asChild ? MotionSlot: motion.div;

    return (
        <Comp ref={ref}
            className={cn("flex justify-between py-1 my-1",
                className
            )}
            {...props} 
        />
    )
});

DetailsHeading.displayName = "DetailsHeading";

export const CardLink = React.forwardRef<HTMLAnchorElement, React.ComponentProps<"a"> & { asChild?: boolean } & MotionProps> (({className, asChild = false, ...props}, ref) => {
    const Comp:React.ElementType = asChild ? MotionSlot: motion.a;

    return (
        <Comp  ref={ref}
            className={cn("text-neutral-400 text-sm flex justify-center items-center gap-x-1",
                className
            )}
            {...props}
        />
    )
});

CardLink.displayName = "CardLink";

export const DetailsCard = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean } & MotionProps> (({className, asChild = false, ...props}, ref) => {
    const Comp:React.ElementType = asChild ? MotionSlot: motion.div;

    return (
        <Comp ref={ref}
            className={cn("w-full flex flex-col p-4 gap-y-4 my-2 bg-neutral-800 items-start rounded-lg border border-neutral-700",
                className
            )} 
            {...props}
        />
    )
});

DetailsCard.displayName = "DetialsCard";

export const DetialsCardLayout = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & {asChild?: boolean} & MotionProps>(({className, asChild = false, ...props}, ref) => {
    const Comp:React.ElementType = asChild ? MotionSlot: motion.div;

    return <Comp ref={ref}
        className={cn("flex flex-col p-4 gap-y-3 rounded-lg bg-neutral-800",
            className
        )}

        {...props}
     /> 
})

DetialsCardLayout.displayName = "DetialsCardLayout";

export const DetialsCardImage = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & {asChild?: boolean} & MotionProps>(({className, asChild = false, ...props}, ref) => {
    const Comp:React.ElementType = asChild ? MotionSlot: motion.div;

    return <Comp ref={ref}
        className={cn("h-55 w-full bg-white relative rounded-sm",
            className
        )}

        {...props}
     /> 
})

DetialsCardImage.displayName = "DetialsCardImage";

export const DetialsCardDescription = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & {asChild?: boolean} & MotionProps>(({className, asChild = false, ...props}, ref) => {
    const Comp:React.ElementType = asChild ? MotionSlot: motion.div;

    return <Comp ref={ref}
        className={cn("w-full text-sm  text-neutral-400 rounded-sm",
            className
        )}

        {...props}
     /> 
})

DetialsCardDescription.displayName = "DetialsCardDescription";

export const DetialsCardContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & {asChild?: boolean} & MotionProps>(({className, asChild = false, ...props}, ref) => {
    const Comp:React.ElementType = asChild ? MotionSlot: motion.div;

    return <Comp ref={ref}
        className={cn("h-60 w-full overflow-y-scroll text-neutral-400 rounded-sm",
            "[&::-webkit-scrollbar-track]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:bg-neutral-400 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar]:rounded-lg",
            className
        )}

        {...props}
     /> 
})

DetialsCardContent.displayName = "DetialsCardContent";