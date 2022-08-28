import styled from "styled-components";

const Status = styled.div`
    ul {
        list-style-type: none;
        font-weight: 800;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        li {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 120px;
            height: 30px;

            border-radius: 5px;
        }

        #hp {
            background-color: #ff5959;
        }

        #attack {
            background-color: #f5ac78;
        }

        #defense {
            background-color: #fae078;
        }

        #special-attack {
            background-color: #9db7f5;
        }

        #special-defense {
            background-color: #a7db8d;
        }

        #speed {
            background-color: #fa92b2;
        }
    }
`

export default Status