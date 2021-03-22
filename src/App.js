import React from 'react';

import PokemonForm from './features/pokedex/PokemonForm';
import CapturedPokemons from './features/pokedex/CapturedPokemons';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <main className={classes.content}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                PokeReact
              </Typography>
            </Toolbar>
          </AppBar>
          <Container component="main" maxWidth="xs">
            <PokemonForm />
          </Container>
          <Container maxWidth="lg" className={classes.container}>
            <CapturedPokemons />
          </Container>
        </main>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
