import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/MoviesIndex">Movies</Link></li>
                <li><Link to="/MoviesForm">Movie Form</Link></li>
            </ul>
        </div>
    )
}
