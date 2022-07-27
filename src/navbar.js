import { Link } from "react-router-dom";

const  Navabar = () => {
    return (  
        <nav className="navbar">
            <h1>The dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navabar;  