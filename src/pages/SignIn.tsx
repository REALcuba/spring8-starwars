// import { type LoginProps } from '../types/types';
import Header from '../components/header/Header';
// import Nav from '../components/nav/Nav';
import SignInForm from '../components/signInForm/SignInForm';

const Login: React.FC = ({handleSubmitSignIn, setEmailValue, setNameValue, emailValue}) => {

    return (
        <section className='h-screen'>
            <Header />
            {/* <Nav/> */}
            <SignInForm 
            handleSubmitSignIn={handleSubmitSignIn}
            setEmailValue={setEmailValue}
            setNameValue={setNameValue}
            emailValue={emailValue}
           />
            {/* <button className='bg-blue-500 rounded-2xl p-2' onClick={handleLogin}>Login</button> */}

        </section>
    )
}

export default Login
