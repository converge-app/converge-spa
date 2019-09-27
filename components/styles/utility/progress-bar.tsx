import {LinearProgress} from '@material-ui/core';
import React from 'react';

export function ProgressBar(props: { submitting: any }) {
    return <>{props.submitting && <LinearProgress/>}</>;
}
