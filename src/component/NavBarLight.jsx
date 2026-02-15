import { MainLogo } from "../ImportImages/ImportImages"


const NavBarLight = () => {
  return (
    <div className="navbar bg-transparent border-b-2 border-slate-300 pb-[15px] shadow-sm">
  <div className=' container flex items-center justify-center ' >

    <div className="navbar-start">
    {/* Dropdown */}
    <div className="dropdown z-50 ">
     
      <div className="drawer">
  <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-1" className="btn drawer-button px-3 py-3 cursor-pointer rounded-full bg-[#f9004d] lg:hidden ">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18"/><path d="M3 12h18"/><path d="M3 19h18"/></svg>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-65 p-4">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
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
  <div className="navbar-center hidden border-2 border-slate-300 px-15 py-[10px] rounded-[60px] shadow-2xl lg:flex">
    <ul className="menu menu-horizontal gap-[40px] text-black font-bold text-[20px] px-5">
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

export default NavBarLight
