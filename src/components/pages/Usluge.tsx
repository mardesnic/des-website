import { Container } from '../Container'
import { Section } from '../Section'
import { MdOutlineChat, MdOutlineSearch, MdOutlineMobileFriendly } from 'react-icons/md'
import { BsBricks } from 'react-icons/bs'
import { IoPulseOutline } from 'react-icons/io5'
import styled from 'styled-components'
import KontaktButton from '../KontaktButton'
import PageTitle from '../PageTitle'

const CardGrid = styled.div`
margin-top:30px;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
@media (max-width:960px){
    grid-template-columns: 1fr;
}
grid-auto-rows: 1fr;
gap:1em;
:before{
    content:'';
    width:0;
    padding-bottom:100%;
    grid-row:1/1;
    grid-column:1/1;
}
> *:first-child{
    grid-row: 1 / 1;
    grid-column: 1 / 1;
}
`

const Card = styled('div')<{animationName:string, delay: number}>`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px solid ${props => props.theme.secondary2};
background:${props => props.theme.primary};
padding:1.5em;
text-align:center;
opacity:0;
animation-name: ${props => props.animationName};
animation-duration: 500ms;
animation-fill-mode:forwards;
animation-delay: ${props => props.delay}ms;
`


const Usluge = () => {
    return (
        <>
            <PageTitle title='Usluge | Des' />
            <Section>
                <Container>
                    <CardGrid>
                        <Card delay={100} animationName={'slideInFromLeft'}>
                            <BsBricks size='2em' />
                            <br />
                            <h3>Izrada Web Stranice</h3>
                            <br />
                            <p>Želite najbržu stranicu na tržištu?</p>
                        </Card>
                        <Card delay={200} animationName={'slideInFromTop'}>
                            <MdOutlineMobileFriendly size='2em' />
                            <br />
                            <h3>Mobilne aplikacije</h3>
                            <br />
                            <p>Imate ideju za iOS i/ili Android aplikaciju?</p>
                        </Card>
                        <Card delay={300} animationName={'slideInFromRight'}>
                            <IoPulseOutline size='2em' />
                            <br />
                            <h3>Revitalizacija</h3>
                            <br />
                            <p>Želite staru stranicu vratiti u život?</p>
                        </Card>
                        <Card delay={400} animationName={'slideInFromLeft'}>
                            <MdOutlineChat size='2em' />
                            <br />
                            <h3>Savjetovanje</h3>
                            <br />
                            <p>Imate pitanja i želite stručno mišljenje?</p>
                        </Card>
                        <Card delay={500} animationName={'slideInFromBottom'}>
                            <MdOutlineSearch size='2em' />
                            <br />
                            <h3>SEO i Testiranje</h3>
                            <br />
                            <p>Želite provjeriti koliko je lako pronaći vašu stranicu?</p>
                        </Card>
                        <Card delay={600} animationName={'slideInFromRight'}>
                            <KontaktButton />
                        </Card>
                    </CardGrid>
                </Container>
            </Section>
        </>
    )
}

export default Usluge
