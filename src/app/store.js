import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokedex/pokemonSlice';

export default configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});
