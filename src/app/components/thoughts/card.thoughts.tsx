import { IoArrowForwardOutline } from "react-icons/io5";

// interface projectscardprops {
// 	index: number
// }

const BlogsCard = () => {
	return (
		<button className="group transition-colors px-6 py-4 md:p-2 flex gap-4 hover:bg-[--color-dark-accent] border border-transparent hover:border-[--color-dark-accent-2] rounded-2xl">
			<div className="hidden md:block h-32 w-32 md:h-40 md:w-40 bg-[--color-dark-accent] rounded-2xl" />
			<div className="h-auto md:h-40 flex-1 flex flex-col">
				<div className="text-left flex-1">
					<h6 className="text-[--color-accent] font-bold">Blog</h6>
					<h1 className="font-bold text-xl">
						How to Become a Master in React
					</h1>
					<p className="text-[--color-dark-accent-3] text-sm">
						How to become a master in react in 3 easy steps
					</p>
				</div>
				<div className="mt-8 md:mt-0 relative flex items-center justify-between">
					<p className="text-xs text-[--color-dark-accent-3]">
						Jan 25, 2025 • 4 mins read
					</p>
					<IoArrowForwardOutline
						size={25}
						className="-translate-x-2 group-hover:translate-x-0 transition-transform"
					/>
				</div>
			</div>
		</button>
	)
}



export default BlogsCard;