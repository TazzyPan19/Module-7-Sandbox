import { useContext } from "react"
import { useUserContext } from "../context/userContext";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    // NOTE STATES AND VARIABLES
    const { mode } = useUserContext();

    const navLinks = [
        { to: "/lab-one", label: "Lab One"},
        { to: "/lab-two", label: "Lab Two"},
        { to: "/lab-three", label: "Lab Three"},
        { to: "/context-work", label: "Context Work"},
        { to: "/custom-hooks", label: "Custom Hooks"},
        { to: "/slide-work", label: "Slide Work"},
        { to: "/square-task", label: "Square Task"},
    ]

    // NOTE FUNCTIONS

    const linkListDisplayHandler = () => {
        return navLinks.map((link) => {
            return (
                <li key={link.to}>
                    <NavLink to={link.to}>{link.label}</NavLink>
                </li>
            )
        })
    }

    // NOTE RETURNS
  
    return (
        <nav className="NavBar" style={{
            backgroundColor: mode === "light" ? "black" : "white", 
            color: mode === "light" ? "white" : "black"}}>
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                {linkListDisplayHandler()}
            </ul> {/* ++ Add another page with route and component */}
        </nav>
        )
  }