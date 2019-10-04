import {makeStyles} from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4),
    },
}));

interface IProps {
    projectId: string,
}

const OpenProjectContent: React.FunctionComponent<IProps> = (props) => {

    const classes = useStyles();

    return  <div className={classes.container}>
        {props.projectId}
    </div>
};

export default OpenProjectContent;
