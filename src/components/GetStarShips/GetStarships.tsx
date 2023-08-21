import { useEffect, useState } from "react"
import fetchDataFromAPI from "../../utils/fetchDataFromAPI"
import { type Starship } from "../../types/types";

const GetStarships = () => {
    const [starshipsData, setStarshipsData] = useState<Starship[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStarships = async () => {
            try {
                const data = await fetchDataFromAPI();
                setStarshipsData(data.results);
                console.log(data.results);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching starships data:', error);
                setLoading(false);
            }
        };

        fetchStarships();
    }, []);

    return (
        <section className="bg-black flex justify-center" >

            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="flex flex-col space-y-4 my-8 container mx-auto">
                    {starshipsData.map((starship, index) => (

                        <li key={index} className="bg-neutral-950 flex text-gray-400 rounded-sm flex-col">
                            <span className="mx-2 mt-2">{starship.name.toUpperCase()}</span>
                            <span className="m-2 text-sm">{starship.model}</span>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default GetStarships;
