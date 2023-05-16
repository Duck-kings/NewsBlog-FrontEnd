import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { axiosService } from '../../../services/axios';
import type { ArticleDto } from '../../../types/dtos';
import { LocalStorageService } from '../../../services/localStorage';

import { mutationKeys, queryKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useCreateArticleMutation = (): UseMutationResult<
  ArticleDto,
  unknown,
  FormData,
  unknown
> => {
  const queryClient = useQueryClient();
  const storage = LocalStorageService.getStorage('token');

  const mutation = useMutation({
    mutationKey: getRequestKey(mutationKeys.articleCreate), // ['article', 'create'],
    mutationFn: async (data: FormData) => {
      const article: ArticleDto = await axiosService.postData(
        'article/create',
        data,
        {
          headers: {
            Authorization: `Bearer ${String(storage.value)}`
          }
        }
      );

      return article;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries(queryKeys.articleGetAll);
      void queryClient.invalidateQueries(queryKeys.articleGetMyAll);
    }
  });

  return mutation;
};
