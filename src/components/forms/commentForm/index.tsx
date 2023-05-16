import React from 'react';
import { Button, Box, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { SubmitHandler } from 'react-hook-form';
import { commentValidSchema } from '../../../formValidSchemas/comment.schema';
import type { CommentFormData } from '../../../formValidSchemas/comment.schema';

import styles from './commentForm.module.scss';
import {
  sxOutlinedLabel,
  sxOutlinedTextField
} from '../../MuiOverrideStyles/sxStyles';
import { useCreateCommentMutation } from '../../../hooks/api/comment/useCreateComment';
import type { UserDto, createCommentDto } from '../../../types/dtos';

interface Props {
  articleId: string;
  author: UserDto;
}

export const CommentForm: React.FC<Props> = ({ articleId, author }) => {
  const { mutate } = useCreateCommentMutation();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<CommentFormData>({
    defaultValues: {
      text: ''
    },
    resolver: yupResolver(commentValidSchema)
  });

  const onSubmit: SubmitHandler<CommentFormData> = (
    data: CommentFormData
  ): void => {
    const comment: createCommentDto = {
      author,
      articleId,
      text: data.text
    };

    mutate(comment);
  };

  return (
    <Box className={styles.commentForm} sx={sxOutlinedLabel}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='text'
          control={control}
          render={({ field }) => (
            <TextField
              sx={sxOutlinedTextField}
              type='text'
              {...field}
              helperText={errors.text != null ? errors.text.message : ''}
              error={Boolean(errors.text?.message)}
              fullWidth
              label='Some text...'
              multiline
            />
          )}
        />
        <Box className={styles.btnContainer}>
          <Button variant='contained' type='submit' size='large'>
            Comment
          </Button>
        </Box>
      </form>
    </Box>
  );
};
