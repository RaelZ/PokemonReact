const APIUrl = 'http://localhost:5000/';

export const pokedex = {
  getAll: `${APIUrl}GetPokemons`,
  getByName: `${APIUrl}GetPokemonsByName`,
  getByNameXML: `${APIUrl}GetPokemonsByNameXML`,
};

export const auth = {
  signIn: `${APIUrl}api/Usuarios/Login`,
  signUp: `${APIUrl}api/Usuarios/Criar`,
};
