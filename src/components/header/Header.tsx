import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// components
import SearchBar from '../searchBar/SearchBar'
// imagenes
import swlogo from '../../assets/img/swlogo.jpeg'
import FBsvg from '../../assets/svg/brand-facebook-filled.svg'
import instSvg from '../../assets/svg/brand-instagram.svg'
import tw from '../../assets/svg/brand-twitter.svg'
import yt from '../../assets/svg/brand-youtube.svg'

const Header = () => {
  const [search, setSearch] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  const handleCancelSearch = () => {
    setSearch(!search)
    console.log(search)
  }
  const getLogin = () => {
    navigate('/login')
    setIsLogin(!isLogin)
  }
  const logBtn = isLogin ? 'LOG OUT ' : 'LOGIN'
  return (
    <>
      <header className=' bg-black grid grid-cols-4 justify-center '>
        <div className=''>
          <ul className='flex gap-2 items-center m-2 justify-end'>
            <li><a href='https://www.instagram.com/starwars/' target='_blank' rel='noopener noreferrer'><img className='bg-white rounded  w-4' src={FBsvg} alt='' /></a></li>
            <li><a href='https://twitter.com/starwars' target='_blank' rel='noopener noreferrer'><img className='bg-white rounded  w-4' src={instSvg} alt='' /></a></li>
            <li><a href='https://www.facebook.com/starwars.es/?brand_redir=169299103121699' target='_blank' rel='noopener noreferrer'><img className='bg-white rounded  w-4' src={tw} alt='' /></a></li>
            <li><a href='https://www.youtube.com/user/starwars' target='_blank' rel='noopener noreferrer'><img className='bg-white rounded  w-4' src={yt} alt='' /></a></li>
            <li className='border-s'><a href='https://www.starwarskids.com/' target='_blank' rel='noopener noreferrer'><img className='bg-white rounded mx-4' src='https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15' alt='' /></a></li>
          </ul>
        </div>
        <picture className=' col-span-2 h-28 flex items-center justify-center '>
          <img src={swlogo} alt='starwars logo' className='h-24 place-content-end' />
        </picture>
        <div className='flex flex-row content-center justify-end gap-4 '>
          <div className='flex items-center text-white'>
            {search ? <SearchBar handleCancelSearch={handleCancelSearch} /> : <span onClick={handleCancelSearch}>SEARCH</span>}
          </div>
          <button
            className='text-gray-400 text-sm pr-6 /'
            onClick={getLogin}
          >
            {logBtn}
          </button>
        </div>
      </header>

    </>
  )
}

export default Header
