import MuiAlert from '@mui/material/Alert';
import type { AlertProps } from '@mui/material/Alert';
import React from 'react';

export const SnackAlert = React.forwardRef<HTMLDivElement, AlertProps>(
  // eslint-disable-next-line
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  }
);
