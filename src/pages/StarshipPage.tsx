import { useParams } from 'react-router-dom';
import { StarshipPageProps } from '../types/types';

const StarshipPage: React.FC<StarshipPageProps> = ({ starshipsData }) => {
    const { index } = useParams();

    const starship = starshipsData[Number(index)];
    console.log(starship);


    return (
        <div>
            <h2>{starship.name}</h2>
            <p>Model: {starship.model}</p>
        </div>
    );
};

export default StarshipPage;
