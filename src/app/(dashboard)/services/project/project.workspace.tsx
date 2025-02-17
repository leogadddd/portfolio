import React from 'react';
import ContainerGrid from "@/components/databasegrid/grid.databasegrid";
import Container from "@/components/databasegrid/container.databasegrid";
import { getProjects } from "@/actions/projects/getallproject.action";

const ProjectWorkspace = async () => {

	const projects = await getProjects()

	return (
		<ContainerGrid title="Projects">
			{
				projects.data && projects.data.map((project) => (
					<Container key={`container-${project.name}`} data={project} />
				))
			}
			{projects.error && <p>There is an Error with getting all projects</p>}
		</ContainerGrid>
	)
}

export default ProjectWorkspace