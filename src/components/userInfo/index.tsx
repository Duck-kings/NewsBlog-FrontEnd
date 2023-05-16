import React from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Container, Typography } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import styles from './userInfo.module.scss';
import { useUserStore } from '../../stores/userInfo';
import { sxUserInfo } from '../MuiOverrideStyles/sxStyles';

export const UserInfo: React.FC = () => {
  const { email, firstName, pseudonym } = useUserStore(
    (state) => state.initialState
  );

  return (
    <Container maxWidth='xs' className={styles.userInfo} sx={sxUserInfo}>
      <Box>
        <NavLink to='/profile'>
          <PersonPinIcon className={styles.profileIco} />
          <Typography component='h5' variant='h5'>
            {firstName}
          </Typography>
        </NavLink>
      </Box>
      <Box>
        <Typography variant='h6' component='h6'>
          Email: {email}
        </Typography>
        <Typography variant='h6' component='h6'>
          Pseudonym: {pseudonym.length === 0 ? 'None' : pseudonym}
        </Typography>
      </Box>
    </Container>
  );
};
