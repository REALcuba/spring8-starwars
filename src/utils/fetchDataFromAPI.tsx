import axios from 'axios'

export const Api = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

// async function fetchDataFromAPI() {

//     try {
//         const response = await axios.get('https://swapi.dev/api/');
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }

// }
// export default fetchDataFromAPI
