import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <nav className="bg-black flex justify-center border-y border-gray-400">
      
      <ul className=" flex text-gray-400 group/menu">
        <li className="border border-r-0 border-gray-400 px-4 py-2 text-sm hover:border-b-blue-600 hover:text-white" >
          <Link to='/'>HOME</Link>
        </li>
        <li className="border border-gray-400 px-4 py-2 text-sm hover:border-b-blue-600 hover:text-white">
          <Link to ='/main-page'><span>STARSHIPS</span></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
