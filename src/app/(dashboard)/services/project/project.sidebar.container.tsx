import { getProjects } from "@/actions/projects/getallproject.action";
import ProjectSidebarClient from "@/app/(dashboard)/services/project/project.sidebar.client"; // Import client component

const ProjectSidebarContainer = async () => {
	const projects = await getProjects(); // Fetch data on the server

	return <ProjectSidebarClient projects={projects?.data ?? []} />; // Ensure projects.data is always an array
};

export default ProjectSidebarContainer;