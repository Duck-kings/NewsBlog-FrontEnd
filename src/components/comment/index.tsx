import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import styles from './comment.module.scss';
import { useDeleteCommentMutation } from '../../hooks/api/comment/useDeleteComment';
import type { CommentDto } from '../../types/dtos';

interface Props {
  isAuthor: boolean;
  comment: CommentDto;
}

export const Comment: React.FC<Props> = ({ isAuthor, comment }) => {
  const { mutate } = useDeleteCommentMutation();

  const handleClick = (): void => {
    mutate(comment);
  };

  return (
    <Box className={styles.comment}>
      <Box className={styles.infoContainer}>
        <PersonPinIcon className={styles.profileIco} />
        <Typography component='p' variant='h5'>
          {comment.author.firstName}
        </Typography>
      </Box>
      <Typography variant='body1' component='p'>
        {comment.text}
      </Typography>
      {isAuthor ? (
        <Box className={styles.btnContainer}>
          <Button variant='contained' onClick={handleClick}>
            Delete
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};
