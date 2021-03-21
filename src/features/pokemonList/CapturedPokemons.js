import React from 'react';
import { useSelector } from 'react-redux';
import { selectCapturedPokemons } from '../capturePokemon/pokemonSlice';
import PokemonItem from './PokemonItem';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  italic: {
    marginTop: theme.spacing(1),
    fontStyle: 'italic',
  },
  gridMargin: {
    marginTop: theme.spacing(2),
  },
}));

const CapturedPokemons = () => {
  const classes = useStyles();
  const capturedPokemons = useSelector(selectCapturedPokemons);

  return (
    <React.Fragment>
      <Typography variant="h5">Pokedex ({capturedPokemons.length})</Typography>
      {capturedPokemons.length > 0 ? (
        <div>
          <Grid container spacing={2} className={classes.gridMargin}>
            {capturedPokemons.map((pokemon) => (
              <PokemonItem key={pokemon.id} pokemon={pokemon} />
            ))}
          </Grid>
        </div>
      ) : (
        <Typography variant="body1" className={classes.italic}>
          No Pokemons captured yet.
        </Typography>
      )}
    </React.Fragment>
  );
};

export default CapturedPokemons;
