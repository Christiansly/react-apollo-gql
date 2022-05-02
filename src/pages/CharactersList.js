import React from 'react'
import "./CharactersList.css"
import useCharacters from '../hooks/useCharacters'



function CharactersList() {
    const {error, data, loading} = useCharacters()
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