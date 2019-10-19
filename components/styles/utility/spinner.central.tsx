import Spinner from './spinner';
import { Grid } from '@material-ui/core';

const CentralSpinner = () => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justify='center'
      style={{ height: '100%' }}
    >
      <Grid item></Grid>
      <Spinner></Spinner>
    </Grid>
  );
};

export default CentralSpinner;
