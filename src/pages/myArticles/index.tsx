import React from 'react';
import { Box, Container } from '@mui/material';

import { CardArticleList } from '../../components/cardArticleList';

import styles from './myArticles.module.scss';
import { useMyArticlesQuery } from '../../hooks/api/article/useMyArticles';
import { BackDrop } from '../../components/backDrop';

export const MyArticles: React.FC = () => {
  const { isLoading, data, isError } = useMyArticlesQuery();

  if (isLoading) return <BackDrop open={isLoading} />;

  if (isError) {
    return <div />;
  }

  return (
    <Box className={styles.main}>
      <Container maxWidth='lg'>
        <CardArticleList articles={data} />
      </Container>
    </Box>
  );
};
