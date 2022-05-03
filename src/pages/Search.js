import React, { useState } from 'react'
import {ApolloClient, gql, useLazyQuery} from "@apollo/client"
const GET_CHARACTER_LOCATION = gql`
    query Get_Character_Location($name: String!) {
        characters(filter: {name: $name}) {
            results {
                location {
                    name
                }
            }
        }
    }
`

function Search() {
    const [name, setName] = useState("")
    const [getLocations, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATION, {
        variables: {
            name
        }
    }

    )
    console.log(called, loading, error, data)
  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={e => getLocations()}>Search</button>
    </div>
  )
}

export default Search