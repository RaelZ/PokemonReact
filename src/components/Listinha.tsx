import React, { useState } from "react";
import type { FC } from "react";
import { PokedexList } from "../models/PokedexList";
import { TListinha } from "../types/TListinha";
import "../styles/pokedex.scss";

const Listinha: FC<TListinha> = ({ pokeList, returnPokemon }) => {
  const [lista] = useState<PokedexList[]>(pokeList);
  const [select, setSelect] = useState<number>();

  return (
    <div className="lista">
      <table className="tabela" cellSpacing={0}>
        <tbody className="listinha">
          {Object.values(lista).map((x) => (
            <tr
              className={select === x.pokemonId ? "selected" : ""}
              onClick={() => {
                returnPokemon(x);
                setSelect(x.pokemonId);
              }}
              key={x.pokemonId}
            >
              <td className="numero">{`#${x.pokemonId}`}</td>
              <td className="nome">{x.name}</td>
              <td className="tipo1">
                <p className={`tipoText ${x.type}`}>{x.type}</p>
              </td>
              <td className="tipo2">
                {x.type2 ? (
                  <p className={`tipoText ${x.type2}`}>{x.type2}</p>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listinha;
