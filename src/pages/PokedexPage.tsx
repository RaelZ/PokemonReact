import { useEffect, useState } from "react";
import { pokedexApi } from "../apis/PokedexApi";
import Listinha from "../components/Listinha";
import Modal from "../components/modal/Modal";
import PokemonView from "../components/PokemonView";
import { PokedexList } from "../models/PokedexList";
import "../styles/pokedex.scss";

const PokedexPage = () => {
  const [loadPokedexList, setLoadPokedexList] = useState(<div></div>); // Carrega a lista de pokémon
  const [response, setResponse] = useState<PokedexList[]>([]); // Model dos pokémon
  const [pokemon, setPokemon] = useState<PokedexList>();
  const [openModal, setOpenModal] = useState(false);
  const [openCadastro, setOpenCadastro] = useState(false);
  const selectPokemon = (poke: PokedexList) => {
    setPokemon(poke);
  };

  useEffect(() => {
    (async function GetAllPokemon() {
      try {
        setResponse(await pokedexApi.GetAllPokemon());
      } catch {
        setResponse([]);
      }
    })();
  }, []); // Faz requisição na API
  // POKÉMON LIST
  useEffect(() => {
    if (response.length >= 1) {
      setLoadPokedexList(
        <Listinha pokeList={response} returnPokemon={selectPokemon} />
      );
    }
  }, [response]); // Carrega o componente de lista dos pokémon

  // POKÉMON VIEW
  const [loadPokedexView, setLoadPokedexView] = useState(<div></div>); // Carrega a lista de pokémon
  useEffect(() => {
    if (pokemon) setLoadPokedexView(<PokemonView {...pokemon} />);
  }, [pokemon]); // Carrega o componente de lista dos pokémon

  return (
    <div className="fullSite">
      <header>
        <div />
        <p className="logo">POKEDEX QODELESS</p>
        <div className="buttons">
          <button type="button" className="cadastrar" onClick={() => setOpenCadastro(!openCadastro)}>Cadastrar</button>
          <button type="button" className="entrar" onClick={() => setOpenModal(!openModal)}>Entrar</button>
        </div>
      </header>
      <div className="main">
        <div className="container">
          <div className="backgroundList">
            <div className="left">{loadPokedexList}</div>
          </div>
          <div className="middle"></div>
          <div className="backgroundView">
            <div className="right">{loadPokedexView}</div>
          </div>
        </div>
      </div>
      <footer>
        <p>QODELESS 2021</p>
      </footer>
    {openModal ? <div><Modal title="login" open={openModal} setOpen={setOpenModal} /></div> : null}
    {openCadastro ? <div><Modal title="cadastrar" open={openCadastro} setOpen={setOpenCadastro} /></div> : null}
    </div>
  );
};

export default PokedexPage;
