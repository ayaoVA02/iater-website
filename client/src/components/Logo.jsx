
import { Link } from 'react-router-dom'
import { logo2 } from '../assets/images'
const Logo = () => {
  return (
    <>
    <Link to="/">

        <img src={logo2} alt="logo" className="w-auto h-16 object-cover" />
    </Link>


    </>
  )
}

export default Logo
