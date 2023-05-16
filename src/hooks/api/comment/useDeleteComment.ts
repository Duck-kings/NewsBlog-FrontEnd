import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { axiosService } from '../../../services/axios';
import type { CommentDto } from '../../../types/dtos';
import { LocalStorageService } from '../../../services/localStorage';

import { mutationKeys, queryKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useDeleteCommentMutation = (): UseMutationResult<
  CommentDto,
  unknown,
  CommentDto,
  unknown
> => {
  const queryClient = useQueryClient();
  const storage = LocalStorageService.getStorage('token');

  const mutation = useMutation({
    mutationKey: getRequestKey(mutationKeys.commentDelete), // ['comment', 'delete'],
    mutationFn: async (comment: CommentDto) => {
      const data = await axiosService.deleteData('comment/delete', comment, {
        Authorization: `Bearer ${String(storage.value)}`
      });

      return data as CommentDto;
    },
    onSuccess: (data) => {
      void queryClient.invalidateQueries([
        ...queryKeys.article,
        data.articleId
      ]);
    }
  });

  return mutation;
};
