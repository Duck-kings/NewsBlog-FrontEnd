import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import type { SubmitHandler } from 'react-hook-form';
import type { RegisterFormData } from '../../../formValidSchemas/register.schema';
import { registerValidSchema } from '../../../formValidSchemas/register.schema';

import styles from './registerForm.module.scss';
import { useRegisterMutation } from '../../../hooks/api/auth/useRegister';

const defaultState: RegisterFormData = {
  firstName: '',
  lastName: '',
  pseudonym: '',
  email: '',
  password: ''
};

export const RegisterForm: React.FC = () => {
  const { mutate } = useRegisterMutation();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    defaultValues: defaultState,
    resolver: yupResolver(registerValidSchema)
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (
    data: RegisterFormData
  ): void => {
    mutate(data, {
      onSuccess: () => {
        navigate('/');
      },
      onError: () => {
        navigate('/error');
      }
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Box className={styles.form_title}>
          <Typography variant='h3' component='h3'>
            Registration
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
        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              type='text'
              {...field}
              helperText={errors.email != null ? errors.email.message : ' '}
              error={Boolean(errors?.email?.message)}
              className={styles.controller}
              fullWidth
              label='Email:'
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              type='text'
              {...field}
              helperText={
                errors.password != null ? errors.password.message : ' '
              }
              error={Boolean(errors?.password?.message)}
              className={styles.controller}
              fullWidth
              label='Password:'
            />
          )}
        />

        <Box className={styles.box_btn}>
          <Button variant='contained' type='submit' size='large'>
            Sign up
          </Button>
        </Box>
      </form>
    </Box>
  );
};
