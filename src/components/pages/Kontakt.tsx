import { Container } from '../Container'
import { Section } from '../Section'
import ContactForm from '../ContactForm'
import PageTitle from '../PageTitle'

const Kontakt = () => {
    return (
        <>
            <PageTitle title='Kontakt | Des' />
            <Section>
                <Container>
                <ContactForm />
                </Container>
            </Section>
        </>
    )
}

export default Kontakt
