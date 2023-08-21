import GetStarships from "../components//GetStarShips/GetStarships"
import Header from "../components/header/Header";
import { type MainPageProps } from "../types/types";


const MainPage: React.FC<MainPageProps> = ({ loading, starshipsData }) => {

  return (
    <>
      <Header />
      <GetStarships loading={loading} starshipsData={starshipsData} />
    </>
  
  );
};

export default MainPage;


