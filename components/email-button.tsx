"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

type EmailButton = {
    text: string;
}

export const EmailButton = ({text}: EmailButton) => {
    return (
        <Button onClick={() => window.location.href = `mailto:${text}`}
                     className="bg-cyan-400 text-black border border-black hover:bg-cyan-500 transition-all duration-200 ease-in-out " >
                        <Mail className="mr-2" />                        
                        <span className="font-medium">Email me</span>
        </Button>
    )
}