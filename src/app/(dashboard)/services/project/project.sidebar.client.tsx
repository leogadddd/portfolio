"use client";

import WorkspaceContainer from "@/components/sidebar/workspace.sidebar";
import TabWorkspace from "@/components/sidebar/tab.workspace.sidebar";
import { TbBriefcaseFilled } from "react-icons/tb";
import { useModalsContext } from "@/contexts/modals.context";
import DetailModal from "@/services/project/details.modal";
import { project } from "@/actions/projects/getallproject.action";

interface ProjectSidebarClientProps {
  projects: project[];
}

const ProjectSidebarClient: React.FC<ProjectSidebarClientProps> = ({
  projects,
}) => {
  const { openModal } = useModalsContext();

  const handleAddProject = () => {
    openModal("Edit Project", <DetailModal />);
  };

  return (
    <WorkspaceContainer title="Projects" handleAddAction={handleAddProject}>
      {projects ? (
        projects?.map((project) => (
          <TabWorkspace
            key={`sidebar-${project.name}`}
            title={project.name}
            Icon={TbBriefcaseFilled}
            link={`/x/projects/${project.slug}`}
          />
        ))
      ) : (
        <p>No Projects</p>
      )}
    </WorkspaceContainer>
  );
};

export default ProjectSidebarClient;
