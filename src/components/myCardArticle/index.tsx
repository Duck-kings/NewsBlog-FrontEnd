import React from 'react';
import { NavLink } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { Card, Typography, CardContent, Box, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { ImageContainer } from '../imageContainer';

import styles from './myCardArticle.module.scss';
import { sxCardArticle } from '../MuiOverrideStyles/sxStyles';
import type { ArticleDto } from '../../types/dtos';
import { useDeleteArticleMutation } from '../../hooks/api/article/useDeleteArticle';
import { getShortDescription } from '../../helpers/getShortDescription';

export const MyCardArticle: React.FC<ArticleDto> = (article) => {
  const { _id, title, description, views, img } = article;
  const { mutate } = useDeleteArticleMutation();

  const onclick = (): void => {
    mutate(article);
  };

  return (
    <Card sx={sxCardArticle}>
      <CardContent>
        <Box className={styles.helperActions}>
          <IconButton
            component={NavLink}
            to={`/editArticle/${_id}`}
            className={styles.editBtn}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={onclick} className={styles.removeBtn}>
            <ClearIcon />
          </IconButton>
        </Box>
        <Box
          className={styles.mainContent}
          component={NavLink}
          to={`/myArticles/article/${_id}`}
        >
          <Box>
            <ImageContainer
              image={`newsblog-backend-production.up.railway.app/${img}`}
            />
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
          <Typography
            variant='caption'
            component='span'
            className={styles.supportInfo}
          >
            Views: {views.length}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
