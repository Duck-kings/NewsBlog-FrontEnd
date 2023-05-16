import type { Routes } from '../types/types';

export const links: Routes[] = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: 'myArticles',
    text: 'My Articles'
  },
  {
    to: 'profile',
    text: 'Profile'
  },
  {
    to: 'createArticle',
    text: 'Create Article'
  }
];
