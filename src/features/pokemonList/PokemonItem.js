import React from 'react';
import { useDispatch } from 'react-redux';
import { release } from '../capturePokemon/pokemonSlice';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '50%',
    backgroundSize: 96,
  },
  cardContent: {
    flexGrow: 1,
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
  },
}));

const PokemonItem = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, name, img } = props.pokemon;

  const releasePokemon = (id) => {
    dispatch(release(id));
  };

  return (
    <Grid item key={id} xs={2}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={img} title={name} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Order: {id}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => releasePokemon(id)}
          >
            Release
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PokemonItem;
