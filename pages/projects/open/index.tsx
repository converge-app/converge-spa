import { NextPage } from "next";
import React, { useEffect } from "react";
import FindOpenProjectsContent from "../../../components/content/project/find-open-projects/find-open.projects.content";
import DashboardLayout from "../../../components/layouts/dashboard.layout";
import { useSelector, useDispatch } from "react-redux";
import { ProjectActions } from "../../../lib/actions/project.actions";
import { IProject } from "../../../lib/models/project.model";

const OpenProjectsPage: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProjectActions.getOpen());
  }, []);

  const projects: IProject[] = useSelector(
    (state: any) => state.project.getOpenProjects.projects
  );

  return (
    <DashboardLayout>
      <FindOpenProjectsContent projects={projects}></FindOpenProjectsContent>
    </DashboardLayout>
  );
};

export default OpenProjectsPage;
