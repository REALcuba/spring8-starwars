import axios from 'axios'

async function fetchDataFromAPI() {

    try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }

}
export default fetchDataFromAPI
