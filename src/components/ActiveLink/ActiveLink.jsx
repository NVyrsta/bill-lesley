"use client"; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './ActiveLink.css';
import cn from 'classnames';

const ActiveLink = ({ children, ...rest }) => {
  const { href } = rest;
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    <Link
      className={cn('navbar__link', {
        'is-active': isActive
      })}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
