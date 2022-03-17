import React, { useEffect, useState } from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState("");

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((resp) => {
        setPokemon(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setPokemon(props.pokemon);
  }, []);

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight}</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;
