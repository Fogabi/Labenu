import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

function App(){

  const[pokeList, setPokeList] = useState([])
  const[pokeName, setPokeName] = useState("")

  const getPokeList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokeList()
  },[])

  const onChangePokeName = (event) => {
    setPokeName(event.target.value);
  };

    return (
      <div className="App">
        <select onChange={onChangePokeName}>
          <option value={""} >Nenhum</option>
          {pokeList.map((pokemon, i) => {
            return <option key={i}>{pokemon.name}</option>;
          })}
        </select>
        {pokeName && <PokeCard pokemon ={pokeName}/>}
      </div>
    );
  
}

export default App;
