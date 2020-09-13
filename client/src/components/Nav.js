import React from 'react';
import { NavLink } from "react-router-dom"

function Home() {
    return (
        <div className="nav">
            <h2>Phon Book</h2>
            <div className="navItem">
                <NavLink to="/List">List</NavLink>
            </div>
            <div className="navItem">
                <NavLink to="/Create">Create</NavLink>
            </div>
        </div>
    )

}
export default Home;