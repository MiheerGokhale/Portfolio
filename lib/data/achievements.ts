import { AchievementCardProps } from "@/components/achievements";
import { Award, Code } from "lucide-react";

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
    {
        times: "220+",
        title: "Problem Solving",
        Icon: Code,
        description: "",
        achievements: [
            {
                title: "Solve more than 220+ question in leetcode.",
                link: "https://leetcode.com/u/Miheer_Gokhale/"
            },
            {
                title: "Highest contest rating of 1459",
                link: "https://leetcode.com/u/Miheer_Gokhale/"
            }
        ]
    }
    
];