import swlogo from '../../assets/img/swlogo.jpeg';
import Menu from "../menu/Menu"

const header: React.FC = () => {
  return (
    <>
      <header className=" bg-black flex flex-row justify-center ">
        {/* <div className='container place-items-end'> */}
        <picture className='basis-10/12 flex h-28 items-center justify-center pl-44'>
          <img src={swlogo} alt="starwars logo" className='h-24 place-content-end' />
        </picture>
        <div className='basis-2/12 content-center flex justify-end'>
          <button className='text-gray-400 text-sm pr-6 basis-2/'>LOGIN // SIGN UP</button>
        </div>
        {/* </div> */}
      </header>
      <Menu />
    </>
  )
}

export default header
