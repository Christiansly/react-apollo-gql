import {gql, useQuery} from "@apollo/client"
const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id) {
            name
            id 
            image  
            episode {
                name  
                episode
            }
        }
    }
`

function useCharacter(id) {
    return useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    })
}

export default useCharacter