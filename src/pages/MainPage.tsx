import GetStarships from "../components//GetStarShips/GetStarships"
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import { type MainPageProps } from "../types/types";


const MainPage: React.FC<MainPageProps> = ({ loading, starshipsData, handleScroll }) => {

  return (
    <>
      <Header />
      <Nav/>
      <GetStarships loading={loading} starshipsData={starshipsData} handleScroll={handleScroll}/>
    </>
  
  );
};

export default MainPage;


