import Image, { StaticImageData } from "next/image";

interface ToolProps {
	title: string;
	description: string;
	image: StaticImageData;
	link?: string;
}

const ToolCard = ({ title, description, image, link }: ToolProps) => {
	return (
		<a
			className="group flex gap-4 p-2 w-full hover:bg-[--color-dark-accent] border border-transparent hover:border-[--color-dark-accent-2] rounded-2xl transition-colors cursor-pointer"
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			<div>
				<div className={`h-16 w-16 bg-[--color-dark-accent] border border-[--color-dark-accent-2] group-hover:border-transparent rounded-2xl flex items-center justify-center group-hover:rotate-0 transition-all duration-300`}>
					<Image
						src={image.src}
						alt={title}
						className="h-10 w-10 object-contain"
						width={40}
						height={40}
					/>
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<h1 className="text-xl font-bold">{title}</h1>
				<p className="opacity-70 text-sm">{description}</p>
			</div>
		</a>
	);
};

export default ToolCard; 