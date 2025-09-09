import { ProjectProps } from "@/components/projects";

export const projects:ProjectProps[] = [
    {
        title: "VibeSync",
        description: "VibeSync is a dynamic full-stack web app that creates music playlists tailored to your mood and local weather.",
        image: "/vibesync.png",
        stacks: [
            {name: "Next.js"}, {name: "Tailwind"}, {name: "PostgreSql"}, {name: "NextAuth"}, {name: "Prisma"}, {name: "Zustand"}
        ],
        live: "https://vibesync-kappa.vercel.app/",
        contents: [
            "Developed a full-stack web application that generates personalized Spotify playlists based on current weather (via OpenWeather API) and user-selected mood.",
            "Integrated authentication using NextAuth.js , supporting bothtraditional form login and OAuth 2.0 (Spotify, Google).",
            "Leveraged Spotify Web API to dynamically generate and manage user playlists.",
            "Built additional features including: Playlist Storage & Viewing: Allows users to save and revisit previously generated playlists. Public Sharing: Enables users to share playlists via a unique public URL."
        ],
        github: "https://github.com/MiheerGokhale/vibesync",
        link: "/"
    },
    {
        title: "Portfolio",
        description: "A modern and responsive personal portfolio built with Next.js and Tailwind CSS.",
        image: "/portfolio.png",
        stacks: [
            {name: "Next.js"}, {name: "Tailwind"}, {name: "Motion"}
        ],
        contents: [
            "Designed and developed a sleek, responsive portfolio website to showcase projects, skills, and achievements.",
            "Implemented smooth animations and transitions using Framer Motion for an engaging user experience.",
            "Structured the project with Next.js for optimized performance, SEO, and scalability.",
            "Built reusable UI components with Tailwind CSS, ensuring consistency and a clean modern design."
        ],
        live: "https://portfolio-xi-one-vxnd3j77c7.vercel.app/",
        github: "",
        link: "/"
    }
];