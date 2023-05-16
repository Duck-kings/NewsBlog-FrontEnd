import { Box, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import type { ArticleDto } from '../../types/dtos';
import { MyCardArticle } from '../myCardArticle';
import { CardArticle } from '../cardArticle';

interface Props {
  articles: ArticleDto[];
}

export const CardArticleList: React.FC<Props> = ({ articles }) => {
  const isMyArticles = useLocation().pathname.split('/').includes('myArticles');

  return (
    <Box>
      {articles.length > 0 ? null : (
        <Typography component='h4' variant='h4'>
          No articles have been created
        </Typography>
      )}
      {isMyArticles
        ? articles.map((article) => (
            <MyCardArticle key={String(article._id)} {...article} />
          ))
        : articles.map((article) => (
            <CardArticle key={String(article._id)} {...article} />
          ))}
    </Box>
  );
};
