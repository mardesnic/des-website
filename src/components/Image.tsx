import styled from 'styled-components'
export const Image = styled.img.attrs(props => ({
    img: props.src,
  }))`
    display:block;
    margin-bottom:15px;
    max-width:100%;
`
