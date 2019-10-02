import {makeStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    background: {
        flex: '100 100',
        backgroundImage: 'url("static/images/background-figure.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left',
        backgroundSize: '100%',
    },
}));

const HomeContent: React.FunctionComponent = () => {
    const classes = useStyles();
    return <div className={classes.background}></div>;
};

export default HomeContent;
