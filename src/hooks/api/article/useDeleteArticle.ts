import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { axiosService } from '../../../services/axios';
import type { ArticleDto } from '../../../types/dtos';
import { LocalStorageService } from '../../../services/localStorage';

import { mutationKeys, queryKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useDeleteArticleMutation = (): UseMutationResult<
  ArticleDto,
  unknown,
  ArticleDto,
  unknown
> => {
  const queryClient = useQueryClient();
  const storage = LocalStorageService.getStorage('token');

  const mutation = useMutation({
    mutationKey: getRequestKey(mutationKeys.articleDelete), // ['article', 'delete'],
    mutationFn: async (article: ArticleDto) => {
      const deletedArticle = await axiosService.deleteData<ArticleDto>(
        'article/delete',
        article,
        {
          Authorization: `Bearer ${String(storage.value)}`
        }
      );

      return deletedArticle as ArticleDto;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries(queryKeys.articleGetAll);
      void queryClient.invalidateQueries(queryKeys.articleGetMyAll);
    }
  });

  return mutation;
};
