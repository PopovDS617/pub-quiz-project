import React from 'react';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="main-header-logo">
        <Link href="/">
          {/* <a >
            <img src="/images/icon.jpg" />
          </a> */}
          Смузи Квиз
        </Link>
      </div>
      <nav className="main-header-navigation">
        <ul>
          <li>
            <Link href="/events">Все квизы</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
