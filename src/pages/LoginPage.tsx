import { type LoginProps } from '../types/types';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import LoginForm from '../components/loginForm/LoginForm';
// import { useState } from 'react';

const Login: React.FC<LoginProps> = ({ setEmailValue, handleSubmitLogin, emailValue }) => {
    // const [isLogin, setIsLogin] = useState<boolean>(false)
    // if (emailValue !== '') {
    //     setIsLogin(true)
    // }

    return (
        <>
            <Header emailValue={emailValue} />
            <Nav />
            <LoginForm setEmailValue={setEmailValue} handleSubmitLogin={handleSubmitLogin} emailValue={emailValue} />

        </>
    )
}

export default Login
