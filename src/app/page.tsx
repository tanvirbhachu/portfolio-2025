import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "@/components/ui/navbar";
import { RadialGlass } from "@/components/ui/radial-glass";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  Auth0,
  Biomejs,
  Docker,
  DrizzleORM,
  Figma,
  Git,
  GraphQL,
  JavaScript,
  MaterialUI,
  MongoDB,
  Motion,
  Neon,
  Netlify,
  Nextjs,
  Nodejs,
  Nx,
  PlanetScale,
  PostgreSQL,
  PostHog,
  Prisma,
  RadixUI,
  Railway,
  ReactRouter,
  ReactSvg,
  Redis,
  Remix,
  Sanity,
  shadcnui,
  Storybook,
  Stripe,
  Supabase,
  TailwindCSS,
  Turso,
  TypeScript,
  Vercel,
} from "@/lib/icons";
import { socials } from "@/lib/social";
import { cn } from "@/lib/utils";
import {
  Devices,
  LinkSimple,
  Notebook,
  PenNibStraight,
  Smiley,
  SunHorizon,
  CloudLightning,
  ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";
import { Orbitron } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

function Hero() {
  return (
    <div id="#home" className="h-full">
      <div className="absolute inset-0 pointer-events-none bg-black">
        <RadialGlass />
      </div>

      <div className="p-5 py-42 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-xs font-medium opacity-80 mb-3 uppercase animate-in fade-in-0 duration-1000">
            Full-stack Web Developer
          </h1>

          <TextGenerateEffect
            words="A Developer who does stuff on a fairly regular basis"
            className={cn(
              orbitron.className,
              "text-4xl md:text-6xl font-bold uppercase text-left max-w-7xl"
            )}
          />

          <p className="text-base max-w-xl text-left mt-8 opacity-80 animate-in fade-in-0 duration-1000">
            Hey, I'm Tanvir, a full-stack web developer and designer. As the
            creator of Jadebook, a cutting-edge journaling SaaS, I bring 8 years
            of deep experience building robust and intuitive web platforms. I've
            been immersed in code since I was 13, constantly pushing the
            boundaries of what's possible.
          </p>
        </div>
      </div>
    </div>
  );
}

const projects = [
    {
    name: "Jadebook Open Source",
    description:
      "My first proper, open source project. It's built on NextJS and Supabase, it's got PWA support and it can be quick deployed to Vercel.",
    date: "2025",
    link: "https://github.com/Jadebook-Journal/jadebook-oss",
    icon: PenNibStraight,
  },
  {
    name: "Jadebook",
    description:
      "This is my biggest project ever. I create a web journal that has device sync, encryption, AI features, auth, etc. Basically, a full SAAS app.",
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
    name: "Ecommerce site",
    description:
      "Built a ecommerce site using MedusaJS and hosted on Railway. Just wanted to try out some new tech and see how it works.",
    date: "2024",
    link: null,
    icon: ShoppingCart,
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
  {
    name: "Storm",
    description:
      "A project I did with a friend for a national competition. It used machine learning to predict the trajectories of hurricanes. We got 2nd place.",
    date: "2020",
    link: null,
    icon: CloudLightning,
  },
] as const;

const work = [
  {
    name: "Omny Studio",
    description:
      "A highly regarded platform pivotal to the enterprise podcasting community, where I contributed to a production-level content platform.",
    date: "2022 - 2024",
    link: "https://omnystudio.com/learn",
  },
  {
    name: "Triton Digital",
    description:
      "The parent company of Omny Studio, here I gained deep expertise in enterprise ad platform development, emphasizing robust type-safety and scalable architecture.",
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

function Projects() {
  return (
    <div id="projects" className="max-w-7xl mx-auto relative">
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full">
          <div className="w-full h-full border-r"></div>
          <div className="w-full h-full border-r hidden lg:block"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {projects.map((project) => (
          <Link
            target="_blank"
            key={project.name}
            href={project.link || "#projects"}
            className={cn(
              "p-6 relative transition-all ease-in-out group border-b flex flex-col",
              project.link ? "cursor-pointer" : "pointer-events-none"
            )}
          >
            <div className="aspect-square w-fit">
              <project.icon size={24} weight="duotone" />
            </div>

            <div className="flex gap-2 items-center mt-6">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="opacity-80 text-sm">({project.date})</p>
            </div>

            <p className="opacity-60 text-xs font-medium mt-1 grow">
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

            <div className="absolute inset-0 -z-10 bg-black opacity-0 group-hover:opacity-100 group-hover:animate-in zoom-in-90 fade-in-0 transition-all ease-in-out"></div>
          </Link>
        ))}

        <div className="flex w-full h-full min-h-54 border-b relative overflow-hidden">
          <div className="absolute inset-0">
            <AuroraBackground>
              <div className="size-full"></div>
            </AuroraBackground>
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div id="work" className="max-w-7xl mx-auto relative">
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="w-full h-full border-r"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
        {work.map((job) => (
          <Link
            target="_blank"
            key={job.name}
            href={job.link || "#projects"}
            className={cn(
              "p-6 relative transition-all ease-in-out group border-b flex flex-col",
              job.link ? "cursor-pointer" : "pointer-events-none"
            )}
          >
            <div className="flex gap-2 items-center">
              <h3 className="text-lg font-bold">{job.name}</h3>
              <p className="opacity-80 text-sm">({job.date})</p>
            </div>

            <p className="opacity-60 text-xs font-medium mt-1 grow">
              {job.description}
            </p>

            <div className="mt-6">
              {job.link ? (
                (() => {
                  const domain = new URL(job.link).hostname;

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

            <div className="absolute inset-0 -z-10 bg-black opacity-0 group-hover:opacity-100 group-hover:animate-in zoom-in-90 fade-in-0 transition-all ease-in-out"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="work" className="max-w-7xl mx-auto relative">
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="w-full h-full border-r"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
        <div className="p-6 border-b flex flex-col">
          <div className="space-y-7 text-sm text-neutral-300">
            <p>
              My path to web development started at 13, recreating the
              PlayStation website for a school assignment. Since then, I’ve
              mastered modern tech like React, Next.js, and TailwindCSS to build
              applications that are not just performant and functional, but also
              look really nice.
            </p>
            <p>
              I'm mainly a frontend developer, I’ve designed a bunch of UIs,
              from sleek landing pages to intricate platforms. But my expertise
              extends to backend systems, including databases, server
              management, and API design.
            </p>
            <p>
              Beyond the screen, I like completing <i>"side quests"</i> –
              whether it's fishing, exploring new destinations, curating a
              significant Lego collection, or playing board games. Because life
              should be enjoyed
            </p>
          </div>
        </div>
        <div className="p-6 border-b flex flex-col">
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

const skills = {
  main: [
    {
      icon: Nextjs,
      title: "NextJS",
    },
    {
      icon: Railway,
      title: "Railway",
    },
    {
      icon: GraphQL,
      title: "GraphQL",
    },
    {
      icon: Vercel,
      title: "Vercel",
    },
    {
      icon: TailwindCSS,
      title: "TailwindCSS",
    },
    {
      icon: Supabase,
      title: "Supabase",
    },
    {
      icon: Sanity,
      title: "Sanity",
    },
    {
      icon: Figma,
      title: "Figma",
    },
    {
      icon: PostHog,
      title: "PostHog",
    },
    {
      icon: JavaScript,
      title: "Javascript",
    },
    {
      icon: TypeScript,
      title: "Typescript",
    },
    {
      icon: Nodejs,
      title: "NodeJS",
    },
    {
      icon: ReactSvg,
      title: "React",
    },
    {
      icon: shadcnui,
      title: "Shadcn/ui",
    },
    {
      icon: RadixUI,
      title: "RadixUI",
    },
    {
      icon: null,
      title: "Zod",
    },
    {
      icon: null,
      title: "TanStack",
    },
    {
      icon: Git,
      title: "Git",
    },
    {
      icon: null,
      title: "Axiom",
    },
    {
      icon: Prisma,
      title: "Prisma",
    },
    {
      icon: DrizzleORM,
      title: "DrizzleORM",
    },
    {
      icon: Stripe,
      title: "Stripe",
    },
    {
      icon: PostgreSQL,
      title: "PostgresSQL",
    },
    {
      icon: Redis,
      title: "Redis",
    },
    {
      icon: Biomejs,
      title: "Biome",
    },
    {
      icon: Motion,
      title: "Motion",
    },
  ],
  other: [
    {
      icon: Auth0,
      title: "Auth0",
    },
    {
      icon: MongoDB,
      title: "MongoDB",
    },

    {
      icon: PlanetScale,
      title: "PlanetScale",
    },
    {
      icon: MaterialUI,
      title: "MaterialUI",
    },
    {
      icon: Remix,
      title: "Remix",
    },
    {
      icon: Netlify,
      title: "Netlify",
    },
    {
      icon: null,
      title: "Fly.io",
    },
    {
      icon: null,
      title: "Python",
    },
    {
      icon: ReactRouter,
      title: "ReactRouter",
    },
    {
      icon: Storybook,
      title: "Storybook",
    },
    {
      icon: null,
      title: "Styled Components",
    },
    {
      icon: Neon,
      title: "Neon",
    },
    {
      icon: Nx,
      title: "Nx",
    },
    {
      icon: Turso,
      title: "Turso",
    },
    {
      icon: null,
      title: "HeadlessUI",
    },
    {
      icon: Docker,
      title: "Docker",
    },
    {
      icon: null,
      title: "Medusa",
    },
  ],
} as const;

export default function Page() {
  function Divider() {
    return (
      <div className="relative max-w-5xl border-x border-b w-full mx-auto h-16"></div>
    );
  }

  return (
    <div className="w-full text-white">
      <div className="fixed w-full pointer-events-none z-50 px-5">
        <Navbar />
      </div>

      <div className="px-5">
        <div className="relative max-w-5xl border-x border-b w-full mx-auto overflow-hidden">
          <Hero />
        </div>

        <Divider />

        <div className="relative max-w-5xl border-x border-b w-full mx-auto p-5 md:p-8 space-y-4">
          <h2 className="text-4xl font-bold uppercase max-w-3xl">
            Things I&apos;ve worked on
          </h2>
          <p className="text-neutral-400 max-w-xl">
            While I've built countless projects, these are the flagship
            creations that best showcase my diverse capabilities and passion for
            innovation. Some are open-source, all demonstrate my commitment to
            impactful development.
          </p>
        </div>

        <div className="relative max-w-5xl border-x w-full mx-auto overflow-hidden">
          <Projects />
        </div>

        <Divider />

        <div className="relative max-w-5xl border-x border-b w-full mx-auto p-5 md:p-8 space-y-4">
          <h2 className="text-4xl font-bold uppercase max-w-3xl">
            My experience in the industry
          </h2>
          <p className="text-neutral-400 max-w-xl">
            I've had the privilege of contributing to the industry through roles
            that fostered significant growth, working alongside exceptional
            teams on impactful and innovative initiatives.
          </p>
        </div>

        <div className="relative max-w-5xl border-x w-full mx-auto overflow-hidden">
          <Work />
        </div>

        <Divider />

        <div className="relative max-w-5xl border-x border-b w-full mx-auto p-5 md:p-8 space-y-4">
          <h2 className="text-4xl font-bold uppercase max-w-3xl">
            A bit more about me
          </h2>
        </div>

        <div className="relative max-w-5xl border-x w-full mx-auto overflow-hidden">
          <About />
        </div>

        <Divider />

        <div className="relative max-w-5xl border-x border-b w-full mx-auto p-5 md:p-8 space-y-4">
          <h2 className="text-4xl font-bold uppercase max-w-3xl">
            Technologies I've used
          </h2>
          <p className="text-neutral-400 max-w-xl">
            Over my 8 years in development, I've played around with a broad
            spectrum of technologies, constantly expanding my toolkit. Below is
            a decent overview of the technologies I use all the time:
          </p>
        </div>

        <div className="relative max-w-5xl border-x border-b w-full mx-auto p-5 md:p-8 flex gap-3 flex-wrap">
          {skills.main.map((skill) => {
            return (
              <div
                key={skill.title}
                className="flex items-center gap-1 border rounded-sm px-2 py-1"
              >
                {skill.icon && <skill.icon className="h-4" />}
                <p className="text-xs font-medium">{skill.title}</p>
              </div>
            );
          })}
        </div>

        <div className="relative max-w-5xl border-x border-b w-full mx-auto p-5 md:p-8 space-y-4">
          <p className="text-neutral-400 max-w-xl text-sm">
            Tech I've used but more for side projects or it's been a long time
            since I've used them:
          </p>
        </div>

        <div className="relative max-w-5xl border-x border-b w-full mx-auto p-5 md:p-8 flex gap-3 flex-wrap">
          {skills.other.map((skill) => {
            return (
              <div
                key={skill.title}
                className="flex items-center gap-1 border rounded-sm px-2 py-1"
              >
                {skill.icon && <skill.icon className="h-4" />}
                <p className="text-xs font-medium">{skill.title}</p>
              </div>
            );
          })}
        </div>

        <div className="relative max-w-5xl border-x w-full mx-auto h-10"></div>
      </div>
    </div>
  );
}
