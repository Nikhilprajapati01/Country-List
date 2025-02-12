import React from 'react'
import  {useRouteError}  from 'react-router-dom'

export const Errorpage = ()=>{

    const error = useRouteError();
    console.log(error);

    return (

        <>
    <h1>error occure</h1>
    {error && <p> {error.data}</p>}

    
    </>
    )
    
}