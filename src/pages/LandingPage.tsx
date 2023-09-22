import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';

const LandingPage= () => {

    return (
        <section className='h-screen'>
            <Header />
            <Nav />
            {/* <Nav/> */}
            {/* <button className='bg-blue-500 rounded-2xl p-2' onClick={handleLogin}>Login</button> */}
            <h1>Esta es la landing</h1>
        </section>
    )
}

export default LandingPage