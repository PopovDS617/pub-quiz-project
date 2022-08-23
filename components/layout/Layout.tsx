import React from 'react';
import MainHeader from './MainHeader';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
