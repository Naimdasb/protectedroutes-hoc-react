import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
    return (
        <div className={styles.header}>
            <div className={styles.brand}>
                Logo
            </div>
            <nav className={styles.nav}>
                <li className={styles.li}>
                    <Link className={styles.links} to="/" > Home </Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.links} to="/about"> About </Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.links} to="/post" > Post </Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.links} to="/dashboard" > Dashboard </Link>
                </li>
            </nav>
        </div>
    )
}
