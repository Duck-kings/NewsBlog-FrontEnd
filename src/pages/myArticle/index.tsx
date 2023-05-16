import React from 'react';
import { useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import { Container, Typography } from '@mui/material';

import styles from './myArticle.module.scss';
import { Comment } from '../../components/comment';
import { CommentForm } from '../../components/forms/commentForm';
import { useUserStore } from '../../stores/userInfo';
import { useArticleQuery } from '../../hooks/api/article/useArticle';
import { BackDrop } from '../../components/backDrop';

export const MyArticle: React.FC = () => {
  const { id } = useParams();
  const user = useUserStore((state) => state.initialState);

  const { data: article, isLoading, isError } = useArticleQuery(String(id));

  if (isLoading) return <BackDrop open={isLoading} />;

  if (isError) return <div />;

  return (
    <Container maxWidth='lg'>
      <Typography variant='h2' component='h2'>
        {article.title}
      </Typography>
      <MDEditor.Markdown
        source={article.description}
        className={styles.preview}
      />
      <CommentForm articleId={String(id)} author={user} />
      {article.comments.length !== 0 ? (
        article.comments.map((comment) => (
          <Comment
            key={comment._id}
            isAuthor={user._id === comment.author._id}
            comment={comment}
          />
        ))
      ) : (
        <Typography component='h4' variant='h4'>
          No comments yet
        </Typography>
      )}
    </Container>
  );
};
