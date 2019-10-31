import { Grid, Typography } from '@material-ui/core';
import React from 'react';
export function renderFileNames(files: FileList | undefined) {
  const renderFileName = (file: File, index: number) => {
    return (
      <Grid item key={index}>
        <Typography color='textSecondary'>{file.name}</Typography>
      </Grid>
    );
  };
  if (typeof files !== 'undefined') {
    return (
      <Grid container direction='column'>
        {Array.from(files).map((file, number) => renderFileName(file, number))}
      </Grid>
    );
  } else {
    return null;
  }
}
