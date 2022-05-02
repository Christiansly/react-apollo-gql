import React from 'react'
import "./CharactersList.css"
import useCharacters from '../hooks/useCharacters'
import { Link } from 'react-router-dom'



function CharactersList() {
    const {error, data, loading} = useCharacters()
    if(loading) return <div>Loading...</div>
    if(error) return <div>{error}</div>
  return (
    <div className="CharactersList">
        {data.characters.results.map(character => {
            return <Link to={`/${character.id}`}>
                <img src={character.image} />
                <h2>{character.name}</h2>
            </Link>
        })}
    </div>
  )
}

export default CharactersList