import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components/header';
import { useMeQuery } from './hooks/api/auth/useMe';
import { useArticlesQuery } from './hooks/api/article/useArticles';
import { BackDrop } from './components/backDrop';

const App: React.FC = () => {
  const { isLoading: useMeLoading, data } = useMeQuery();
  const { isLoading: useArticlesLoading } = useArticlesQuery({
    enabled: data && Object.keys(data).length > 0
  });

  if (useMeLoading) return <BackDrop open={useMeLoading} />;

  if (useArticlesLoading) return <BackDrop open={useArticlesLoading} />;

  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
