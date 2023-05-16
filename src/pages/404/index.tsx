import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styles from './notFound.module.scss';

export const NotFound: React.FC = () => (
  <Box className={styles.main}>
    <Container maxWidth='md'>
      <Typography component='h3' variant='h3'>
        Oops something went wrong. Try later...
      </Typography>
    </Container>
  </Box>
);
