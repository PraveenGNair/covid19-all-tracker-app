import React, { useState, useEffect } from 'react';
import { FormControl } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { fetchAllCountries } from '../../covidapi';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  }
}));
const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getCountries = async () => {
      setCountries(await fetchAllCountries());
    };

    getCountries();

  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl style={{ width: "300px", marginBottom: 20 }} variant="outlined" className={classes.formControl}>
          <InputLabel>WorldWide</InputLabel>
          <Select label="country" onChange={(e) => handleCountryChange(e.target.value)}>
            <MenuItem value=""><em>WorldWide</em></MenuItem>
            {countries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
    </Grid>

  );
};

export default Countries;