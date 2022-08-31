import styled from "styled-components";
import fundo from "../assets/images/fundo.png"

const Screen = styled.div`
    max-width: 300px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 10px;

    border: 15px solid #a9a9a9;
    border-radius: 12px;
    border-bottom-left-radius: 54px;

    background: url(${fundo}) no-repeat center;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
`

export default Screen