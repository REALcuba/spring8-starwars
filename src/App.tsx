import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

//styles
import './App.css'
//components
import MainPage from './pages/MainPage';
import StarshipPage from './pages/StarshipPage';
import Login from './pages/Login';
//img
import { Starship } from './types/types';
import { Api } from './utils/fetchDataFromAPI';

// type LoginProps = {
//   handleLogin: () => void

// }
function App() {

  const [data, setData] = useState<Starship[]>([]); // Datos a mostrar
  const [page, setPage] = useState(1); // Número de página actual
  const [loading, setLoading] = useState(false); // Estado de carga
  const [nextPage, setNextPage] = useState([])
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()

  const handleLogin: () => void = () => {
    navigate('/main-page')
    setLogin(true)
    console.log(login);

  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await Api.get(`/starships/?page=${page}`);
        console.log(response);
        const newData: [] = response.data.results;
        setNextPage(response.data.next)

        setData(prevData => [...prevData, ...newData]);
        setLoading(false);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.stat);
          console.log(error.response.data);

        } else {
          console.error('Error fetching data:', error);
        }
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  // Función que se ejecuta cuando el usuario se acerca al final de la página
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 25 
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    if (nextPage !== null) {

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [nextPage]);

  return (
    <Routes>
      {login ? (
        <Route path='/main-page' element={<MainPage loading={loading} starshipsData={data} handleScroll={handleScroll} />} />
      ) : (
        <Route path='/' element={<Login handleLogin={handleLogin} />} />
      )}
        <Route path='/main-page' element={<MainPage loading={loading} starshipsData={data} handleScroll={handleScroll} />} />

      <Route path='/starship-page/:index' element={<StarshipPage starshipsData={data} />} />
    </Routes>
  )
}

export default App
