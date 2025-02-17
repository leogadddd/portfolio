import { getProjectBySlug } from "@/actions/projects/getprojectbyslug.action";
import { notFound, redirect } from "next/navigation";
import ProjectEditor from "./components/projecteditor";

const ProjectSlug = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  if (!slug) return redirect("/x");

  const project = await getProjectBySlug(slug);

  if (!project?.data) return redirect("/x");

  return <ProjectEditor project={project?.data} />;
};

export default ProjectSlug;
