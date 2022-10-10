import NavLinks from './NavLinks';
import { CgMenuRound, CgCloseO } from 'react-icons/cg';
import React, { useState } from 'react';
import Backdrop from '../layout/Backdrop';

const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = (): void => {
    setOpenMenu(!openMenu);
  };

  const hambergerIcon = (
    <CgMenuRound
      className="menu-icon"
      size="40px"
      color="white"
      onClick={openMenuHandler}
    />
  );

  const closeIcon = (
    <CgCloseO
      className="menu-icon"
      size="40px"
      color="white"
      onClick={openMenuHandler}
    />
  );

  return (
    <React.Fragment>
      <nav className="mobile-navigation">
        {openMenu && <NavLinks onClose={openMenuHandler} />}
        {openMenu ? closeIcon : hambergerIcon}
      </nav>
      {openMenu && <Backdrop onClose={openMenuHandler} />}
    </React.Fragment>
  );
};

export default MobileNavigation;
