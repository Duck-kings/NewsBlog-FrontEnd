import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box, Snackbar } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import type { SubmitHandler } from 'react-hook-form';
import type { LoginFormData } from '../../../formValidSchemas/login.schema';
import { loginValidSchema } from '../../../formValidSchemas/login.schema';
import { useLoginMutation } from '../../../hooks/api/auth/useLogin';
import { SnackAlert } from '../../snackAlert';
import styles from './loginForm.module.scss';

export const LoginForm: React.FC = () => {
  const { mutate, isError, error } = useLoginMutation();
  const [snackOpen, setSneckOpen] = React.useState<boolean>(isError);

  const handleCloseSnack = (): void => {
    setSneckOpen(false);
  };

  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginValidSchema)
  });

  const onSubmit: SubmitHandler<LoginFormData> = (
    data: LoginFormData
  ): void => {
    mutate(data, {
      onSuccess: () => {
        navigate('/');
      },
      onError: () => {
        setSneckOpen(true);
      }
    });
  };

  return (
    <Box>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        className={styles.snack}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <SnackAlert onClose={handleCloseSnack} severity='error'>
          {isError && error instanceof Error ? error.message : ''}
        </SnackAlert>
      </Snackbar>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Box className={styles.form_title}>
          <Typography variant='h3' component='h3'>
            Sign in
          </Typography>
        </Box>
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
          <Button
            variant='outlined'
            size='medium'
            component={NavLink}
            to='/register'
          >
            Sign up
          </Button>
          <Button variant='contained' type='submit' size='large'>
            Sign in
          </Button>
        </Box>
      </form>
    </Box>
  );
};
