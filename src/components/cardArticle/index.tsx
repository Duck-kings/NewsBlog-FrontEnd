import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Typography, CardContent, Box } from '@mui/material';
import MDEditor from '@uiw/react-md-editor';
import { ImageContainer } from '../imageContainer';

import styles from './cardArticle.module.scss';
import { sxCardArticle } from '../MuiOverrideStyles/sxStyles';
import { getShortDescription } from '../../helpers/getShortDescription';
import type { ArticleDto } from '../../types/dtos';

export const CardArticle: React.FC<ArticleDto> = (article) => {
  const {
    _id,
    title,
    description,
    img,
    author: { firstName, lastName },
    views
  } = article;

  return (
    <Card sx={sxCardArticle}>
      <CardContent>
        <Box
          className={styles.mainContent}
          component={NavLink}
          to={`/article/${_id}`}
        >
          <Box>
            <ImageContainer image={`${import.meta.env.VITE_BASE_URI}${img}`} />
          </Box>
          <Box className={styles.info}>
            <Typography variant='h4' component='h4'>
              {title}
            </Typography>
            <MDEditor.Markdown
              source={getShortDescription(description)}
              disallowedElements={['a']}
            />
          </Box>
        </Box>
        <Box className={styles.helperContent}>
          <Box>
            <Typography variant='caption' component='span'>
              Author: {`${firstName} ${lastName}`}
            </Typography>
            <Typography
              variant='caption'
              component='span'
              className={styles.supportInfo}
            >
              Views: {views.length}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
