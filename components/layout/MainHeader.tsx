import React from 'react';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="main-header-logo">
        <Link href="/">Квиз Смузи</Link>
      </div>
      <nav className="main-header-navigation">
        <div>
          <Link href="/events">Список квизов</Link>
        </div>
        <div>
          <Link href="/what-is-quiz">Что такое квиз</Link>
        </div>
        <div>
          <Link href="/about">О нас</Link>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
