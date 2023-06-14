"use client";

import Link from "next/link";
import React from "react";
import "./navbar.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import ActiveLink from '../ActiveLink/ActiveLink';

const links = [
  {
    id: 1,
    title: 'About me',
    url: '/about-me'
  },
  {
    id: 2,
    title: 'Teaching philosophy',
    url: '/teaching-philosophy'
  },
  {
    id: 3,
    title: 'What I do',
    url: '/services'
  },
  {
    id: 4,
    title: 'Experience',
    url: '/projects'
  },
  {
    id: 5,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 6,
    title: 'Contacts',
    url: '/contacts'
  }
];

const Navbar = () => {
  return (
    <header className="header">

   
    <nav className="navbar">
      <Link href="/" className='navbar__logo'>
        Bill Lesley
      </Link>
      <ul className='navbar__links'>
        <DarkModeToggle />
        {links.map((link) => (
          <ActiveLink key={link.id} href={link.url}>
            {link.title}
          </ActiveLink>
        ))}
      </ul>
      <div className="navbar__menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
