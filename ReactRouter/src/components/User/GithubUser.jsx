import { useEffect, useState } from 'react'
import {useParams, useLoaderData} from 'react-router-dom'

export default function GithubUser() {
    const data = useLoaderData()
    // const {userid} = useParams()
    // const [data, setData] = useState({})
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=> response.json())
    //     .then( data => {
    //         console.log('Response: ', data)
    //         setData(data)
    //     })
        
    // }, [])

    return(
        <div className= "p-7 bg-gray-300">
        <h1 className="text-3xl items-center text-center font-bold ">
            Followers: {data.followers}
        </h1>
        <img src={data.avatar_url} width={300}/>
        </div >
    )
}

export const githubUserInfo = async ()=> {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
