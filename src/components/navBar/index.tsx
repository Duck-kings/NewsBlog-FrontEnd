import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { links } from '../../routing/links';
import { LocalStorageService } from '../../services/localStorage';

import styles from './navBar.module.scss';
import { sxLogOutBtn } from '../MuiOverrideStyles/sxStyles';

interface Props {
  classNames: string;
}

export const NavBar: React.FC<Props> = ({ classNames }) => {
  const handleLogOut = (): void => {
    LocalStorageService.deleteStorage('token');
  };

  return (
    <Box component='nav' className={classNames}>
      {links.map((link) => (
        <Button
          variant='outlined'
          component={NavLink}
          to={link.to}
          key={link.to}
          className={styles.btn}
        >
          {link.text}
        </Button>
      ))}
      <Button
        variant='outlined'
        component={NavLink}
        to='/login'
        sx={sxLogOutBtn}
        onClick={handleLogOut}
        className={styles.btn}
      >
        Log out
      </Button>
    </Box>
  );
};
