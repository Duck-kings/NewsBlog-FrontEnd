import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { axiosService } from '../../../services/axios';
import type { CommentDto, createCommentDto } from '../../../types/dtos';
import { LocalStorageService } from '../../../services/localStorage';

import { mutationKeys, queryKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useCreateCommentMutation = (): UseMutationResult<
  CommentDto,
  unknown,
  createCommentDto,
  unknown
> => {
  const queryClient = useQueryClient();
  const storage = LocalStorageService.getStorage('token');
  const mutation = useMutation({
    mutationKey: getRequestKey(mutationKeys.commentCreate), // ['comment', 'create'],
    mutationFn: async (comment: createCommentDto) => {
      const data: CommentDto = await axiosService.postData(
        'comment/create',
        comment,
        {
          headers: { Authorization: `Bearer ${String(storage.value)}` }
        }
      );

      return data;
    },
    onSuccess(data) {
      void queryClient.invalidateQueries([
        ...queryKeys.article,
        data.articleId
      ]);
    }
  });

  return mutation;
};
