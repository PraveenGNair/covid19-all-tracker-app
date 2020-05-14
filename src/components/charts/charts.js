import React from 'react';
import { Pie, Bar, } from 'react-chartjs-2';
import styles from './charts.css';
import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';


const Chart = ({ data: { confirmed, recovered, deaths }, continentData }) => {

  const barChart = (
    confirmed ? (
      <Grid container spacing={3}>
        <Grid item xs={6}>
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
          <Grid item xs={6} sm={6}>
            <Alert variant="outlined" severity="info">
              Pie denotes active cases across all continents.
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