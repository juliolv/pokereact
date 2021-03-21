import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/capturePokemon/pokemonSlice';

export default configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});
