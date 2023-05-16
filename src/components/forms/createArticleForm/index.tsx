import React from 'react';
import { Box, Button, TextField, Typography, InputLabel } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import type { SubmitHandler } from 'react-hook-form';
import { createArticleValidSchema } from '../../../formValidSchemas/createArticle.schema';
import type { createArticleFormData } from '../../../formValidSchemas/createArticle.schema';
import styles from './createArticleForm.module.scss';
import { sxEditArticleFile } from '../../MuiOverrideStyles/sxStyles';
import { useUserStore } from '../../../stores/userInfo';
import type { createArticleDto } from '../../../types/dtos';
import { useCreateArticleMutation } from '../../../hooks/api/article/useCreateArticle';
import { ArticleEditor } from '../../articleEditor';

export const CreateArticleForm: React.FC = () => {
  const user = useUserStore((state) => state.initialState);
  const { mutate } = useCreateArticleMutation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<createArticleFormData>({
    defaultValues: {
      description: '',
      title: '',
      file: undefined
    },
    resolver: yupResolver(createArticleValidSchema)
  });

  const fileName: any = watch('file') === undefined ? '' : watch('file')['0'];

  const isFile = fileName instanceof File;

  const onSubmit: SubmitHandler<createArticleFormData> = (
    data: createArticleFormData
  ): void => {
    const article: createArticleDto = {
      img: '',
      title: data.title,
      description: data.description,
      views: [],
      comments: [],
      author: user
    };
    const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('article', JSON.stringify(article));

    mutate(formData);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Box className={styles.form_title}>
          <Typography variant='h3' component='h3'>
            Edit Article
          </Typography>
        </Box>
        <Box className={styles.container}>
          {Object.hasOwn(errors, 'file') ? (
            <Typography component='p' variant='body1' style={{ color: 'red' }}>
              Error: {errors.file?.message}
            </Typography>
          ) : null}
          <InputLabel htmlFor='file' sx={sxEditArticleFile}>
            Choose image
          </InputLabel>
          <input
            type='file'
            accept='.jpg, .jpeg, .png, .webp'
            id='file'
            className={styles.file}
            {...register('file')}
          />
          {isFile ? (
            <Typography component='span' className={styles.fileName}>
              Your file: {fileName.name}
            </Typography>
          ) : null}
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
            Create
          </Button>
        </Box>
      </form>
    </Box>
  );
};
