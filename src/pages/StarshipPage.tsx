import { useParams } from 'react-router-dom';
import { Starship, StarshipPageProps } from '../types/types';
import { starshipImg } from '../assets/img/starships/starshipsImg';
import imgPlaceholder from '../assets/img/placeholder.jpeg'
import PilotsCard from '../components/pilotsCard/PilotsCard';

const StarshipPage: React.FC<StarshipPageProps> = ({ starshipsData }) => {
    const { index } = useParams();
    const starship = starshipsData[Number(index)];
    // const url = starship.url;
    const pilots = starship.pilots;
    const imgSrc: (starship: Starship) => string = (starship: Starship) => {

        const foundShip = starshipImg.find(ship => ship.name === starship.name);
        console.log(foundShip);

        if (foundShip) {
            return foundShip.img;
        } else {

            return `${imgPlaceholder}`;
        }

    }

    return (
        <>
            <section className='flex content-center flex-col justify-between items-center text-center text-white bg-spacebg bg-cover'>
                <h1>{starship.name.toUpperCase()}</h1>
                <div>
                    <picture><img src={imgSrc(starship)} alt="" /></picture>
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
            <section className='flex justify-center items-center bg-black h-52'>
            
                <PilotsCard pilots={pilots} />
            </section>
        </>
    );
};

export default StarshipPage;
