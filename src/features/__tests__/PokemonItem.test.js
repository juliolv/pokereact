import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../app/store';
import PokemonItem from '../pokedex/PokemonItem';

afterEach(() => {
  cleanup();
});

const pokemon = {
  id: 1,
  name: 'bulbasaur',
  img:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
};

test('should render PokemonItem component', () => {
  render(
    <Provider store={store}>
      <PokemonItem pokemon={pokemon} />
    </Provider>
  );
  const pokemonItemElement = screen.getByTestId('pokemon-1');
  expect(pokemonItemElement).toBeInTheDocument();
  expect(pokemonItemElement).toHaveTextContent('bulbasaur');
});

test('matches snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <PokemonItem pokemon={pokemon} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
