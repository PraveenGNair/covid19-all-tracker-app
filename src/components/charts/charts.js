import React from 'react';
import { Pie, Bar, } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import styles from './charts.css';
import { Grid, Container, Box } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Chart = ({ data: { confirmed, recovered, deaths }, continentData }) => {
  const classes = useStyles();
  const barChart = (
    confirmed ? (

      <Container maxWidth="md">
        <Box my={4}>
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
              <Bar
                data={{
                  labels: ['Infected', 'Recovered', 'Deaths'],
                  datasets: [
                    {
                      label: 'Total infected People',
                      backgroundColor: ['orange', 'green', 'red'],
                      data: [confirmed.value, recovered.value, deaths.value],
                    },
                  ],
                }}
                options={{
                  legend: { display: false },

                }}
              />
            </Grid>
            {!continentData && <div>
              <Alert variant="outlined" severity="error">
                <AlertTitle><strong>Error</strong></AlertTitle>
            Error in loading pie chart component.
          </Alert>
            </div>}
            {continentData && (
              <Grid item xs={12}>
                <Alert severity="info">
                  Pie denotes the number of active cases still present across the world.
            </Alert>
                <Pie
                  data={{
                    labels: Object.keys(continentData),
                    datasets: [
                      {
                        label: 'Continent',
                        backgroundColor: ['orange', 'purple', 'red', 'yellow', 'brown', 'blue'],
                        data: Object.values(continentData),
                      },
                    ],
                  }}
                  options={{
                    legend: { display: true },
                    labels: {
                      boxWidth: 10
                    }

                  }}
                />
              </Grid>)}
          </Grid>
        </Box>
      </Container>

    ) : null
  );

  return (
    <>
      <div className={styles.container}>
        {barChart}
      </div>

    </>
  );
};

export default Chart;