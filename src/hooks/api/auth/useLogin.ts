import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { axiosService } from '../../../services/axios';
import type { loginUserDto, tokenDto } from '../../../types/dtos';
import { LocalStorageService } from '../../../services/localStorage';
import type { NestError } from '../../../types/types';

import { mutationKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useLoginMutation = (): UseMutationResult<
  tokenDto,
  unknown,
  loginUserDto,
  unknown
> => {
  const mutation = useMutation({
    mutationKey: getRequestKey(mutationKeys.authLogin), // ['auth', 'login'],
    mutationFn: async (data: loginUserDto) => {
      const accessToken = await axiosService.postData<loginUserDto>(
        'auth/login',
        data
      );

      if (Object.hasOwn(accessToken, 'status')) {
        const errorData = accessToken as NestError;
        throw new Error(errorData.message);
      }

      return accessToken;
    },
    onSuccess(data, variables, context) {
      LocalStorageService.setStorage('token', data.token);
    },
    // eslint-disable-next-line consistent-return
    onError(error, variables, context) {
      if (error instanceof Error) {
        return error.message;
      }
    }
  });

  return mutation;
};
