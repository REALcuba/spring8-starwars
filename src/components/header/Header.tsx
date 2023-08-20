import swlogo from '../../assets/img/swlogo.jpeg';
import Menu from "../menu/Menu"

const header: React.FC = () => {
  return (
    <>
      <header className=" bg-black flex">
        <picture className='flex place-content-center w-full h-28 items-center'>
          <img src={swlogo} alt="starwars logo" className='h-24 pl-24' />
        </picture>
        <div className='flex w-1/5'>
          <button className='text-gray-400 text-sm'>LOGIN // SIGN UP</button>
        </div>
      </header>
      <Menu />
    </>
  )
}

export default header
