import React, { useState } from 'react';
import axios from "axios"





export default function HeroSection() {
    const [superheroChoice, setSuperheroChoice] = useState('')
    const [resultList, setResultList] = useState('')
    const [error, setError] = useState(null)

    
    function handleSubmit(e) {
        e.preventDefault()
        setError(null)
        axios.get("https://superheroapi.com/api/5957411374291477/search/superman", {
            // headers: { 'Access-control-request-origin': "localhost:3000",
            //             'Access-Control-Request-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            //              },
        }
        )
            .then((res) => {
                let results = (res.name)
                console.log(results)

            })
            .catch((error) => {
                setError(error.message)
            })
    }
    return (
        <>
            <div className="Hero">
                <h2>Holy Alter Ego, 
                    Batman!  Search a superhero to find out his secret identity and other facts!</h2>
                <form onSubmit = {handleSubmit}>
                    <label>
                        
                        <input id="text" type="text"  onChange={(e) => setSuperheroChoice(e.target.value)} />
                    </label>
                    <input id="submit" type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}