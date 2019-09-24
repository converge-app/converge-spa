import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';

interface InfoPageProps {
  headline: string;
  content: string;
}

const useStyles = makeStyles(theme => ({
  box: {
    width: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 200,
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

const InfoPage = (props: InfoPageProps): JSX.Element => {
  const classes = useStyles();
  return (
    <article>
      <div className={classes.box}>
        <Typography className={classes.headline} variant='h3'>
          {props.headline}
        </Typography>
        <Typography variant='body1'>
          <ReactMarkdown source={props.content}></ReactMarkdown>
        </Typography>
      </div>
    </article>
  );
};

export default InfoPage;
