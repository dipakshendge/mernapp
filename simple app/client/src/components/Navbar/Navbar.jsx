import "./Navbar.css"
import {Link} from "react-router-dom";
import { useAuth } from "../../store/auth";
export const Navbar =  () => {

    const {isLogedIn}= useAuth()

    return (
        <>
            <header>
                <div className="nav-container">
                    <div className="brand-logo">
                        <Link to="/">RS Enterprises</Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Servieces</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            {isLogedIn ? 
                                <li><Link to="logout">Logout</Link></li>
                            :<>
                                <li><Link to="login">Login</Link></li>
                                <li><Link to="register">Register</Link></li>
                            </>}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}