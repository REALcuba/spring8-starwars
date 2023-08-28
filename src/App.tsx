import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from "react";

//styles
import './App.css'
//components
import MainPage from './pages/MainPage';
import StarshipPage from './pages/StarshipPage';
// import fetchDataFromAPI from './utils/fetchDataFromAPI';
import { Starship } from './types/types';
import axios from 'axios';


function App() {

  const [data, setData] = useState<Starship[]>([]); // Datos a mostrar
  const [page, setPage] = useState(1); // Número de página actual
  const [loading, setLoading] = useState(false); // Estado de carga
  // const [hasMore, setHasMore] = useState(true); // Nuevo estado para controlar si hay más datos
  const [getResponse, setGetResponse] = useState([])

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
        console.log(response);
        const newData: [] = response.data.results;
        setGetResponse(response.data.next)

        setData(prevData => [...prevData, ...newData]);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  // Función que se ejecuta cuando el usuario se acerca al final de la página
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50 
    ) {
      // if (getResponse !== null)
      
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    if (getResponse !== null) {

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [getResponse]);
  //-----
  // const [starshipsData, setStarshipsData] = useState<Starship[]>([]);
  // const [page, setPage] = useState(1);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop >=
  //     document.documentElement.offsetHeight - 50 // Ajusta este valor según tus necesidades
  //   ) {
  //     setPage(prevPage => prevPage + 1);

  //   }
  // }

  // useEffect(() => {
  //   const fetchStarships = async () => {
  //     try {
  //       const data = await fetchDataFromAPI();
  //       // console.log(data);

  //       setStarshipsData(prevData => [...prevData, ...data.results]);

  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching starships data:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchStarships();
  // }, [page]);
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  // console.log(starshipsData);
  return (
    <Routes>
      <Route path='/' element={<MainPage loading={loading} starshipsData={data} handleScroll={handleScroll} />} />
      <Route path='/starship-page/:index' element={<StarshipPage starshipsData={data} />} />
    </Routes>
  )
}

export default App
