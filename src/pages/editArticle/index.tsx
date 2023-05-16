import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { EditArticleForm } from '../../components/forms/editArticleForm';

import styles from './editArticle.module.scss';

export const EditArticle: React.FC = () => {
  const { id } = useParams();
  return (
    <Box className={styles.main}>
      <Container maxWidth='lg' component='main'>
        <EditArticleForm articleId={String(id)} />
      </Container>
    </Box>
  );
};
