import { Link, Outlet } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export const AdminLayout = () => {
    return (
        <>
            <div className="admin">
                <header>
                    <div className="nav-container">
                        <nav>
                            <ul>
                                <li><Link to='/admin/users' ><FaUser /> Users</Link></li>
                                <li><Link to='/admin/contacts' ><FaMessage /> Contacts</Link></li>
                                <li><Link to='/services' ><FaRegListAlt /> Services</Link></li>
                                <li><Link to='/' ><FaHome /> Home</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="content">
                    <Outlet /> {/* The nested routes will be rendered here */}

                </div>
            </div>
        </>
    )
}