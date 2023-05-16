import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import type { UseQueryResult } from '@tanstack/react-query';
import { axiosService } from '../../../services/axios';
import { LocalStorageService } from '../../../services/localStorage';
import type { UserDto } from '../../../types/dtos';
import { useUserStore } from '../../../stores/userInfo';

import { queryKeys } from '../requestKeys';
import { getRequestKey } from '../../../helpers/getRequestKey';

export const useMeQuery = (): UseQueryResult<UserDto, unknown> => {
  const setUserInfo = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const query = useQuery({
    // eslint-disable-next-line
    queryKey: getRequestKey(queryKeys.authMe), // ['auth', 'me'],
    queryFn: async () => {
      const token = LocalStorageService.getStorage('token');

      if (token.error) {
        throw new Error('401');
      }

      const data = await axiosService.getData('auth/me', {
        headers: {
          Authorization: `Bearer ${String(token.value)}`
        }
      });

      if (data instanceof AxiosError) {
        const errData = data as AxiosError;
        throw new Error(String(errData?.response?.status));
      }

      return data as UserDto;
    },
    onSuccess: (data) => {
      setUserInfo(data);
    },
    onError(err) {
      if (err instanceof Error) {
        if (err.message === '401') {
          navigate('/login');
        }
      }
    },
    refetchOnWindowFocus: false
  });

  return query;
};
