import React from 'react';
import { Box, Container } from '@mui/material';

import { ProfileForm } from '../../components/forms/profileForm';
import styles from './profile.module.scss';

export const Profile: React.FC = () => (
  <Box className={styles.main}>
    <Container maxWidth='sm' component='main'>
      <ProfileForm />
    </Container>
  </Box>
);
