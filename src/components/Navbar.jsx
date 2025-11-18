import { Link } from "react-router-dom";
import logo from '../assets/logo.png';



function Navbar() {
    return (
<nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur border-b border-slate-800">
  <div className="mx-auto flex items-center justify-between px-6 py-3 ">
    
    <div className="flex items-center gap-3">
            <img src={logo} className="h-9 w-9"/>
      <h1 className="text-sm font-semibold text-slate-100 sm:text-base">
        UU | Unofficial Application Guide
      </h1>
    </div>

    
    <div className="flex items-center gap-4 text-sm font-medium text-slate-100">
      <div>
        <Link to="/" className="hover:text-slate-300 transition-colors text-lg">
          Home
        </Link>
      </div>
            <div>
            <Link to="/utils" className="hover:text-slate-300 transition-colors text-lg">
          Utilities
        </Link>
      </div>
    </div>
  </div>
</nav>

    )


} 

export default Navbar;