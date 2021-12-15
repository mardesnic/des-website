import styled from 'styled-components'
import { Container } from './Container'
import { Paragraph } from './Paragraph'

const FooterContainer = styled(Container)`
    display:flex;
    justify-content: flex-start;
    align-items:center;
    height:80px;
`
const FooterWrapper = styled.footer`
    background:${props => props.theme.primary1};
    color:${props => props.theme.secondary};
    position:relative;
    z-index:2;
`
const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <Paragraph>&copy; 2021 Des - Work in progress...</Paragraph>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer
