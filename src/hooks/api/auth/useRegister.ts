import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { axiosService } from '../../../services/axios';
import type { registerUserDto, tokenDto } from '../../../types/dtos';
import { LocalStorageService } from '../../../services/localStorage';

import { mutationKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useRegisterMutation = (): UseMutationResult<
  tokenDto,
  unknown,
  registerUserDto,
  unknown
> => {
  const mutation = useMutation({
    mutationKey: getRequestKey(mutationKeys.authRegister), // ['auth', 'register'],
    mutationFn: async (data: registerUserDto) => {
      const accessToken: tokenDto =
        await axiosService.postData<registerUserDto>('auth/register', data);

      return accessToken;
    },
    onSuccess(data, variables, context) {
      if (Object.hasOwn(data, 'status')) {
        throw new Error('Me Error');
      }

      LocalStorageService.setStorage('token', data.token);
    }
  });

  return mutation;
};
