"use client"
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import logo from "../../../public/logo-pineapple.png"

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Collection",
        url: "/collection",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
]

const Navbar = () => {
    const session = useSession();

  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
            <Image src={logo} alt='logo' className={styles.logoImg}></Image>
            <h1 className={styles.domain}>FRUITSFRESH.COM</h1>
        </Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                {
                    session.status === "authenticated" && (
                        <button 
                className={styles.logout}
                    onClick={signOut}> Logout
                </button>
                    )}
            </div>
    </div>
  )
}

export default Navbar