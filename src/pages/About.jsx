import { NavLink, Outlet } from "react-router-dom"
import { AboutTeam } from "./AboutTeam"
import { AboutVision } from "./AboutVision"

export function About() {
    return <div className="about">
        <h1>We are all about robots</h1>
        <nav>
            <NavLink to="/about/team" >Team</NavLink>
            <NavLink to="/about/vision" >Vision</NavLink>
        </nav>
        <Outlet />
    </div>
}
