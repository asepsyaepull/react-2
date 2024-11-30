import Navbar from "./components/Header"
import imageLogo from "./assets/logo-img-2.png"

import { HiOutlineHeart, HiOutlineSearch, HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';


// const dataLogo = {
//   image: imageLogo,
//   text: "Furniro"
// }

const logo = imageLogo
const textLogo = "Furniro"
const isDarkMode = false

const navList = [
  {
    title: "Home",
    link: "#"
  },
  {
    title: "Shop",
    link: "#"
  },
  {
    title: "About",
    link: "#"
  },
  {
    title: "Contact",
    link: "#"
  }
]

const icons = [{
  id: 1,
  icon: <HiOutlineUser />,
},
{
  id: 2,
  icon: <HiOutlineSearch />,
},
{
  id: 3,
  icon: <HiOutlineHeart />,
},
{
  id: 4,
  icon: <HiOutlineShoppingCart />,
}]

const App = () => {
  return (
    <Navbar logo={logo} textLogo={textLogo} navList={navList} icons={icons} isDarkMode={isDarkMode} />
  )
}

export default App