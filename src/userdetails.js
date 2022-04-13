import React from "react"
import { useParams } from "react-router-dom";
export default function Userdetails()
{
    const params = useParams()

    return <div>
        <h1>User Id {params.id}</h1>
        <h1>welcome {params.name}</h1>
    </div>
}