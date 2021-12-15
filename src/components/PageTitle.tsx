import { useEffect } from 'react'
type Props = {
    title:string
}
const PageTitle = ({title}:Props) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return <></>
}

export default PageTitle
