import type { primaryRequestKey, secondaryRequestKey } from '../../types/types';

interface MutationKeys {
  userUpdate: [primaryRequestKey, secondaryRequestKey];
  commentCreate: [primaryRequestKey, secondaryRequestKey];
  commentDelete: [primaryRequestKey, secondaryRequestKey];
  authLogin: [primaryRequestKey, secondaryRequestKey];
  authRegister: [primaryRequestKey, secondaryRequestKey];
  articleUpdate: [primaryRequestKey, secondaryRequestKey];
  articleDelete: [primaryRequestKey, secondaryRequestKey];
  articleCreate: [primaryRequestKey, secondaryRequestKey];
}

interface QueryKeys {
  authMe: [primaryRequestKey, secondaryRequestKey];
  articleGetMyAll: [primaryRequestKey, secondaryRequestKey];
  articleGetAll: [primaryRequestKey, secondaryRequestKey];
  article: [primaryRequestKey];
}

export const mutationKeys: MutationKeys = {
  userUpdate: ['user', 'update'],
  commentDelete: ['comment', 'delete'],
  commentCreate: ['comment', 'create'],
  authRegister: ['auth', 'register'],
  authLogin: ['auth', 'login'],
  articleUpdate: ['article', 'update'],
  articleDelete: ['article', 'delete'],
  articleCreate: ['article', 'create']
};

export const queryKeys: QueryKeys = {
  authMe: ['auth', 'me'],
  articleGetMyAll: ['article', 'getMyAll'],
  articleGetAll: ['article', 'getAll'],
  article: ['article']
};
