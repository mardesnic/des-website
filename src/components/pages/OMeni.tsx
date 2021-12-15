import profilna from '../../assets/images/profilna.webp'
import KontaktButton from '../KontaktButton'
import { Image } from '../Image'
import { Paragraph } from '../Paragraph'
import { Container } from '../Container'
import { Section } from '../Section'
import { H1 } from '../H1'
import styled from 'styled-components'
import PageTitle from '../PageTitle'

const StyledImage = styled(Image)`
    margin-top:30px;
    margin-bottom:30px;
`
const StyledParagraph = styled(Paragraph)`
    margin-bottom:15px;
`
const OMeni = () => {
    return (
        <>
            <PageTitle title='O meni | Des' />
            <Section>
                <Container>
                    <StyledImage width={250} height={158} src={profilna} alt={'Profilna'} />
                    <H1>Bok, ja sam Des.</H1>
                    <StyledParagraph>Drago mi je da smo se upoznali.</StyledParagraph>
                    <StyledParagraph>Radim web stranice, web aplikacije i mobilne aplikacije.</StyledParagraph>
                    <StyledParagraph>Koristim moderne tehnologije i uvijek sam u korak s vremenom.</StyledParagraph>
                    <StyledParagraph>Fleksibilan sam i trčim prema izazovima.</StyledParagraph>
                    <br />
                    <KontaktButton />
                </Container>
            </Section>
        </>
    )
}

export default OMeni
