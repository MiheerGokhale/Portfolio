import { AchievementCardProps } from "@/components/achievements";
import { Award } from "lucide-react";

export const achievements: AchievementCardProps[] = [
    {
        times: "2",
        title: "Certifications",
        Icon: Award,
        description: "All the certifications till now.",
        achievements: [
            {
                title: "Java With Dsa and System Design, PW Skills",
                link: "https://pwskills.com/learn/certificate/f99a45e5-0a99-4296-b915-f8ba283dfb32/"
            },
            {
                title: "Building MicroServices in Java for Cloud, PW Skills",
                link: "https://pwskills.com/learn/certificate/d445ea47-923b-4c27-8911-354f9b1a68a1/"
            }
        ]
    },
    
];