import React from 'react';
import { Grid } from '@material-ui/core';
import awareness from '../../images/awareness-2.jpg';
import awareness2 from '../../images/awareness-2.jpg';
import awareness3 from '../../images/awareness-3.png';

export default function GridCard() {
  return (
    <Grid container justify="center">
      <Grid item>
        <img src={awareness} alt="preventive measure 1" style={{ width: '80%', marginTop: 30 }} />
      </Grid>
      <Grid item>
        <img src={awareness2} alt="preventive measure 2" style={{ width: '80%', marginTop: 30 }} />
      </Grid>
      <Grid item>
        <img src={awareness3} alt="preventive measure 3" style={{ width: '80%', marginTop: 30 }} />
      </Grid>
    </Grid>

  );
}
