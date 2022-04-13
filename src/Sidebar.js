import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    return <div id="layoutSidenav_nav">
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <Link className="nav-link" to="/">
                    Dashboard
                </Link>
                <Link className="nav-link" to="users">
                     Users table
                </Link>
                <Link className="nav-link" to="posts">
                     posts
                </Link>
                <Link className="nav-link" to="comments">
                     comments
                </Link>
                <Link className="nav-link" to="todos">
                     todos
                </Link>
            </div>
        </div>
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
        </div>
    </nav>
</div>
}