import { IoArrowForwardOutline } from "react-icons/io5";

// interface projectscardprops {
// 	index: number
// }

const ProjectsCard = () => {
	return (
		<button className="group transition-colors p-2 flex gap-4 hover:bg-[--color-dark-accent] border border-transparent hover:border-[--color-dark-accent-2] rounded-2xl">
			<div className="h-32 w-32 md:h-40 md:w-40 bg-[--color-dark-accent] rounded-2xl" />
			<div className="flex-1">
				<h1 className="pointer-events-none text-left capitalize font-bold text-sm text-[--color-accent]">
					Blog
				</h1>
				<h2 className="text-2xl lg:text-3xl font-bold text-left">Spaceverse</h2>
				<p className="text-sm font-normal text-left text-[--color-dark-accent-3]">
					A Productivity App
				</p>
				<div className="flex justify-between items-end h-7 lg:h-14">
					<div></div>
					<div className="relative">
						<IoArrowForwardOutline
							size={25}
							className="transition-all absolute -right-2 group-hover:-right-4  -translate-x-1/2"
						/>
					</div>
				</div>
			</div>
		</button>
	)
}

export default ProjectsCard;