import { TextAlignJustify } from "lucide-react"
import { MainLogo } from "../../ImportImages/ImportImages"


const NavBarDark = () => {
  return (
    <div className="navbar bg-transparent border-b-2 border-bg pb-[15px] shadow-sm">
  <div className=' container flex items-center justify-center ' >

    <div className="navbar-start">
    {/* Dropdown */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" cursor-pointer px-3 py-3 rounded-full bg-[#f9004d] lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18"/><path d="M3 12h18"/><path d="M3 19h18"/></svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
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
