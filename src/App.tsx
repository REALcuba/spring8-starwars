import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect, FormEvent } from "react";

//styles
import './App.css'
//components
import Landing from './pages/Landing';
import MainPage from './pages/MainPage';
import StarshipPage from './pages/StarshipPage';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import { Starship } from './types/types';
import { Api } from './utils/fetchDataFromAPI';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRout';
import { UseLocaleStorage } from './components/customHooks/UseLocaleStorage';

// type LoginProps = {
//   handleLogin: () => void

// }
function App() {

  const [data, setData] = useState<Starship[]>([]); // Datos a mostrar
  const [page, setPage] = useState(1); // Número de página actual
  const [loading, setLoading] = useState(false); // Estado de carga
  const [nextPage, setNextPage] = useState([]);
  const [emailValue, setEmailValue] = useState<string>('');
  const [nameValue, setNameValue] = useState<string>('');
  const [clientsArr, setClientsArr] = UseLocaleStorage("emails", []);
  const [user, setUser] = useState(null )

  const navigate = useNavigate()

  const handleSubmitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // const updatedClientsArr = [...clientsArr, emailValue];
    if (emailValue.trim() === "" ) {
        alert(`Por favor, ingresa un correo valido`);
        return;
    }
    if (clientsArr.includes(emailValue)) {
      setUser(emailValue)
      navigate("/main-page");
      }
      else{
  
          navigate('/sign-in')
      }
    // setClientsArr(updatedClientsArr);
    // navigate("/main-page");
    setUser(emailValue)
    // setEmailValue("");
    // setNameValue("")

};
console.log(emailValue);

const handleSubmitSignIn = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const updatedClientsArr = [...clientsArr, emailValue];
      if (emailValue.trim()==="" || nameValue.trim() === "") {
          alert(`Por favor, ingresa los datos de ${emailValue} y ${nameValue}`);
          return;
      }
  
      setClientsArr(updatedClientsArr);
      setUser(emailValue)

      navigate("/main-page");
  
      // setEmailValue("");
      // setNameValue("")
  
  };
  // const [clientsArr, setClientsArr] = useState([]);
  // const [localeStorageClient, setlocaleStorageClient] = UseLocaleStorage("email", '')

  // const [login, setLogin] = useState(false)
  // const navigate = useNavigate()

  // const handleLogin = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault()
    // setEmailValue(event.target.value)
    
    // if (emailValue.trim() === '') {
    //   alert('Por favor, ingresa un correo válido');
    //   return;
    // } else {

    // navigate('/main-page')
    // setLogin(true)
    // }

  // }
  // console.log(emailValue);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await Api.get(`/starships/?page=${page}`);
        console.log(response);
        const newData: [] = response.data.results;
        setNextPage(response.data.next)

        setData(prevData => [...prevData, ...newData]);
        setLoading(false);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.response) {
          console.log(error.response.data);

        } else {
          console.error('Error fetching data:', error);
        }
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  // Función que se ejecuta cuando el usuario se acerca al final de la página
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 25 
    ) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    if (nextPage !== null) {

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [nextPage]);

  return (
    <Routes>
      
        {/* <Route path='/main-page' element={<MainPage loading={loading} starshipsData={data} handleScroll={handleScroll} />} /> */}
        <Route index element={<Landing />} />
       
        <Route element={<ProtectedRoute user={user}/>}>
           <Route path='/main-page' element={<MainPage loading={loading} starshipsData={data} handleScroll={handleScroll} />} />
           <Route path='/starship-page/:index' element={<StarshipPage starshipsData={data} />} />
        </Route>

          <Route path='/login' element={<Login setEmailValue={setEmailValue} handleSubmitLogin={handleSubmitLogin}/>} />
          <Route path='/sign-in' element={<SignIn handleSubmitSignIn={handleSubmitSignIn} setNameValue={setNameValue} setEmailValue={setEmailValue} emailValue={emailValue}/>} />
       
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  )
}

export default App


