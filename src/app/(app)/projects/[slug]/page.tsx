import { projects } from "@/app/projects";
import { Metadata } from "next";
import React from "react";
import ProjectsCard from "../../components/recentprojects/card.recentprojects";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";

type Props = {
  params: { slug: string };
};

function getProject(slug: string) {
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    console.error(`Project with slug "${slug}" not found.`);
    return null;
  }

  return project;
}

function getNextProject(slug: string) {
  // this function returns the next project in the list if its the last one it returns the first one
  const projectIndex = projects.findIndex((project) => project.slug === slug);
  if (projectIndex === -1) {
    return null;
  }
  const nextProjectIndex = (projectIndex + 1) % projects.length;
  return projects[nextProjectIndex];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const project = getProject(slug);
  if (!project) {
    return {
      title: "Project not found",
      description: "Project not found",
    };
  }
  // If the project is found, you can customize the metadata based on the project details

  return {
    title: `Leo Gadil - ${project.title}`,
    description: `${project.description}`,
    keywords: project.tags,
    authors: [{ name: "Leo Gadil", url: "https://leogadil.com" }],
    openGraph: {
      title: `Leo Gadil - ${project.title}`,
      description: `${project.description}`,
      url: `https://leogadil.com/projects/${project.slug}`,
      images: project.images.map((image) => image.src),
    },
    twitter: {
      title: `Leo Gadil - ${project.title}`,
      description: `${project.description}`,
      images: project.images.map((image) => image.src),
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    manifest: "/site.webmanifest",
  };
}

const ProjectsPage = async ({ params }: Props) => {
  const { slug } = await params;

  const project = getProject(slug);
  const nextProject = await getNextProject(slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const ProjectComponent = project.component as React.FunctionComponent;

  return (
    <div className="mb-64 min-h-screen max-w-[576px] mx-auto pt-6 lg:pt-0 lg:mx-0 lg:px-0">
      {/* Breadcrumbs */}

      <nav className="mb-8 text-sm flex items-center justify-center lg:justify-start">
        <a
          href="/projects"
          className="hover:underline text-[--color-dark-accent-3]"
        >
          Projects
        </a>
        <span className="mx-2">
          <MdOutlineKeyboardArrowRight />
        </span>
        <span className="font-medium">{project.title}</span>
      </nav>

      <h6 className="text-[--color-accent] font-bold text-center lg:text-left">
        {project.topTitle}
      </h6>
      <div className="max-w-[576px] mx-auto lg:mx-0 text-5xl font-bold uppercase text-center lg:text-left">
        <h1 className="relative">
          <span className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-10 text-[--color-accent] font-medium">
            -
          </span>
          {project.title}
        </h1>
      </div>
      <p className="mb-8 text-lg/6 text-[--color-dark-accent-3] text-center lg:text-left">
        {project.smallDescription}
      </p>

      <section className="mb-8">
        {!ProjectComponent ? (
          <p>{project.description}</p>
        ) : (
          <ProjectComponent />
        )}
      </section>

      <section className="mb-8">
        <h2 className="w-full uppercase text-xl font-semibold mb-4 text-center lg:text-left">
          Images
        </h2>
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-lg break-inside-avoid"
            />
          ))}
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          Links
        </h2>
        <ul className="list-inside flex flex-wrap gap-6 justify-center lg:justify-start">
          {project.links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[--color-accent] font-medium flex items-center"
              >
                <FaHashtag size={12} />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl uppercase font-semibold mb-4 text-center lg:text-left">
          Other Projects
        </h2>
        {nextProject && (
          <ProjectsCard
            index={1}
            title={nextProject.title}
            slug={nextProject.slug}
            topTitle={nextProject.topTitle}
            smallDescription={nextProject.smallDescription}
            image={nextProject.images[0].src}
            imageAlt={nextProject.images[0].alt}
          />
        )}
      </section>
    </div>
  );
};

export default ProjectsPage;
