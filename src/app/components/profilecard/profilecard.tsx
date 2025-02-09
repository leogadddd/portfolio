import React from 'react';
import ImageProfile from "@/components/profilecard/image.profilecard";
import InformationCard from '@/components/profilecard/information.profilecard';
import Arrows from './arrows.profilecard';

const ProfileCard = () => {
	return (
		<div className="overflow-hidden relative mx-auto max-w-[576px] lg:w-80 bg-[--color-light] text-[--color-dark] rounded-2xl drop-shadow-lg py-6 px-8">
			<ImageProfile />
			<Arrows />
			<InformationCard />
		</div>
	)
}

export default ProfileCard