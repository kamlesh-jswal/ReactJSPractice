import {useParams} from 'react-router-dom'

export default function User() {
    const {userid} = useParams()
    return(
        <>
        <h1 className="text-3xl items-center text-center font-bold ">
            User: {userid}
        </h1>
        </>
    )
}