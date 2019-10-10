import { NextPage } from "next";
import React, { useEffect } from "react";
import FindOpenProjectsContent from "../../components/content/project/find-open-projects/find-open.projects.content";
import DashboardLayout from "../../components/layouts/dashboard.layout";
import { useDispatch, useSelector } from "react-redux";
import { ProjectActions } from "../../lib/actions/project.actions";
import { IProject } from "../../lib/models/project.model";

const ProjectsPage: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProjectActions.get());
  }, []);

  const projects: IProject[] = useSelector(
    (state: any) => state.project.getProjects.projects
  );

  return (
    <DashboardLayout>
      <FindOpenProjectsContent projects={projects}></FindOpenProjectsContent>
    </DashboardLayout>
  );
};

export default ProjectsPage;
