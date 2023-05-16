import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import type { UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { axiosService } from '../../../services/axios';
import type { ArticleDto } from '../../../types/dtos';
import { LocalStorageService } from '../../../services/localStorage';
import { useMyArticleStore } from '../../../stores/myArticles';

import { queryKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useMyArticlesQuery = (): UseQueryResult<ArticleDto[], unknown> => {
  const setManyArticles = useMyArticleStore((state) => state.setManyArticles);
  const navigate = useNavigate();
  const query = useQuery({
    // eslint-disable-next-line
    queryKey: getRequestKey(queryKeys.articleGetMyAll), // ['article', 'getMyAll'],
    queryFn: async () => {
      const token = LocalStorageService.getStorage('token');

      const data = await axiosService.getData('article/getMyAll', {
        headers: { Authorization: `Bearer ${String(token.value)}` }
      });

      if (data instanceof AxiosError) {
        throw new Error(data.response?.statusText);
      }

      return data as ArticleDto[];
    },
    onSuccess: (data) => {
      setManyArticles(data);
    },
    onError(err) {
      if (err instanceof Error) {
        navigate('/error');
      }
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false
  });

  return query;
};
