import { type LoginProps } from '../types/types';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import LoginForm from '../components/loginForm/LoginForm';

const Login: React.FC<LoginProps> = ({ setEmailValue, handleSubmitLogin, emailValue }) => {

    return (
        <>
            <Header />
            <Nav/>
        {/* <section className=''> */}
            <LoginForm setEmailValue={setEmailValue} handleSubmitLogin={handleSubmitLogin} emailValue={emailValue} />
            {/* <button className='bg-blue-500 rounded-2xl p-2' onClick={handleLogin}>Login</button> */}

        {/* </section> */}
        </>
    )
}

export default Login
