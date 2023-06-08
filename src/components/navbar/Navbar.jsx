"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

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
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Bill Lesley
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
