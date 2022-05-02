import React from 'react'
import {gql, useQuery} from "@apollo/client"
import { BarLoader } from 'react-spinners'
import "./CharactersList.css"

const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id 
                name  
                image
            }
        }
    }
`

function CharactersList() {
    const {error, data, loading} = useQuery(GET_CHARACTERS)
    if(loading) return <div>Loading...</div>
    if(error) return <div>Something went wrong</div>
  return (
    <div className="CharactersList">
        {data.characters.results.map(character => {
            return <div>
                <img src={character.image} />
                <h2>{character.name}</h2>
            </div>
        })}
    </div>
  )
}

export default CharactersList