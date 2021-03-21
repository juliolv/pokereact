import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    captured: [],
  },
  reducers: {
    capture: (state, action) => {
      state.captured.push(action.payload);
    },
    release: (state, action) => {
      state.captured = state.captured.filter((p) => p.id !== action.payload);
    },
  },
});

export const { capture, release } = pokemonSlice.actions;

export const selectCapturedPokemons = (state) => state.pokemons.captured;

export default pokemonSlice.reducer;
