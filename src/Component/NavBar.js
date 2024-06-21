import { Link } from "react-router-dom";


function NavBar(){
    return (
        <div>
      <div className="navbar">
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/About'>About</Link>
        <Link className="link" to='/Contact'>Contact</Link>
        {true ?<Link className="link" to='/Login'>Login</Link>:<Link className="link" to='/Logout'>Logout</Link>}
        </div>

        </div>
    );
}
export default NavBar;