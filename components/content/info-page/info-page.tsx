import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { InfoPageContent } from './info-page-content';
import { InfoPageHeadline } from './info-page-headline';

interface IInfoPageProps {
  headline: string;
  content: string;
}

const useStyles = makeStyles(theme => ({
  box: {
    width: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
  },
  headline: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
  },
  content: {
    lineHeight: '1,8em',
    textAlign: 'justify',
  },
}));

const InfoPage = (props: IInfoPageProps): JSX.Element => {
  const classes = useStyles();
  return (
    <article style={{ flex: '100 100' }}>
      <div className={classes.box}>
        <InfoPageHeadline classes={classes} headline={props.headline} />
        <InfoPageContent source={props.content} />
      </div>
    </article>
  );
};

export default InfoPage;
