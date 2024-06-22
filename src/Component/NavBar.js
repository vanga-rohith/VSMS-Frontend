import { useContext } from "react";
import { Link } from "react-router-dom";
import { logincontext } from "./Home";



function NavBar(){
  let [[isAutenticated,setIsAutenticated],[token,setToken]] = useContext(logincontext);
    return (
        <div>
      <div className="navbar">
        <Link className="link" to='/' >Home</Link>
        {isAutenticated ? ' ':<Link className="link" to='/About'>About</Link>}
        {isAutenticated ? ' ' :<Link className="link" to='/Contact'>Contact</Link>}
        {isAutenticated ? <Link className="link" to='/StudentRegister'>Student Register</Link>: ' '}
        {isAutenticated ?<Link className="link" onClick={()=>{setIsAutenticated(false);setToken('');console.log(token)}}>Logout</Link>:<Link className="link" to='/Login'>Login</Link>}
        </div>

        </div>
    );
}
export default NavBar;