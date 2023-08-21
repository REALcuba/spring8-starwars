import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from "react";

//styles
import './App.css'
//components
import HomePage from './pages/MainPage';
import StarshipPage from './pages/StarshipPage';
import fetchDataFromAPI from './utils/fetchDataFromAPI';
import { Starship } from './types/types';


function App() {
  const [loading, setLoading] = useState(true);
  const [starshipsData, setStarshipsData] = useState<Starship[]>([]);
  // const starShipInfo = starshipsData.map(starship => {
  //   return starship
  // })

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await fetchDataFromAPI();
        setStarshipsData(data.results);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching starships data:', error);
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);
  console.log(starshipsData);
  return (
    <Routes>
      <Route path='/' element={<HomePage loading={loading} starshipsData={starshipsData} />} />
      <Route path='/Starship-page/:index' element={<StarshipPage starshipsData={starshipsData} />} />
    </Routes>
  )
}

export default App
