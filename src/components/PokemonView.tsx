import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import type { FC } from "react";
import { PokedexList } from "../models/PokedexList";
import "../styles/pokedex.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const PokemonView: FC<PokedexList> = (pokeList) => {
  const poke = pokeList;
  return (
    <div className="pokemonView">
      <div className="pokemonViewTop">
        <div className="pokemonViewTopInfo">
          <div>
            <h2 className="PokemonName">
              {`${poke.name} `}
              {poke.legendary ? (
                <FontAwesomeIcon size="xs" color="gold" icon="star" />
              ) : null}
            </h2>
            <p className="PokemonGen">{`${poke.generation}ª Gen`}</p>
          </div>
          <h1 className="PokemonId">{`#${poke.pokemonId}`}</h1>
        </div>
        <div className="pokemonImage">
          <img src={`/images/pokemons/${poke.pokemonId}.png`} alt={poke.name} />
        </div>
      </div>
      <div className="pokemonType">
        {poke.type2 ? (
          <div className="types">
            <div className={`type1 ${poke.type}`}>
              <p>{poke.type}</p>
            </div>
            <div className={`type2 ${poke.type2}`}>
              <p>{poke.type2}</p>
            </div>
          </div>
        ) : (
          <div className="types">
            <div className={`typeSolo ${poke.type}`}>
              <p>{poke.type}</p>
            </div>
          </div>
        )}
      </div>
      <div className="geral">
        <div className="status">
          <table cellSpacing={0}>
            <tbody>
              <tr>
                <td>
                  <p>{`HP: ${poke.hp}`}</p>
                </td>
                <td>
                  <p>{`SPD: ${poke.speed}`}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{`ATK: ${poke.attack}`}</p>
                </td>
                <td>
                  <p>{`SP. ATK: ${poke.sP_Atck}`}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{`DEF: ${poke.defense}`}</p>
                </td>
                <td>
                  <p>{`SP. DEF: ${poke.sP_Def}`}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="total">
          <p>{`TOTAL: ${poke.total}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonView;
