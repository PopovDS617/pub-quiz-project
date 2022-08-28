import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  onClose?: () => void;
};

const NavLinks = (props: Props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul>
      <li initial={animateFrom} animate={animateTo} onClick={props.onClose}>
        <Link href="/events">Список квизов</Link>
      </li>
      <li initial={animateFrom} animate={animateTo} onClick={props.onClose}>
        <Link href="/what-is-quiz">Что такое квиз</Link>
      </li>
      <li initial={animateFrom} animate={animateTo} onClick={props.onClose}>
        <Link href="/about">О нас</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
