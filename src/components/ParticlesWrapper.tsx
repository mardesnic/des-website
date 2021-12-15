import { useContext } from 'react'
import Particles from 'react-tsparticles'
import styled, { ThemeContext } from 'styled-components'

const ParticlesStyled = styled(Particles)`
    canvas{
        position:absolute !important;
    }
`

const ParticlesWrapper = () => {
    const themeContext = useContext(ThemeContext)
    return (
        <ParticlesStyled
            id="tsparticles"
            options={{
                fpsLimit: 60,
                particles: {
                    opacity: {
                        value: 0,
                    },
                    color: {
                        value: themeContext.secondary,
                    },
                    links: {
                        color: themeContext.secondary,
                        enable: true,
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        outMode: "bounce",
                    },
                },
            }}
        />
    )
}

export default ParticlesWrapper
