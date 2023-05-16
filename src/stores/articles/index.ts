import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { ArticleDto } from '../../types/dtos';

interface ArticlesState {
  initialState: ArticleDto[];
  setArticles: (articles: ArticleDto[]) => void;
  getBy: (id: string) => ArticleDto;
}

export const useArticlesStore = create<ArticlesState>()(
  devtools(
    (set, get) => ({
      initialState: [],
      setArticles: (articles) => {
        set((state) => ({
          initialState: articles
        }));
      },
      getBy: (id) => {
        const articles = get().initialState;
        const currentArticle = articles.filter((article) => article._id === id);

        return currentArticle[0];
      }
    }),
    {
      anonymousActionType: '@Articles'
    }
  )
);
