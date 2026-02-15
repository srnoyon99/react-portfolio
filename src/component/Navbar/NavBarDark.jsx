import { TextAlignJustify } from "lucide-react"
import { MainLogo } from "../../ImportImages/ImportImages"


const NavBarDark = () => {
  return (
    <div className="navbar bg-transparent border-b-2 border-bg pb-[15px] shadow-sm">
  <div className=' container flex items-center justify-center ' >

    <div className="navbar-start">
    {/* Dropdown */}
    <div className="dropdown">
      <div className="drawer lg:hidden ">
  <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-1" className=" btn outline-transparent border-transparent bg-red-500 rounded-3xl "> 
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h8m-8 6h16" /> </svg> 
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-amber-50 min-h-full z-10 w-70 p-4">
      {/* Sidebar content here */}
      <a className=" cursor-pointer font-extrabold text-2xl text-black text-center "> SR.NOYON </a>
    </ul>
  </div>
</div>
    </div>
     {/* Dropdown */}

    <div>
      <img src={MainLogo} alt="logo" />
    </div>
  </div>
  
  {/* Main */}
  <div className="navbar-center hidden border-2 px-15 py-[10px] bg-gray-950 rounded-[60px] shadow-2xs lg:flex">
    <ul className="menu menu-horizontal gap-[40px] text-amber-50 text-[20px] px-5">
      <li className=' cursor-pointer ' > Home </li>
      <li className=' cursor-pointer ' > About </li>
      <li className=' cursor-pointer ' > experience </li>
      <li className=' cursor-pointer ' > projects </li>
      <li className=' cursor-pointer ' > contact </li>
    </ul>
  </div>
  {/* Main */}
  <div className="navbar-end">
   
  </div>
  </div>
</div>
  )
}

export default NavBarDark
