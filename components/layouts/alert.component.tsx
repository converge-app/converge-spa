import {makeStyles, Typography} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    alertDanger: {
        backgroundColor: theme.palette.error.main,
        textAlign: 'center',
        padding: theme.spacing(1, 0),
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    alertSuccess: {
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        padding: theme.spacing(1, 0),
        transition: theme.transitions.create('all', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}))

export const AlertComponent: React.FunctionComponent<{ alert?: any }> = ({
                                                                             alert,
                                                                         }) => {
    const classes = useStyles();
    if (alert) {
        if (alert.type === 'alertSuccess') {
            return <div>
                    <Typography variant='body1' className={classes.alertSuccess}>
                        {alert.message}
                    </Typography>
            </div>;
        } else if (alert.type === 'alertDanger') {
            return <div>
                    <Typography variant='body1' className={classes.alertDanger}>
                        {alert.message}
                    </Typography>
            </div>;
        }

    }
    return null;
};
