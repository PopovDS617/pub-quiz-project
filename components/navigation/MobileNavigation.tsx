import NavLinks from './NavLinks';
import { CgMenuRound, CgCloseO } from 'react-icons/cg';
import React, { useState } from 'react';

const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
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
    <nav className="mobile-navigation">
      {openMenu && <NavLinks onClose={openMenuHandler} />}
      {openMenu ? closeIcon : hambergerIcon}
    </nav>
  );
};

export default MobileNavigation;
