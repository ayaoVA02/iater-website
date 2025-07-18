
import { Link } from 'react-router-dom'
import { logo2 } from '../assets/images'
const Logo = () => {
  return (
    <>
    <Link to="/iater">
        <img src='/webimage/LOGO.png' alt="logo" className="w-auto h-auto object-cover" />
    </Link>


    </>
  )
}

export default Logo
