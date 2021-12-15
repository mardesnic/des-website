import styled from 'styled-components'

export const Button = styled.button`
    padding:12px 26px;
    font-size:20px;
    background-color:${props => props.theme.secondary};
    color:${props => props.theme.primary};
    border-radius: 0;
    outline:none;
    cursor:pointer;
    font-family: "Consolas", sans-serif;
    border:0;
    transition:filter 150ms ease;
    &:hover{
        filter: brightness(85%);
    }
`
