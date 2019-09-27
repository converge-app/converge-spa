import {Typography} from '@material-ui/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export const InfoPageContent = (props: { source: string }) => (
    <Typography variant='body1'>
        <ReactMarkdown source={props.source}/>
    </Typography>
);
