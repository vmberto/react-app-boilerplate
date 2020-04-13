import styled from 'styled-components';

interface InputProps { }

export const Input = styled.input<InputProps>`
    padding: 12px 20px;
    border-radius: 2px;
    font-size: 1em;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24);
    border: solid 1px #fef8f8;
    background-color: #ffffff;
`;