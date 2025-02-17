import React, { ReactNode } from 'react'
import TitlebarGird from '@/components/databasegrid/titlebar.databasegrid';
import Container from '@/components/databasegrid/container.databasegrid';

interface ContainerGrid {
	title: string,
	children?: ReactNode
}

const ContainerGrid = ({ title, children }: ContainerGrid) => {
	return (
		<div className="my-6 px-4">
			<TitlebarGird title={title} />

			<div className="flex flex-col md:flex-row flex-wrap gap-2 mt-4">
				{children}
			</div>
		</div>
	)
}

export default ContainerGrid;