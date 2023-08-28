import { type GetStarshipsProps, Starship } from "../../types/types";
import { Link, } from "react-router-dom";

const GetStarships: React.FC<GetStarshipsProps> = ({ loading, starshipsData, handleScroll }) => {


    return (
        <section className="bg-black flex justify-center flex-col " >

            {loading ? (
                <p className="text-gray-400 text-center">Loading...</p>
            ) : (
                    <ul className="flex flex-col space-y-4 my-8 mx-auto container w-screen">
                        {starshipsData.map((starship: Starship, index: number) => (

                            <li key={index} className="bg-neutral-950 flex text-gray-400 rounded-sm flex-col" >
                                <Link to={`/starship-page/${index}`} className=" flex flex-col">
                                    <span className="mx-2 mt-2 uppercase">{starship.name}</span>
                                    <span className="m-2 text-sm">{starship.model}</span>
                                </Link> 
                        </li>
                    ))}
                        <div className=" flex  place-content-center">

                            <button className="bg-blue-600 content-center w-36 h-10 rounded-sm text-white" onClick={handleScroll}>VIEW MORE</button>
                        </div>
                </ul>
            )}
        </section>
    );
};

export default GetStarships;
