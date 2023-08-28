import GetStarships from "../components//GetStarShips/GetStarships"
import Header from "../components/header/Header";
import { type MainPageProps } from "../types/types";


const MainPage: React.FC<MainPageProps> = ({ loading, starshipsData, handleScroll }) => {

  return (
    <>
      <Header />
      <GetStarships loading={loading} starshipsData={starshipsData} handleScroll={handleScroll}/>
    </>
  
  );
};

export default MainPage;


