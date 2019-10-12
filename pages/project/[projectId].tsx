import { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DashboardLayout from "../../components/layouts/dashboard.layout";
import { CollaborationActions } from "../../lib/actions/collaboration.actions";
import { IEvent } from "../../lib/models/collaboration.model";

const CollaborationPage: NextPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof projectId === "string") {
      dispatch(CollaborationActions.getByProjectId(projectId));
    }
  }, []);

  const collaboration: IEvent[] = useSelector(
    (state: any) => state.collaboration.getByProjectId.collaboration
  );

  if (collaboration) {
    return (
      <DashboardLayout>
        <div>This is collaboration: {projectId}</div>
      </DashboardLayout>
    );
  } else {
    return <DashboardLayout>Spinner</DashboardLayout>;
  }
};

export default CollaborationPage;
