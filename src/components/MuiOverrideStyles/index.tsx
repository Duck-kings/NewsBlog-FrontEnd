import React from 'react';
import { ThemeProvider } from '@mui/material';

import { theme } from './theme';

interface Props {
  children: React.ReactNode;
}

export const CustomThemeProvider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
