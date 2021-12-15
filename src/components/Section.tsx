import styled from 'styled-components'
export const Section = styled.section`
background-color:${props => props.theme.primary};
color:${props => props.theme.secondary};
position:relative;
padding:1.5rem 0;
min-height:calc(100vh - 160px);
h1{
    font-size:32px;
    font-weight: normal;
}
`
