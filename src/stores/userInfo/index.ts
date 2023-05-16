import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { UserDto } from '../../types/dtos';

interface UserInfoState {
  initialState: UserDto;
  setUser: (data: UserDto) => void;
}

export const useUserStore = create<UserInfoState>()(
  devtools(
    (set, get) => ({
      initialState: {
        _id: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        pseudonym: ''
      },
      setUser: (data: UserDto) => {
        set((state) => ({ initialState: data }));
      }
    }),
    {
      anonymousActionType: '@UserInfo'
    }
  )
);
