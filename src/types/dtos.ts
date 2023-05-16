export interface UserDto {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  pseudonym: string;
  password: string;
}

export interface ArticleDto {
  _id: string;
  img: string;
  title: string;
  description: string;
  views: string[];
  comments: CommentDto[];
  author: UserDto;
}

export interface CommentDto {
  _id: string;
  articleId: string;
  author: UserDto;
  text: string;
}

export interface registerUserDto {
  firstName: string;
  lastName: string;
  email: string;
  pseudonym: string;
  password: string;
}

export interface loginUserDto {
  email: string;
  password: string;
}

export interface createArticleDto {
  img: string;
  title: string;
  description: string;
  views: string[];
  comments: CommentDto[];
  author: UserDto;
}

export interface formDataArticleDto {
  article: string; // String(createArticleDto)
}

export interface changeArticleDto extends createArticleDto {
  _id: string;
}

export interface createCommentDto {
  articleId: string;
  author: UserDto;
  text: string;
}

export interface tokenDto {
  token: string;
}

export interface idDto {
  id: string;
}
