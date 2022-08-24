import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
  style: string;
};

const Button = (props: ButtonProps) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={props.style}> {props.children}</a>
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={props.style}>
      {props.children}
    </button>
  );
};

export default Button;
