import {Typography} from '@material-ui/core';
import React from 'react';

export const InfoPageHeadline = (props: { classes: any; headline: string }) => (
    <Typography className={props.classes.headline} variant='h3'>
        {props.headline}
    </Typography>
);
