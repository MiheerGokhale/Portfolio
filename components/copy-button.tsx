"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

type CopyButton = {
    text: string;
}

export const CopyButton = ({text}:CopyButton) => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        setCopied(true);
        navigator.clipboard.writeText(text);
        
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <>
            {copied ? (
                <Button onClick={handleCopyEmail} className="hover:bg-cyan-400 hover:text-black border border-neutral-700 transition-all duration-200 ease-in-out ml-3" >
                    <Copy className="mr-2" />
                    <span>Copied</span>
                 </Button>
            ) : (
                <Button onClick={handleCopyEmail} className="hover:bg-cyan-400 hover:text-black border border-neutral-700 transition-all duration-200 ease-in-out ml-3" >
                    <Copy className="mr-2" />
                    <span>Copy email</span>
                </Button>
            )}
        </>
    )
}