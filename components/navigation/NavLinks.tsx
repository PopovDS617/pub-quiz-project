import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  onClose?: () => void;
};

const NavLinks = (props: Props) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <ul>
      <li onClick={props.onClose}>
        <Link href="/events">
          <a className={path === '/events' ? 'active-link' : ''}>
            Список квизов
          </a>
        </Link>
      </li>
      <li onClick={props.onClose}>
        <Link href="/what-is-quiz">
          <a className={path === '/what-is-quiz' ? 'active-link' : ''}>
            Что такое квиз
          </a>
        </Link>
      </li>
      <li onClick={props.onClose}>
        <Link href="/about">
          <a className={path === '/about' ? 'active-link' : ''}>О нас</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
