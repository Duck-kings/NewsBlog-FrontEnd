import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { axiosService } from '../../../services/axios';
import type { ArticleDto } from '../../../types/dtos';
import { LocalStorageService } from '../../../services/localStorage';
import { useArticlesStore } from '../../../stores/articles';

import { queryKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useArticlesQuery = (
  options?: UseQueryOptions
): UseQueryResult<ArticleDto[], unknown> => {
  const setArticles = useArticlesStore((state) => state.setArticles);
  const query = useQuery({
    // eslint-disable-next-line
    queryKey: getRequestKey(queryKeys.articleGetAll), // ['article', 'getAll'],
    queryFn: async () => {
      const token = LocalStorageService.getStorage('token');

      const data = await axiosService.getData('article/getAll', {
        headers: { Authorization: `Bearer ${String(token.value)}` }
      });

      if (data instanceof AxiosError) {
        throw new Error(data.response?.statusText);
      }

      return data as ArticleDto[];
    },
    onSuccess: (data) => {
      setArticles(data as ArticleDto[]);
    },
    onError: () => {
      setArticles([]);
    },
    ...options
  });

  return query as UseQueryResult<ArticleDto[], unknown>;
};
