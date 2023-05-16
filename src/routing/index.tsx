import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { NotFound } from '../pages/404';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { MyArticles } from '../pages/myArticles';
import { Profile } from '../pages/profile';
import { MyArticle } from '../pages/myArticle';
import { Article } from '../pages/article';
import { CreateArticle } from '../pages/createArticle';
import { EditArticle } from '../pages/editArticle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'myArticles',
        element: <MyArticles />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'myArticles/article/:id',
        element: <MyArticle />
      },
      {
        path: 'article/:id',
        element: <Article />
      },
      {
        path: 'createArticle',
        element: <CreateArticle />
      },
      {
        path: 'editArticle/:id',
        element: <EditArticle />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export const RoutingProvider: React.FC = () => (
  <RouterProvider router={router} />
);
