import { useState } from 'react'
import { Container } from './Container'
import ParticlesWrapper from './ParticlesWrapper'
import {Button} from './Button'
import { VscRocket } from 'react-icons/vsc'
import styled from 'styled-components'

const Hero = styled.div`
    position:relative;
    min-height:calc(100vh - 160px);
    background-color: ${props => props.theme.primary};
    color:${props => props.theme.secondary};
    text-align:center;
    display:flex;
    align-items:center;
    justify-content: center;
`
const Cta = styled.div`
    width:500px;
    max-width:100%;
    padding:1.5rem;
    background:${props => props.theme.primary1};
    margin:0 auto;
    opacity:1;
    position:relative;
    z-index:2;
    h2{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:1.5rem;
    }
`
const VscRocketStyled = styled(VscRocket)`
    margin-left:1rem;
`

const HeroWrapper = () => {
    const [showParticles, setshowParticles] = useState(false)
    const toggleShowParticles = () => {
        setshowParticles(!showParticles)
    }
    return (
        <Hero>
            <Container>
                <Cta>
                    <h2>Najbrže stranice na tržištu <VscRocketStyled /></h2>  
                    <Button onClick={()=>toggleShowParticles()}>Brrrr</Button>
                </Cta>
            </Container>
            { showParticles && <ParticlesWrapper />}
        </Hero>
    )
}

export default HeroWrapper
