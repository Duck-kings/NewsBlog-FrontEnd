import * as yup from 'yup';

export const editArticleValidSchema = yup.object({
  title: yup.string().trim().required('This field is requred'),
  description: yup.string().trim().required('This field is requred')
});

export type editArticleFormData = yup.InferType<typeof editArticleValidSchema>;
