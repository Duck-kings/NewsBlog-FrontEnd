export interface Routes {
  to: string;
  text: string;
}

export interface NestError {
  response: string;
  status: number;
  message: string;
  name: string;
}

export type primaryRequestKey = 'article' | 'auth' | 'comment' | 'user';
export type secondaryRequestKey =
  | 'getAll'
  | 'create'
  | 'delete'
  | 'getMyAll'
  | 'update'
  | 'login'
  | 'me'
  | 'register';
