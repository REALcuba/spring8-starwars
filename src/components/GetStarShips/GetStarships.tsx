
import { type GetStarshipsProps, Starship } from "../../types/types";
import { Link, } from "react-router-dom";
const GetStarships: React.FC<GetStarshipsProps> = ({ loading, starshipsData }) => {

    return (
        <section className="bg-black flex justify-center" >

            {loading ? (
                <p className="text-gray-400">Loading...</p>
            ) : (
                <ul className="flex flex-col space-y-4 my-8 container mx-auto">
                        {starshipsData.map((starship: Starship, index: number) => (

                            <li key={index} className="bg-neutral-950 flex text-gray-400 rounded-sm flex-col" >
                                <Link to={`/starship-page/${index}`}>
                                    <span className="mx-2 mt-2">{starship.name.toUpperCase()}</span>
                                    <span className="m-2 text-sm">{starship.model}</span>
                                </Link> 
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default GetStarships;
