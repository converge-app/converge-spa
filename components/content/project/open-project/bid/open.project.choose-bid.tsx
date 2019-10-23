import {Grid, makeStyles} from '@material-ui/core';
import {lighten} from '@material-ui/core/styles';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BidActions} from '../../../../../lib/actions/bid.actions';
import {IBid} from '../../../../../lib/models/bid.model';
import {Bid} from './project.bid';

const useStyles = makeStyles((theme) => ({
  moveDown: {
    paddingTop: theme.spacing(4),
    borderTopColor: lighten(theme.palette.background.default, 0.05),
    borderTopWidth: 1.5,
    borderTopStyle: 'solid',
    marginRight: theme.spacing(4),
  },
}));

interface IProps {
  projectId: string;
  ownerId: string;
}

export const OpenProjectChooseBid: React.FunctionComponent<IProps> = (
  props,
) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BidActions.getByProject(props.projectId));
  }, []);

  const bids: IBid[] = useSelector(
    (state: any) => state.bidding.getByProjectId.bids,
  );

  const chooseFreelancer = (bid: IBid) => {
    dispatch(BidActions.choose(bid));
  };

  const renderBids = () => {
    if (bids) {
      return bids.map((item: IBid) => {
        return (
          <Grid item xs={12}>
            <Bid ownerId={props.ownerId} item={item} onClick={() => chooseFreelancer(item)}/>
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
