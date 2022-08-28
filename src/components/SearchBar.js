import styled from "styled-components";

const SearchBar = styled.input`
    max-width: 600px;
    width: 90%;
    height: 30px;

    border: 1px solid #000;
    border-radius: 5px;

    background-color: #eee;

    padding-left: 12px;

    &::placeholder {
        color: #bbb;
    }
`

export default SearchBar