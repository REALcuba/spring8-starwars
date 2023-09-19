// import { useEffect, useState } from "react";
// import { Api } from "../../utils/fetchDataFromAPI";


type FilmsCardProps = {
    dataArray: string[];
    route: string;
    nombre: string[];
    related: string
}
const Card = ({ dataArray, route, nombre, related }: FilmsCardProps) => {

    return (
        <div className='min-w-64 h-56 min-h-fit m-4 flex flex-col divide-y-2 divide-black rounded bg-white text-gray-500 '  >
            <h3 className="p-2 ">Related {related}</h3>
            <ul className="flex flex-row gap-2 mt-2  p-2 place-content-center" >
                {dataArray.length > 0 ? (
                    dataArray.map((data: string, index: number) => {
                        const movieName = nombre[index];
                        const dataUrl: string = data;
                        const dataNum = dataUrl.replace(/\D/g, "");
                        const imgUrl = `https://starwars-visualguide.com/assets/img/`;
                        return (
                            <li className="flex flex-col items-center justify-around w-20 h-28" key={dataNum}>
                                <img
                                    className=" w-10 rounded-full"
                                    src={`${imgUrl}${route}/${dataNum}.jpg`}
                                    alt="movies where you can see this ship"
                                />
                                {/* films's name or character's name passed with props */}
                                <p className="text-sm flex text-center " >{movieName}</p>
                            </li>
                        )
                    })
                ) : (
                    <div>No movies found</div>
                )}
            </ul>

        </div>

    )
}

export default Card
