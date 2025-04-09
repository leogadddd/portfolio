import { IoArrowForwardOutline } from "react-icons/io5";

interface projectscardprops {
  index: number;
  topTitle: string;
  title: string;
  smallDescription: string;
  slug?: string;
  image?: string;
  imageAlt?: string;
}

const ProjectsCard = ({
  topTitle,
  title,
  smallDescription,
  slug,
  image,
  imageAlt,
}: projectscardprops) => {
  return (
    <a
      href={`/projects/${slug}`}
      className="group transition-colors p-2 flex gap-4 hover:bg-[--color-dark-accent] border border-transparent hover:border-[--color-dark-accent-2] rounded-2xl"
    >
      <div className="h-32 w-32 md:h-40 md:w-40 bg-[--color-dark-accent] rounded-2xl">
        <div className="flex items-center justify-center h-full w-full rounded-xl bg-[--color-dark-accent-2]">
          <img
            src={image}
            alt={imageAlt}
            className="object-cover h-full w-full rounded-xl"
          />
        </div>
      </div>
      <div className="h-32 md:h-40 flex-1 flex flex-col">
        <div className="text-left flex-1">
          <h6 className="text-[--color-accent] font-bold">{topTitle}</h6>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-[--color-dark-accent-3] text-sm">
            {smallDescription}
          </p>
        </div>
        <div className="relative flex items-center justify-between">
          <div></div>
          <IoArrowForwardOutline
            size={25}
            className="-translate-x-2 group-hover:translate-x-0 transition-transform"
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectsCard;
