import axios from "axios";
import { pokedex } from "../utils/config";
import { PokedexList } from "../models/PokedexList";

class PokedexApi {
  // Pokemon section
  GetAllPokemon = async (): Promise<PokedexList[]> =>
    axios.get(pokedex.getAll).then((res) => res.data);
  GetPokemonByName = async (pokemonName: string): Promise<PokedexList> =>
    axios
      .get<PokedexList>(pokedex.getByName, { params: { name: pokemonName } })
      .then((res) => res.data);
  GetPokemonByNameXML = async (pokemonName: string) =>
    axios
      .get<PokedexList>(pokedex.getByNameXML, { params: { name: pokemonName } })
      .then((res) => res.data);
}

export const pokedexApi = new PokedexApi();
