import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;



  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokemon is cool</h1>, rootEl);
});
