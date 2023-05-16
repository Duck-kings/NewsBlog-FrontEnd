import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { axiosService } from '../../../services/axios';
import type { UserDto } from '../../../types/dtos';
import { useUserStore } from '../../../stores/userInfo';
import { LocalStorageService } from '../../../services/localStorage';

import { mutationKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useUpdateMutation = (): UseMutationResult<
  UserDto,
  unknown,
  UserDto,
  unknown
> => {
  const storage = LocalStorageService.getStorage('token');

  if (storage.error) {
    throw new Error('UnAuthorized');
  }

  const updateUser = useUserStore((state) => state.setUser);
  const mutation = useMutation({
    mutationKey: getRequestKey(mutationKeys.userUpdate), // ['user', 'update'],
    mutationFn: async (data: UserDto) => {
      const updatedUser: UserDto = await axiosService.putData<UserDto>(
        'users/update',
        data,
        {
          headers: { Authorization: `Bearer ${String(storage.value)}` }
        }
      );

      return updatedUser;
    },
    onSuccess(data, variables, context) {
      if (Object.hasOwn(data, 'status')) {
        throw new Error('Me Error');
      }

      updateUser(data);
    }
  });

  return mutation;
};
