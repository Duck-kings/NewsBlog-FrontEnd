import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import type { SubmitHandler } from 'react-hook-form';
import { editArticleValidSchema } from '../../../formValidSchemas/editArticle.scema';
import type { editArticleFormData } from '../../../formValidSchemas/editArticle.scema';
import styles from './editArticleForm.module.scss';
import type { changeArticleDto } from '../../../types/dtos';
import { useMyArticleStore } from '../../../stores/myArticles';
import { useUpdateArticleMutation } from '../../../hooks/api/article/useUpdateArticle';
import { ArticleEditor } from '../../articleEditor';

interface Props {
  articleId: string;
}

export const EditArticleForm: React.FC<Props> = ({ articleId }) => {
  const article = useMyArticleStore((state) => state.getBy(articleId));
  const { mutate } = useUpdateArticleMutation();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: article.title,
      description: article.description
    },
    resolver: yupResolver(editArticleValidSchema)
  });

  const onSubmit: SubmitHandler<editArticleFormData> = (
    data: editArticleFormData
  ): void => {
    const newArticle: changeArticleDto = {
      ...article,
      ...data
    };

    mutate(newArticle);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Box className={styles.form_title}>
          <Typography variant='h3' component='h3'>
            Edit Article
          </Typography>
        </Box>
        <Controller
          name='title'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              type='text'
              {...field}
              helperText={errors.title != null ? errors.title.message : ' '}
              error={Boolean(errors?.title?.message)}
              className={styles.controller}
              fullWidth
              label='title'
            />
          )}
        />
        <Controller
          name='description'
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <ArticleEditor value={value} onChange={onChange} />
          )}
        />
        <Box className={styles.box_btn}>
          <Button variant='contained' type='submit'>
            Change
          </Button>
        </Box>
      </form>
    </Box>
  );
};
