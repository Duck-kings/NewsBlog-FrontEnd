import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { ArticleDto } from '../../types/dtos';

interface ArticleEditState {
  initialState: ArticleDto[];
  setOneArticle: (article: ArticleDto) => void;
  setManyArticles: (articles: ArticleDto[]) => void;
  getBy: (id: string) => ArticleDto;
}

export const useMyArticleStore = create<ArticleEditState>()(
  devtools(
    (set, get) => ({
      initialState: [],
      setOneArticle: (article: ArticleDto) => {
        set((state) => ({
          initialState: [...state.initialState, article]
        }));
      },
      setManyArticles: (articles: ArticleDto[]) => {
        set((state) => ({
          initialState: [...articles]
        }));
      },
      getBy: (id) => {
        const articles = get().initialState;
        const currentArticle = articles.filter((article) => article._id === id);

        return currentArticle[0];
      }
    }),
    {
      anonymousActionType: '@MyArticle'
    }
  )
);
