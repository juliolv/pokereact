import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { capture } from './pokemonSlice';

import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const url = 'https://pokeapi.co/api/v2/pokemon';

const PokemonForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const getPokemonByName = async () => {
    try {
      const response = await fetch(`${url}/${pokemonName}`);
      const data = await response.json();

      const { name, id, sprites } = data;
      const newPokemonCatch = {
        id,
        name,
        img: sprites.front_default,
      };
      dispatch(capture(newPokemonCatch));
      setErrorMessage('');
      setPokemonName('');
    } catch (error) {
      setErrorMessage(`Pokemon not found. Try again.`);
      console.log(error);
    }
  };

  const handleNameOnChange = (e) => setPokemonName(e.target.value);

  const handleFormCatchPokemon = (e) => {
    e.preventDefault();
    if (pokemonName) {
      getPokemonByName();
    } else {
      setErrorMessage('Please enter a valid pokemon name');
    }
  };

  return (
    <div className={classes.paper}>
      <Avatar
        className={classes.large}
        alt="Pokemon"
        src="https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG"
      ></Avatar>
      {errorMessage && (
        <Alert severity="error" className={classes.alert}>
          {errorMessage}
        </Alert>
      )}
      <form
        onSubmit={handleFormCatchPokemon}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={handleNameOnChange}
              variant="outlined"
              id="namePokemon"
              type="text"
              label="Pokemon name"
              placeholder="Search pokemon by name, e.g. Charmander.."
              name="Pokemon name"
              value={pokemonName}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          disabled={!pokemonName}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Capture
        </Button>
      </form>
    </div>
  );
};

export default PokemonForm;
