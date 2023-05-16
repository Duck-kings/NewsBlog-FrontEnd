import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';
import { axiosService } from '../../../services/axios';
import type { ArticleDto } from '../../../types/dtos';
import { LocalStorageService } from '../../../services/localStorage';

import { queryKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';
import { minToMiliSec } from '../../../helpers/times';

export const useArticleQuery = (
  articleId: string
): UseQueryResult<ArticleDto, unknown> => {
  const navigate = useNavigate();
  const query = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: getRequestKey(queryKeys.article, articleId), // ['article', articleId]
    queryFn: async () => {
      const token = LocalStorageService.getStorage('token');

      const data = await axiosService.getData(`article/getOne/${articleId}`, {
        headers: { Authorization: `Bearer ${String(token.value)}` }
      });

      if (Object.hasOwn(data, 'status')) {
        throw new Error(data.message);
      }

      return data as ArticleDto;
    },
    onError: (err) => {
      if (err instanceof Error) {
        navigate('/');
      }
    },
    refetchOnWindowFocus: false,
    staleTime: minToMiliSec(5)
  });

  return query;
};
