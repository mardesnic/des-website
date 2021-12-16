import { useForm, ValidationError } from '@formspree/react'
import { VscRocket } from 'react-icons/vsc'
import styled from 'styled-components'
import { Button } from './Button'

const VscRocketStyled = styled(VscRocket)`
    margin-left:5px;
`
const ParagraphStyled = styled.p`
    margin:30px auto;
    text-align:center;
    font-size:26px;
`
const FormStyled = styled.form`
    margin:30px 0 0;
    display:block;
    width:450px;
    max-width:100%;
    label{
        display:block;
        margin-bottom:10px;
        font-size:20px;
    }
    input, textarea{
        border:1px solid ${props => props.theme.secondary};
        display:block;
        outline:0;
        width:100%;
        margin-bottom:15px;
        font-size:20px;
        padding: 12px 16px;
    }
`

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mknynbyz");
    if (state.succeeded) {
        return (
            <>
                <ParagraphStyled>Hvala Vam na interesu!</ParagraphStyled>
                <ParagraphStyled>Jurim žurim odgovoriti <VscRocketStyled /></ParagraphStyled>
            </>
        )
    }
return (
    <FormStyled onSubmit={handleSubmit}>
        <label htmlFor="email">
            E-mail
        </label>
        <input
            id="email"
            type="email"
            name="email"
        />
        <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
        />
        <label htmlFor="message">
            Poruka
        </label>
        <textarea
            id="message"
            name="message"
            rows={4}
        />
        <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
        />
        <br />
        <Button type="submit" disabled={state.submitting}>
            Pošalji
        </Button>
    </FormStyled>
);
}

export default ContactForm