import { useEffect, useState } from "react"
import fetchDataFromAPI from "../utils/fetchDataFromAPI"
import { type Starship } from "../types/types";

const StarshipsComponent = () => {
  const [starshipsData, setStarshipsData] = useState<Starship[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <h2>Starships from Star Wars</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {starshipsData.map((starship, index) => (
            <li key={index}>{starship.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StarshipsComponent;
