import { createSlice } from '@reduxjs/toolkit';

export const captureSlice = createSlice({
  name: 'capturedPokemons',
  initialState: {
    value: [],
  },
  reducers: {
    capturePokemon: (state, action) => {
      state.value.push(action.payload);
    },
    releasePokemon: (state, action) => {
      // delete pokemon
    },
  },
});

export const { capturePokemon, releasePokemon } = captureSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCapturedPokemons = (state) => state.capturedPokemons.value;

export default captureSlice.reducer;
