import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

type Social = {
  label: string
  href: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}


const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/MiheerGokhale", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/miheer-gokhale-552b32253", Icon: Linkedin },
  { label: "Twitter/X", href: "https://x.com/miheer_27", Icon: Twitter },
  { label: "Email", href: "mailto:miheergokhale24@gmail.com", Icon: Mail },
]

export const Social = ({className}: {className?: string}) => {
    return (
        <div className={cn("flex justify-between w-full",
            className
        )}>
            {socials.map(({ label, href, Icon }) => {
                return (
                    <Link key={`Icon-${label}`} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition">
                        <Icon className='size-5' />
                    </Link>
                )
            })}
        </div>
    )
}