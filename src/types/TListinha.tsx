import { PokedexList } from "../models/PokedexList";

export type TListinha = {
  pokeList: PokedexList[];
  returnPokemon: (x: PokedexList) => void;
};
