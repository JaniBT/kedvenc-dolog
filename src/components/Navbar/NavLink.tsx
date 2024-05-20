import React from 'react'
import { Link, useLocation } from "react-router-dom"
import styles from "./NavStyles.module.css"

interface NavLinkProps {
    to: string,
    children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
    const location = useLocation()
    const isActive = location.pathname === to

    return (
        <Link to={to} className={`${isActive ? styles.active : ''}`}>
            {children}
        </Link>
    )
}

export default NavLink