import "./navbar.css";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className="NavbarDiv">
      <div className="buttonContainer">
        <Link to="/"><button>Home</button></Link>
        <Link to="/shoe"><button>Shoe</button></Link>
        <Link to="/pants"><button>Pants</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
