import React from 'react';
import { Container, Box } from '@mui/material';
import { CreateArticleForm } from '../../components/forms/createArticleForm';

import styles from './createArticle.module.scss';

export const CreateArticle: React.FC = () => (
  <Box className={styles.main}>
    <Container maxWidth='lg' component='main'>
      <CreateArticleForm />
    </Container>
  </Box>
);
