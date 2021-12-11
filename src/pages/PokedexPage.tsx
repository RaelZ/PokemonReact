import React from 'react';
import { pokedexApi } from '../apis/PokedexApi';

const PokedexPage = () => {
  // Exemplo das requisições axios
  const getPoke = () => pokedexApi.getAllPokemon();
  const getPokeByName = async () => pokedexApi.getPokemonByName('Bulbasaur');
  const getPokeByNameXML = async () => pokedexApi.getPokemonByNameXML('Bulbasaur');

  getPoke();
  getPokeByName();
  getPokeByNameXML();
  return (
    <div>Vamos codar aqui!</div>
  );
};

export default PokedexPage;
