import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import type { SubmitHandler } from 'react-hook-form';
import type { ProfileFormData } from '../../../formValidSchemas/profile.schema';
import { profileValidSchema } from '../../../formValidSchemas/profile.schema';
import styles from './profile.module.scss';
import { useUserStore } from '../../../stores/userInfo';
import { useUpdateMutation } from '../../../hooks/api/user/useUpdateUser';

export const ProfileForm: React.FC = () => {
  const userInfo = useUserStore((state) => state.initialState);
  const { mutate } = useUpdateMutation();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileFormData>({
    defaultValues: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      pseudonym:
        userInfo.pseudonym.length === 0 ? 'Pseudonym' : userInfo.pseudonym
    },
    resolver: yupResolver(profileValidSchema)
  });

  const onSubmit: SubmitHandler<ProfileFormData> = (
    data: ProfileFormData
  ): void => {
    mutate({
      ...userInfo,
      ...data
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Box className={styles.form_title}>
          <Typography variant='h3' component='h3'>
            User information
          </Typography>
        </Box>
        <Controller
          name='firstName'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              type='text'
              {...field}
              helperText={
                errors.firstName != null ? errors.firstName.message : ' '
              }
              error={Boolean(errors?.firstName?.message)}
              className={styles.controller}
              fullWidth
              label='First Name:'
            />
          )}
        />
        <Controller
          name='lastName'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              type='text'
              {...field}
              helperText={
                errors.lastName != null ? errors.lastName.message : ' '
              }
              error={Boolean(errors?.lastName?.message)}
              className={styles.controller}
              fullWidth
              label='Last Name:'
            />
          )}
        />
        <Controller
          name='pseudonym'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              type='text'
              {...field}
              helperText={
                errors.pseudonym != null ? errors.pseudonym.message : ' '
              }
              error={Boolean(errors?.pseudonym?.message)}
              className={styles.controller}
              fullWidth
              label='Pseudonym:'
            />
          )}
        />

        <Box className={styles.box_btn}>
          <Button variant='contained' type='submit' size='large'>
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};
