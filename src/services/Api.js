const ENDPOINT = 'https://rickandmortyapi.com/api/character/'
 
const getDataFromApi = () => {
 return fetch (ENDPOINT)
 .then(response => response.json())
}

export {getDataFromApi};