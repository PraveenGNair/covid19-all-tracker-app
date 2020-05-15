import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import awareness from '../../images/awareness.jpg';
import awareness2 from '../../images/awareness-2.jpg';
import awareness3 from '../../images/awareness-3.png';
import { Alert } from '@material-ui/lab';
export default function GridCard() {
  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <Alert icon={false} severity="info" style={{ display: "block", marginTop: 30 }} >
          <Typography align="center">
            <strong>Be Safe, Stay Safe.</strong><br></br>
            <i>"Optimism is the faith that leads to achievement."</i>
          </Typography>
        </Alert>
      </Grid>


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
