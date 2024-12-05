import {NavLink} from "react-router-dom"
import styles from "./nav.module.css"

export default function Nav(){
    return (
        <nav id="main-navigation" aria-label="Main-menu" className="col-md-6 text-end mt-2">
            <ul className="d-flex flex-row align-items-center justify-content-end">
                <li className="me-3">
                    <NavLink to="/" className={({ isActive }) =>
    isActive ? styles.active : "text-light"
  }>Home</NavLink></li>
                <li>
                    <NavLink to="/About" className={({ isActive }) =>
    isActive ? styles.active : "text-light"
  }>About</NavLink></li>
            </ul>
        </nav>
    )
}