// Componentes
import Pokemon from "./components/Pokemon";
import Sprite from "./components/Sprite";
import Name from "./components/Name";
import Type from "./components/Type";
import Status from "./components/Status";
import Container from "./components/Container"
import Botao from "./components/Botao"
import Search from "./components/Search";
import Titulo from "./components/Titulo";
import GlobalStyle from "./styles/global"
import Screen from "./components/Screen";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [pokemon, setPokemon] = useState("charizard")
  const [types, setTypes] = useState()
  const [status, setStatus] = useState({
    'hp': 0,
    'atk': 0,
    'def': 0,
    'spatk': 0,
    'spdef': 0,
    'speed': 0
  })

  let lista = []

  const response = async () => {
    const content = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await content.json()

    for(let index_type of data.types) {
      lista.push(index_type.type.name)
      setTypes(lista.join(', '))
    }

    for(let status of data.stats){
      localStorage.setItem(`${status.stat.name}`, status.base_stat)
      setStatus({
        'hp': localStorage.getItem('hp'),
        'atk': localStorage.getItem('attack'),
        'def': localStorage.getItem('defense'),
        'spatk': localStorage.getItem('special-attack'),
        'spdef': localStorage.getItem('special-defense'),
        'speed': localStorage.getItem('speed')
      })
    }

    document.getElementById('pokemon-name').innerHTML = data.name
    document.getElementById('pokemon-sprite').src = data.sprites.other.home.front_default
  }

  useEffect(() => { response() }, [0]);

  const getPokemon = pokemon => {
    setPokemon(pokemon.target.value.toLowerCase())
  }

  return (
    <Container>
      <Titulo>Pokedex</Titulo>

      <Search>
        <SearchBar 
          type="text"
          name="pokemon_search"
          id="search_pokemon"
          placeholder="Ex: pikachu"
          onChange={ pokemon => {
            getPokemon(pokemon)
          }}>
        </SearchBar>
        <Botao onClick={() => response()}>Buscar</Botao>
      </Search>

      <Pokemon>
        <Name id="pokemon-name"></Name>
        <Screen>
          <Sprite src="" alt="Pokemon" id="pokemon-sprite"></Sprite>
        </Screen>
        <Type id="pokemon-types">Type: {types}</Type>
        <Status>
          <ul className="pokemon-status">
            <li id="hp">HP: {status.hp}</li>
            <li id="attack">ATK: {status.atk}</li>
            <li id="defense">DEF: {status.def}</li>
            <li id="special-attack">SP. ATK: {status.spatk}</li>
            <li id="special-defense">SP. DEF: {status.spdef}</li>
            <li id="speed">SPEED: {status.speed}</li>
          </ul>
        </Status>
      </Pokemon>
      <GlobalStyle />
    </Container>
  );
}

export default App;
