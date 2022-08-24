import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className="btn"> {props.children}</a>
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className="btn">
      {props.children}
    </button>
  );
};

export default Button;
