import React from 'react';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="header-logo">
        <Link href="/">Квиз</Link>
      </div>
      <MobileNavigation />
      <DesktopNavigation />
    </div>
  );
};

export default NavBar;
