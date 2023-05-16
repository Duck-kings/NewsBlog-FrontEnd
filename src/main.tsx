import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './styles/global.scss';
import { RoutingProvider } from './routing';
import { CustomThemeProvider } from './components/MuiOverrideStyles';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <CustomThemeProvider>
      <RoutingProvider />
    </CustomThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
