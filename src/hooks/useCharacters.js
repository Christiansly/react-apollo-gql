import {gql, useQuery} from "@apollo/client"
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
function useCharacters() {
   return useQuery(GET_CHARACTERS)


}

export default useCharacters
