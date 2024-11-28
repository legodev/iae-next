'use client'

import Link from 'next/link'
import './navbar.css'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  {
    href: '../',
    name: 'Home',
  },
  {
    href: '../about',
    name: 'About',
  },
  {
    href: '../interviews',
    name: 'Interviews',
  },
  {
    href: '../breaks',
    name: 'Active Breaks',
  },
]

export default function Navbar() {
  const [menu, setMenu] = useState('hidden')

  const open = () => {
    if (menu === 'hidden') {
      setMenu('show')
    } else {
      setMenu('hidden')
    }
  }
  return (
    <div className="navbar-container">
      <header className="header">
        <div className="div__section-1">
          <nav className="nav container" role="navigation">
            <div className="nav__logo">
              <Link href="./" className="nav__logo link" role="button-logo">
              <h3 className="nav__logo-text">IAE</h3>
              </Link>
            </div>
            <ul className="nav__list-desktop">
              {links.map((link) => (
                <li className="nav__item" key={link.name}>
                  <Link className="nav__link-desktop" href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <ul className={`nav__list ${menu}`}>
              {links.map((link) => (
                <li className="nav__item" key={link.name}>
                  <Link
                    className="nav__link"
                    onClick={open}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <svg
              onClick={open}
              className="nav__menu"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
              />
            </svg>
          </nav>
        </div>
      </header>
    </div>
  )
}
