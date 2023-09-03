import { type LoginProps } from '../types/types';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';

const Login: React.FC<LoginProps> = ({ handleLogin }) => {

    return (
        <section  className='h-screen'>
            <Header />
            <Nav/>
            <div className='bg-black text-white flex flex-col h-full justify-center gap-4 items-center'>
                <p>Welcome star figther</p>
                <button className='bg-blue-500 rounded-2xl p-2' onClick={handleLogin}>Login</button>
            </div>
        </section>
    )
}

export default Login
