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
        description: "This portfolio website is a sleek, showcasing my projects, skills, and achievements with a modern UI and smooth animations.",
        image: "/portfolio.png",
        stacks: [
            {name: "Next.js"}, {name: "Tailwind"}, {name: "Motion"}
        ],
        live: "",
        github: "",
        link: "/"
    }
];