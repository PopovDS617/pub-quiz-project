import React from 'react';
import MainHeader from './MainHeader';
import { motion } from 'framer-motion';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <MainHeader />
      <div className="layout">{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
