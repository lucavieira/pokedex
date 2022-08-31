import { createGlobalStyle } from "styled-components";
import pokemonFont from "../assets/fonts/pokemonHollow.ttf"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        @font-face {
            font-family: 'Pokemon Hollow';
            src: url(${pokemonFont}) format('truetype');
        }
    }
`