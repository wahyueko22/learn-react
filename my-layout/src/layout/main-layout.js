import { Link, Outlet, Navigate } from 'react-router-dom'
import './layout-style.css'
import { checkToken } from '../token/token.js'
import LogoutComponent from '../components/LogoutComponent'

export default function MainLayout() {
    return !checkToken() ? (
        <Navigate to="/login" />
    ) : (
        <div className="website-container">
            <header>Header</header>
            <div className="container">
                <nav className="sidebar-container">
                    <ul className="menu">
                        <li>
                            <Link to="home"> Home</Link>
                        </li>
                        <li>
                            <Link to="about"> About</Link>
                        </li>
                        <li>
                            <Link to="sorting"> Sorting</Link>
                        </li>
                        <li>
                            <Link to="pagination"> Pagination</Link>
                        </li>
                        <li>
                            <Link to="/"> Log In</Link>
                        </li>
                        <li>
                            <Link to="signup"> Sign Up</Link>
                        </li>
                        <li>
                            <LogoutComponent></LogoutComponent>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Outlet />
                </main>
            </div>
            <footer>Footer</footer>
        </div>
    )
}
