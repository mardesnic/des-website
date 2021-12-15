import { Link } from 'react-router-dom'
import { Button } from './Button'


const KontaktButton = () => {
    return (
        <Link to='/kontakt'>
            <Button>Što čekaš?</Button>
        </Link>
    )
}

export default KontaktButton
