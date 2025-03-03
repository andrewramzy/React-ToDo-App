import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>TO-DO List</h1>
            <div className="links">
                <Link to= "/">My List</Link>
                <Link to= "/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                }}>New Task</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;