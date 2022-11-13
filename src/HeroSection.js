import React, { useState } from 'react';
import axios from "axios"





export default function HeroSection() {
    const [superheroChoice, setSuperheroChoice] = useState('')
    const [resultList, setResultList] = useState('')
    const [error, setError] = useState(null)

    
    function handleSubmit(e) {
        e.preventDefault()
        setError(null)
        axios.get(`https://superheroapi.com/api/5957411374291477/search/${superheroChoice}`, {
            
        }
        )
            .then((res) => {
                let results = (res)
                console.log(results)

            })
            .catch((error) => {
                setError(error.message)
            })
    }

    function handleChange(e) {
        let modifiedSearchTerm = e.target.value.toLowerCase().replace(' ', '_')
        console.log(modifiedSearchTerm)
        if (modifiedSearchTerm === 'spiderman') {
            modifiedSearchTerm = 'spider-man'
        }
        setSuperheroChoice(modifiedSearchTerm)
    }
    return (
        <>
            <div className="Hero">
                <h2>Holy Alter Ego, 
                    Batman!  Search a superhero to find out his/her secret identity and other facts!</h2>
                <form onSubmit = {handleSubmit}>
                    <label>
                        
                        <input id="text" type="text"  onChange={handleChange} />
                    </label>
                    <input id="submit" type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}