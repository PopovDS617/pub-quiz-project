import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  link: string;
};

const Button = (props: ButtonProps) => {
  return (
    <Link href={props.link}>
      <a className="btn"> {props.children}</a>
    </Link>
  );
};

export default Button;
