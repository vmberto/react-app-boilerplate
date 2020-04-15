import styled from 'styled-components';

export const Input = styled.input`
    padding: 12px 20px;
    border-radius: 2px;
    font-size: 1em;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24);
    border: solid 1px #fef8f8;
    background-color: #ffffff;

    &::before {
        content: "Olhe para esta caixa laranja.";
        background-color: #FFBA10;
        border-color: black;
        border-style: dotted;
    }
`;
