import { type LoginProps } from '../types/types';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import LoginForm from '../components/loginForm/LoginForm';

const Login: React.FC<LoginProps> = ({ setEmailValue, handleSubmitLogin, emailValue }) => {

    return (
        <>
            <Header />
            <Nav/>
            <LoginForm setEmailValue={setEmailValue} handleSubmitLogin={handleSubmitLogin} emailValue={emailValue} />

        </>
    )
}

export default Login
