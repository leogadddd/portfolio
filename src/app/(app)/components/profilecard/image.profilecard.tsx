import React from "react";
import Image from "next/image";
import ProfilePicture from "@/assetsimages/ProfilePicture.png";

const ImageProfile = () => {
	return (
		<div className="relative rounded-2xl h-56 max-w-56 md:h-72 md:max-w-64 lg:max-w-56 mx-auto">
			<div className="absolute overflow-hidden profilebackground rounded-2xl w-full h-full flex justify-center items-center">
				<Image
					priority
					src={ProfilePicture}
					alt="Profile"
					className="mb-28 ml-8 scale-[2]"
				/>
			</div>
		</div>
	);
};

export default ImageProfile;
