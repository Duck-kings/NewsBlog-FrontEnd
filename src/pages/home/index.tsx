import { Box, Container } from '@mui/material';
import React from 'react';
import { UserInfo } from '../../components/userInfo';
import { CardArticleList } from '../../components/cardArticleList';

import styles from './home.module.scss';
import { useArticlesStore } from '../../stores/articles';

export const Home: React.FC = () => {
  const data = useArticlesStore((state) => state.initialState);
  return (
    <Box className={styles.main}>
      <Container maxWidth='lg' className={styles.mainContainer}>
        <Container maxWidth='md'>
          <CardArticleList articles={data} />
        </Container>
        <UserInfo />
      </Container>
    </Box>
  );
};
