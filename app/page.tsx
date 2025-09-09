import { Achievements } from "@/components/achievements";
import { Blogs } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Copyright } from "@/components/copyright";
import { Experiences } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="min-h-screen pt-40  bg-neutral-900 text-white ">
      <Hero />
      <Projects href="/projects" />
      {/* <Blogs /> */}
      {/* <Experiences /> */}
      <Achievements />
      <Contact />
      <Copyright />
    </div>
  );
}
