"use server";

import React from 'react';
import TabComponent from '@/components/navbar/tab.navbar';

const Navigationbar = () => {
	return (
		<div className="py-4 pb-1 pt-5 px-4">
			<div className="bg-[--color-dark-accent] p-2.5 rounded-2xl drop-shadow-lg w-max mx-auto">
				<TabComponent />
			</div>
		</div>
	)
}

export default Navigationbar