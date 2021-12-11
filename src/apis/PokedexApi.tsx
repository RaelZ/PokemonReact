import axios from 'axios';
import { pokedex } from '../utils/config';
import { PokedexList } from '../models/PokedexList';

class PokedexApi {
  // Pokemon section
  async getAllPokemon() {
    return axios
    .get<PokedexList[]>(pokedex.getAll)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  }
  async getPokemonByName(pokemonName: string) {
    return axios
    .get<PokedexList>(pokedex.getByName,
      {
        params: {
          name: pokemonName
        }
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
  async getPokemonByNameXML(pokemonName: string) {
    return axios
    .get<PokedexList>(pokedex.getByNameXML,
      {
        params: {
        name: pokemonName
      }
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  }

  // Trainers section
}

export const pokedexApi = new PokedexApi();