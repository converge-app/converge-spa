import { useDispatch, useSelector } from "react-redux";
import { BidActions } from "../../../../../lib/actions/bid.actions";
import { useEffect } from "react";
import { IBid } from "../../../../../lib/models/bid.model";
import { makeStyles, Grid, Typography, Button, Link } from "@material-ui/core";
import { lighten } from "@material-ui/core/styles";
import { services } from "../../../../../services";

const useStyles = makeStyles(theme => ({
  moveDown: {
    paddingTop: theme.spacing(4),
    borderTopColor: lighten(theme.palette.background.default, 0.05),
    borderTopWidth: 1.5,
    borderTopStyle: "solid",
    marginRight: theme.spacing(4)
  }
}));

interface IProps {
  projectId: string;
  ownerId: string;
}

export const OpenProjectChooseBid: React.FunctionComponent<IProps> = props => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BidActions.getByProject(props.projectId));
  }, []);

  const bids: IBid[] = useSelector(
    (state: any) => state.bidding.getByProjectId.bids
  );

  const chooseFreelancer = (bid: IBid) => {
    dispatch(BidActions.choose(bid));
  };

  const renderBids = () => {
    if (bids) {
      return bids.map((item: IBid) => {
        return (
          <Grid item xs={12}>
            <Grid
              container
              direction={"row"}
              spacing={2}
              justify="center"
              alignItems="center"
            >
              {props.ownerId === services.authentication.getId() ? (
                <>
                  <Grid item xs={9}>
                    <Link href={"/users/" + item.freelancerId}>
                      <Typography variant={"h6"} color="primary">
                        {item.id}
                      </Typography>
                    </Link>
                    <Typography variant="body1">
                      <strong>Amount: </strong>
                      {item.amount}$
                    </Typography>
                    {item.message ? (
                      <Typography variant="body2">
                        <strong>Message: </strong>
                        {item.message}
                      </Typography>
                    ) : null}
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant={"contained"}
                      color={"primary"}
                      onClick={() => chooseFreelancer(item)}
                    >
                      Choose
                    </Button>
                  </Grid>
                </>
              ) : (
                <>
                  {item.freelancerId === services.authentication.getId() ? (
                    <div>Is owner of bid</div>
                  ) : null}
                  <Grid item xs={12}>
                    <Link>
                      <Typography variant={"h6"} color="primary">
                        {item.id}
                      </Typography>
                    </Link>
                    <Typography variant="body1">
                      <strong>Amount: </strong>
                      {item.amount}$
                    </Typography>
                    {item.message ? (
                      <Typography variant="body2">
                        <strong>Message: </strong>
                        {item.message}
                      </Typography>
                    ) : null}
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        );
      });
    }
  };

  return (
    <div className={classes.moveDown}>
      <Grid container spacing={3}>
        {renderBids()}
      </Grid>
    </div>
  );
};
