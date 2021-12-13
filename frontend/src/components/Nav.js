import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/movies/new">Movie Search</Link></li>
            </ul>
        </div>
    )
}
