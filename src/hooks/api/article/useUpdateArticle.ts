import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { axiosService } from '../../../services/axios';
import type { ArticleDto } from '../../../types/dtos';
import { LocalStorageService } from '../../../services/localStorage';

import { mutationKeys, queryKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useUpdateArticleMutation = (): UseMutationResult<
  ArticleDto,
  unknown,
  ArticleDto,
  unknown
> => {
  const queryClient = useQueryClient();
  const storage = LocalStorageService.getStorage('token');

  const mutation = useMutation({
    mutationKey: getRequestKey(mutationKeys.articleUpdate), // ['article', 'update'],
    mutationFn: async (data: ArticleDto) => {
      const updatedArticle: ArticleDto = await axiosService.putData(
        'article/update',
        data,
        {
          headers: {
            Authorization: `Bearer ${String(storage.value)}`
          }
        }
      );

      return updatedArticle;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries(queryKeys.articleGetAll);
      void queryClient.invalidateQueries(queryKeys.articleGetMyAll);
    }
  });

  return mutation;
};
