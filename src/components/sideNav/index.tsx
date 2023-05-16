import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Drawer } from '@mui/material';

import { links } from '../../routing/links';

import styles from './sideNav.module.scss';
import { sxDrawer } from '../MuiOverrideStyles/sxStyles';
import { LocalStorageService } from '../../services/localStorage';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideNav: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleLogOut = (): void => {
    LocalStorageService.deleteStorage('token');
  };

  return (
    <Drawer
      variant='temporary'
      ModalProps={{
        keepMounted: true
      }}
      open={isOpen}
      onClose={handleClose}
      sx={sxDrawer}
    >
      <ul className={styles.list}>
        {links.map((link) => (
          <Button
            key={link.to}
            onClick={handleClose}
            component={NavLink}
            to={link.to}
            fullWidth
          >
            {link.text}
          </Button>
        ))}
        <Button
          component={NavLink}
          to='/login'
          onClick={handleLogOut}
          fullWidth
        >
          Log out
        </Button>
      </ul>
    </Drawer>
  );
};
