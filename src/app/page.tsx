import { Navbar } from "@/components/ui/navbar";
import { RadialGlass } from "@/components/ui/radial-glass";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import {
  Devices,
  DribbbleLogo,
  EnvelopeSimple,
  FilePdf,
  GithubLogo,
  LinkedinLogo,
  LinkSimple,
  Notebook,
  PenNibStraight,
  Smiley,
  SunHorizon,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Orbitron } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const socials = {
  dribble: {
    url: "https://dribbble.com/tanvirbhachu",
    icon: DribbbleLogo,
  },
  github: {
    url: "https://github.com/tanvirbhachu",
    icon: GithubLogo,
  },
  linkedin: {
    url: "https://www.linkedin.com/in/tanvir-bhachu",
    icon: LinkedinLogo,
  },
  x: {
    url: "https://x.com/tanvir_bhachu",
    icon: XLogo,
  },
  mail: {
    url: "mailto:tbhachu2@gmail.com",
    icon: EnvelopeSimple,
  },
  resume: {
    url: "/tanvir_bhachu_resume.pdf",
    icon: FilePdf,
  },
};

function Hero() {
  return (
    <div id="#home" className="border-b border-neutral-800 h-full">
      <RadialGlass />

      <div className="absolute inset-0 p-5 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-sm font-medium opacity-80 mb-3 uppercase animate-in fade-in-0 duration-1000">
            Full-stack Web Developer
          </h1>

          <TextGenerateEffect
            words="Full-stack Web Developer, founder, and designer."
            className={cn(
              orbitron.className,
              "text-4xl md:text-6xl font-bold uppercase text-left max-w-7xl"
            )}
          />

          <p className="text-base max-w-xl text-left mt-8 opacity-80 animate-in fade-in-0 duration-1000">
            Hey, I&apos;m Tanvir, a web developer and designer. I&apos;m the
            creator of Jadebook, a web platform for journaling and growth.
            I&apos;ve been coding ever since I was 12 years old so I&apos;ve
            been doing this for a while now.
          </p>

          <div className="flex gap-4 mt-8">
            {(["x", "linkedin", "github"] as (keyof typeof socials)[]).map(
              (social) => {
                const Icon = socials[social].icon;

                return (
                  <Link
                    key={social}
                    href={socials[social].url}
                    className="text-neutral-400 hover:text-neutral-200 transition-all ease-in-out"
                  >
                    <Icon size={32} weight="duotone" />
                    <span className="sr-only">{social}</span>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    name: "Jadebook",
    description:
      "This is my biggest project ever. I create a web journal that has device sync, encryption, AI features, auth, etc. Basically, full SAAS app and anyone can use it.",
    date: "2024",
    link: "https://jadebook.app/",
    icon: PenNibStraight,
  },
  {
    name: "AstroWeather",
    description:
      "Created a cool little weather web app. I was practising my UI skills and learning how to display a ton of data in a user-friendly way.",
    date: "2024",
    link: "https://astroweather.tanvirbhachu.dev/",
    icon: SunHorizon,
  },
  {
    name: "HyperJournal",
    description:
      "I wanted to try rich text editing mainly for journalizing reasons. This project eventually led to the creation of Jadebook.",
    date: "2024",
    link: "https://hyperjournal.tanvirbhachu.dev/",
    icon: Notebook,
  },
  {
    name: "New Tab",
    description:
      "Created this back when customizable new tabs weren't really a thing. You can still look at it but I wasn't the greatest at UI back then.",
    date: "2021",
    link: "https://newtab.tanvirbhachu.dev/",
    icon: Devices,
  },
  {
    name: "Social Platform",
    description:
      "A very old project. I want to try creating my own social media platform just to try out some ideas. Turns out, it's very difficult and expensive.",
    date: "2021",
    link: null,
    icon: Smiley,
  },
] as const;

const work = [
  {
    name: "Omny Studio",
    description:
      "A really cool platform for enterprise podcasting. Their pretty popular in the podcasting community and rightfully so.",
    date: "2022 - 2024",
    link: "https://omnystudio.com/learn",
  },
  {
    name: "Triton Digital",
    description:
      "Parent company of Omny Studio. I got to work on their ad platform and learnt a lot about enterprise-level development, type-safety, and more.",
    date: "2023 - 2024",
    link: "https://tritondigital.com/",
  },
] as const;

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={cn(className, "flex")}>
      <Link
        href={href}
        className="group flex items-center text-sm font-medium text-neutral-200 transition hover:text-emerald-500"
      >
        <Icon className="h-6 w-6 flex-none fill-neutral-400 transition group-hover:fill-emerald-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function About() {
  return (
    <div id="about" className="mt-16 sm:mt-32 mx-auto w-full max-w-7xl">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
            I’m Tanvir Bhachu. I live in Australia, where I basically do
            everything
          </h2>
          <div className="mt-10 space-y-7 text-base text-neutral-300">
            <p>
              My journey started when I had to rebuild the PlayStation website
              from scratch (in my own design) for a school project and stumbled
              upon my passion for web development. Now, I use some pretty cool
              tech like React, Next.js, TailwindCSS, Framer Motion, etc, to
              build functional, performant and really good looking websites.
            </p>
            <p>
              I&apos;ve mostly worked on the frontend, creating landing pages,
              platforms, dashboard or just some cool, general stuff. But
              I&apos;ve also played around with databases, servers, APIs,
              virtual machines etc.
            </p>
            <p>
              Outside of tech, I&apos;m pretty much just out there in the world
              doing random side quests. Like fishing, traveling, creating a very
              money-unfriendly Lego collection or taste-testing every restaurant
              in Perth, Australia.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={socials.x.url} icon={socials.x.icon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href={socials.github.url}
              icon={socials.github.icon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href={socials.linkedin.url}
              icon={socials.linkedin.icon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href={socials.mail.url}
              icon={socials.mail.icon}
              className="mt-8 border-t border-neutral-700/40 pt-8"
            >
              tbhachu2@gmail.com
            </SocialLink>
            <SocialLink
              href={socials.resume.url}
              icon={socials.resume.icon}
              className="mt-8 border-t border-neutral-700/40 pt-8"
            >
              Resume
            </SocialLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="w-full text-white">
      <div className="fixed top-5 w-full pointer-events-none z-50">
        <Navbar />
      </div>

      <div className="relative h-[90vh] w-full">
        <Hero />
      </div>

      <div id="projects" className="max-w-7xl mx-auto py-36 space-y-8 px-5">
        <h2 className="text-4xl font-bold uppercase max-w-3xl">
          Things I&apos;ve worked on
        </h2>
        <p className="text-neutral-400 max-w-lg pb-8">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Not all of them are open-source, but
          they do show what I can do :)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <Link
              target="_blank"
              key={project.name}
              href={project.link || "#projects"}
              className={cn(
                "p-6 rounded-xl relative transition-all ease-in-out group",
                project.link ? "" : "pointer-events-none"
              )}
            >
              <div className="absolute inset-0 -z-10 bg-neutral-950 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-in zoom-in-90 fade-in-0 transition-all ease-in-out"></div>

              <div className="aspect-square w-fit bg-neutral-800 rounded-lg border border-neutral-700 p-2.5">
                <project.icon size={24} weight="duotone" />
              </div>

              <div className="flex gap-2 items-center mt-6">
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="opacity-80 text-sm">({project.date})</p>
              </div>

              <p className="opacity-60 text-sm font-medium mt-1">
                {project.description}
              </p>

              <div className="mt-6">
                {project.link ? (
                  (() => {
                    const domain = new URL(project.link).hostname;

                    return (
                      <p className="group-hover:text-emerald-500 text-neutral-200 transition-all ease-in-out inline-flex items-center text-sm gap-2 font-medium">
                        <LinkSimple size={14} weight="duotone" />
                        {domain}
                      </p>
                    );
                  })()
                ) : (
                  <p className="opacity-80 text-sm font-medium text-amber-500">
                    No longer available
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div id="work" className="bg-neutral-950 isolate">
        <div className="max-w-7xl mx-auto py-36 space-y-8 px-5">
          <h2 className="text-4xl font-bold uppercase max-w-3xl">
            My experience in the industry
          </h2>
          <p className="text-neutral-400 max-w-lg pb-8">
            I&apos;ve worked in the industry for a while now and I&apos;ve had
            the opportunity to work with some incredible people on some
            incredible projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {work.map((project) => (
              <Link
                target="_blank"
                key={project.name}
                href={project.link || "#projects"}
                className={cn(
                  "p-6 rounded-xl relative transition-all ease-in-out group",
                  project.link ? "" : "pointer-events-none"
                )}
              >
                <div className="absolute inset-0 -z-10 bg-black rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-in zoom-in-90 fade-in-0 transition-all ease-in-out"></div>

                <div className="flex gap-2 items-center">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="opacity-80 text-sm">({project.date})</p>
                </div>

                <p className="opacity-60 text-sm font-medium mt-1">
                  {project.description}
                </p>

                <div className="mt-6">
                  {project.link ? (
                    (() => {
                      const domain = new URL(project.link).hostname;

                      return (
                        <p className="group-hover:text-emerald-500 text-neutral-200 transition-all ease-in-out inline-flex items-center text-sm gap-2 font-medium">
                          <LinkSimple size={14} weight="duotone" />
                          {domain}
                        </p>
                      );
                    })()
                  ) : (
                    <p className="opacity-80 text-sm font-medium text-amber-500">
                      No longer available
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div id="more" className="max-w-7xl mx-auto py-36 space-y-8 px-5">
        <About />
      </div>
    </div>
  );
}
