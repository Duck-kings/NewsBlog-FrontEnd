import { Box, Container, FormControl, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

import styles from './header.module.scss';
import { DropMenu } from '../dropMenu';
import { SideNav } from '../sideNav';
import { NavBar } from '../navBar';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOpen = (): void => {
    setIsOpen(true);
  };

  return (
    <Box component='header' className={styles.header}>
      <Container maxWidth='lg' className={styles.headerContainer}>
        <IconButton onClick={handleOpen} className={styles.burgerMenu}>
          <MenuIcon />
        </IconButton>
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <FormControl variant='standard' className={styles.formControl}>
          <DropMenu />
        </FormControl>
        <NavBar classNames={styles.nav} />
      </Container>
    </Box>
  );
};
