import React from 'react';
import ImageProfile from "@/components/profilecard/image.profilecard";
import InformationCard from '@/components/profilecard/information.profilecard';
import Arrows from '@/components/profilecard/arrows.profilecard';
import Socials from '@/components/profilecard/socials.profilecard';

const ProfileCard = () => {
	return (
		<div className="sticky top-28 overflow-hidden mx-auto max-w-[576px] lg:w-80 bg-[--color-light] text-[--color-dark] rounded-2xl drop-shadow-lg py-6 px-8">
			<ImageProfile />
			<Arrows />
			<InformationCard />
			<Socials />
		</div>
	)
}

export default ProfileCard