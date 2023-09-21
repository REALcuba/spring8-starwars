import { useParams } from 'react-router-dom';
import { StarshipPageProps } from '../types/types';
// import { starshipImg } from '../assets/img/starships/starshipsImg';
// import imgPlaceholder from '../assets/img/placeholder.jpeg'
import Cards from '../components/card/Cards';
import { useEffect, useState } from 'react';

import UseGetNameData from '../components/customHooks/UseGetNameData';


const StarshipPage: React.FC<StarshipPageProps> = ({ starshipsData }) => {
    const imgPlaceHolder = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    const [filmNames, setFilmNames] = useState<string[]>([]);
    const [pilotNames, setPilotNames] = useState<string[]>([]);
    const [filmLoading, setFilmLoading] = useState(true);
    const [pilotLoading, setPilotLoading] = useState(true); 
    const [displayedImgUrl, setDisplayedImgUrl] = useState(imgPlaceHolder);


    const { index } = useParams();
    const starship = starshipsData[Number(index)];
    const filmsURLs = starship.films;
    const pilotsURLs = starship.pilots;

    const dataUrl: string = starship.url;
    const dataNum = dataUrl.replace(/\D/g, "");

    const imgUrl = `https://starwars-visualguide.com/assets/img/starships/${dataNum}.jpg`


    useEffect(() => {
        // Crea un elemento de imagen
        const img = new Image();

        // Establece un manejador de eventos para cargar con éxito la imagen
        img.onload = function () {
            // La imagen se ha cargado correctamente, actualiza el estado para mostrarla
            setDisplayedImgUrl(imgUrl);
        };

        // Establece un manejador de eventos para el caso en que la imagen no se cargue correctamente
        img.onerror = function () {
            // La imagen no se ha cargado correctamente, muestra la imagen de marcador de posición
            console.log('La imagen no se ha cargado correctamente, se mostrará la de marcador de posición.');
            setDisplayedImgUrl(imgPlaceHolder);
        };

        // Asigna la URL de la imagen al elemento de imagen
        img.src = imgUrl;
    }, [dataNum, imgUrl, imgPlaceHolder]);

    // get films and pilots
    const filmsInApi = "/films/";
    const pilotsInApi = "/people/";

    // Utiliza el custom hook para obtener los nombres de las películas y personajes
    const filmNamesArr = UseGetNameData(filmsInApi, filmsURLs);
    const pilotNamesArr = UseGetNameData(pilotsInApi, pilotsURLs);
    useEffect(() => {
        const fetchingData = async () => {
            setFilmLoading(true)
            // try {
            // const filmNamesArr = await UseGetNameData(filmsInApi, filmsURLs);
            // const pilotNamesArr = await UseGetNameData(pilotsInApi, pilotsURLs);
            setFilmNames(filmNamesArr)
            setFilmLoading(false)
            console.log(filmLoading);


            setPilotNames(pilotNamesArr)
            setPilotLoading(false)
            // } catch (error) {
            //     setFilmLoading(false)
            //     setPilotLoading(false)
            //     console.log(error);

            // }
        }
        fetchingData()
    }, [filmsInApi, pilotsInApi, filmsURLs, pilotsURLs, filmNamesArr, pilotNamesArr, filmLoading])
   
    return (
        <>
            <section className='flex content-center flex-col justify-between items-center text-center text-white bg-spacebg bg-cover'>
                <h1>{starship.name.toUpperCase()}</h1>
                <div>
                    <picture><img src={displayedImgUrl} alt={starship.name} /></picture>
                </div>
                <div className='pt-3 '>
                    <p>MODEL: <span className='uppercase text-gray-400'> {starship.model}</span> </p>
                    <p>STARSHIP CLASS: <span className='uppercase text-gray-400'> {starship.starship_class}</span></p>
                    <p>MANUFACTURER: <span className='uppercase text-gray-400'> {starship.manufacturer}</span></p>
                    <p>COST: <span className='uppercase text-gray-400'> {starship.cost_in_credits}</span> </p>
                </div>
                <aside className='flex justify-around w-screen py-3 last:mb-2'>
                    <div className=' text-start'>
                        <p>CREW: <span className='uppercase text-gray-400' > {starship.crew}</span></p>
                        <p>PASSENGER CAPACITY:<span className='uppercase text-gray-400'> {starship.passengers}</span> </p>
                        <p>CARGO CAPACITY:<span className='uppercase text-gray-400' > {starship.cargo_capacity}</span> </p>
                        <p>CONSUMABLES:<span className='uppercase text-gray-400'> {starship.consumables}</span> </p>
                    </div>
                    <div className=' text-start' >
                        <p>LENGHT: <span className='uppercase text-gray-400'>{starship.length}</span></p>
                        <p>MAXIMUM ATMOSPHERING SPEED: <span className='uppercase text-gray-400'> {starship.max_atmosphering_speed}</span></p>
                        <p>HYPERDRIVE RATING: <span className='uppercase text-gray-400'> {starship.hyperdrive_rating}</span></p>
                        <p>MAXIMUM SPEED IN REALSPACE:<span className='uppercase text-gray-400'> {starship.MGLT}</span></p>
                    </div>
                </aside>
            </section >
            <section className='flex justify-evenly items-center bg-black h-72'>
                {filmLoading || pilotLoading ? (
                    <div className='text-white'>Loading...</div>
                ) : (
                    <>

                        <Cards dataArray={filmsURLs} route={"films"} nombre={filmNames} related={"Movies"} />
                        <Cards dataArray={pilotsURLs} route={"characters"} nombre={pilotNames} related={"Pilots"} />
                    </>)}
            </section>
        </>
    );
};

export default StarshipPage;


