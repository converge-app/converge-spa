import {makeStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    ruler: {
        background: theme.palette.primary.main,
        border: 'none',
        padding: 0,
        marginTop: 0,
        height: 5,
    },
}));

interface IRulerProps {
    className?: any;
}

export function Ruler(props: IRulerProps) {
    const classes = useStyles();
    return (
        <div className={props.className}>
            <hr className={classes.ruler}/>
        </div>
    );
}
